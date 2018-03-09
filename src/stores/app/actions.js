
export const RESET = 'RESET'
export const reset = (): Object => {
  return {
    type: RESET,
  }
}

export const EXAMPLE_GET = 'EXAMPLE_GET'
export const exampleGet = (id: String): Object => {
  return {
    type: EXAMPLE_GET,
    payload: id,
  }
}

export const EXAMPLE_GET_FULFILLED = 'EXAMPLE_GET_FULFILLED'
export const exampleGetFulfilled = (response: Object): Object => {
  return {
    type: EXAMPLE_GET_FULFILLED,
    payload: response,
  }
}