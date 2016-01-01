import React from 'react';
import {Alert as BootstrapAlert} from 'react-bootstrap';
import {CHANGE} from '../constants/alert_constants.js';

import AlertStore from '../stores/alert_store.js';
import {removeAlert} from '../actions/alert_actions.js';

class Alert extends React.Component {
  constructor() {
    super();
    this.state = AlertStore.getInitialState();

    this.changeListener = (data) => {
      this.onChange(data);
    };
  }

  componentDidMount() {
    AlertStore.addListener(CHANGE, this.changeListener);
  }

  componentWillUnmount() {
    AlertStore.removeListener(CHANGE, this.changeListener);
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
      return <BootstrapAlert bsStyle={alert.type} key={alert._id} onDismiss={() => this.handleDismiss(alert._id)}>
        <p>{alertText}</p>
      </BootstrapAlert>;
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

Alert.propTypes = {};

export default Alert;
