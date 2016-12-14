import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Delete from 'material-ui/svg-icons/action/delete';
import Done from 'material-ui/svg-icons/action/done';

import { CLOSE_EDIT_BOOKMARK, DELETE_BOOKMARK, UPDATE_BOOKMARK } from '../../constants';

const EditAppBar = ({ handleAction, id }) => <AppBar
  title="Edit Bookmark"
  iconElementLeft={<FlatButton label="Save" icon={<Done />} />}
  onLeftIconButtonTouchTap={() => {
    handleAction(UPDATE_BOOKMARK, id);
    handleAction(CLOSE_EDIT_BOOKMARK);
  }}
  iconElementRight={<FlatButton label="Delete" labelPosition="before" icon={<Delete />} />}
  onRightIconButtonTouchTap={() => {
    handleAction(DELETE_BOOKMARK, id);
    handleAction(CLOSE_EDIT_BOOKMARK);
  }}
/>;

EditAppBar.propTypes = {
  id: PropTypes.string.isRequired,
  handleAction: PropTypes.func.isRequired,
};

export default EditAppBar;
