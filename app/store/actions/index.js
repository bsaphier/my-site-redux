import WebFont from 'webfontloader';
import * as actionTypes from '../../constants';

/* LAYOUT ACTION-CREATORS */
export const openBurger = () => ({
  type: actionTypes.OPEN_BURGER
});

export const closeBurger = () => ({
  type: actionTypes.CLOSE_BURGER
});

export const handleScroll = (nextScrollPos) => ({
  type: actionTypes.ON_SCROLL,
  scrollPos: { ...nextScrollPos }
});

export const resize = ({ dimensions, orientation }) => ({
  type: actionTypes.RESIZE,
  dimensions,
  orientation
});

export const getView = ({ innerWidth, innerHeight }) => dispatch => {
  dispatch(resize({
    dimensions: {
      width: innerWidth,
      height: innerHeight
    },
    orientation: (innerWidth > innerHeight) ? 'landscape' : 'portrait'
  }));
};

/* APP STATE ACTION-CREATORS */
export const onLoaded = () => ({
  type: actionTypes.LOAD_COMPLETE,
});

export const showGreeting = () => ({
  type: actionTypes.SHOW_GREETING
});

export const hideGreeting = () => ({
  type: actionTypes.HIDE_GREETING
});

export const dataLoaded = () => ({
  type: actionTypes.DATA_LOADED
});

export const fontsLoaded = () => ({
  type: actionTypes.FONTS_LOADED
});

export const loadFonts = () => dispatch => {
  WebFont.load({
    google: {
      families: ['Lekton:400,400i,700', 'Poppins:200,300,400,500,700']
    },
    active: () => dispatch(fontsLoaded())
  });
};

export const loadData = () => dispatch => {
  /* ~ simulating load time ~ */
  setTimeout(() => dispatch(dataLoaded()), 500);
};

/* SOUND ACTION-CREATORS */
export const activateDrone = () => ({
  type: actionTypes.DRONE_ON
});

export const deactivateDrone = () => ({
  type: actionTypes.DRONE_OFF
});

export const toggleDrone = on => dispatch => {
  if (on) {
    dispatch(activateDrone());
  } else {
    dispatch(deactivateDrone());
  }
};
