import React, { Component} from 'react'
import { connect } from 'react-redux'
import { getPhotos } from '../actions/PhotoActions'
import PhotosList from '../components/Photos/PhotosList'

class Gallery extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getPhotos(this.props.params.id))
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.params.id !== this.props.params.id) {
      const { dispatch } = this.props
      dispatch(getPhotos(nextProps.params.id))
    }
  }

  render() {
    return (
      <div>
        <h1>All photos</h1>
        <PhotosList photos={Object.keys(this.props.photos).map(key => this.props.photos[key])} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    photos: state.photos
  }
}

export default connect(mapStateToProps)(Gallery)
