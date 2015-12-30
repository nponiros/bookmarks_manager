import AppDispatcher from '../dispatcher/app_dispatcher.js';
import {ONLINE, OFFLINE} from '../constants/connection_status_constants.js';

function startStatusChecker() {
  function statusChangedToOnline() {
    AppDispatcher.dispatch({
      actionType: ONLINE
    });
  }

  function statusChangedToOffline() {
    AppDispatcher.dispatch({
      actionType: OFFLINE
    });
  }

  window.addEventListener('online', statusChangedToOnline);
  window.addEventListener('offline', statusChangedToOffline);
}

export function init() {
  startStatusChecker();
  AppDispatcher.dispatch({
    actionType: window.navigator.onLine ? ONLINE : OFFLINE
  });
}
