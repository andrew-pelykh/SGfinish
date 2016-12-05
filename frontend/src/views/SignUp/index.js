import React, { Component} from 'react'
import { connect } from 'react-redux'
import { signUp, signIn } from '../../actions/UserActions'
import { hashHistory } from 'react-router'

class SignUp extends Component {
  render() {
    return (
      <div>
        <h2>Sign on</h2>
         <form onSubmit={(e) => this.onSubmitSignOn(e)}>
           <p><input type="text" id="name" placeholder="Name" /></p>
           <p><input type="text" id="email" placeholder="Email" /></p>
           <p><input type="text" id="password" placeholder="Password" /></p>
           <p><input type="text" id="password_confirmation" placeholder="Password confirmation" /></p>
           <p><button>Create</button></p>
         </form>

         <h2>Sign in</h2>
          <form onSubmit={(e) => this.onSubmitSignIn(e)}>
            <p><input type="text" id="login_email" placeholder="Email" /></p>
            <p><input type="text" id="login_password" placeholder="Password" /></p>
            <p><button>Create</button></p>
          </form>
     </div>
    )
  }

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

    if ((nextProps.user.name != "" ) || (nextProps.current_user.name != "")) {
      hashHistory.push(`/`)
    }
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    current_user: state.current_user
  }
}

export default connect(mapStateToProps)(SignUp)
