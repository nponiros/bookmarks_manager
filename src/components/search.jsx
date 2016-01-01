import React from 'react';
import {Input, Button} from 'react-bootstrap';

import {search} from '../actions/search_actions.js';
import {showError} from '../actions/alert_actions.js';

class Search extends React.Component {
  constructor() {
    super();
  }

  handleSubmit(event) {
    event.preventDefault();

    const queryObject = {
      title: this.refs.title.getValue()
    };
    search(queryObject).then(() => {
      this.props.closePanel();
    }).catch((err) => {
      showError(err);
    });
  }

  render() {
    return <form onSubmit={(event) => this.handleSubmit(event)} noValidate>
      <Input type="text" label="Title" ref="title"/>
      <Button type="submit" bsStyle="primary" block>Search</Button>
    </form>;
  }
}
Search.propTypes = {
  closePanel: React.PropTypes.func.isRequired
};

export default Search;
