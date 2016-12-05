import { combineReducers } from 'redux'
import { user, current_user } from './users'

const rootReducer = combineReducers({
  user,
  current_user
})

export default rootReducer
