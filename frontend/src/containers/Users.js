import React, { Component} from 'react'
import { connect } from 'react-redux'
import { getUsers } from '../actions/UserActions'
import UsersList from '../components/Users/UsersList'

class Users extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getUsers())
  }

  render() {
    return (
      <div>
        <h1>All users</h1>
        <UsersList users={Object.keys(this.props.users).map(key => this.props.users[key])} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(Users)
