import { POSTS_SUCCESS } from '../actions/PostActions'

export function posts(state = [], action) {
  switch(action.type) {
    case POSTS_SUCCESS:
      return Object.assign({}, state, action.posts)
    default:
      return state
  }
}
