import React from 'react';
import { connect } from 'react-redux';
import SSC from 'react-ssc';
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

const siteDesc = `The core of this website is built with React & Redux. The design is my original work but inspired by Google's Material Design. To implement the design, I built a small UI library of React components called react-ssc. The interactive audio (for an example, hover your cursor over the welcome message) is managed by another library I wrote: react-redux-webaudio. Both libraries are available as open-source projects on Github and NPM. In addition to React & Redux, these are some other useful libraries/tools I used to build this site: React-Motion, Webpack, and of course, Babel.`;


const About = () => {
    return (
        <SSC.PageContent>
            <div className={s.plaxWrap}>
                <SSC.Parallax layers={plaxLayers}>
                    {layer => <img className={s.bgLayer} src={layer.svg} />}
                </SSC.Parallax>
            </div>
            <div className={s.cWrap}>
                <SSC.Card title={'About This Site'}>
                    {clicked => (
                        <div className={s.cContent}>
                            {clicked ? siteDesc : `${siteDesc.slice(0, 347)}...`}
                        </div>
                    )}
                </SSC.Card>
                <SSC.Card title={'About Me'}>
                    {() => (
                        <div className={s.cContent}>
                            {'links n stuff'}
                        </div>
                    )}
                </SSC.Card>
                <SSC.Card title={'Something Else'}>
                    {() => (
                        <div className={s.cContent}>
                            {'filler filler filler filler'}
                        </div>
                    )}
                </SSC.Card>
            </div>
        </SSC.PageContent>
    );
};


export default connect()(About);
