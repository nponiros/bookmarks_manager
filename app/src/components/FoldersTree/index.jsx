import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import FileFolder from 'material-ui/svg-icons/file/folder';
import FileFolderOpen from 'material-ui/svg-icons/file/folder-open';
import IconButton from 'material-ui/IconButton';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';

import {
  FOLDER,
  CHOOSE_PARENT_FOLDER,
  CLOSE_CHOOSE_BOOKMARK_PARENT,
  CLOSE_CHOOSE_FOLDER_PARENT,
  CLOSE_MOVE_FOLDER_BOOKMARK,
} from '../../constants';

const style = { backgroundColor: 'rgba(0, 0, 0, 0.2)' };

function getItems(folders = [], handleAction, currentFolderID) {
  return folders.map(folder => <ListItem
    key={folder.id}
    primaryText={folder.title}
    leftIcon={folder.items && folder.items.length > 0 ? <FileFolderOpen /> : <FileFolder />}
    initiallyOpen
    nestedItems={getItems(folder.items, handleAction, currentFolderID)}
    style={currentFolderID === folder.id ? style : {}}
    onTouchTap={() => handleAction(CHOOSE_PARENT_FOLDER, folder.id)}
  />);
}

const FoldersTree = ({ folders, handleAction, currentFolderID, closeAction }) => <div>
  <AppBar
    title="Choose Folder"
    onLeftIconButtonTouchTap={() => handleAction(closeAction)}
    iconElementLeft={<IconButton><ArrowBack /></IconButton>}
  />
  <List>
    {
      getItems(folders, handleAction, currentFolderID)
    }
  </List>
</div>;

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

FoldersTree.propTypes = {
  folders: PropTypes.arrayOf(treeType).isRequired,
  handleAction: PropTypes.func.isRequired,
  currentFolderID: PropTypes.string.isRequired,
  closeAction: PropTypes.oneOf([
    CLOSE_CHOOSE_BOOKMARK_PARENT,
    CLOSE_CHOOSE_FOLDER_PARENT,
    CLOSE_MOVE_FOLDER_BOOKMARK,
  ]).isRequired,
};

export default FoldersTree;
