import React from 'react';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Create from 'material-ui/svg-icons/content/create';
import Clear from 'material-ui/svg-icons/content/clear';
import ContentCut from 'material-ui/svg-icons/content/content-cut';
import ArrowForward from 'material-ui/svg-icons/navigation/arrow-forward';
import SubdirectoryArrowRight from 'material-ui/svg-icons/navigation/subdirectory-arrow-right';

import {
  FOLDER,
  DELETE_BOOKMARK,
  DELETE_FOLDER,
  OPEN_EDIT_BOOKMARK,
  OPEN_EDIT_FOLDER,
  LOAD_FOLDERS,
  OPEN_MOVE_ITEM,
  OPEN_FOLDER,
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
  url,
) => (<IconMenu iconButtonElement={iconButtonElement}>
  <MenuItem
    href={url}
    onTouchTap={(e) => {
      e.preventDefault();
      if (type === FOLDER) { handleAction(OPEN_FOLDER, id); }
    }}
    rightIcon={type === FOLDER ? <SubdirectoryArrowRight /> : <ArrowForward />}
  >
    Open
  </MenuItem>
  <MenuItem
    onTouchTap={(e) => {
      e.preventDefault();
      handleAction(type === FOLDER ? OPEN_EDIT_FOLDER : OPEN_EDIT_BOOKMARK, id);
    }}
    rightIcon={<Create />}
  >
    Edit
  </MenuItem>
  <MenuItem
    onTouchTap={(e) => {
      e.preventDefault();
      handleAction(type === FOLDER ? DELETE_FOLDER : DELETE_BOOKMARK, id);
    }}
    rightIcon={<Clear />}
  >
    Delete
  </MenuItem>
  <MenuItem
    onTouchTap={(e) => {
      e.preventDefault();
      handleAction(LOAD_FOLDERS, OPEN_MOVE_ITEM, id);
    }}
    rightIcon={<ContentCut />}
  >
    Move
  </MenuItem>
</IconMenu>);

export default rightMenuIcon;
