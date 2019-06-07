import {
  applyMiddleware, createStore, compose, combineReducers,
} from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import auth from 'js/redux/auth';
import currentUser from 'js/redux/currentUser';
import theme from 'js/redux/theme';

export const history = createBrowserHistory();

const middleware = [
  thunk,
  routerMiddleware(history),
];

if (process.env.NODE_ENV === 'development') {
  middleware.push(createLogger());
}

export default function configureStore(initialState = {}) {
  return createStore(
    combineReducers({
      router: connectRouter(history),
      auth,
      currentUser,
      theme,
    }),
    initialState,
    compose(
      applyMiddleware(...middleware),

      // eslint-disable-next-line
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    ),
  );
}
