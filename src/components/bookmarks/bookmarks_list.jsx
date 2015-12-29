import React from 'react';
import {PanelGroup} from 'react-bootstrap';

import Bookmark from './bookmark.js';
import BookmarksStore from '../../stores/bookmarks_store.js';

import {CHANGE} from '../../constants/bookmarks_constants.js';

class BookmarksList extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };

    this.changeListener = (data) => {
      this.onChange(data);
    };
  }

  componentDidMount() {
    BookmarksStore.addListener(CHANGE, this.changeListener);
  }

  componentWillUnmount() {
    BookmarksStore.removeListener(CHANGE, this.changeListener);
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
