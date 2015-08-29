import React from 'react';

import {Label} from 'react-bootstrap';

class Tag extends React.Component {
  handleClick() {
    this.props.onSelect(this.props.id);
  }

  render() {
    if (this.props.selected) {
      return <Label primary onClick={() => this.handleClick()}>{this.props.name}</Label>;
    } else {
      return <Label onClick={() => this.handleClick()}>{this.props.name}</Label>;
    }
  }
}
Tag.propTypes = {
  id: React.PropTypes.number,
  selected: React.PropTypes.bool.isRequired,
  name: React.PropTypes.string.isRequired,
  onSelect: React.PropTypes.func
};

export default Tag;
