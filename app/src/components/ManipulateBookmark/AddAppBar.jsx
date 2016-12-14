import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Delete from 'material-ui/svg-icons/action/delete';
import Done from 'material-ui/svg-icons/action/done';

import { CLOSE_ADD_BOOKMARK, DELETE_BOOKMARK, ADD_BOOKMARK } from '../../constants';

const AddAppBar = ({ handleAction, id }) => <AppBar
  title="Add Bookmark"
  iconElementLeft={<FlatButton label="Save" icon={<Done />} />}
  onLeftIconButtonTouchTap={() => {
    handleAction(ADD_BOOKMARK, id);
    handleAction(CLOSE_ADD_BOOKMARK);
  }}
  iconElementRight={<FlatButton label="Delete" labelPosition="before" icon={<Delete />} />}
  onRightIconButtonTouchTap={() => {
    handleAction(DELETE_BOOKMARK, id);
    handleAction(CLOSE_ADD_BOOKMARK);
  }}
/>;

AddAppBar.propTypes = {
  id: PropTypes.string.isRequired,
  handleAction: PropTypes.func.isRequired,
};

export default AddAppBar;
