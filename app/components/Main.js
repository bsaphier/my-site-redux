import React, { useContext, useEffect } from 'react';
import SSC from 'react-ssc';
// import { RRWAEngine } from 'react-redux-webaudio';
import * as actionCreators from '../actions';
import { Context } from '../store';
import { useGreetingIn } from '../store/hooks';
import About from './About';
import Footer from './Footer';
import Greeting from './Greeting';

function Main() {
  const { dispatch } = useContext(Context);
  const greetingIn = useGreetingIn();

  useEffect(() => {
    const toggleAction = greetingIn ? actionCreators.showGreeting : actionCreators.hideGreeting;
    dispatch(toggleAction());
  }, [greetingIn]);

  return (
    <SSC.Container>
      {/* <RRWAEngine store={store} /> */}
      <SSC.Page style={{ paddingTop: 0 }}>
        <Greeting />
      </SSC.Page>
      <SSC.Page>
        <About />
      </SSC.Page>
      <Footer />
    </SSC.Container>
  );
}

export default Main;
