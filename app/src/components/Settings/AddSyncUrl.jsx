import React, { PropTypes, Component } from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

import { ADD_SYNC_URL } from '../../constants';

class AddSyncUrl extends Component {
  constructor() {
    super();
    this.state = {
      url: '',
      port: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleChange(key, value) {
    this.setState({
      [key]: value,
    });
  }

  handleAdd() {
    const url = `${this.state.url}${this.state.port ? `:${this.state.port}` : ''}`;
    this.props.handleAction(ADD_SYNC_URL, url);
  }

  render() {
    return (<div style={{ paddingBottom: '20px' }}>
      <TextField
        name="url"
        floatingLabelText="URL"
        onChange={e => this.handleChange('url', e.target.value)}
        fullWidth
      />
      <br />
      <TextField
        name="port"
        floatingLabelText="Port"
        type="number"
        onChange={e => this.handleChange('port', e.target.value)}
        fullWidth
      />
      <br />
      <FlatButton
        label="Add"
        primary
        onTouchTap={(e) => {
          e.preventDefault();
          this.handleAdd()
        }}
      />
    </div>);
  }
}

AddSyncUrl.propTypes = {
  handleAction: PropTypes.func.isRequired,
};

export default AddSyncUrl;
