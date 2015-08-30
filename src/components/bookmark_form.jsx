import React from 'react';
import {Button, Input} from 'react-bootstrap';

import TagsModal from './tags/tags_modal.js';

class BookmarkForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTagIds: props.defaultData.tagIds
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    const bookmark = {
      title: this.refs.title.getValue(),
      url: this.refs.url.getValue(),
      author: this.refs.author.getValue(),
      description: this.refs.description.getValue(),
      dateWritten: this.refs.dateWritten.getValue(),
      tagIds: this.state.selectedTagIds
    };
    this.props.handleSubmit(bookmark);
    return;
  }

  handleTagSelectionChanged(id, isSelected) {
    if (isSelected) {
      this.setState({
        selectedTagIds: this.state.selectedTagIds.concat([id])
      });
    } else {
      this.setState({
        selectedTagIds: this.state.selectedTagIds.filter((currentId) => currentId !== id)
      });
    }
  }

  render() {
    return <form onSubmit={(event) => this.handleSubmit(event)}>
      <Input type="text" label="Title" ref="title" defaultValue={this.props.defaultData.title}/>
      <Input type="textarea" label="Description" ref="description" defaultValue={this.props.defaultData.description}/>
      <Input type="url" label="URL" ref="url" defaultValue={this.props.defaultData.url}/>
      <Input type="text" label="Author" ref="author" defaultValue={this.props.defaultData.author}/>
      <Input type="date" label="Date written" ref="dateWritten" defaultValue={this.props.defaultData.dateWritten}/>
      <TagsModal selectedTagIds={this.state.selectedTagIds} onTagSelectionChanged={(id, isSelected) => this.handleTagSelectionChanged(id, isSelected)}></TagsModal>
      <Button type="submit" bsStyle="primary" block>Save</Button>
    </form>;
  }
}
// TODO: proptypes will change after validation is added
BookmarkForm.propTypes = {
  defaultData: React.PropTypes.shape({
    _id: React.PropTypes.string,
    description: React.PropTypes.string,
    title: React.PropTypes.string,
    url: React.PropTypes.string,
    author: React.PropTypes.string,
    dateWritten: React.PropTypes.string,
    tagIds: React.PropTypes.arrayOf(React.PropTypes.string)
  }).isRequired
};

export default BookmarkForm;
