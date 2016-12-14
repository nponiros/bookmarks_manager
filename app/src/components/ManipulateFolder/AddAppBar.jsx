import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Delete from 'material-ui/svg-icons/action/delete';
import Done from 'material-ui/svg-icons/action/done';

import { CLOSE_ADD_FOLDER, DELETE_FOLDER, ADD_FOLDER } from '../../constants';

const AddAppBar = ({ handleAction, id }) => <AppBar
  title="Add Folder"
  iconElementLeft={<FlatButton label="Save" icon={<Done />} />}
  onLeftIconButtonTouchTap={() => {
    handleAction(ADD_FOLDER, id);
    handleAction(CLOSE_ADD_FOLDER);
  }}
  iconElementRight={<FlatButton label="Delete" labelPosition="before" icon={<Delete />} />}
  onRightIconButtonTouchTap={() => {
    handleAction(DELETE_FOLDER, id);
    handleAction(CLOSE_ADD_FOLDER);
  }}
/>;

AddAppBar.propTypes = {
  id: PropTypes.string.isRequired,
  handleAction: PropTypes.func.isRequired,
};

export default AddAppBar;
