import React from 'react';
import {Input, Button, Glyphicon} from 'react-bootstrap';

import {showError, showWarning} from '../actions/alert_actions.js';
import {save, importBookmarks} from '../actions/settings_actions.js';

import settingsStore from '../stores/settings_store.js';
import {CHANGE} from '../constants/settings_constants.js';

class Settings extends React.Component {
  constructor() {
    super();
    this.state = settingsStore.getInitialState();
    this.bookmarksFile = null;

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

  _handleServerSettingsSubmit() {
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

  _handleImportSubmit() {
    if (this.bookmarksFile === null) {
      showError(Error('Not file selected'));
    } else if (this.bookmarksFile.type !== 'application/json' && this.bookmarksFile.type !== '') {
      showError(Error('File type not supported'));
    } else if (this.state.importInProgress) {
      showWarning({
        name: 'Warning',
        message: 'Import in progress'
      });
    } else {
      this.setState({
        importInProgress: true
      });
      importBookmarks(this.bookmarksFile).then(() => {
        this.setState({
          importInProgress: false
        });
        this.props.closePanel();
      }).catch((err) => {
        this.setState({
          importInProgress: false
        });
        showError(err);
      });
    }
  }

  handleSubmit(event, submitType) {
    event.preventDefault();
    if (submitType === 'serverSettings') {
      this._handleServerSettingsSubmit();
    } else {
      this._handleImportSubmit();
    }
  }

  handleFileSelection(event) {
    event.preventDefault();
    this.bookmarksFile = event.target.files[0];
  }

  renderImportForm() {
    if (this.state.importInProgress) {
      return <form onSubmit={(event) => this.handleSubmit(event, 'importBookmarks')} noValidate>
        <Input type="file" ref="file" onChange={(event) => this.handleFileSelection(event)}/>
        <Button type="submit" bsStyle="primary" block className="syncing"><Glyphicon glyph="refresh"/></Button>
      </form>;
    } else {
      return <form onSubmit={(event) => this.handleSubmit(event, 'importBookmarks')} noValidate>
        <Input type="file" ref="file" onChange={(event) => this.handleFileSelection(event)}/>
        <Button type="submit" bsStyle="primary" block>Import</Button>
      </form>;
    }
  }

  render() {
    return <div>
      <h4>SyncServer Settings</h4>
      <form onSubmit={(event) => this.handleSubmit(event, 'serverSettings')} noValidate>
        <Input type="url" label="Server URL" ref="serverUrl" defaultValue={this.state.serverUrl} required hasFeedback
               bsStyle={this.state.urlValidStyle}/>
        <Input type="number" label="Port" ref="port" defaultValue={this.state.port}/>
        <Button type="submit" bsStyle="primary" block>Save</Button>
      </form>
      <hr/>
      <h4>Import Bookmarks</h4>
      {this.renderImportForm()}
    </div>;
  }
}
Settings.propTypes = {
  closePanel: React.PropTypes.func.isRequired
};

export default Settings;
