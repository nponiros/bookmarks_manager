import BaseStore from './base_store.js';
import {INIT, SAVE, CHANGE} from '../constants/settings_constants.js';

class SettingsStore extends BaseStore {
  constructor() {
    super();
    this.actionHandlers = {
      [INIT]: this._handleInit,
      [SAVE]: this._handleSave
    };
    this._urlValidStyle = 'error';
  }

  _handleInit(settings) {
    this._serverUrl = settings.serverUrl;
    this._port = settings.port;
    this._urlValidStyle = this._serverUrl ? 'success' : 'error';
    this.emit(CHANGE, {
      serverUrl: this._serverUrl,
      port: this._port,
      urlValidStyle: this._urlValidStyle
    });
  }

  _handleSave(settings) {
    this._serverUrl = settings.serverUrl;
    this._port = settings.port;
    this._urlValidStyle = 'success';
    this.emit(CHANGE, {
      serverUrl: this._serverUrl,
      port: this._port,
      urlValidStyle: this._urlValidStyle
    });
  }

  getInitialState() {
    return {
      urlValidStyle: this._urlValidStyle,
      serverUrl: this._serverUrl,
      port: this._port
    };
  }
}

const settingsStore = new SettingsStore();
export default settingsStore;
