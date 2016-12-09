import { PHOTOS_SUCCESS } from '../actions/PhotoActions'

export function photos(state = [], action) {
  switch(action.type) {
    case PHOTOS_SUCCESS:
      return action.photos
    default:
      return state
  }
}
