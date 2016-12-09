import React, { Component} from 'react'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'

import { editUser, getCurrentUser } from '../actions/UserActions'

class EditUser extends Component {

  componentWillMount() {
    const { dispatch } = this.props
    dispatch(getCurrentUser())
  }

  onSubmit(event){
    event.preventDefault()
    const { dispatch } = this.props
    dispatch(editUser())
    hashHistory.push(`/`)
  }

  render() {
    return (
      <div>
        <h1>Settings </h1>
        <form id='edit_user' onSubmit={(e) => this.onSubmit(e)}>
          <p><input type="text" name="user[name]" onChange={this.onNameChange}
               defaultValue={this.props.current_user.name} /></p>
          <p><input type="text" name="user[email]" onChange={this.onEmailChange}
               defaultValue={this.props.current_user.email} /></p>
          <p><input type="file" name="user[avatar]"/></p>
          <p><input type="text" name="user[password]" placeholder="Password" /></p>
          <p><input type="text" name="user[password_confirmation]" placeholder="Password confirmation" /></p>
          <p><button>Update</button></p>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    current_user: state.current_user
  }
}

export default connect(mapStateToProps)(EditUser)
