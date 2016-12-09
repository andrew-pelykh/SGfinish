import axios from 'axios'

export const PHOTOS_REQUEST = 'PHOTOS_REQUEST'
export const PHOTOS_SUCCESS = 'PHOTOS_SUCCESS'

export function photosRequest() {
  return {
    type: PHOTOS_REQUEST
  }
}
export function photosSuccess(json) {
  return {
    type: PHOTOS_SUCCESS,
    photos: json
  }
}

export function getPhotos(id,limit=0) {
  return dispatch => {
    dispatch(photosRequest())
    return axios.get('http://localhost:3000/get_photos/' + id + '/' + limit)
      .then(response => { dispatch(photosSuccess(response.data)) })
  }
}
