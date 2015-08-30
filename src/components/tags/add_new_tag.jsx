import React from 'react';

import {Button, Input} from 'react-bootstrap';

import {create} from '../../actions/tag_actions.js';

class AddNewTag extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
    const tag = {
      name: this.refs.name.getValue(),
      bookmarkIds: []
    };
    create(tag);
  }

  render() {
    return <form onSubmit={(event) => this.handleSubmit(event)}>
      <Input type="text" label="New tag" ref="name"/>
      <Button type="submit" bsStyle="primary">Add Tag</Button>
    </form>;
  }
}

export default AddNewTag;
