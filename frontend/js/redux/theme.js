export const CHANGE_THEME = 'sumpthing/theme/change';

const initialState = { current: 'light' };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_THEME:
      return { ...state, current: action.theme };
    default:
      return state;
  }
}

export function toggleTheme(override) {
  return (dispatch, getState) => {
    const { current } = getState().theme;

    if (override) {
      return dispatch({
        type: CHANGE_THEME,
        theme: override,
      });
    }

    if (current === 'light') {
      return dispatch({
        type: CHANGE_THEME,
        theme: 'dark',
      });
    }

    return dispatch({
      type: CHANGE_THEME,
      theme: 'light',
    });
  };
}
