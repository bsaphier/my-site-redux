import React, { useContext } from 'react';
import SSC from 'react-ssc';
import * as actionCreators from '../actions';
import s from './about.scss';
import { Context } from '../store';
import * as Cards from './cards';
import SiteDescription from './SiteDescription';
import layer0 from '../bin/images/sot0.svg';
import layer1 from '../bin/images/sot1.svg';
import layer2 from '../bin/images/sot2.svg';

const plaxLayers = [
  {
    svg: layer0,
    name: 'layer0'
  }, {
    svg: layer1,
    name: 'layer1'
  }, {
    svg: layer2,
    name: 'layer2'
  }
];

const About = () => {
  const { sound, dispatch } = useContext(Context);
  const droneOn = sound.droneOn;
  const droneToggle = on => dispatch(actionCreators.toggleDrone(on));
  const playDrone = note => dispatch(actionCreators.playDrone(note));

  const cb = (m, r) => playDrone(250 + ((m.x + m.y) % 500));

  return (
    <SSC.PageContent>
      <div className={`${s.parallaxWrap} ${s.horiHalf}`}>
        <div
          className={droneOn ? `${s.droneBtn} ${s.clicked}` : s.droneBtn}
          onClick={() => droneToggle(!droneOn)}
        >
          {'Sound is ' + (droneOn ? 'On' : 'Off')}
        </div>
        <SSC.Parallax layers={plaxLayers} callback={droneOn ? cb : (() => {return;})}>
          { layer => <img className={s.bgLayer} src={layer.svg} /> }
        </SSC.Parallax>
      </div>
      <div className={`${s.bottom} ${s.horiHalf}`}>
        <div className={s.contentWrap}>
          <SiteDescription />
        </div>
        <div className={s.cardWrap}>
          <Cards.AboutMe />
          <Cards.Projects />
        </div>
      </div>
    </SSC.PageContent>
  );
};

export default About;
