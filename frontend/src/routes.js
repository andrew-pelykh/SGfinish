import React from 'react'
import { Route, IndexRoute } from 'react-router'

import NavBar from './containers/NavBar'
import Home from './views/Home'
import SignUp from './views/SignUp'
import User from './views/User'
import EditUser from './views/User/EditUser'


export const routes = (
  <Route path="/" component={NavBar}>
    <IndexRoute component={Home} onEnter={checkLogin} />
    <Route path="signup" component={SignUp} />
    <Route path="settings" component={EditUser} onEnter={checkLogin} />
    <Route path=":id" component={User} onEnter={checkLogin} />
  </Route>
)

function checkLogin(nextState, replace) {
  const token = getCookie("remember_token")
  if (token == "") {
    replace('/signup')
  }
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
