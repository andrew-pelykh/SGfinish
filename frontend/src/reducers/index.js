import { combineReducers } from 'redux'
import { user, current_user, users } from './users'
import { post, posts } from './posts'
import { photos } from './photos'


const rootReducer = combineReducers({
  user,
  current_user,
  users,
  post,
  posts,
  photos
})

export default rootReducer
