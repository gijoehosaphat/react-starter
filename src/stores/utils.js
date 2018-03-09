import { propOr, identity } from 'ramda'

export const createReducer = (initialState, actionHandlers) => {
  return (state = initialState, action) => {
    return propOr(identity, action.type, actionHandlers)(state, action)
  }
}