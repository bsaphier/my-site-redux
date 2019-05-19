import { useReducer } from 'react';

function composeDispatch(...middlewares) {
  if (middlewares.length === 0) return input => input;
  if (middlewares.length === 1) return middlewares[0];
  return middlewares.reduce((accu, curr) =>
    (...nextMiddlewares) => accu(curr(...nextMiddlewares))
  );
}

export function useEnhancedReducer(reducer, initialState, middlewares = []) {
  const [state, dispatch] = useReducer(reducer, initialState);

  let dispatchWithMiddleware;
  let store = {
    getState: () => state,
    dispatch: (...mddlwr) => dispatchWithMiddleware(...mddlwr)
  };

  let middlewareChain = middlewares.map(middleware => middleware(store));

  dispatchWithMiddleware = composeDispatch.apply(void 0, middlewareChain)(dispatch);

  return [state, dispatchWithMiddleware];
}
