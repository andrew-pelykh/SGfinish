import axios from 'axios'

export const USER_REQUEST = 'USER_REQUEST'
export const USER_SUCCESS = 'USER_SUCCESS'
export const USER_FAILURE = 'USER_FAILURE'

export function userRequest(userId) {
  return {
    type: USER_REQUEST,
    userId
  }
}

export function userSuccess(json) {
  return {
    type: USER_SUCCESS,
    user: json
  }
}

export function getUser(userId) {
  return dispatch => {
    dispatch(userRequest(userId))
    return axios.get('http://localhost:3000/get_user/' + userId)
      .then(response => { dispatch(userSuccess(response.data)) })
  }
}

export const CREATE_SUCCESS = 'CREATE_SUCCESS'
export const CREATE_USER = 'CREATE_USER'

export function createUser(user) {
  return {
    type: CREATE_USER,
    user
  }
}

export function createSuccess(json) {
  return {
    type: CREATE_SUCCESS,
    user: json
  }
}

export function signUp() {
    let new_user = {}
    new_user.name = document.getElementById('name').value
    new_user.email = document.getElementById('email').value
    new_user.password = document.getElementById('password').value
    new_user.password_confirmation = document.getElementById('password_confirmation').value
    return dispatch => {
      dispatch(createUser(new_user))
    return axios.post('http://localhost:3000/create_user', {user: new_user})
    .then(response => {
      dispatch(createSuccess(response.data))
      return response
    })
  }
}

export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS'
export const SIGNIN_USER = 'SIGNIN_USER'

export function signinUser(user) {
  return {
    type: SIGNIN_USER,
    user
  }
}

export function signinSuccess(json) {
  return {
    type: SIGNIN_SUCCESS,
    user: json
  }
}

export function signIn() {
    let user = {}
    user.email = document.getElementById('login_email').value
    user.password = document.getElementById('login_password').value
    return dispatch => {
      dispatch(signinUser(user))
    return axios.post('http://localhost:3000/signin_user', {user: user})
    .then(response => {
      dispatch(signinSuccess(response.data))
      return response
    })
  }
}

export const CURRENT_USER_REQUEST = 'CURRENT_USER_REQUEST'
export const CURRENT_USER_SUCCESS = 'CURRENT_USER_SUCCESS'

export function currentUserRequest() {
  return {
    type: CURRENT_USER_REQUEST
  }
}

export function currentUserSuccess(json) {
  return {
    type: CURRENT_USER_SUCCESS,
    user: json
  }
}

export function getCurrentUser() {
  return dispatch => {
    dispatch(currentUserRequest())
    return axios.get('http://localhost:3000/get_current_user/')
      .then(response => { dispatch(currentUserSuccess(response.data)) })
  }
}

export const SIGNOUT_REQUEST = 'SIGNOUT_REQUEST'
export const SIGNOUT_SUCCESS = 'SIGNOUT_SUCCESS'

export function signoutRequest() {
  return {
    type: SIGNOUT_REQUEST
  }
}

export function signoutSuccess() {
  return {
    type: SIGNOUT_SUCCESS
  }
}

export function signOut() {
  return dispatch => {
    dispatch(signoutRequest())
    return axios.delete('http://localhost:3000/signout_user')
      .then(response => { dispatch(signoutSuccess()) })
  }
}

export const UPDATE_SUCCESS = 'UPDATE_SUCCESS'
export const UPDATE_USER = 'UPDATE_USER'

export function updateUser(user) {
  return {
    type: UPDATE_USER,
    user
  }
}

export function updateSuccess(json) {
  return {
    type: UPDATE_SUCCESS,
    user: json
  }
}

export function editUser() {
    let user = {}
    user.name = document.getElementById('name').value
    user.email = document.getElementById('email').value
    return dispatch => {
      dispatch(updateUser(user))
    return axios.patch('http://localhost:3000/update_user', {user: user})
    .then(response => {
      dispatch(updateSuccess(response.data))
      return response
    })
  }
}
