import BaseStore from './base_store.js';
import {ONLINE, OFFLINE, CHANGE} from '../constants/connection_status_constants.js';

class ConnectionStatusStore extends BaseStore {
  constructor() {
    super();
    this.actionHandlers = {
      [ONLINE]: this._handleOnline,
      [OFFLINE]: this._handleOffline
    };
    this._isOnline = false;
  }

  _handleOnline() {
    this._isOnline = true;
    this.emit(CHANGE, {isOnline: this._isOnline});
  }

  _handleOffline() {
    this._isOnline = false;
    this.emit(CHANGE, {isOnline: this._isOnline});
  }

  getInitialState() {
    return {
      isOnline: this._isOnline
    };
  }
}

const connectionStatusStore = new ConnectionStatusStore();
export default connectionStatusStore;
