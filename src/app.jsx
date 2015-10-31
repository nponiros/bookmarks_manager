import React from 'react';
import ReactDOM from 'react-dom';

import BmApp from './components/bm_app.js';

ReactDOM.render(
  React.createElement(BmApp, null),
  document.getElementById('bm-app')
);

