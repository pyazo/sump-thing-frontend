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
import Home from './routes/Home';

render(
  <Router>
    <App>
      <Route exact path="/" component={Home} />
    </App>
  </Router>,
  document.getElementById('root')
);
