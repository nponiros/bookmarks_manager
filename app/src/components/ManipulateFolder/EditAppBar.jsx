import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Delete from 'material-ui/svg-icons/action/delete';
import Done from 'material-ui/svg-icons/action/done';

import { CLOSE_EDIT_FOLDER, DELETE_FOLDER, UPDATE_FOLDER } from '../../constants';

const EditAppBar = ({ handleAction, id }) => <AppBar
  title="Edit Folder"
  iconElementLeft={<FlatButton label="Save" icon={<Done />} />}
  onLeftIconButtonTouchTap={() => {
    handleAction(UPDATE_FOLDER, id);
    handleAction(CLOSE_EDIT_FOLDER);
  }}
  iconElementRight={<FlatButton label="Delete" labelPosition="before" icon={<Delete />} />}
  onRightIconButtonTouchTap={() => {
    handleAction(DELETE_FOLDER, id);
    handleAction(CLOSE_EDIT_FOLDER);
  }}
/>;

EditAppBar.propTypes = {
  id: PropTypes.string.isRequired,
  handleAction: PropTypes.func.isRequired,
};

export default EditAppBar;
