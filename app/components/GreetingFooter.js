import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Motion } from 'react-motion';
import { btnHoverMotion } from '../motion';
import s from './greeting-footer.scss';

function GreetingFooter({ content, flip, display, onClick: handleClick }) {
  const [state, setState] = useState({
    scale: btnHoverMotion.scale.initial,
    rotate: 0,
    translate: btnHoverMotion.translate.initial
  });
  
  function handleHover() {
    setState(state => ({
      ...state,
      scale: btnHoverMotion.scale.mouseOver,
      translate: btnHoverMotion.translate.mouseOver
    }));
  }
  
  function handleLeave() {
    setState(state => ({
      ...state,
      scale: btnHoverMotion.scale.mouseLeave,
      translate: btnHoverMotion.translate.mouseLeave
    })); 
  }
  
  useEffect(() => {
    setState(state => ({
      ...state,
      rotate: btnHoverMotion.rotate[flip ? 'flipped' : 'initial'],
    }));
  }, [flip]);

  return (
    <Motion style={state}>
      {({ scale, rotate, translate }) => (
        <div
          className={display ? s.greetingFooter : `${s.greetingFooter} ${s.hide}`}
          onMouseOver={handleHover}
          onMouseLeave={handleLeave}
          onMouseDown={(event) => {
            event.preventDefault();
            handleLeave();
            handleClick();
          }}
          onTouchStart={(event) => {
            event.preventDefault();
            handleHover();
          }}
          onTouchCancel={(event) => {
            event.preventDefault();
            handleLeave();
          }}
          onTouchEnd={(event) => {
            event.preventDefault();
            handleLeave();
            handleClick();
          }}
          style={{
            transform: `scale(${scale}) translateY(${translate}%) rotate(${rotate}deg)`
          }}
        >
          {content ? content : (
            <div className={s.contentWrap}>
              <div className={s.pointDown}>
                <div className={s.pointDown}>
                  <div className={s.pointDown} />
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </Motion>
  );
}

GreetingFooter.propTypes = {
  flip: PropTypes.bool,
  content: PropTypes.any,
  display: PropTypes.bool,
  onClick: PropTypes.func
};

export default GreetingFooter;
