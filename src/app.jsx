import React from 'react';
import ReactDOM from 'react-dom';

import {init as tagsInit} from './actions/tag_actions.js';
import {init as bookmarksInit} from './actions/bookmark_actions.js';
import {showError} from './actions/error_actions.js';

import BmApp from './components/bm_app.js';

ReactDOM.render(
  React.createElement(BmApp, null),
  document.getElementById('bm-app')
);

tagsInit().catch((err) => {
  showError(err);
});
bookmarksInit().catch((err) => {
  showError(err);
});
