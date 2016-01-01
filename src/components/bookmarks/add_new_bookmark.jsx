import React from 'react';

import BookmarkForm from './bookmark_form.js';
import {create} from '../../actions/bookmark_actions.js';
import {showError} from '../../actions/alert_actions.js';

const emptyData = {
  title: '',
  author: '',
  dateWritten: '',
  url: '',
  description: '',
  tagIds: []
};

class AddNewBookmark extends React.Component {
  constructor() {
    super();
    this.state = {
      data: emptyData
    };
  }

  handleSubmit(bookmark) {
    create(bookmark).then(() => {
      this.props.closePanel();
      this.setState({
        data: emptyData
      });
    }).catch((err) => {
      showError(err);
    });
  }

  render() {
    return <BookmarkForm defaultData={this.state.data} handleSubmit={(data) => this.handleSubmit(data)}/>;
  }
}
AddNewBookmark.propTypes = {
  closePanel: React.PropTypes.func.isRequired
};

export default AddNewBookmark;
