import { USER_SUCCESS } from '../actions/UserActions'

const initialState = {
  user:  {}
}

export function user(state = initialState, action) {
  switch(action.type) {
    case USER_SUCCESS:
      return (action.user)
    default:
      return state
  }
}
