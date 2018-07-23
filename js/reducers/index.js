import { combineReducers } from 'redux'

import ActivityReducer from './activity_reducer'

export default combineReducers({
  activity: ActivityReducer
})
