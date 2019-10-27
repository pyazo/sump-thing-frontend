import store from 'store';
import { push } from 'connected-react-router';

import api from 'js/api';

import { RESET_CURRENT_USER, getCurrentUser } from './currentUser';

export const LOADING = 'sumpthing/auth/loading';
export const AUTH_SUCCESS = 'sumpthing/auth/authenticated';
export const AUTH_FAIL = 'sumpthing/auth/unauthenticated';
export const LOGIN_SUCCESS = 'sumpthing/auth/logged_in';
export const LOGIN_FAIL = 'sumpthing/auth/login_fail';
export const LOGOUT = 'sumpthing/auth/logout';
export const SIGNUP_SUCCESS = 'sumpthing/auth/signed_up';
export const SIGNUP_FAIL = 'sumpthing/auth/signup_fail';

const initialState = {};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true, error: null };
    case AUTH_SUCCESS:
      return {
        ...state, loading: false, isLoggedIn: true, hasAuthed: true,
      };
    case AUTH_FAIL:
      return {
        ...state, loading: false, isLoggedIn: false, hasAuthed: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state, loading: false, error: null,
      };
    case LOGIN_FAIL:
      return {
        ...state, loading: false, error: action.error,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state, loading: false, error: null, loginMessage: 'Account created successfully, please login.',
      };
    case SIGNUP_FAIL:
      return {
        ...state, loading: false, error: action.error,
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

      dispatch({ type: AUTH_SUCCESS });

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
      dispatch(getCurrentUser());
    } catch (err) {
      console.error(err);

      dispatch({ type: AUTH_FAIL });
    }
  };
}

export function signup(firstName, lastName, email, password) {
  return async (dispatch) => {
    dispatch({ type: LOADING });

    try {
      await api.signup({
        firstName, lastName, email, password,
      });

      dispatch({ type: SIGNUP_SUCCESS });
      dispatch(push('/login'));
    } catch (err) {
      console.error(err);

      const { data } = err.message.response;

      dispatch({ type: SIGNUP_FAIL, error: data.description || 'Internal server error.' });
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
