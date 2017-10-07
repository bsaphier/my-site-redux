import * as actionTypes from '../constants';


const INIT_STATE = {
    client: {
        dimensions: { width: 0, height: 0 },
        orientation: 'landscape'
    },
    menu: {
        condensed: false
    }
};

export default (state = INIT_STATE, action) => {
    const nextState = { ...state };
    switch (action.type) {

        case actionTypes.RESIZE:
            const { dimensions, orientation } = action;
            nextState.client = { dimensions, orientation };
            nextState.menu.condensed = dimensions.width < 900;
            return nextState;

        case actionTypes.OPEN_BURGER:
            nextState.menu.condensed = false;
            return nextState;

        case actionTypes.CLOSE_BURGER:
            nextState.menu.condensed = true;
            return nextState;

        default:
            return nextState;
    }
}
