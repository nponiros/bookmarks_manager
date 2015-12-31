import AppDispatcher from '../dispatcher/app_dispatcher.js';
import {ONLINE, OFFLINE, CONNECTION_CHECK_PATH} from '../constants/connection_status_constants.js';
import {SERVER_URL} from '../constants/sync_constants.js';

function dispatch(actionType) {
  AppDispatcher.dispatch({
    actionType
  });
}

function checkServerConnection() {
  return window.fetch(`${SERVER_URL}${CONNECTION_CHECK_PATH}`, {
    method: 'HEAD'
  });
}

function statusChecker() {
  let navigatorOnline = window.navigator.onLine;
  const checkInterval = 30000;

  // navigator.onLine === true is no guarantee that the server
  // is also online. Check that before dispatching ONLINE
  function statusChangedToOnline() {
    navigatorOnline = true;
    checkServerConnection().then(() => {
      dispatch(ONLINE);
    }).catch(() => {
      dispatch(OFFLINE);
    });
  }

  function statusChangedToOffline() {
    navigatorOnline = false;
    dispatch(OFFLINE);
  }

  window.addEventListener('online', statusChangedToOnline);
  window.addEventListener('offline', statusChangedToOffline);

  // check every now and then if the server is online
  setInterval(() => {
    if (navigatorOnline) {
      checkServerConnection().then(() => {
        dispatch(ONLINE);
      }).catch(() => {
        dispatch(OFFLINE);
      });
    }
  }, checkInterval);

  // Initial check
  if (navigatorOnline) {
    checkServerConnection().then(() => {
      dispatch(ONLINE);
    }).catch(() => {
      dispatch(OFFLINE);
    });
  } else {
    dispatch(OFFLINE);
  }
}

export function init() {
  statusChecker();
}
