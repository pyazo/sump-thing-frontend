/* eslint-disable */
//* Eslint is disabled because of some webpack issue.
//TODO: Fix webpack issue & remove eslint-disable from this file.
import {
  applyMiddleware, createStore, compose, combineReducers,
} from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import auth from 'js/redux/auth';

export const history = createBrowserHistory();

const middleware = [
  thunk,
  routerMiddleware(history)
];

if (process.env.NODE_ENV === 'development') {
  middleware.push(createLogger());
}

export default function configureStore(initialState = {}) {
  return createStore(
    combineReducers({
      router: connectRouter(history),
      auth,
    }),
    initialState,
    compose(
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    ),
  );
}
