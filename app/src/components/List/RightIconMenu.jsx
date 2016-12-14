import React from 'react';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Create from 'material-ui/svg-icons/content/create';
import Clear from 'material-ui/svg-icons/content/clear';
import ContentCut from 'material-ui/svg-icons/content/content-cut';

import {
  FOLDER,
  DELETE_BOOKMARK,
  DELETE_FOLDER,
  OPEN_EDIT_BOOKMARK,
  OPEN_EDIT_FOLDER,
} from '../../constants';

const iconButtonElement = (
  <IconButton
    onTouchTap={(e) => { e.preventDefault(); e.stopPropagation(); }}
    onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
  >
    <MoreVertIcon />
  </IconButton>
);

const rightMenuIcon = (
  handleAction,
  type,
  id,
) => (<IconMenu iconButtonElement={iconButtonElement}>
  <MenuItem
    onTouchTap={() => handleAction(type === FOLDER ? OPEN_EDIT_FOLDER : OPEN_EDIT_BOOKMARK, id)}
    rightIcon={<Create />}
  >
    Edit
  </MenuItem>
  <MenuItem
    onTouchTap={() => handleAction(type === FOLDER ? DELETE_FOLDER : DELETE_BOOKMARK, id)}
    rightIcon={<Clear />}
  >
    Delete
  </MenuItem>
  <MenuItem
    rightIcon={<ContentCut />}
  >
    Move
  </MenuItem>
</IconMenu>);

export default rightMenuIcon;
