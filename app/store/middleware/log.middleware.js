function logMiddleware({ getState }) {
  return next => action => {
    console.groupCollapsed(action.type);
    console.log('Prev State: ', getState());
    console.info('Dispatching: ', action);
    let result = next(action);
    console.log('Next State: ', getState());
    console.groupEnd();
    return result;
  };
}

export default logMiddleware;
