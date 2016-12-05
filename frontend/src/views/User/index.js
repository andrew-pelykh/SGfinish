import React, { Component} from 'react'
import { connect } from 'react-redux'
import { getUser, getCurrentUser } from '../../actions/UserActions'

class User extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getCurrentUser())
    dispatch(getUser(this.props.params.id))
  }

  componentWillReceiveProps(nextProps) {

    if (nextProps.params.id !== this.props.params.id) {
      const { dispatch } = this.props
      dispatch(getCurrentUser())
      dispatch(getUser(this.props.params.id))
    }
  }
  
  render() {


    return (
      <div>
        <p>Hello {this.props.user.name}</p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    current_user: state.current_user
  }
}

export default connect(mapStateToProps)(User)
