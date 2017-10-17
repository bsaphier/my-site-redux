import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RRWAEngine } from 'react-redux-webaudio';
import SSC from 'react-ssc';
import * as actionCreators from '../actions';
import About from './About.jsx';
import Loader from './Loader.jsx';
import Footer from './Footer.jsx';
import Greeting from './Greeting.jsx';


class App extends Component {

    componentDidMount() {
        // super(); ?? what does this do?
        this.props.loadData();
        this.props.loadFonts();
        this.props.getView(window);
        window.addEventListener('resize', this.props.onResize);
    }

    componentWillReceiveProps(nextProps) {
        const { loading, dataDidLoad, fontsDidLoad } = nextProps.appState;
        if (loading && dataDidLoad && fontsDidLoad) {
            this.props.onLoaded();
        }
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.props.onResize);
    }

    render() {
        const { loading } = this.props.appState;

        return loading ? <Loader /> : (
            <SSC.Container>
                <RRWAEngine />
                <SSC.Page style={{ paddingTop: 0 }}>
                    <Greeting />
                </SSC.Page>
                <SSC.Page>
                    <About />
                    {/* <SSC.PageContent>Filler</SSC.PageContent> */}
                </SSC.Page>
                <Footer />
            </SSC.Container>
        );
    }
}


const mapState = ({ view, appState }) => ({ view, appState });

const mapDispatch = dispatch => ({
    onLoaded:     () => dispatch(actionCreators.onLoaded()),
    loadFonts:    () => dispatch(actionCreators.loadFonts()),
    loadData:     () => dispatch(actionCreators.loadData()),
    getView:  window => dispatch(actionCreators.getView(window)),
    onResize: $event => dispatch(actionCreators.getView($event.target))
});


export default connect(mapState, mapDispatch)(App);
