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
