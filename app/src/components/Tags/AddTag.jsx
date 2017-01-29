import React, { PropTypes, Component } from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

import { ADD_TAG } from '../../constants';

class AddTag extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleChange(value) {
    this.setState({
      title: value,
    });
  }

  handleAdd() {
    this.props.handleAction(ADD_TAG, this.state.title);
  }

  render() {
    return (<div>
      <TextField
        name="url"
        floatingLabelText="Tag name"
        onChange={e => this.handleChange(e.target.value)}
      />
      <br />
      <FlatButton
        label="Add"
        primary
        onTouchTap={(e) => {
          e.preventDefault();
          this.handleAdd();
        }}
      />
    </div>);
  }
}

AddTag.propTypes = {
  handleAction: PropTypes.func.isRequired,
};

export default AddTag;
