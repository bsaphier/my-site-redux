import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';


let composeMiddleware;

if (process.env.NODE_ENV === 'production') {
    composeMiddleware = applyMiddleware(thunkMiddleware);
} else {
    composeMiddleware = composeWithDevTools(
        applyMiddleware(
            thunkMiddleware,
            createLogger({ collapsed: true })
        ));
}

export default createStore(
    rootReducer,
    composeMiddleware
);
