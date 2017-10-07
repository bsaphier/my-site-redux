import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import * as scss from './App.scss';


class App extends React.Component {

    componentDidMount() {
        this.props.onLoad(window);
        window.addEventListener('resize', this.props.onResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.props.onResize);
    }

    render() {
        return (
            <div id="main">Hello WOrld
            </div>
        );
    }
}

const mapState = ({ layout }) => ({
    layout
});

const mapDispatch = dispatch => ({
    onLoad: window => dispatch(actions.getView(window)),
    onResize: $event => dispatch(actions.onResize($event))
});


export default connect(mapState, mapDispatch)(App);
