/**
 * routes
 *
 * landenli
 */

import React from 'react'
import { Route, Switch } from 'react-router'
import Home from '../pages/Home'
import Counter from '../pages/counter'
import NoMatch from '../pages/NoMatch'
import ClockRecord from '../pages/clockRecord'

const routes = (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/counter" component={Counter} />
    <Route path="/clockRecord" component={ClockRecord} />
    <Route component={NoMatch} />
  </Switch>
)

export default routes
