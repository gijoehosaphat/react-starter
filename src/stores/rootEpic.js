import { combineEpics } from 'redux-observable'
import { exampleEpic } from './app/epics'

export default combineEpics(
  exampleEpic,
)