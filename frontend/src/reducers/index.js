import { combineReducers } from 'redux'
import { user, current_user } from './users'
import { posts } from './posts'

const rootReducer = combineReducers({
  user,
  current_user,
  posts
})

export default rootReducer
