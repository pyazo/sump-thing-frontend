export const NEW_TANK_NEXT = 'sumpthing/new_tank/next';

const initialState = {
  currentStep: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case NEW_TANK_NEXT:
      return { ...state, currentStep: action.nextStep };
    default:
      return state;
  }
}

export function nextStep() {
  return (dispatch, getState) => {
    const { currentStep } = getState().newTank;

    return dispatch({
      type: NEW_TANK_NEXT,
      nextStep: currentStep + 1,
    });
  };
}
