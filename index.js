import 'babel-polyfill'
import React from 'react';
import { render } from 'react-dom'
import Root from './containers/Root'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import configureStore from './store/configureStore';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Root history={history} store={store} />,
  document.getElementById('root')
)