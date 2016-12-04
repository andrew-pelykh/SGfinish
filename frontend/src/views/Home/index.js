import React, { Component} from 'react'
import { connect } from 'react-redux'
import { getUser } from '../../actions/UserActions'

class Home extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getUser(1))
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
    user: state.user
  }
}

export default connect(mapStateToProps)(Home)
