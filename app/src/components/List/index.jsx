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

import LeftNav from '../LeftNav';
import Folder from './Folder';
import Bookmark from './Bookmark';
import {
  FOLDER,
  BOOKMARK,
  OPEN_ADD_BOOKMARK,
  OPEN_ADD_FOLDER,
  ID_FOR_NO_PARENT,
  FOLDER_BACK,
  OPEN_LEFT_NAV,
} from '../../constants';

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
    return <Bookmark key={id} {...entities[id]} handleAction={handleAction} />;
  });
}

function getAppBar(currentFolderID, folder, handleAction) {
  if (currentFolderID === ID_FOR_NO_PARENT) {
    return (<AppBar
      title="Bookmarks Manager"
      onLeftIconButtonTouchTap={(e) => {
        e.preventDefault();
        handleAction(OPEN_LEFT_NAV);
      }}
    />);
  }
  return (<AppBar
    title={folder.title}
    onLeftIconButtonTouchTap={(e) => {
      e.preventDefault();
      handleAction(FOLDER_BACK);
    }}
    iconElementLeft={<IconButton><ArrowBack /></IconButton>}
  />);
}

const speeddialStyle = {
  position: 'fixed',
  bottom: '20px',
  left: '50%',
  fontFamily: 'Roboto, "sans-serifs"',
};

const MyList = ({ items, entities, handleAction, currentFolderID, menuOpen }) => <div>
  { getAppBar(currentFolderID, entities[currentFolderID], handleAction) }
  <List>
    { getListItems(items, entities, handleAction, currentFolderID) }
  </List>
  <SpeedDial
    fabContentOpen={<ContentAdd />}
    fabContentClose={<NavigationClose />}
    style={speeddialStyle}
  >
    <SpeedDialItem
      label="new folder"
      fabContent={<FileFolder />}
      onTouchTap={(e) => {
        e.preventDefault();
        handleAction(OPEN_ADD_FOLDER, currentFolderID);
      }}
    />
    <SpeedDialItem
      label="new bookmark"
      fabContent={<StarBorder />}
      onTouchTap={(e) => {
        e.preventDefault();
        handleAction(OPEN_ADD_BOOKMARK, currentFolderID);
      }}
    />
  </SpeedDial>
  <LeftNav open={menuOpen} handleAction={handleAction} />
</div>;

MyList.defaultProps = {
  menuOpen: false,
};

MyList.propTypes = {
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
  currentFolderID: PropTypes.string.isRequired,
  menuOpen: PropTypes.bool,
};

export default MyList;
