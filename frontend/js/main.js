/* eslint
  react/jsx-filename-extension: "off",
*/

import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import App from './routes/App';
import Landing from './routes/Landing';
import Login from './routes/Login';

render(
  <Router>
    <App>
      <Route exact path="/" component={Landing} />
      <Route path="/login" component={Login} />
    </App>
  </Router>,
  document.getElementById('root')
);
