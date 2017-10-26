import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RRWAEngine } from 'react-redux-webaudio';
import SSC from 'react-ssc';
import * as actionCreators from '../actions';
import About from './About.jsx';
import Footer from './Footer.jsx';
import Greeting from './Greeting.jsx';


class Main extends Component {

    componentWillReceiveProps(nextProps) {
        const { height, scrollPos } = nextProps;
        const nextScrollY = scrollPos.y;
        const greetingBreak = height / 4;
        if (nextScrollY >= greetingBreak && this.props.scrollPos.y < greetingBreak) {
            this.props.toggleGreeting(false);
        }
        if (nextScrollY <= greetingBreak && this.props.scrollPos.y > greetingBreak) {
            this.props.toggleGreeting(true);
        }
    }

    render() {
        return (
            <SSC.Container>
                <RRWAEngine />
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
}


const mapState = ({ view }) => ({
    scrollPos: view.client.scrollPos,
    width: view.client.dimensions.width,
    height: view.client.dimensions.height
});

const mapDispatch = dispatch => ({
    toggleGreeting: (isHidden) => {
        const _actionCreator = isHidden ? actionCreators.showGreeting : actionCreators.hideGreeting;
        dispatch(_actionCreator());
    }
});


export default connect(mapState, mapDispatch)(Main);