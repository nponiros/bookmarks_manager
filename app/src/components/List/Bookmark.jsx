import React, { PropTypes } from 'react';
import { ListItem } from 'material-ui/List';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Star from 'material-ui/svg-icons/toggle/star';

import rightIconMenu from './RightIconMenu';
import { BOOKMARK } from '../../constants';

const listElementStyle = {
  backgroundColor: 'white',
  marginTop: '10px',
  border: '1px solid #e0e0e0',
  borderRadius: '2px',
  boxShadow: '2px 2px 5px #e0e0e0',
};

const Bookmark = ({
  id,
  title,
  url,
  wasRead,
  handleAction,
}) => <ListItem
  style={listElementStyle}
  primaryText={title}
  href={url}
  leftIcon={wasRead ? <Star /> : <StarBorder />}
  rightIconButton={rightIconMenu(handleAction, BOOKMARK, id, url)}
/>;

Bookmark.defaultProps = {
  wasRead: false,
  url: '',
};

Bookmark.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  wasRead: PropTypes.bool,
  url: PropTypes.string,
  handleAction: PropTypes.func.isRequired,
};

export default Bookmark;

