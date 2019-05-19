import * as actionTypes from '../../constants';

export const initialState = {
  client: {
    scrollPos: { x: 0, y: 0 },
    dimensions: { width: 0, height: 0 },
    orientation: 'landscape'
  },
  menu: {
    condensed: false
  }
};

export default (state = initialState, action) => {
  const nextState = { ...state };
  
  switch (action.type) {
    case actionTypes.RESIZE:
      nextState.client = {
        ...nextState.client,
        dimensions: action.dimensions,
        orientation: action.orientation
      };
      nextState.menu.condensed = action.dimensions.width < 900;
      return nextState;

    case actionTypes.ON_SCROLL:
      nextState.client.scrollPos = action.scrollPos;
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
};
