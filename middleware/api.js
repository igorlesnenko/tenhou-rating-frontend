import { Schema, arrayOf, normalize } from 'normalizr'
import 'isomorphic-fetch'

export const CALL_API = Symbol('Call API');

const endpoint = process.env.TENHOU_API_DOMAIN ? '//' + process.env.TENHOU_API_DOMAIN + '/graphql' : '/graphql';

const gameSchema = new Schema('games', {
  idAttribute: item => item.id
});
const playerSchema = new Schema('players', {
  idAttribute: item => item.id
});
playerSchema.define({
  games: arrayOf(gameSchema)
});
const playersSchema = {
  data: {
    players: arrayOf(playerSchema)
  }
};
const gamesSchema = {
  data: {
    node: playerSchema
  }
}

export const Schemas = {
  Players: playersSchema,
  Games: gamesSchema
}


function callApi(query, schema) {
  const fullUrl = endpoint + '?query=' + query;

  return fetch(fullUrl)
    .then(response =>
      response.json().then(json => ({ json, response }))
    ).then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(json)
      }

      return Object.assign({}, normalize(json, schema));
    })
}

export default store => next => action => {
  const callAPI = action[CALL_API];
  if (typeof callAPI === 'undefined') {
    return next(action)
  }

  const [ requestType, successType, failureType ] = callAPI.types;
  next({
    type: requestType
  });

  return callApi(callAPI.query, callAPI.schema).then(
    response => next({
      type: successType,
      response: response
    }),
    error => next({
      type: failureType,
      error: error.message || 'Something bad happened'
    })
  )
}
