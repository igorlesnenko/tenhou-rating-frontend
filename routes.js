import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import Players from './containers/Players'
import Games from './containers/Games'
import About from './containers/About'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Players} />
    <Route path="/player/:id" component={Games} />
    <Route path="/about" component={About} />
  </Route>
)