import React from 'react';

import {Button, Input} from 'react-bootstrap';

import {create} from '../../actions/tag_actions.js';

class AddNewTag extends React.Component {
  constructor() {
    super();
    this.state = {
      nameValidStyle: 'error'
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    const nameInput = this.refs.name.getInputDOMNode();
    const nameValid = nameInput.checkValidity();
    if (nameValid) {
      const tag = {
        name: this.refs.name.getValue(),
        bookmarkIds: []
      };
      create(tag);
    } else {
      this.setState({
        nameValidStyle: nameValid ? undefined : 'error'
      });
    }
  }

  render() {
    return <form onSubmit={(event) => this.handleSubmit(event)} noValidate>
      <Input type="text" label="New tag" ref="name" required hasFeedback bsStyle={this.state.nameValidStyle}/>
      <Button type="submit" bsStyle="primary">Add Tag</Button>
    </form>;
  }
}
AddNewTag.propTypes = {};

export default AddNewTag;
