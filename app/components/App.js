import React, { useContext, useEffect } from 'react';
import { Context, getView, loadData, loadFonts, onLoaded, handleScroll } from '../store';
import Loader from './Loader';
import Main from './Main';

function App() {
  const { appState, dispatch } = useContext(Context);
  const { loading, dataDidLoad, fontsDidLoad } = appState;
  
  // only call on first render
  useEffect(() => {
    const _handleScroll = () => {
      dispatch(handleScroll({
        x: window.scrollX,
        y: window.scrollY,
      }));
    };
    
    const handleResize = () => {
      dispatch(getView(window));
    };

    window.addEventListener('scroll', _handleScroll);
    window.addEventListener('resize', handleResize);
    dispatch(loadData());
    dispatch(loadFonts());
    handleResize();

    return () => {
      window.removeEventListener('scroll', _handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // check if data has loaded
  useEffect(() => {
    if (loading && dataDidLoad && fontsDidLoad) {
      dispatch(onLoaded());
    }
  }, [loading, dataDidLoad, fontsDidLoad]);


  return loading
    ? <Loader />
    : <Main />;
}

export default App;
