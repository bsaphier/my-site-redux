import { combineReducers } from 'redux';
import { webAudioReducer } from 'react-redux-webaudio';
import view from './view';
import appState from './app-state';

const rootReducer = combineReducers({
    view,
    appState,
    webAudioReducer
});

export default rootReducer;
