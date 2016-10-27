import merge from 'lodash/merge'
import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import { PLAYERS_REQUEST } from '../actions'

function entities(state = { players: {}, games: {}, isFetching: false } , action) {
  if (action.type == PLAYERS_REQUEST) {
    return merge({}, state, { isFetching: true })
  }

  if (action.response && action.response.entities) {
    return merge({}, action.response.entities, { isFetching: false });
  }

  return state;
}

const rootReducer = combineReducers({
  entities,
  routing
});

export default rootReducer