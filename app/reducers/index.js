import { combineReducers } from 'redux';
import { webAudioReducer } from 'react-redux-webaudio';
import view from './view';
import sound from './sound';
import appState from './app-state';

const rootReducer = combineReducers({
    view,
    sound,
    appState,
    webAudioReducer
});

export default rootReducer;
