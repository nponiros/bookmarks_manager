import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import FileFolder from 'material-ui/svg-icons/file/folder';

import {
  FOLDER,
} from '../../constants';

// TODO highlight the current folder
function getItems(folders = [], handleAction, currentFolderID) {
  return folders.map(folder => <ListItem
    key={folder.id}
    primaryText={folder.title}
    leftIcon={<FileFolder />}
    initiallyOpen
    nestedItems={getItems(folder.items, handleAction, currentFolderID)}
  />);
}

const FoldersTree = ({ folders, handleAction, currentFolderID }) => <div>
  <AppBar title="Choose Folder" />
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
};

export default FoldersTree;
