import store from 'store';
import { push } from 'connected-react-router';

import api from 'js/api';

import { RESET_CURRENT_USER } from './currentUser';

const LOADING = 'sumpthing/auth/loading';
const AUTH_SUCCESS = 'sumpthing/auth/authenticated';
const AUTH_FAIL = 'sumpthing/auth/unauthenticated';
const LOGIN_SUCCESS = 'sumpthing/auth/logged_in';
const LOGIN_FAIL = 'sumpthing/auth/login_fail';
const LOGOUT = 'sumpthing/auth/logout';

const initialState = {};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true, error: null };
    case LOGIN_SUCCESS:
      return {
        ...state, loading: false, error: null,
      };
    case LOGIN_FAIL:
      return {
        ...state, loading: false, error: action.error,
      };
    case AUTH_SUCCESS:
      return {
        ...state, loading: false, isLoggedIn: true, hasAuthed: true,
      };
    case AUTH_FAIL:
      return {
        ...state, loading: false, isLoggedIn: false, hasAuthed: true,
      };
    case LOGOUT:
      return initialState;
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

      await dispatch({ type: AUTH_SUCCESS });

      store.set('token', data.access_token);

      dispatch(push('/dashboard'));

      dispatch({ type: LOGIN_SUCCESS });
    } catch (err) {
      console.error(err);

      dispatch({ type: AUTH_FAIL });
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

export function logout() {
  return async (dispatch) => {
    store.remove('token');

    dispatch({ type: LOGOUT });
    dispatch({ type: RESET_CURRENT_USER });

    dispatch(push('/login'));
  };
}
