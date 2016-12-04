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
