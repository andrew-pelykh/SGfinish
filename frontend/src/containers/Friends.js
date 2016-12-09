import React, { Component} from 'react'
import { connect } from 'react-redux'

import { getFriends } from '../actions/UserActions'
import UsersList from '../components/Users/UsersList'

class Friends extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getFriends(this.props.params.id))
  }
  
  componentWillReceiveProps(nextProps) {
    if (nextProps.params.id !== this.props.params.id) {
      const { dispatch } = this.props
      dispatch(getFriends(nextProps.params.id))
    }
  }

  render() {
    return (
      <div>
        <h1>All friends</h1>
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

export default connect(mapStateToProps)(Friends)
