import store from 'store';
import { push } from 'connected-react-router';

import api from 'js/api';

const LOADING = 'sumpthing/auth/loading';
const AUTH_SUCCESS = 'sumpthing/auth/authenticated';
const AUTH_FAIL = 'sumpthing/auth/unauthenticated';
const LOGIN = 'sumpthing/auth/login';
const LOGIN_SUCCESS = 'sumpthing/auth/logged_in';
const LOGIN_FAIL = 'sumpthing/auth/login_fail';
const LOGOUT = 'sumpthing/auth/logout';
const LOGOUT_SUCCESS = 'sumpthing/auth/logged_out';
const LOGOUT_FAIL = 'sumpthing/auth/logout_fail';

export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true, error: null };
    case LOGIN_SUCCESS:
      return {
        ...state, isLoggedIn: true, loading: false, error: null,
      };
    case LOGIN_FAIL:
      return {
        ...state, loading: false, login: false, error: action.error,
      };
    default:
      return state;
  }
}

export function login(username, password) {
  return async (dispatch) => {
    dispatch({ type: LOADING });
    try {
      const { data } = await api.login(username, password);

      if (data.error) {
        dispatch({ type: LOGIN_FAIL, error: data.error_description });

        return;
      }

      store.set('token', data.access_token);

      dispatch(push('/dashboard'));

      dispatch({ type: LOGIN_SUCCESS });
    } catch (err) {
      console.error(err);

      dispatch({ type: LOGIN_FAIL, error: 'Internal server error.' });
    }
  };
}
