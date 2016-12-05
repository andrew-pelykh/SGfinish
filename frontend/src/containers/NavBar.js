import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class NavBar extends Component {

  render() {

    return (
        <div>
            <Link to='/signup'>SignUp</Link>
            {this.props.children}
        </div>
    );
  }
}

export default connect()(NavBar);
