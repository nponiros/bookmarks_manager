import React, { PropTypes } from 'react';

import BookmarkForm from './Form';
import AddAppBar from './AddAppBar';
import EditAppBar from './EditAppBar';
import { ADD_BOOKMARK_VIEW, EDIT_BOOKMARK_VIEW } from '../../constants';

const Bookmark = props => <div>
  {
    props.view === ADD_BOOKMARK_VIEW ?
      <AddAppBar handleAction={props.handleAction} id={props.id} /> :
      <EditAppBar handleAction={props.handleAction} id={props.id} />
  }
  <BookmarkForm {...props} />
</div>;

Bookmark.propTypes = {
  id: PropTypes.string.isRequired,
  handleAction: PropTypes.func.isRequired,
  view: PropTypes.oneOf([ADD_BOOKMARK_VIEW, EDIT_BOOKMARK_VIEW]),
};

export default Bookmark;
