import React from 'react';
import {PanelGroup} from 'react-bootstrap';

import Bookmark from './bookmark.js';
import BookmarksStore from '../stores/bookmarks_store.js';

import {CHANGE} from '../constants/bookmarks_constants.js';

class BookmarksList extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
    BookmarksStore.getAllBookmarks();
  }

  componentDidMount() {
    BookmarksStore.addListener(CHANGE, (data) => this.onChange(data));
  }

  componentWillUnmount() {
    BookmarksStore.removeListener(CHANGE, this.onChange);
  }

  onChange(data) {
    this.setState({data});
  }

  render() {
    const bookmarks = this.state.data.map((bookmark) => {
      return <Bookmark data={bookmark} key={bookmark._id}/>;
    });
    return <PanelGroup>{bookmarks}</PanelGroup>;
  }
}
BookmarksList.propTypes = {};

export default BookmarksList;
