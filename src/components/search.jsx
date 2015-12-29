import React from 'react';
import {Input, Button} from 'react-bootstrap';

class Search extends React.Component {
  constructor() {
    super();
  }

  handleSubmit() {
    const queryObject = {
      title: this.refs.title.getValue()
    };
    // TODO: some search object
    // TODO: search action
  }

  render() {
    return <form onSubmit={(event) => this.handleSubmit(event)} noValidate>
      <Input type="text" label="Title" ref="title"/>
      <Button type="submit" bsStyle="primary" block>Search</Button>
    </form>;
  }
}
Search.propTypes = {};

export default Search;
