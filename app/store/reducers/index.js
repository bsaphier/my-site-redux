import view from './view';
import sound from './sound';
import appState from './app-state';

function rootReducer(state, action) {
  return {
    view: { ...view(state, action) },
    sound : { ...sound(state, action) },
    appState: { ...appState(state, action) },
  };
}

export default rootReducer;
