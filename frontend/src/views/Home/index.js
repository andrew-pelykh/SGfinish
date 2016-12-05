import React, { Component} from 'react'
import { connect } from 'react-redux'
import { getUser, getCurrentUser } from '../../actions/UserActions'

class Home extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getCurrentUser())
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
    user: state.current_user
  }
}

export default connect(mapStateToProps)(Home)
