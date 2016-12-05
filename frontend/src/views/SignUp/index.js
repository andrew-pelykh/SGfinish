import React, { Component} from 'react'
import { connect } from 'react-redux'
import { signUp } from '../../actions/UserActions'
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
     </div>
    )
  }

  onSubmitSignOn(event){
    event.preventDefault()
    const { dispatch } = this.props
    dispatch(signUp())
    hashHistory.push(`/`)
  }
}



export default connect()(SignUp)
