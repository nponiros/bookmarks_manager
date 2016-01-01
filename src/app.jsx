import React from 'react';
import ReactDOM from 'react-dom';

import {init as tagsInit} from './actions/tag_actions.js';
import {init as bookmarksInit} from './actions/bookmark_actions.js';
import {init as connectionStatusInit} from './actions/connection_status_actions.js';
import {init as settingsInit} from './actions/settings_actions.js';
import {init as syncInit} from './actions/sync_actions.js';
import {showError} from './actions/alert_actions.js';

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
settingsInit().then((settings) => {
  connectionStatusInit(settings.serverUrl, settings.port);
  syncInit(settings.serverUrl, settings.port);
}).catch((err) => {
  showError(err);
});
