import React, { useContext, useEffect } from 'react';
import * as actionCreators from '../actions';
import { Context } from '../store/index.js';
import Main from './Main';
import Loader from './Loader';

function App() {
  const { appState, dispatch } = useContext(Context);
  const { loading, dataDidLoad, fontsDidLoad } = appState;
  
  // only call on first render
  useEffect(() => {
    const handleScroll = () => {
      dispatch(actionCreators.handleScroll({
        x: window.scrollX,
        y: window.scrollY,
      }));
    };
    
    const handleResize = () => {
      dispatch(actionCreators.getView(window));
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    dispatch(actionCreators.loadData());
    dispatch(actionCreators.loadFonts());
    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // check if data has loaded
  useEffect(() => {
    if (loading && dataDidLoad && fontsDidLoad) {
      dispatch(actionCreators.onLoaded());
    }
  }, [loading, dataDidLoad, fontsDidLoad]);


  return loading
    ? <Loader />
    : <Main />;
}

export default App;
