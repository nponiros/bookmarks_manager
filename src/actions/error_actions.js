import AppDispatcher from '../dispatcher/app_dispatcher.js';
import {SHOW_ERROR, HIDE_ERROR} from '../constants/error_constants.js';

export function showError(error) {
  AppDispatcher.dispatch({
    actionType: SHOW_ERROR,
    data: error
  });
}

export function hideError() {
  AppDispatcher.dispatch({
    actionType: HIDE_ERROR
  });
}
