/* eslint
  react/jsx-filename-extension: "off",
*/

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import App from './routes/App';
import Landing from './routes/Landing';
import Login from './routes/Login';
import Dashboard from './routes/Dashboard';

import configureStore, { history } from 'js/store';

const store = configureStore();

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App>
        <Route exact path="/" component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
      </App>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
