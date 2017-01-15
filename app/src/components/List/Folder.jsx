import React, { PropTypes } from 'react';
import { ListItem } from 'material-ui/List';
import FileFolder from 'material-ui/svg-icons/file/folder';

import rightIconMenu from './RightIconMenu';
import { OPEN_FOLDER, FOLDER } from '../../constants';

const listElementStyle = {
  backgroundColor: 'white',
  marginTop: '10px',
  border: '1px solid #e0e0e0',
  borderRadius: '2px',
  boxShadow: '2px 2px 5px #e0e0e0',
};

const Folder = ({
  id,
  title,
  handleAction,
  currentFolderID,
}) => <ListItem
  style={listElementStyle}
  primaryText={title}
  leftIcon={<FileFolder />}
  rightIconButton={rightIconMenu(handleAction, FOLDER, id)}
  onTouchTap={() => handleAction(OPEN_FOLDER, id, currentFolderID)}
/>;

Folder.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  handleAction: PropTypes.func.isRequired,
  currentFolderID: PropTypes.string.isRequired,
};

export default Folder;
