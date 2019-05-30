import api from 'js/api';

const LOADING = 'current_user/loading';
const GET_USER_SUCCESS = 'current_user/success';
const GET_USER_FAIL = 'current_user/fail';

export default function reducer(state = { loading: true }, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state, loading: true, user: {}, error: null,
      };
    case GET_USER_SUCCESS:
      return { ...state, loading: false, user: action.user };
    case GET_USER_FAIL:
      return { ...state, loading: false, error: action.error };
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
