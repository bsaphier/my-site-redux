import * as actionTypes from '../constants';


const INIT_STATE = {
    droneOn: false
};

export default (state = INIT_STATE, action) => {
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
