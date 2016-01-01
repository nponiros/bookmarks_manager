import AppDispatcher from '../dispatcher/app_dispatcher.js';
import {ADD_ALERT, REMOVE_ALERT, ERROR, WARNING} from '../constants/alert_constants.js';

const getId = (function() {
  let counter = 0;
  return function() {
    return counter++;
  };
}());

function addAlert(alert) {
  AppDispatcher.dispatch({
    actionType: ADD_ALERT,
    data: alert
  });
}

export function removeAlert(id) {
  AppDispatcher.dispatch({
    actionType: REMOVE_ALERT,
    data: id
  });
}

export function showWarning(warning) {
  const alert = {
    name: warning.name,
    message: warning.message,
    type: WARNING,
    _id: getId()
  };
  addAlert(alert);
}

export function showError(error) {
  const alert = {
    name: error.name,
    message: error.message,
    type: ERROR,
    _id: getId()
  };
  addAlert(alert);
}
