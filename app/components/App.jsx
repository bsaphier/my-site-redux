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

    constructor(props) {
        super(props); // ?? what does this do?
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        this.props.loadData();
        this.props.loadFonts();
        this.props.getView(window);
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', this.props.onResize);
    }

    componentWillReceiveProps(nextProps) {
        const nextScrollY = nextProps.scrollPos.y;
        const { height, loading, dataDidLoad, fontsDidLoad } = nextProps;
        const greetingBreak = height / 4;
        if (!loading) {
            if (nextScrollY >= greetingBreak && this.props.scrollPos.y < greetingBreak) {
                this.props.toggleGreeting(false);
            }
            if (nextScrollY <= greetingBreak && this.props.scrollPos.y > greetingBreak) {
                this.props.toggleGreeting(true);
            }
        } else if (dataDidLoad && fontsDidLoad) {
            this.props.onLoaded();
        }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('resize', this.props.onResize);
    }

    handleScroll() {
        this.props.onScroll(
            {
                x: window.scrollX,
                y: window.scrollY
            }
        );
    }

    render() {
        const { loading } = this.props;

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


const mapState = ({ view, appState }) => ({
    loading: appState.loading,
    dataDidLoad: appState.dataDidLoad,
    fontsDidLoad: appState.fontsDidLoad,
    scrollPos: view.client.scrollPos,
    width: view.client.dimensions.width,
    height: view.client.dimensions.height
});

const mapDispatch = dispatch => ({
    onLoaded:     () => dispatch(actionCreators.onLoaded()),
    loadFonts:    () => dispatch(actionCreators.loadFonts()),
    loadData:     () => dispatch(actionCreators.loadData()),
    getView:  window => dispatch(actionCreators.getView(window)),
    onResize: $event => dispatch(actionCreators.getView($event.target)),
    onScroll: scroll => dispatch(actionCreators.handleScroll(scroll)),
    toggleGreeting: (isHidden) => {
        const _actionCreator = isHidden ? actionCreators.showGreeting : actionCreators.hideGreeting;
        dispatch(_actionCreator());
    }
});


export default connect(mapState, mapDispatch)(App);
