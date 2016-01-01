import BaseStore from './base_store.js';
import {SHOW_ERROR, HIDE_ERROR, CHANGE} from '../constants/error_constants.js';

class ErrorStore extends BaseStore {
  constructor() {
    super();
    this.actionHandlers = {
      [SHOW_ERROR]: this._handleShowError,
      [HIDE_ERROR]: this._handleHideError
    };
    this._error = {};
    this._visible = false;
  }

  _handleShowError(error) {
    this._visible = true;
    const errorData = {
      visible: this._visible,
      error: {
        name: error.name,
        message: error.message
      }
    };
    this.emit(CHANGE, errorData);
  }

  _handleHideError() {
    this._visible = false;
    const errorData = {
      visible: this._visible,
      error: {}
    };
    this.emit(CHANGE, errorData);
  }

  getInitialState() {
    return {
      visible: this._visible,
      error: this._error
    };
  }
}

const errorStore = new ErrorStore();
export default errorStore;
