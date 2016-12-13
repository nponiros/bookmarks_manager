import React, { PropTypes } from 'react';
import { ListItem } from 'material-ui/List';
import FileFolder from 'material-ui/svg-icons/file/folder';

import rightIconMenu from './RightIconMenu';
import { OPEN_FOLDER, FOLDER } from '../../constants';

const Folder = ({
  title,
  id,
  handleAction,
  currentFolderID,
}) => <ListItem
  primaryText={title}
  leftIcon={<FileFolder />}
  rightIconButton={rightIconMenu(handleAction, FOLDER)}
  onTouchTap={() => handleAction(OPEN_FOLDER, id, currentFolderID)}
/>;

Folder.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  handleAction: PropTypes.func.isRequired,
  currentFolderID: PropTypes.string.isRequired,
};

export default Folder;
