import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import Reactotron from 'reactotron-react-js'
import storage from 'redux-persist/lib/storage'

//App reducers
import rootReducer from './rootReducer'

//App epics
import rootEpic from './rootEpic'

//History
import { createHashHistory } from 'history'
const history = createHashHistory()

//Middlewhere
import { createEpicMiddleware } from 'redux-observable'
import { routerMiddleware } from 'react-router-redux'
const middleware = applyMiddleware(createEpicMiddleware(rootEpic), routerMiddleware(history))

//Persist config
const persistConfig = {
  key: 'react-starter',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

let store = null
if (process.env.REACTOTRON === true) {
  store = Reactotron.createStore(persistedReducer, middleware)
} else {
  store = createStore(persistedReducer, middleware)
}
let persistor = persistStore(store)

export {
  store,
  persistor,
  history,
}