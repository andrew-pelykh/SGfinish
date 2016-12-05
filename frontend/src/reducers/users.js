import { USER_SUCCESS, CREATE_SUCCESS, SIGNIN_SUCCESS } from '../actions/UserActions'

const initialState = {
  user:  {},
  current_user: {}
}

export function user(state = initialState, action) {
  switch(action.type) {
    case USER_SUCCESS:
      return (action.user)
    case CREATE_SUCCESS:
      return (action.user)
    default:
      return state
  }
}

export function current_user(state = initialState, action) {
  switch(action.type) {
    case SIGNIN_SUCCESS:
      return (action.user)
    default:
      return state
  }
}
