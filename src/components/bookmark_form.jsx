import React from 'react';
import {Button, Input} from 'react-bootstrap';

import TagsList from './tags_list.js';

// TODO: what to do with new tags??
class BookmarkForm extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
    const bookmark = {
      title: this.refs.title.getValue(),
      url: this.refs.url.getValue(),
      author: this.refs.author.getValue(),
      description: this.refs.description.getValue(),
      dateWritten: this.refs.dateWritten.getValue()
    };
    this.props.handleSubmit(bookmark);
    return;
  }

  render() {
    return <form onSubmit={(event) => this.handleSubmit(event)}>
      <Input type="text" label="Title" ref="title" defaultValue={this.props.defaultData.title}/>
      <Input type="textarea" label="Description" ref="description" defaultValue={this.props.defaultData.description}/>
      <Input type="url" label="URL" ref="url" defaultValue={this.props.defaultData.url}/>
      <Input type="text" label="Author" ref="author" defaultValue={this.props.defaultData.author}/>
      <Input type="date" label="Date written" ref="dateWritten" defaultValue={this.props.defaultData.dateWritten}/>
      <TagsList editMode="true" selectedTags={this.props.defaultData.tags}></TagsList>
      <Button type="submit" bsStyle="primary" block>Save</Button>
    </form>;
  }
}

export default BookmarkForm;
