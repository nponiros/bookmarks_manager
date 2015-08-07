import React from 'react';
import {Button, Input} from 'react-bootstrap';

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
      <Input type="url" label="Url" ref="url" defaultValue={this.props.defaultData.url}/>
      <Input type="text" label="Author" ref="author" defaultValue={this.props.defaultData.author}/>
      <Input type="date" label="Date written" ref="dateWritten" defaultValue={this.props.defaultData.dateWritten}/>
      <Button type="submit" bsStyle="primary" block>Save</Button>
    </form>;
  }
}

export default BookmarkForm;
