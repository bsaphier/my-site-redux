import React, { useContext, useEffect } from 'react';
import SSC from 'react-ssc';
import { Context, useGreetingIn, showGreeting, hideGreeting } from '../store';
import Greeting from './Greeting';
import Footer from './Footer';
import About from './About';

function Main() {
  const { dispatch } = useContext(Context);
  const greetingIn = useGreetingIn();

  useEffect(() => {
    const toggleAction = greetingIn ? showGreeting : hideGreeting;
    dispatch(toggleAction());
  }, [greetingIn]);

  return (
    <SSC.Container>
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
