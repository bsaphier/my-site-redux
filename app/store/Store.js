import React from 'react';
import PropTypes from 'prop-types';
import rootReducer from './reducers';
import StoreContext from './context';
import { StoreType } from './types';
import { useEnhancedReducer } from './hooks';
import { initialState as _initialState } from './reducers';
import { logMiddleware, thunkMiddleware } from './middleware';

const middleware = process.env.NODE_ENV === 'production'
  ? [thunkMiddleware] 
  : [thunkMiddleware, /** thunkMiddleware has to come first */ logMiddleware];

function Store({ initialState, children }) {
  const [state, dispatch] = useEnhancedReducer(
    rootReducer,
    initialState,
    middleware
  );

  return (
    <StoreContext.Provider value={{
      ...state,
      dispatch
    }}>
      {children}
    </StoreContext.Provider>
  );
}

Store.propTypes = {
  initialState: PropTypes.shape(StoreType),
  children: PropTypes.element
};

Store.defaultProps = {
  initialState: _initialState
};

export default Store;
