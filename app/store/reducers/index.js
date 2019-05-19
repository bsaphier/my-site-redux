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
    view: { ...view(state, action) },
    sound : { ...sound(state, action) },
    appState: { ...appState(state, action) },
  };
}

export default rootReducer;
