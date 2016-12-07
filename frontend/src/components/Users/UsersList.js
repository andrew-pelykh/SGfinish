import React, { Component} from 'react'
import { Link } from 'react-router'

export default class UsersList extends Component {
  render() {
    return (
      <div>
        <h2>Friends</h2>
        {this.props.users.map(user => {
          return (
              <div key={'user'+user.id}>
                <p><Link to={user.id.toString()}> {user.name} </Link></p>
              </div>
          )
        })
       }
    </div>
     )
  }
}
