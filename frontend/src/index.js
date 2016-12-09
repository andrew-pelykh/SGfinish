import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import Root from './Root'
import configureStore from './store/configureStore'
import s from './main.scss';

const store = configureStore()

render(
  <Root store={store} history={browserHistory} />,
  document.getElementById('app')
)
