import React from 'react';
import {Alert} from 'react-bootstrap';
import {CHANGE} from '../constants/alert_constants.js';

import AlertsStore from '../stores/alerts_store.js';
import {removeAlert} from '../actions/alert_actions.js';

class Alerts extends React.Component {
  constructor() {
    super();
    this.state = AlertsStore.getInitialState();

    this.changeListener = (data) => {
      this.onChange(data);
    };
  }

  componentDidMount() {
    AlertsStore.addListener(CHANGE, this.changeListener);
  }

  componentWillUnmount() {
    AlertsStore.removeListener(CHANGE, this.changeListener);
  }

  onChange(alerts) {
    this.setState({alerts});
  }

  handleDismiss(id) {
    removeAlert(id);
  }

  renderAlerts() {
    const alerts = this.state.alerts.map((alert) => {
      const alertText = alert.message ? `${alert.name}: ${alert.message}` : alert.name;
      return <Alert bsStyle={alert.type} key={alert._id} onDismiss={() => this.handleDismiss(alert._id)}>
        <p>{alertText}</p>
      </Alert>;
    });
    return alerts;
  }

  render() {
    if (this.state.alerts.length > 0) {
      return <div>{this.renderAlerts()}</div>;
    } else {
      return false;
    }
  }
}

Alerts.propTypes = {};

export default Alerts;
