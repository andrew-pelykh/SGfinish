import React from 'react'
import { Route, IndexRoute } from 'react-router'

import NavBar from './containers/NavBar'
import Home from './views/Home'
import SignUp from './views/SignUp'

export const routes = (
  <Route path="/" component={NavBar}>
    <IndexRoute component={Home} />
    <Route path="signup" component={SignUp} />
  </Route>
)
