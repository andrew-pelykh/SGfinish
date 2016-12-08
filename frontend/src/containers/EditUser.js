import React, { Component} from 'react'
import { connect } from 'react-redux'
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
  }


  render() {
    return (
      <div>
        <h1>Settings </h1>
        <form onSubmit={(e) => this.onSubmit(e)}>
          <p><input type="text" id="name" onChange={this.onNameChange} defaultValue={this.props.current_user.name} /></p>
          <p><input type="text" id="email" onChange={this.onEmailChange} defaultValue={this.props.current_user.email} /></p>
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
