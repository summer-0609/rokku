import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import App from './App';

const history = createBrowserHistory();

ReactDOM.render(
  <HashRouter history={history}>
    <App />
  </HashRouter>,
  document.getElementById('root')
);
