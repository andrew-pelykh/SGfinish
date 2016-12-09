import React, { Component } from 'react'
import { Link } from 'react-router'

export default class NotFound extends Component {
  render() {
    return (
      <div>
        Sorry, this page isnt available . Go back <Link to='/'>home</Link>?
      </div>
    )
  }
}
