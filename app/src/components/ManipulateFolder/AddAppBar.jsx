import React, { PropTypes } from 'react';

import ManipulateAppBar from '../controls/ManipulateAppBar';
import { CLOSE_ADD_FOLDER, DELETE_FOLDER, ADD_FOLDER } from '../../constants';

const AddAppBar = ({ handleAction, id }) => <ManipulateAppBar
  id={id}
  handleAction={handleAction}
  closeAction={CLOSE_ADD_FOLDER}
  deleteAction={DELETE_FOLDER}
  manipulateAction={ADD_FOLDER}
  title="Add Folder"
/>;

AddAppBar.propTypes = {
  id: PropTypes.string.isRequired,
  handleAction: PropTypes.func.isRequired,
};

export default AddAppBar;
