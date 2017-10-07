import * as actionTypes from './constants';


export const onLoad = () => ({
    type: actionTypes.LOAD_COMPLETE,
});

export const openBurger = () => ({
    type: actionTypes.OPEN_BURGER,
});

export const closeBurger = () => ({
    type: actionTypes.CLOSE_BURGER
});

export const resize = ({ dimensions, orientation }) => ({
    type: actionTypes.RESIZE,
    dimensions,
    orientation
});

export const onResize = ({ target }) => dispatch => {
    dispatch(resize({
        dimensions: {
            width: target.innerWidth,
            height: target.innerHeight
        },
        orientation: target.screen.orientation.type
    }));
};

export const getView = (_window) => dispatch => {
    dispatch(resize({
        dimensions: {
            width: _window.innerWidth,
            height: _window.innerHeight
        },
        orientation: _window.screen.orientation.type
    }));
};
