import { POSTS_SUCCESS } from '../actions/PostActions'

export function posts(state = [], action) {
  switch(action.type) {
    case POSTS_SUCCESS:
      return action.posts
    default:
      return state
  }
}
