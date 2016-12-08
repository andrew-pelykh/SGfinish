import React, { Component} from 'react'
import { Link } from 'react-router'

export default class UsersList extends Component {
  render() {
    return (
      <div>
        {this.props.users.map(user => {
          return (
              <div key={'user'+user.id}>
                <img src={user.avatar}/>
                <p><Link to={user.id.toString()}> {user.name} </Link></p>
              </div>
          )
        })
       }
    </div>
     )
  }
}
