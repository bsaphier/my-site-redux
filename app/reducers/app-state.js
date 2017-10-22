import * as actionTypes from '../constants';


const INIT_STATE = {
    loading: true,
    dataDidLoad: false,
    fontsDidLoad: false,
    displayGreeting: false
};

export default (state = INIT_STATE, action) => {
    const nextState = { ...state };
    switch (action.type) {

        case actionTypes.SHOW_GREETING:
            nextState.displayGreeting = true;
            return nextState;

        case actionTypes.HIDE_GREETING:
            nextState.displayGreeting = false;
            return nextState;

        case actionTypes.DATA_LOADED:
            nextState.dataDidLoad = true;
            return nextState;

        case actionTypes.FONTS_LOADED:
            nextState.fontsDidLoad = true;
            return nextState;

        case actionTypes.LOAD_COMPLETE:
            nextState.loading = false;
            return nextState;

        default:
            return nextState;
    }
};
