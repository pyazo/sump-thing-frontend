import store from 'store';
import { push } from 'connected-react-router';

import api from 'js/api';

const LOADING = 'sumpthing/auth/loading';
const AUTH_SUCCESS = 'sumpthing/auth/authenticated';
const AUTH_FAIL = 'sumpthing/auth/unauthenticated';
const LOGIN_SUCCESS = 'sumpthing/auth/logged_in';
const LOGIN_FAIL = 'sumpthing/auth/login_fail';
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
    case AUTH_SUCCESS:
      return {
        ...state, loading: false, isLoggedIn: true, hasAuthed: true,
      };
    case AUTH_FAIL:
      return {
        ...state, loading: false, isLoggedIn: false, hasAuthed: true,
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

export function validateToken() {
  return async (dispatch) => {
    dispatch({ type: LOADING });

    try {
      await api.validateToken();

      dispatch({ type: AUTH_SUCCESS });
    } catch (err) {
      console.error(err);

      dispatch({ type: AUTH_FAIL });
    }
  };
}
