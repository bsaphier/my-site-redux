import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import Store from './store/index.js';
import 'react-ssc/dist/lib.css';
import './styles/styles.scss';

render(
  <Store>
    <App />
  </Store>,
  document.getElementById('app')
);
