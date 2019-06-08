import React from 'react';
import { Route } from 'react-router-dom';
import AuthenticatedRoute from 'js/common/components/AuthenticatedRoute';

import Landing from './Landing';
import Login from './Login';
import Dashboard from './Dashboard';

const routes = [
  <Route exact path="/" component={Landing} />,
  <Route path="/login" component={Login} />,
  <AuthenticatedRoute path="/dashboard" component={Dashboard} />,
];

export default routes;
