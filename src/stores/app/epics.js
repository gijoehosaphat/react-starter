import { ajax } from 'rxjs/observable/dom/ajax'
import * as actions from './actions'

// Epic example
export const exampleEpic = (action$, /*store*/) => {
  return action$.ofType(actions.EXAMPLE_GET).mergeMap((action) => {
    return ajax.getJSON(`https://jsonplaceholder.typicode.com/posts/${action.payload}`).map(response => {
      return actions.exampleGetFulfilled(response)
    })
  })
}