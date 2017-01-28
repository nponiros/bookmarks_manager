import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Delete from 'material-ui/svg-icons/action/delete';
import Done from 'material-ui/svg-icons/action/done';

const ManipulateAppBar = ({
  title,
  closeAction,
  deleteAction,
  manipulateAction,
  handleAction,
  id,
}) => <AppBar
  title={title}
  iconElementLeft={<FlatButton label="Save" icon={<Done />} />}
  iconStyleLeft={{ marginTop: '13px' }}
  onLeftIconButtonTouchTap={(e) => {
    e.preventDefault();
    handleAction(manipulateAction, id);
    handleAction(closeAction);
  }}
  iconElementRight={<FlatButton label="Delete" labelPosition="before" icon={<Delete />} />}
  onRightIconButtonTouchTap={(e) => {
    e.preventDefault();
    handleAction(deleteAction, id);
    handleAction(closeAction);
  }}
/>;

ManipulateAppBar.propTypes = {
  id: PropTypes.string.isRequired,
  handleAction: PropTypes.func.isRequired,
  closeAction: PropTypes.symbol.isRequired,
  deleteAction: PropTypes.symbol.isRequired,
  manipulateAction: PropTypes.symbol.isRequired,
  title: PropTypes.string.isRequired,
};

export default ManipulateAppBar;
