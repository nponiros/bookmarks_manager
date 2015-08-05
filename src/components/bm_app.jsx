import React from 'react';

import {Grid} from 'react-bootstrap';

import BookmarksForm from './bookmarks_form.js';
import BookmarksList from './bookmarks_list.js';

import {getAll} from '../db/db_wrapper.js';

class BmApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {bookmarks: props.data};
    getAll({}).then((bookmarks) => {
      this.setState({bookmarks});
    }).catch((e) => {
      console.log('error', e);
    });
  }

  handleBookmarkSubmit(bookmark) {
    const bookmarks = this.state.bookmarks;
    const newBookmarks = bookmarks.concat([bookmark]);
    this.setState({bookmarks: newBookmarks});
  }

  render() {
    return <Grid fluid>
        <BookmarksForm onBookmarkSubmit={(bookmark) => this.handleBookmarkSubmit(bookmark)}/>
        <BookmarksList data={this.state.bookmarks}/>
      </Grid>;
  }
}
BmApp.propTypes = {data: React.PropTypes.array};
BmApp.defaultProps = {data: []};

export default BmApp;
