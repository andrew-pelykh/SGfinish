import { combineReducers } from 'redux'
import { user, current_user } from './users'
import { post, posts } from './posts'

const rootReducer = combineReducers({
  user,
  current_user,
  post,
  posts
})

export default rootReducer
