/* eslint-disable no-new */
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import TouchEmulator from 'hammer-touchemulator';

import App from './App';

new TouchEmulator();

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);
