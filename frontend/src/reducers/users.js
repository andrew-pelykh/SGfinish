import { USER_SUCCESS, CREATE_SUCCESS } from '../actions/UserActions'

const initialState = {
  user:  {}
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
