import { combineEpics } from 'redux-observable'
import * as app from './app/epics'

export const epics = combineEpics(
  ...app,
)