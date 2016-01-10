import AppDispatcher from '../dispatcher/app_dispatcher.js';
import {INIT, SAVE, SETTINGS_KEY} from '../constants/settings_constants.js';

import {changeUrl as changeSyncUrl} from '../actions/sync_actions.js';
import {changeUrl as changeCheckUrl} from '../actions/connection_status_actions.js';
import {create} from './bookmark_actions.js';

export function init() {
  return new Promise((resolve, reject) => {
    try {
      const settingsString = window.localStorage.getItem(SETTINGS_KEY);
      const settings = JSON.parse(settingsString);
      AppDispatcher.dispatch({
        actionType: INIT,
        data: settings
      });
      resolve(settings);
    } catch (e) {
      reject(e);
    }
  });
}

export function save(settings) {
  return new Promise((resolve, reject) => {
    try {
      window.localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
      AppDispatcher.dispatch({
        actionType: SAVE,
        data: settings
      });
      changeSyncUrl(settings.serverUrl, settings.port);
      changeCheckUrl(settings.serverUrl, settings.port);
      resolve();
    } catch (e) {
      reject(e);
    }
  });
}

function parseRoot(root, promises) {
  if (root.type === 'folder') {
    root.children.forEach((child) => {
      parseRoot(child, promises);
    });
  } else {
    const bookmark = {
      title: root.name,
      url: root.url,
      author: '',
      description: '',
      dateWritten: '',
      tagIds: []
    };
    promises.push(create(bookmark));
  }
}

function parseBookmarksFile(data) {
  const roots = data.roots;
  const promises = [];
  for (const root in roots) {
    if (roots.hasOwnProperty(root)) {
      const rootData = roots[root];
      parseRoot(rootData, promises);
    }
  }
  return Promise.all(promises);
}

export function importBookmarks(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = function(event) {
      const data = event.target.result;
      try {
        const jsData = JSON.parse(data);
        parseBookmarksFile(jsData).then(() => {
          resolve();
        }).catch((err) => {
          reject(err);
        });
      } catch (e) {
        console.log(e);
        reject(Error('Parsing failed'));
      }
    };

    reader.onerror = function(event) {
      switch (event.target.error.code) {
        case event.target.error.NOT_FOUND_ERR:
          reject(Error('File Not Found'));
          break;
        case event.target.error.NOT_READABLE_ERR:
          reject(Error('File is not readable'));
          break;
        default:
          reject(Error('An error occurred reading the file'));
      }
    };

    reader.readAsText(file);
  });
}
