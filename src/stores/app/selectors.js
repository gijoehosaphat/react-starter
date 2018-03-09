import { createSelector } from 'reselect'

const exampleGetSelector = state => state.app.exampleGet

export const selectExampleGet = createSelector(
  [exampleGetSelector], 
  (exampleGet) => {
    return {
      exampleGet,
    }
  }
)
