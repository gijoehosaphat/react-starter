import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

//Reducers
import app from './app/reducers'

const appReducer = combineReducers({
  routing: routerReducer,
  app,
})

export default appReducer
