import React, { Component} from 'react'
import { connect } from 'react-redux'

class Home extends Component {

  render() {

    return (
      <div>
        <p>Hello page</p>
      </div>
    )
  }
}

export default connect(state => ({
}))(Home)
