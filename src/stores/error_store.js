import BaseStore from './base_store.js';
import {SHOW_ERROR, HIDE_ERROR, CHANGE} from '../constants/error_constants.js';

class ErrorStore extends BaseStore {
  constructor() {
    super();
    this.actionHandlers = {
      [SHOW_ERROR]: this._handleShowError,
      [HIDE_ERROR]: this._handleHideError
    };
    this._errorMessage = '';
    this._visible = false;
  }

  _handleShowError(error) {
    this._visible = true;
    const errorData = {
      visible: this._visible,
      errorMessage: error.name
    };
    this.emit(CHANGE, errorData);
  }

  _handleHideError() {
    this._visible = false;
    const errorData = {
      visible: this._visible,
      errorMessage: ''
    };
    this.emit(CHANGE, errorData);
  }

  getInitialState() {
    return {
      visible: this._visible,
      errorMessage: this._errorMessage
    };
  }
}

const errorStore = new ErrorStore();
export default errorStore;
