import React from 'react';
import { connect } from 'react-redux';
import SSC from 'react-ssc';
import * as Cards from './cards';
import SiteDescription from './SiteDescription.jsx';
import s from './about.scss';
import * as actionCreators from '../actions';


const plaxLayers = [
    {
        svg: '/bin/images/sot0.svg',
        name: 'layer0'
    }, {
        svg: '/bin/images/sot1.svg',
        name: 'layer1'
    }, {
        svg: '/bin/images/sot2.svg',
        name: 'layer2'
    }
];


const About = (props) => {
    const cb = (m, r) => props.playDrone(250 + ((m.x + m.y) % 500));
    return (
        <SSC.PageContent>
            <div className={`${s.parallaxWrap} ${s.horiHalf}`}>
                <div
                className={props.droneOn ? `${s.droneBtn} ${s.clicked}` : s.droneBtn}
                onClick={() => props.droneToggle(!props.droneOn)}>
                    {'Sound is ' + (props.droneOn ? 'On' : 'Off')}
                </div>
                <SSC.Parallax layers={plaxLayers} callback={props.droneOn ? cb : () => {}}>
                    {
                        layer =>
                            <img className={s.bgLayer} src={layer.svg} />
                    }
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


const mapState = ({ sound }) => ({
    droneOn: sound.droneOn
});

const mapDispatch = dispatch => ({
    droneToggle: on => dispatch(actionCreators.toggleDrone(on)),
    playDrone: note => dispatch(actionCreators.playDrone(note))
});


export default connect(mapState, mapDispatch)(About);
