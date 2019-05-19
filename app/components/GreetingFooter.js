import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Motion } from 'react-motion';
import { btnHoverMotion } from '../utils';
import s from './greeting-footer.scss';

function GreetingFooter({ content, display, onClick: handleClick }) {
  const [state, setState] = useState({
    scale: btnHoverMotion.scale.initial,
    translate: btnHoverMotion.translate.initial
  });

  function handleHover() {
    setState({
      scale: btnHoverMotion.scale.mouseOver,
      translate: btnHoverMotion.translate.mouseOver
    });
  }

  function handleLeave() {
    setState({
      scale: btnHoverMotion.scale.mouseLeave,
      translate: btnHoverMotion.translate.mouseLeave
    }); 
  }

  return (
    <Motion style={state}>
      {({ scale, translate }) => (
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
            transform: `scale(${scale}) translateY(${translate}%)`
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
  content: PropTypes.any,
  display: PropTypes.bool,
  onClick: PropTypes.func
};

export default GreetingFooter;
