import { createReducer } from '../utils'
import initialState from './initialState'
import {
  RESET,
} from './actions'

export default createReducer(initialState, {
  [RESET]: () => {
    return initialState
  },
})
