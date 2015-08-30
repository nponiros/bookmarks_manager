import React from 'react';

import {Label} from 'react-bootstrap';

class EditTag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: props.initiallySelected
    };
  }
  handleDeselect() {
    this.setState({
      selected: false
    });
    this.props.onSelect(this.props.id, false);
  }

  handleSelect() {
    this.setState({
      selected: true
    });
    this.props.onSelect(this.props.id, true);
  }

  render() {
    if (this.state.selected) {
      return <Label bsStyle="primary" onClick={() => this.handleDeselect()}>{this.props.name}</Label>;
    } else {
      return <Label bsStyle="default" onClick={() => this.handleSelect()}>{this.props.name}</Label>;
    }
  }
}
EditTag.propTypes = {
  id: React.PropTypes.string.isRequired,
  initiallySelected: React.PropTypes.bool.isRequired,
  name: React.PropTypes.string.isRequired,
  onSelect: React.PropTypes.func.isRequired
};

export default EditTag;
