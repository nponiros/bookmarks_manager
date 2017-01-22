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
  CLOSE_CHOOSE_ITEM_PARENT,
  CLOSE_MOVE_ITEM,
  ID_FOR_NO_PARENT,
} from '../../constants';
import lazyFunction from '../../lazy_function';

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
    <ListItem
      primaryText="None"
      style={currentFolderID === ID_FOR_NO_PARENT ? style : {}}
      onTouchTap={() => handleAction(CHOOSE_PARENT_FOLDER, ID_FOR_NO_PARENT)}
    />
    {
      getItems(folders, handleAction, currentFolderID)
    }
  </List>
</div>;

const treeType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf([FOLDER]).isRequired,
  title: PropTypes.string,
  parentID: PropTypes.string.isRequired,
  addDate: PropTypes.string,
  items: PropTypes.arrayOf(lazyFunction(() => treeType)),
});

FoldersTree.propTypes = {
  closeAction: PropTypes.oneOf([CLOSE_CHOOSE_ITEM_PARENT, CLOSE_MOVE_ITEM]).isRequired,
  currentFolderID: PropTypes.string.isRequired,
  folders: PropTypes.arrayOf(treeType).isRequired,
  handleAction: PropTypes.func.isRequired,
};

export default FoldersTree;
