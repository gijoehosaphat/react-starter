import { FETCH_TIMEOUT } from './stores/constants'
import axios from 'axios'

export const initialize = (baseURL) => {
  const api = axios.create({
    baseURL,
    timeout: FETCH_TIMEOUT,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  })

  return api
}
