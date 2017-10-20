import React from 'react';
import { connect } from 'react-redux';
import SSC from 'react-ssc';
import * as Cards from './cards';
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

const About = () => {
    return (
        <SSC.PageContent>
            <div className={s.plaxWrap}>
                <SSC.Parallax layers={plaxLayers}>
                    {layer => <img className={s.bgLayer} src={layer.svg} />}
                </SSC.Parallax>
            </div>
            <div className={s.cWrap}>
                <Cards.SiteDescription />
                <Cards.AboutMe />
                <Cards.Skills />
            </div>
        </SSC.PageContent>
    );
};

export default connect()(About);
