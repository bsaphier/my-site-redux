import * as actionTypes from '../../constants';

export const initialState = {
  droneOn: false
};

export default (state = initialState, action) => {
  const nextState = { ...state };
  
  switch (action.type) {
    case actionTypes.DRONE_ON:
      nextState.droneOn = true;
      return nextState;

    case actionTypes.DRONE_OFF:
      nextState.droneOn = false;
      return nextState;

    default:
      return nextState;
  }
};
