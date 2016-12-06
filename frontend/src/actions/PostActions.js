import axios from 'axios'

export const POSTS_REQUEST = 'POSTS_REQUEST'
export const POSTS_SUCCESS = 'POSTS_SUCCESS'

export function postsRequest() {
  return {
    type: POSTS_REQUEST
  }
}
export function postsSuccess(json) {
  return {
    type: POSTS_SUCCESS,
    posts: json
  }
}

export function getPosts(id) {
  return dispatch => {
    dispatch(postsRequest())
    return axios.get('http://localhost:3000/get_posts/' + id)
      .then(response => { dispatch(postsSuccess(response.data)) })
  }
}
