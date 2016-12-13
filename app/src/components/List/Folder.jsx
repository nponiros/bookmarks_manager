import React, { PropTypes } from 'react';
import { ListItem } from 'material-ui/List';
import FileFolder from 'material-ui/svg-icons/file/folder';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

import { OPEN_FOLDER } from '../../constants';

const iconButtonElement = (
  <IconButton>
    <MoreVertIcon />
  </IconButton>
);

const rightIconMenu = (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem>Edit</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Move</MenuItem>
  </IconMenu>
);

const Folder = ({
  title,
  _id,
  handleAction,
  currentFolderID,
}) => <ListItem
  primaryText={title}
  leftIcon={<FileFolder />}
  rightIconButton={rightIconMenu}
  onTouchTap={() => handleAction(OPEN_FOLDER, _id, currentFolderID)}
/>;

Folder.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  handleAction: PropTypes.func.isRequired,
  currentFolderID: PropTypes.string.isRequired,
};

export default Folder;
