import React, { Component} from 'react'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'

import { signUp, signIn } from '../actions/UserActions'

class SignUp extends Component {

  onSubmitSignOn(event){
    event.preventDefault()
    const { dispatch } = this.props
    dispatch(signUp())
  }

  onSubmitSignIn(event){
    event.preventDefault()
    const { dispatch } = this.props
    dispatch(signIn())
  }

  componentWillReceiveProps(nextProps) {
    if ((nextProps.current_user.name !== "") && (this.props.current_user.name == "")) {
      hashHistory.push(`/`)
    }
  }

  render() {
    return (
      <div>
        <h2>Sign on</h2>
         <form id='new_user' onSubmit={(e) => this.onSubmitSignOn(e)}>
           <p><input type="text" name="user[name]" placeholder="Name" /></p>
           <p><input type="text" name="user[email]" placeholder="Email" /></p>
           <p><input type="password" name="user[password]" placeholder="Password" /></p>
           <p><input type="password" name="user[password_confirmation]" placeholder="Password confirmation" /></p>
           <p><button>Create</button></p>
         </form>

         <h2>Sign in</h2>
          <form id='signin_user' onSubmit={(e) => this.onSubmitSignIn(e)}>
            <p><input type="text" name="user[email]" placeholder="Email" /></p>
            <p><input type="password" name="user[password]" placeholder="Password" /></p>
            <p><button>Sign in</button></p>
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

export default connect(mapStateToProps)(SignUp)
