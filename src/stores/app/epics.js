import { ajax } from 'rxjs/observable/dom/ajax'

// epic
export const exampleEpic = (action$, store) => {
  return action$.ofType(/*ACTION_TO_REACT_TO*/).mergeMap((action) => {
    return ajax.get(/*url*/action.payload).map(response => {
      /*actionToTriggerWithResponse(response)*/
    })
  })
}