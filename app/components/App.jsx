import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import Main from './Main.jsx';
import Loader from './Loader.jsx';


class App extends Component {

    componentDidMount() {
        this.props.loadData();
        this.props.loadFonts();
        this.props.getView(window);

        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', this.props.onResize);
    }

    componentDidUpdate() {
        const { loading, dataDidLoad, fontsDidLoad } = this.props;

        if (loading && dataDidLoad && fontsDidLoad) {
            this.props.onLoaded();
        }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('resize', this.props.onResize);
    }

    handleScroll = () => {
        this.props.onScroll({
            x: window.scrollX,
            y: window.scrollY
        });
    }

    render() {
        return this.props.loading ?
            <Loader /> :
            <Main />;
    }
}


const mapState = ({ appState }) => ({
    loading: appState.loading,
    dataDidLoad: appState.dataDidLoad,
    fontsDidLoad: appState.fontsDidLoad
});

const mapDispatch = dispatch => ({
    onLoaded:     () => dispatch(actionCreators.onLoaded()),
    loadFonts:    () => dispatch(actionCreators.loadFonts()),
    loadData:     () => dispatch(actionCreators.loadData()),
    getView:  window => dispatch(actionCreators.getView(window)),
    onResize: $event => dispatch(actionCreators.getView($event.target)),
    onScroll: scroll => dispatch(actionCreators.handleScroll(scroll))
});


export default connect(mapState, mapDispatch)(App);
