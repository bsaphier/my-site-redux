import React, { Component } from 'react';
import { connect } from 'react-redux';
import SSC from 'react-ssc';
import * as actions from '../actions';
import * as scss from './App.scss';


function dummyLoad(fn, time) {
    return setTimeout(fn, time);
}


class App extends React.Component {

    componentDidMount() {
        dummyLoad(this.props.onLoad, 1000);
        this.props.getView(window);
        window.addEventListener('resize', this.props.onResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.props.onResize);
    }

    render() {
        return this.props.view.loaded ? (
            <SSC.Container>Hello WOrld</SSC.Container>
        ) : (
            <SSC.PageContent><SSC.Spinner /></SSC.PageContent>
        );
    }
}


const mapState = ({ view }) => ({
    view
});

const mapDispatch = dispatch => ({
    onLoad: () => dispatch(actions.onLoad()),
    getView: window => dispatch(actions.getView(window)),
    onResize: $event => dispatch(actions.onResize($event))
});


export default connect(mapState, mapDispatch)(App);
