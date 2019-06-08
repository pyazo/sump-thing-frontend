import api from 'js/api';

import store from 'store';

import reducer, {
  login,
  validateToken,
  logout,
  LOADING,
  AUTH_SUCCESS,
  AUTH_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from '../auth';

import { RESET_CURRENT_USER } from '../currentUser';

describe('auth dux', () => {
  let dispatch;

  beforeEach(() => {
    dispatch = jest.fn();
  });

  describe('reducer', () => {
    it('implements LOADING', () => {
      const state = reducer({}, { type: LOADING });

      expect(state).toEqual({
        loading: true,
        error: null,
      });
    });

    it('implements AUTH_SUCCESS', () => {
      const state = reducer({}, { type: AUTH_SUCCESS });

      expect(state).toEqual({
        loading: false,
        isLoggedIn: true,
        hasAuthed: true,
      });
    });

    it('implements AUTH_FAIL', () => {
      const state = reducer({}, { type: AUTH_FAIL });

      expect(state).toEqual({
        loading: false,
        isLoggedIn: false,
        hasAuthed: true,
      });
    });

    it('implements LOGIN_SUCCESS', () => {
      const state = reducer({}, { type: LOGIN_SUCCESS });

      expect(state).toEqual({
        loading: false,
        error: null,
      });
    });

    it('implements LOGIN_FAIL', () => {
      const state = reducer({}, { type: LOGIN_FAIL, error: 'test' });

      expect(state).toEqual({
        loading: false,
        error: 'test',
      });
    });

    it('implements LOGOUT', () => {
      const state = reducer({}, { type: LOGOUT });

      expect(state).toEqual({});
    });
  });

  describe('login action', () => {
    it('returns an error on login fail', async () => {
      api.login = jest.fn();
      api.login.mockReturnValue({
        data: {
          error: '500',
          error_description: 'test_error',
        },
      });

      try {
        await login()(dispatch);
      } catch (err) {
        console.error(err);
      }

      expect(dispatch.mock.calls[0][0]).toEqual({ type: LOADING });
      expect(dispatch.mock.calls[1][0]).toEqual({ type: LOGIN_FAIL, error: 'test_error' });
    });

    it('sets the token in the local storage on login success', async () => {
      api.login = jest.fn();
      api.login.mockReturnValue({
        data: {
          access_token: 'test',
        },
      });

      store.set = jest.fn();

      try {
        await login()(dispatch);
      } catch (err) {
        console.error(err);
      }

      expect(api.login).toHaveBeenCalled();
      expect(dispatch.mock.calls[0][0]).toEqual({ type: LOADING });
      expect(dispatch.mock.calls[1][0]).toEqual({ type: AUTH_SUCCESS });
      expect(dispatch.mock.calls[2][0]).toEqual('/dashboard');
      expect(dispatch.mock.calls[3][0]).toEqual({ type: LOGIN_SUCCESS });
      expect(store.set).toHaveBeenCalledWith('token', 'test');
    });
  });

  describe('validate token action', () => {
    it('validates the current token', async () => {
      api.validateToken = jest.fn();

      try {
        await validateToken()(dispatch);
      } catch (err) {
        console.error(err);
      }

      expect(api.validateToken).toHaveBeenCalled();
      expect(dispatch.mock.calls[0][0]).toEqual({ type: LOADING });
      expect(dispatch.mock.calls[1][0]).toEqual({ type: AUTH_SUCCESS });
    });

    it('throws an error if the token is invalid', async () => {
      api.validateToken = jest.fn();
      api.validateToken.mockRejectedValue(new Error('InvalidToken'));

      // * In the case that we want the function to fail into an unhandled
      // * exception we don't need a try/catch. We can just observe which
      // * things are being dispatched.
      await validateToken()(dispatch);

      expect(api.validateToken).toHaveBeenCalled();
      expect(dispatch.mock.calls[0][0]).toEqual({ type: LOADING });
      expect(dispatch.mock.calls[1][0]).toEqual({ type: AUTH_FAIL });
    });
  });

  describe('logout action', () => {
    it('logs the user out', async () => {
      store.remove = jest.fn();

      // * In this case there are no points where an exception
      // * can be thrown.
      await logout()(dispatch);

      expect(store.remove).toHaveBeenCalledWith('token');
      expect(dispatch.mock.calls[0][0]).toEqual({ type: LOGOUT });
      expect(dispatch.mock.calls[1][0]).toEqual({ type: RESET_CURRENT_USER });
    });
  });
});
