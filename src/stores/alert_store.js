import BaseStore from './base_store.js';
import {ADD_ALERT, REMOVE_ALERT, CHANGE} from '../constants/alert_constants.js';

class AlertStore extends BaseStore {
  constructor() {
    super();
    this.actionHandlers = {
      [ADD_ALERT]: this._handleAddAlert,
      [REMOVE_ALERT]: this._handleRemoveAlert
    };
    this._alerts = [];
  }

  _handleAddAlert(alert) {
    this._alerts = this._alerts.concat(alert);
    this.emit(CHANGE, this._alerts);
  }

  _handleRemoveAlert(id) {
    const index = this._alerts.findIndex((alert) => {
      return alert._id === id;
    });
    this._alerts.splice(index, 1);
    this.emit(CHANGE, this._alerts);
  }

  getInitialState() {
    return {
      alerts: this._alerts
    };
  }
}

const alertStore = new AlertStore();
export default alertStore;
