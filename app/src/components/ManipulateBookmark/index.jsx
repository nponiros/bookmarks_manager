import React, { PropTypes } from 'react';

import BookmarkForm from './Form';
import AddAppBar from './AddAppBar';
import EditAppBar from './EditAppBar';
import { ADD_BOOKMARK_VIEW, EDIT_BOOKMARK_VIEW } from '../../constants';

const Bookmark = ({
  handleAction,
  itemToUpdate,
  parentFolderTitle,
  tagIDToName,
  view,
}) => <div>
  {
    view === ADD_BOOKMARK_VIEW
      ? <AddAppBar handleAction={handleAction} id={itemToUpdate.id} />
      : <EditAppBar handleAction={handleAction} id={itemToUpdate.id} />
    }
  <BookmarkForm
    {...itemToUpdate}
    handleAction={handleAction}
    parentFolderTitle={parentFolderTitle}
    tagIDToName={tagIDToName}
  />
</div>;

Bookmark.propTypes = {
  handleAction: PropTypes.func.isRequired,
  itemToUpdate: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
  parentFolderTitle: PropTypes.string.isRequired,
  tagIDToName: PropTypes.objectOf(PropTypes.string).isRequired,
  view: PropTypes.oneOf([ADD_BOOKMARK_VIEW, EDIT_BOOKMARK_VIEW]).isRequired,
};

export default Bookmark;
