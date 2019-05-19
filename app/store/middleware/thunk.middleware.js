function thunkMiddleware({ getState, dispatch }) {
  return next => action => action instanceof Function
    ? action(dispatch, getState)
    : next(action);
}

export default thunkMiddleware;
