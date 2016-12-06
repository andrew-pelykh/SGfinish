import { USER_SUCCESS, CREATE_SUCCESS, SIGNIN_SUCCESS, CURRENT_USER_SUCCESS, SIGNOUT_SUCCESS, UPDATE_SUCCESS } from '../actions/UserActions'

const initialState = {
  name: "",
  email:""
}

export function user(state = initialState, action) {
  switch(action.type) {
    case USER_SUCCESS:
      return Object.assign({}, state, action.user)
    case CREATE_SUCCESS:
      return Object.assign({}, state, action.user)
    default:
      return state
  }
}

export function current_user(state = initialState, action) {
  switch(action.type) {
    case SIGNIN_SUCCESS:
      return Object.assign({}, state, action.user)
    case CURRENT_USER_SUCCESS:
      return Object.assign({}, state, action.user)
    case SIGNOUT_SUCCESS:
      return Object.assign({}, state, initialState)
    case UPDATE_SUCCESS:
      return Object.assign({}, state, action.user)
    default:
      return state
  }
}
