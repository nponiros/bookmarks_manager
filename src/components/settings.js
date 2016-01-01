import React from 'react';
import {Input, Button} from 'react-bootstrap';

import {showError} from '../actions/alert_actions.js';
import {save} from '../actions/settings_actions.js';

import settingsStore from '../stores/settings_store.js';
import {CHANGE} from '../constants/settings_constants.js';

class Settings extends React.Component {
  constructor() {
    super();
    this.state = settingsStore.getInitialState();

    this.changeListener = (data) => {
      this.onChange(data);
    };
  }

  componentDidMount() {
    settingsStore.addListener(CHANGE, this.changeListener);
  }

  componentWillUnmount() {
    settingsStore.removeListener(CHANGE, this.changeListener);
  }

  onChange(data) {
    this.setState(data);
  }

  handleSubmit(event) {
    event.preventDefault();
    const urlInput = this.refs.serverUrl.getInputDOMNode();
    const urlValid = urlInput.checkValidity();
    if (urlValid) {
      const settings = {
        serverUrl: this.refs.serverUrl.getValue(),
        port: Number(this.refs.port.getValue())
      };
      save(settings).then(() => {
        this.props.closePanel();
      }).catch((err) => {
        showError(err);
      });
    } else {
      this.setState({
        urlValidStyle: 'error'
      });
    }
  }

  render() {
    return <form onSubmit={(event) => this.handleSubmit(event)} noValidate>
      <Input type="url" label="Server URL" ref="serverUrl" defaultValue={this.state.serverUrl} required hasFeedback
             bsStyle={this.state.urlValidStyle}/>
      <Input type="number" label="Port" ref="port" defaultValue={this.state.port}/>
      <Button type="submit" bsStyle="primary" block>Save</Button>
    </form>;
  }
}
Settings.propTypes = {
  closePanel: React.PropTypes.func.isRequired
};

export default Settings;
