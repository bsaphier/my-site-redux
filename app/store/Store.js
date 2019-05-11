import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
// import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';
import StoreContext from './context';
import { StoreType } from './types';

function Store({ initialState, children }) {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  return (
    <StoreContext.Provider value={{ ...state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
}

Store.propTypes = {
  initialState: PropTypes.shape(StoreType),
  children: PropTypes.element
};

export default Store;
