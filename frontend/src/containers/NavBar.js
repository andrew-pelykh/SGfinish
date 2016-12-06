import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { hashHistory } from 'react-router'
import { signOut } from '../actions/UserActions'
class NavBar extends Component {

  render() {

    return (
        <div>
            <a href='#'  onClick={(e) => this.onClick(e)}>SignOut</a>
            <Link to='settings'>Edit</Link>
            {this.props.children}
        </div>
    )
  }

  onClick(event){
    event.preventDefault()
    const { dispatch } = this.props
    dispatch(signOut())
    hashHistory.push(`/signup`)
  }
}

export default connect()(NavBar);
