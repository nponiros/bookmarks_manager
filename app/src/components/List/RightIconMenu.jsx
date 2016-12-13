import React, { PropTypes } from 'react';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Create from 'material-ui/svg-icons/content/create';
import Clear from 'material-ui/svg-icons/content/clear';
import ContentCut from 'material-ui/svg-icons/content/content-cut';

const iconButtonElement = (
  <IconButton
    onTouchTap={(e) => { e.preventDefault(); e.stopPropagation(); }}
    onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
  >
    <MoreVertIcon />
  </IconButton>
);

const rightMenuIcon = (handleAction, type) => (<IconMenu iconButtonElement={iconButtonElement}>
  <MenuItem><Create />Edit</MenuItem>
  <MenuItem><Clear />Delete</MenuItem>
  <MenuItem><ContentCut />Move</MenuItem>
</IconMenu>);

export default rightMenuIcon;
