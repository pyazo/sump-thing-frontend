/* eslint
  react/jsx-filename-extension: "off",
*/

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import configureStore, { history } from 'js/store';
import AuthenticatedRoute from 'js/common/components/AuthenticatedRoute';

import App from './routes/App';
import Landing from './routes/Landing';
import Login from './routes/Login';
import Dashboard from './routes/Dashboard';

const store = configureStore();

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App>
        <Route exact path="/" component={Landing} />
        <Route path="/login" component={Login} />
        <AuthenticatedRoute path="/dashboard" component={Dashboard} />
      </App>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
