import React from 'react';

import {Button, Modal} from 'react-bootstrap';

import TagsStore from '../stores/tags_store.js';
import Tag from './tag.js';

import {CHANGE} from '../constants/tags_constants.js';

// TODO: mark tags from bookmark (for view just show tags)
// TODO: after close pass tags to bookmark
// TODO: changed tags need saving
// TODO: need bookmark id for that
// TODO: probably disable close until we get new tag IDs?
class TagsList extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      availableTags: []
    };
    TagsStore.getAllTags();
  }

  componentDidMount() {
    TagsStore.addListener(CHANGE, (data) => this.onChange(data));
  }

  componentWillUnmount() {
    TagsStore.removeListener(CHANGE, this.onChange);
  }

  onChange(availableTags) {
    this.setState({availableTags});
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

  onTagSelect(id) {
    // TODO: what happens on select?
    console.log(id);
  }

  renderEditTags() {
    const tags = this.state.availableTags.map((tag) => {
      const isTagSelected = Boolean(this.props.selectedTags.find((selectedTag) => selectedTag._id === tag._id));

      return <li>
        <Tag id={tag._id} name={tag.name} key={tag._id} selected={isTagSelected} onSelect={(id) => this.onTagSelect(id)}/>
      </li>;
    });
    return tags;
  }

  renderViewTags() {
    const tags = this.props.selectedTags.map((tag) => {
      return <li>
          <Tag name={tag.name} key={tag._id} selected="true"/>
        </li>;
    });
    return tags;
  }

  renderForEditMode() {
    return <div>
      <p><strong>Tags:</strong>
        <ul className="inline-list">
          {this.renderViewTags()}
        </ul>
        <Button onClick={() => this.openModal()}>Add</Button>
      </p>
      <Modal show={this.state.showModal} onHide={() => this.closeModal()}>
        <Modal.Header closeButton>
          <Modal.Title>Tags</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul className="inline-list">{this.renderEditTags()}</ul>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => this.closeModal()}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>;
  }

  renderForViewMode() {
    return <p><strong>Tags:</strong>
        <ul className="inline-list">
          {this.renderViewTags()}
        </ul>
      </p>;
  }

  render() {
    if (this.props.editMode) {
      return this.renderForEditMode();
    } else {
      return this.renderForViewMode();
    }
  }
}

export default TagsList;
