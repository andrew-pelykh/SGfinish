import { USER_SUCCESS, CREATE_SUCCESS, SIGNIN_SUCCESS, CURRENT_USER_SUCCESS } from '../actions/UserActions'

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
    default:
      return state
  }
}
