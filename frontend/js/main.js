/* eslint
  react/jsx-filename-extension: "off",
*/

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import configureStore, { history } from 'js/store';

import App from './App';
import routes from './routes';

const store = configureStore();

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App>
        { routes }
      </App>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
