import React from 'react';
import {Alert} from 'react-bootstrap';
import {CHANGE} from '../constants/error_constants.js';

import ErrorStore from '../stores/error_store.js';
import {hideError} from '../actions/error_actions.js';

class Error extends React.Component {
  constructor() {
    super();
    this.state = ErrorStore.getInitialState();

    this.changeListener = (data) => {
      this.onChange(data);
    };
  }

  componentDidMount() {
    ErrorStore.addListener(CHANGE, this.changeListener);
  }

  componentWillUnmount() {
    ErrorStore.removeListener(CHANGE, this.changeListener);
  }

  onChange(data) {
    this.setState(data);
  }

  handleDismiss() {
    hideError();
  }

  render() {
    if (this.state.visible) {
      return <Alert bsStyle="danger" onDismiss={() => this.handleDismiss()}>
        <h4>{this.state.error.name}</h4>
        <p>{this.state.error.message}</p>
      </Alert>;
    } else {
      return false;
    }
  }
}

Error.propTypes = {};

export default Error;
