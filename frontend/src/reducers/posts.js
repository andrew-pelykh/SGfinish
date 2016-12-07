import { POSTS_SUCCESS, POST_SUCCESS } from '../actions/PostActions'

export function post(state = {}, action) {
  switch(action.type) {
    case POST_SUCCESS:
      return Object.assign({}, state, {
        post: action.post
      })
    default:
      return state
  }
}

export function posts(state = [], action) {
  switch(action.type) {
    case POSTS_SUCCESS:
      return action.posts
    default:
      return state
  }
}
