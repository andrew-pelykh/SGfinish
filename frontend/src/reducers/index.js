import { combineReducers } from 'redux'
import { user, current_user, users } from './users'
import { post, posts } from './posts'

const rootReducer = combineReducers({
  user,
  current_user,
  users,
  post,
  posts
})

export default rootReducer
