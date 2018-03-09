// import * as app from './app/constants'

const HttpMethod = {
  HEAD: 'HEAD',
  POST: 'POST',
  GET: 'GET',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
}

const FETCH_TIMEOUT = 30000 //in ms

export default {
  // ...app,
  HttpMethod,
  FETCH_TIMEOUT,
}
