import { CALL_API, Schemas } from '../middleware/api';

import { toGlobalId } from 'graphql-relay';

export const PLAYERS_REQUEST = 'PLAYERS_REQUEST';
export const PLAYERS_SUCCESS = 'PLAYERS_SUCCESS';
export const PLAYERS_FAILURE = 'PLAYERS_FAILURE';

export const GAMES_REQUEST = 'GAMES_REQUEST';
export const GAMES_SUCCESS = 'GAMES_SUCCESS';
export const GAMES_FAILURE  = 'GAMES_FAILURE';

function fetchPlayers(params) {
  return {
    [CALL_API]: {
      types: [ PLAYERS_REQUEST, PLAYERS_SUCCESS, PLAYERS_FAILURE ],
      schema: Schemas.Players,
      query: `{
        players(sort: "rating", order: -1) {
          id name rating gamesCount avgRank totalPoints firstRate secondRate thirdRate fourthRate lastGame
        }
      }`
    }
  }
}

function fetchGames(params) {
  return {
    [CALL_API]: {
      types: [ GAMES_REQUEST, GAMES_SUCCESS, GAMES_FAILURE ],
      schema: Schemas.Games,
      query: `{
        node(id: "${toGlobalId('Player', params.id)}") {
          ...on player {
            id name
            rating gamesCount
            avgRank totalPoints
            firstRate secondRate thirdRate fourthRate
            lastGame
            ratingHistory
            games {
              id date first second third fourth
            }
          }
        }
      }`
    }
  }
}

export function loadPlayers(params) {
  return (dispatch, getState) => {
    return dispatch(fetchPlayers(params))
  }
}

export function loadGames(params) {
  return (dispatch, getState) => {
    return dispatch(fetchGames(params))
  }
}

