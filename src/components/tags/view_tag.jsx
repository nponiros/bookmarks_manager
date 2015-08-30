import React from 'react';

import {Label} from 'react-bootstrap';

class ViewTag extends React.Component {
  render() {
    return <Label bsStyle="primary">{this.props.name}</Label>;
  }
}
ViewTag.propTypes = {
  name: React.PropTypes.string.isRequired
};

export default ViewTag;
