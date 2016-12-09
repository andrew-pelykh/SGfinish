import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { hashHistory } from 'react-router'

import { signOut } from '../actions/UserActions'

class NavBar extends Component {

  onClick(event){
    event.preventDefault()
    const { dispatch } = this.props
    dispatch(signOut())
    hashHistory.push(`/signup`)
  }

  render() {
    if (this.props.children.type.name == "NotFound"|| this.props.children.type.name == "SignUp" ) {
      return (
          <div>
          {this.props.children}
          </div>
      )
    } else {
      return (
          <div>
              <Link to='/'> Home </Link>
              <Link to='users'> All users </Link>
              <Link to='settings'> Edit </Link>
              <Link to='post'> New post </Link>
              <a href='#'  onClick={(e) => this.onClick(e)}> SignOut </a>
              {this.props.children}
          </div>
      )
    }
  }
}

export default connect()(NavBar);
