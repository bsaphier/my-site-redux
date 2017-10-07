import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'react-ssc/dist/lib.css';
import App from './components/App.jsx';
import store from './store';

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
