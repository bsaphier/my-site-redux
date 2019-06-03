import React, { useRef, useState, useEffect, useContext } from 'react';
import { Motion } from 'react-motion';
import SSC from 'react-ssc';
import s from './greeting.scss';
import { Context } from '../store';
import { greetingMotion } from '../motion';
import { playSound, bluesScale } from '../sound';
import GreetingFooter from './GreetingFooter';

const greetingMessage = [
  {
    text: 'Hello',
    note: 0
  }, {
    text: 'My name is',
    note: 5
  }, {
    text: 'Ben',
    note: 1
  }, {
    text: 'Saphier',
    note: 2
  }, {
    text: 'I\'m a software engineer',
    note: 3
  }, {
    text: 'Exploring',
    note: 4
  }, {
    text: 'the crossover between',
    note: 5
  }, {
    text: 'Sound & Code',
    note: 6
  }
];

function Greeting() {
  const { view, appState } = useContext(Context);
  const [state, setState] = useState({
    showFooter1: false,
    showFooter2: false,
    motion: greetingMotion.initial
  });
  const pageRef = useRef(null);

  const { displayGreeting } = appState;
  let showFooter1 = view.client.scrollPos.y < view.client.dimensions.height / 32;
  let showFooter2 = view.client.scrollPos.y < view.client.dimensions.height;

  const handleClick = () => {
    if (displayGreeting) {
      // scroll to the next section
      pageRef.current
        .parentNode     // this page
        .parentNode     // page container
        .nextSibling    // the next section
        .scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
    } else {
      // scroll to top
      pageRef.current.parentNode.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  const hover = ({ id, sound }) => {
    playSound(sound);
    if (displayGreeting) {
      setState(() => ({ motion: {
        ...greetingMotion.enter,
        [id]: greetingMotion.exit[id]
      }}));
    }
  };

  const leave = ({ id }) => {
    if (displayGreeting) {
      setState(() => ({ motion: {
        ...greetingMotion.enter,
        [id]: greetingMotion.enter[id]
      }}));
    }
  };

  useEffect(() => {
    setState({
      motion: greetingMotion[displayGreeting ? 'enter' : 'exit']
    });
  }, [displayGreeting]);

  return (
    <SSC.PageContent>
      {/* <span className={s.guideOne} /> */}
      {/* <span className={s.guideTwo} /> */}
      <Motion style={state.motion}>
        {interpStyle => (
          <div
            className={displayGreeting
              ? `${s.greetingTextWrap} ${s.hueShift}`
              : s.greetingTextWrap
            }
            style={{ top: `${interpStyle.top}%` }}
          >
            {greetingMessage.map((title, i) => (
              <SSC.TitleFx
                key={`title${+i}`}
                hover={hover}
                leave={leave}
                className={`${s.title} ${s[`title${i}`]}`}
                style={{ letterSpacing: `${interpStyle[`title${i}`]}rem` }}
                cbArgs={{ id: `title${i}`, sound: bluesScale[title.note] }}>
                {title.text}
              </SSC.TitleFx>
            ))}
          </div>
        )}
      </Motion>
      <div
        className={displayGreeting ? `${s.footWrap} ${s.hueShift}` : s.footWrap}
        ref={pageRef}
      >
        <GreetingFooter flip={!displayGreeting} display={showFooter1} onClick={handleClick} />
        <GreetingFooter flip={!displayGreeting} display={showFooter2} onClick={handleClick} />
      </div>
    </SSC.PageContent>
  );
}

Greeting.propTypes = {};

export default Greeting;
