import {Switch, Route} from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Wizard from './components/Wizard/Wizard';
import React from 'react';

export default(
  <Switch>
    <Route exact path='/' component={Dashboard} />
    <Route path='/wizard' component={Wizard} />
  </Switch>
)
