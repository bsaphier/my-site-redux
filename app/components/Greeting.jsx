import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Motion } from 'react-motion';
import SSC from 'react-ssc';
import s from './greeting.scss';
import * as actionCreators from '../actions';
import { bluesScale, greetingMotion } from '../utils';
import GreetingFooter from './GreetingFooter.jsx';


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


class Greeting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            motion: greetingMotion.initial
        };
        this.hover = this.hover.bind(this);
        this.leave = this.leave.bind(this);
    }

    componentDidMount() {
        this.props.toggleGreeting(true);
    }

    componentWillReceiveProps({ displayGreeting }) {
        // const prevShowFooter1 = this.props.showFooter1;
        const prevDisplayGreeting = this.props.displayGreeting;
        const greetingIn = !prevDisplayGreeting && displayGreeting;
        const greetingOut = prevDisplayGreeting && !displayGreeting;
        if (greetingIn) {
            this.setState(() => ({ motion: greetingMotion.enter }));
        } else if (greetingOut) {
            this.setState(() => ({ motion: greetingMotion.exit }));
        }
        // if (showFooter1 && !prevShowFooter1) {
        //     /* footer moves in */
        //     this.setState(() => ({ footer: true }));
        // } else if (!showFooter1 && prevShowFooter1) {
        //     /* footer moves out */
        //     this.setState(() => ({ footer: false }));
        // }
    }

    hover({ id, sound }) {
        this.props.playSound(sound);
        this.setState(() => (
            {
                motion: {
                    ...greetingMotion.enter,
                    [id]: greetingMotion.exit[id]
                }
            }
        ));
    }

    leave({ id }) {
        this.setState(() => (
            {
                motion: {
                    ...greetingMotion.enter,
                    [id]: greetingMotion.enter[id]
                }
            }
        ));
    }

    render() {
        return (
            <SSC.PageContent>
                {/* {<span className={s.guideOne} />} */}
                {/* {<span className={s.guideTwo} />} */}
                <Motion style={this.state.motion}>
                    {interpStyle => (
                        <div className={this.props.displayGreeting ? `${s.greetingTextWrap} ${s.hueShift}` : s.greetingTextWrap} style={{ top: `${interpStyle.top}%`}}>
                            {
                                greetingMessage.map((title, i) => (
                                    <SSC.TitleFx
                                        key={`title${+i}`}
                                        hover={this.hover}
                                        leave={this.leave}
                                        className={`${s.title} ${s[`title${i}`]}`}
                                        style={{ letterSpacing: `${interpStyle[`title${i}`]}rem`}}
                                        cbArgs={{ id: `title${i}`, sound: bluesScale[title.note] }}>
                                        {title.text}
                                    </SSC.TitleFx>
                                ))
                            }
                        </div>
                    )}
                </Motion>
                <div className={this.props.displayGreeting ? `${s.footWrap} ${s.hueShift}` : s.footWrap}>
                    <GreetingFooter display={this.props.showFooter1} />
                    <GreetingFooter display={this.props.showFooter2} />
                </div>
            </SSC.PageContent>
        );
    }
}


const mapState = ({ view, appState }) => ({
    showFooter1: view.client.scrollPos.y < view.client.dimensions.height / 32,
    showFooter2: view.client.scrollPos.y < view.client.dimensions.height,
    displayGreeting: appState.displayGreeting
});

const mapDispatch = dispatch => ({
    playSound:      (note)     => dispatch(actionCreators.playSound(note)),
    toggleGreeting: (isHidden) => {
        const _actionCreator = isHidden ? actionCreators.showGreeting : actionCreators.hideGreeting;
        dispatch(_actionCreator());
    }
});

export default connect(mapState, mapDispatch)(Greeting);
