// src/actions/games/draw-stones.js

import API from '../../api'
import {
  LOAD_ERROR,
} from '../loading'

const api = new API()
export const DRAWN_STONES = 'DRAWN_STONES'

export default (gameId, pitIndex) => {
  return (dispatch) => {
    const backend = api.service('games')
    api.app.authenticate()
      .then(() => {
        backend.patch(gameId, { draw: pitIndex })
        .then(() => {
          dispatch({
            type: DRAWN_STONES,
            payload: pitIndex
          })
        })
        .catch((error) => {
          dispatch({
            type: LOAD_ERROR,
            payload: error.message
          })
        })
      })
      .catch((error) => {
        dispatch({
          type: LOAD_ERROR,
          payload: error.message
        })
      })
  }
}
