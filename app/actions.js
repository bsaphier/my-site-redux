import { actionCreators as audioActionCreators } from 'react-redux-webaudio';
import * as actionTypes from './constants';
import { soundCreator } from './utils';


/* LAYOUT ACTION-CREATORS */
export const openBurger = () => (
    {
        type: actionTypes.OPEN_BURGER
    }
);

export const closeBurger = () => (
    {
        type: actionTypes.CLOSE_BURGER
    }
);

export const handleScroll = (nextScrollPos) => (
    {
        type: actionTypes.ON_SCROLL,
        scrollPos: nextScrollPos
    }
);

export const resize = ({ dimensions, orientation }) => (
    {
        type: actionTypes.RESIZE,
        dimensions,
        orientation
    }
);

export const getView = (_window) => dispatch => {
    dispatch(resize(
        {
            dimensions: {
                width: _window.innerWidth,
                height: _window.innerHeight
            },
            orientation: (_window.innerWidth > _window.innerHeight) ? 'landscape' : 'portrait'
        }
    ));
};


/* APP STATE ACTION-CREATORS */
export const onLoaded = () => (
    {
        type: actionTypes.LOAD_COMPLETE,
    }
);

export const showGreeting = () => (
    {
        type: actionTypes.SHOW_GREETING
    }
);

export const hideGreeting = () => (
    {
        type: actionTypes.HIDE_GREETING
    }
);

export const dataLoaded = () => (
    {
        type: actionTypes.DATA_LOADED
    }
);

export const fontsLoaded = () => (
    {
        type: actionTypes.FONTS_LOADED
    }
);

export const loadFonts = () => dispatch => {
    /* ~ currently simulating 100ms of load time ~ */
    setTimeout(() => dispatch(fontsLoaded()), 100);
};

export const loadData = () => dispatch => {
    /* ~ currently simulating 1s of load time ~ */
    setTimeout(() => dispatch(dataLoaded()), 100);
};


/* SOUND ACTION-CREATORS */
export const activateDrone = () => (
    {
        type: actionTypes.DRONE_ON
    }
);

export const deactivateDrone = () => (
    {
        type: actionTypes.DRONE_OFF
    }
);

export const toggleDrone = on => dispatch => {
    if (on) {
        dispatch(activateDrone());
    } else {
        dispatch(deactivateDrone());
    }
};


/* AUDIO ACTION-CREATORS */
export const playSound = note => dispatch => {
    let pluckSynth = soundCreator( note );
    dispatch(audioActionCreators.emit(pluckSynth));
};

export const playDrone = note => dispatch => {
    let pluckSynth = soundCreator({ noteInHz: note });
    dispatch(audioActionCreators.emit(pluckSynth));
};
