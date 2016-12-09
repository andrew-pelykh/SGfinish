import React, { Component} from 'react'
import { Link } from 'react-router'

export default class PhotosList extends Component {

  render() {
    return (
      <div>
        {this.props.photos.map(photo => {
          return (
              <div key={'photo'+photo.id}>
                <img src={photo.url}/>
              </div>
          )})
       }
    </div>
     )
  }
}
