import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import { List } from 'material-ui/List';
import ContentAdd from 'material-ui/svg-icons/content/add';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import FileFolder from 'material-ui/svg-icons/file/folder';
import { SpeedDial, SpeedDialItem } from 'react-mui-speeddial';
import IconButton from 'material-ui/IconButton';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';

import Folder from './Folder';
import Bookmark from './Bookmark';
import { FOLDER, OPEN_ADD_BOOKMARK, OPEN_ADD_FOLDER, ID_FOR_NO_PARENT, FOLDER_BACK } from '../../constants';

function getListItems(items, entities, handleAction, currentFolderID) {
  return items.map((id) => {
    if (entities[id].type === FOLDER) {
      return (<Folder
        key={id}
        {...entities[id]}
        handleAction={handleAction}
        currentFolderID={currentFolderID}
      />);
    }
    return <Bookmark key={id} {...entities[id]} />;
  });
}

function getAppBar(currentFolderID, folder, handleAction) {
  if (currentFolderID === ID_FOR_NO_PARENT) {
    return <AppBar title="Bookmarks Manager" />;
  }
  return (<AppBar
    title={folder.title}
    onLeftIconButtonTouchTap={() => handleAction(FOLDER_BACK)}
    iconElementLeft={<IconButton><ArrowBack /></IconButton>}
  />);
}

const MyList = ({ items, entities, handleAction, currentFolderID }) => <div>
  { getAppBar(currentFolderID, entities[currentFolderID], handleAction) }
  <List>
    { getListItems(items, entities, handleAction, currentFolderID) }
  </List>
  <div style={{ float: 'right' }}>
    <SpeedDial fabContentOpen={<ContentAdd />} fabContentClose={<NavigationClose />}>
      <SpeedDialItem
        label="new folder"
        fabContent={<FileFolder />}
        onTouchTap={() => handleAction(OPEN_ADD_FOLDER)}
      />
      <SpeedDialItem
        label="new bookmark"
        fabContent={<StarBorder />}
        onTouchTap={() => handleAction(OPEN_ADD_BOOKMARK)}
      />
    </SpeedDial>
  </div>
</div>;

MyList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  entities: PropTypes.object,
  handleAction: PropTypes.func.isRequired,
  currentFolderID: PropTypes.string.isRequired,
};

export default MyList;
