import React, { PropTypes } from 'react';

import {
  ADD_BOOKMARK_VIEW,
  EDIT_BOOKMARK_VIEW,
  ADD_FOLDER_VIEW,
  EDIT_FOLDER_VIEW,
  LIST_VIEW,
  SETTINGS_VIEW,
  SYNC_STATUS_VIEW,
  MOVE_FOLDER_BOOKMARK_VIEW,
  CHOOSE_BOOKMARK_PARENT_VIEW,
  CHOOSE_FOLDER_PARENT_VIEW,
  TAGS_SELECT_VIEW,
  CLOSE_CHOOSE_BOOKMARK_PARENT,
  CLOSE_CHOOSE_FOLDER_PARENT,
  CLOSE_MOVE_FOLDER_BOOKMARK,
  FOLDER,
  BOOKMARK,
} from '../../constants';

import List from '../List';
import ManipulateBookmark from '../ManipulateBookmark';
import ManipulateFolder from '../ManipulateFolder';
import FoldersTree from '../FoldersTree';
import Settings from '../Settings';
import SyncStatus from '../SyncStatus';
import Tags from '../Tags';

const App = ({
  view,
  items,
  entities,
  handleAction,
  itemToUpdate,
  currentFolderID,
  folders,
  menuOpen,
  settings,
  syncStatus,
  selectTags: {
    tags,
    bookmarkTagIDs,
  },
  tagIDToName,
}) => {
  switch (view) {
    case LIST_VIEW: return (<List
      items={items}
      entities={entities}
      handleAction={handleAction}
      currentFolderID={currentFolderID}
      menuOpen={menuOpen}
    />);
    case ADD_BOOKMARK_VIEW: return (<ManipulateBookmark
      {...itemToUpdate}
      handleAction={handleAction}
      view={view}
      parentFolderTitle={entities[itemToUpdate.parentID] ? entities[itemToUpdate.parentID].title : 'None'}
      tagIDToName={tagIDToName}
    />);
    case EDIT_BOOKMARK_VIEW: return (<ManipulateBookmark
      {...itemToUpdate}
      handleAction={handleAction}
      view={view}
      parentFolderTitle={entities[itemToUpdate.parentID] ? entities[itemToUpdate.parentID].title : 'None'}
      tagIDToName={tagIDToName}
    />);
    case ADD_FOLDER_VIEW: return (<ManipulateFolder
      {...itemToUpdate}
      handleAction={handleAction}
      view={view}
      parentFolderTitle={entities[itemToUpdate.parentID] ? entities[itemToUpdate.parentID].title : 'None'}
    />);
    case EDIT_FOLDER_VIEW: return (<ManipulateFolder
      {...itemToUpdate}
      handleAction={handleAction}
      view={view}
      parentFolderTitle={entities[itemToUpdate.parentID] ? entities[itemToUpdate.parentID].title : 'None'}
    />);
    case CHOOSE_BOOKMARK_PARENT_VIEW: return (<FoldersTree
      folders={folders}
      handleAction={handleAction}
      currentFolderID={currentFolderID}
      closeAction={CLOSE_CHOOSE_BOOKMARK_PARENT}
    />);
    case CHOOSE_FOLDER_PARENT_VIEW: return (<FoldersTree
      folders={folders}
      handleAction={handleAction}
      currentFolderID={currentFolderID}
      closeAction={CLOSE_CHOOSE_FOLDER_PARENT}
    />);
    case MOVE_FOLDER_BOOKMARK_VIEW: return (<FoldersTree
      folders={folders}
      handleAction={handleAction}
      currentFolderID={currentFolderID}
      closeAction={CLOSE_MOVE_FOLDER_BOOKMARK}
    />);
    case SETTINGS_VIEW: return (<Settings
      {...settings}
      handleAction={handleAction}
    />);
    case SYNC_STATUS_VIEW: return (<SyncStatus
      items={syncStatus}
      handleAction={handleAction}
    />);
    case TAGS_SELECT_VIEW: return (<Tags
      tags={tags}
      bookmarkTagIDs={bookmarkTagIDs}
      handleAction={handleAction}
    />);
    default: return null;
  }
};

function lazyFunction(f) {
  return function applyType(...args) {
    return f().apply(this, args);
  };
}

const treeType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf([FOLDER]).isRequired,
  title: PropTypes.string,
  parentID: PropTypes.string.isRequired,
  addDate: PropTypes.string,
  items: PropTypes.arrayOf(lazyFunction(() => treeType)),
});

App.propTypes = {
  view: PropTypes.symbol.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  entities: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.oneOf([FOLDER]).isRequired,
      title: PropTypes.string,
      parentID: PropTypes.string.isRequired,
      addDate: PropTypes.string,
    }),
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.oneOf([BOOKMARK]).isRequired,
      title: PropTypes.string,
      parentID: PropTypes.string.isRequired,
      addDate: PropTypes.string,
      description: PropTypes.string,
      url: PropTypes.string,
      writeDate: PropTypes.instanceOf(Date),
      author: PropTypes.string,
      wasRead: PropTypes.bool,
    }),
  ])).isRequired,
  handleAction: PropTypes.func.isRequired,
  itemToUpdate: PropTypes.oneOfType([
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.oneOf([FOLDER]).isRequired,
      title: PropTypes.string,
      parentID: PropTypes.string.isRequired,
      addDate: PropTypes.string,
    }),
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.oneOf([BOOKMARK]).isRequired,
      title: PropTypes.string,
      parentID: PropTypes.string.isRequired,
      addDate: PropTypes.string,
      description: PropTypes.string,
      url: PropTypes.string,
      writeDate: PropTypes.instanceOf(Date),
      author: PropTypes.string,
      wasRead: PropTypes.bool,
    }),
  ]),
  folders: PropTypes.arrayOf(treeType),
  currentFolderID: PropTypes.string.isRequired,
  menuOpen: PropTypes.bool,
  settings: PropTypes.shape({
    syncUrls: PropTypes.arrayOf(PropTypes.string),
  }),
  syncStatus: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string,
    status: PropTypes.string,
  })),
  tagIDToName: PropTypes.objectOf(PropTypes.string),
};

export default App;
