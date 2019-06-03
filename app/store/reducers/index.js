import view, { initialState as viewInitialState} from './view';
import sound, { initialState as soundInitialState} from './sound';
import appState, { initialState as appStateInitialState} from './app-state';

export const initialState = {
  view: { ...viewInitialState },
  sound: { ...soundInitialState },
  appState: { ...appStateInitialState },
};

function rootReducer(state, action) {
  return {
    view: { ...view(state.view, action) },
    sound : { ...sound(state.sound, action) },
    appState: { ...appState(state.appState, action) },
  };
}

export default rootReducer;
