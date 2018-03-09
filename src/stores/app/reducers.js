import { createReducer } from '../utils'
import initialState from './initialState'
import {
  RESET,
  EXAMPLE_GET_FULFILLED,
} from './actions'

export default createReducer(initialState, {
  [RESET]: () => {
    return initialState
  },
  [EXAMPLE_GET_FULFILLED]: (state, action) => {
    state = { ...state, exampleGet: action.payload }
    return state
  }
})
