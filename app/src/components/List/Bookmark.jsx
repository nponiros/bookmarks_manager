import React, { PropTypes } from 'react';
import { ListItem } from 'material-ui/List';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Star from 'material-ui/svg-icons/toggle/star';

import rightIconMenu from './RightIconMenu';
import { BOOKMARK } from '../../constants';

const Bookmark = ({
  title,
  url,
  wasRead,
  handleAction,
}) => <ListItem
  primaryText={title}
  leftIcon={wasRead ? <Star /> : <StarBorder />}
  rightIconButton={rightIconMenu(handleAction, BOOKMARK)}
  href={url}
/>;

Bookmark.propTypes = {
  title: PropTypes.string.isRequired,
  wasRead: PropTypes.bool,
  url: PropTypes.string,
  handleAction: PropTypes.func.isRequired,
};

export default Bookmark;

