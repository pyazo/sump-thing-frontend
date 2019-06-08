import reducer, { toggleTheme, CHANGE_THEME } from '../theme';

describe('theme dux', () => {
  let dispatch;
  let getState;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = () => ({ theme: { current: 'light' } });
  });

  describe('reducer', () => {
    it('implements CHANGE_THEME', () => {
      const state = reducer({}, { type: CHANGE_THEME, theme: 'dark' });
      
      expect(state).toEqual({ current: 'dark' });
    });
  });

  describe('toggleTheme action', () => {
    it('accepts an overried', () => {
      toggleTheme('dark')(dispatch, getState);

      expect(dispatch).toHaveBeenCalledWith({ type: CHANGE_THEME, theme: 'dark' });
    });

    it('toggles the theme', () => {
      toggleTheme()(dispatch, getState);

      expect(dispatch.mock.calls[0][0]).toEqual({ type: CHANGE_THEME, theme: 'dark' });

      getState = () => ({ theme: 'dark' });

      toggleTheme()(dispatch, getState);

      expect(dispatch.mock.calls[1][0]).toEqual({ type: CHANGE_THEME, theme: 'light' });
    });
  });
});
