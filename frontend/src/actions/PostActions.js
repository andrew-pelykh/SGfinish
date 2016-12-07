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

export const POST_SUCCESS = 'USER_SUCCESS'
export const POST_CREATE = 'POST_CREATE'

export function postSuccess(json) {
  return {
    type: POST_SUCCESS,
    posts: json
  }
}

export function postCreate() {
  return {
    type: POST_CREATE
  }
}

export function createPost() {
    let new_post = {}
    new_post.title = document.getElementById('title').value
    new_post.body = document.getElementById('body').value
    return dispatch => {
      dispatch(postCreate(new_post))
    return axios.post('http://localhost:3000/create_post',
                       {post: new_post})
    .then(response => {
      dispatch(postSuccess(response.data))
      return response
    })
  }
}
