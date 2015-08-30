import React from 'react';

import {Button, Modal} from 'react-bootstrap';

import AddNewTag from './add_new_tag.js';
import ViewTagsList from './view_tags_list.js';
import EditTagsList from './edit_tags_list.js';

class TagsModal extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };
  }

  closeModal() {
    this.setState({
      showModal: false
    });
  }

  openModal() {
    this.setState({
      showModal: true
    });
  }

  render() {
    return <div>
      <ViewTagsList tagIds={this.props.selectedTagIds}/>
      <Button onClick={() => this.openModal()}>Edit tags</Button>
      <Modal show={this.state.showModal} onHide={() => this.closeModal()}>
        <Modal.Header closeButton>
          <Modal.Title>Tags</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditTagsList selectedTagIds={this.props.selectedTagIds} onTagSelectionChanged={this.props.onTagSelectionChanged}/>
          <AddNewTag/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => this.closeModal()}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>;
  }
}
TagsModal.propTypes = {
  selectedTagIds: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
};

export default TagsModal;
