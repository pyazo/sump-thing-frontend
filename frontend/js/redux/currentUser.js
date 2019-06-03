import api from 'js/api';

const LOADING = 'sumpthing/current_user/loading';
const GET_USER_SUCCESS = 'sumpthing/current_user/success';
const GET_USER_FAIL = 'sumpthing/current_user/fail';
export const RESET_CURRENT_USER = 'sumpthing/current_user/reset';

const initialState = { loading: true };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state, loading: true, user: {}, error: null,
      };
    case GET_USER_SUCCESS:
      return { ...state, loading: false, user: action.user };
    case GET_USER_FAIL:
      return { ...state, loading: false, error: action.error };
    case RESET_CURRENT_USER:
      return initialState;
    default:
      return state;
  }
}

export function getCurrentUser() {
  return async (dispatch) => {
    dispatch({ type: LOADING });
    try {
      const { data: [user] } = await api.getCurrentUser();

      dispatch({ type: GET_USER_SUCCESS, user });
    } catch (error) {
      console.error(error);

      dispatch({ type: GET_USER_FAIL, error });
    }
  };
}
