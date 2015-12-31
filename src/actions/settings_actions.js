import AppDispatcher from '../dispatcher/app_dispatcher.js';
import {INIT, SAVE, SETTINGS_KEY} from '../constants/settings_constants.js';

import {changeUrl as changeSyncUrl} from '../actions/sync_actions.js';
import {changeUrl as changeCheckUrl} from '../actions/connection_status_actions.js';

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
