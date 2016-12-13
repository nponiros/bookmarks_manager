import React, { PropTypes } from 'react';
import { ListItem } from 'material-ui/List';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Star from 'material-ui/svg-icons/toggle/star';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

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

const Bookmark = ({
  title,
  url,
  wasRead,
}) => <ListItem
  primaryText={title}
  leftIcon={wasRead ? <Star /> : <StarBorder />}
  rightIconButton={rightIconMenu}
/>;

Bookmark.propTypes = {
  title: PropTypes.string.isRequired,
  wasRead: PropTypes.bool,
  url: PropTypes.url,
};

export default Bookmark;

