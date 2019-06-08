import api from 'js/api';

import reducer, {
  getCurrentUser,
  LOADING,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  RESET_CURRENT_USER,
} from '../currentUser';

describe('currentUser dux', () => {
  let dispatch;

  beforeEach(() => {
    dispatch = jest.fn();
  });

  describe('reducer', () => {
    it('implements LOADING', () => {
      const state = reducer({}, { type: LOADING });

      expect(state).toEqual({
        loading: true,
        user: {},
        error: null,
      });
    });

    it('implements GET_USER_SUCCESS', () => {
      const state = reducer({}, { type: GET_USER_SUCCESS, user: { id: 0 } });

      expect(state).toEqual({
        loading: false,
        user: {
          id: 0,
        },
      });
    });

    it('implements GET_USER_FAIL', () => {
      const state = reducer({}, { type: GET_USER_FAIL, error: 'error' });

      expect(state).toEqual({
        loading: false,
        error: 'error',
      });
    });

    it('implements RESET_CURRENT_USER', () => {
      const state = reducer({}, { type: RESET_CURRENT_USER });

      expect(state).toEqual({
        loading: true,
      });
    });
  });

  describe('getCurrentUser action', () => {
    it('fetches the current user', async () => {
      api.getCurrentUser = jest.fn();
      api.getCurrentUser.mockReturnValue({
        data: [
          {
            id: 0,
          },
        ],
      });

      try {
        await getCurrentUser()(dispatch);
      } catch (err) {
        console.error(err);
      }

      expect(api.getCurrentUser).toHaveBeenCalled();
      expect(dispatch.mock.calls[0][0]).toEqual({ type: LOADING });
      expect(dispatch.mock.calls[1][0]).toEqual({ type: GET_USER_SUCCESS, user: { id: 0 } });
    });

    it('failes out if the request has an error', async () => {
      api.getCurrentUser = jest.fn();
      api.getCurrentUser.mockRejectedValue('error');

      // * It is expected that this call throws an exception, we don't need to handle it.
      await getCurrentUser()(dispatch);

      expect(api.getCurrentUser).toHaveBeenCalled();
      expect(dispatch.mock.calls[0][0]).toEqual({ type: LOADING });
      expect(dispatch.mock.calls[1][0]).toEqual({ type: GET_USER_FAIL, error: 'error' });
    });
  });
});
