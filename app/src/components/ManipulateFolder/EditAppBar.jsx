import React, { PropTypes } from 'react';

import ManipulateAppBar from '../controls/ManipulateAppBar';
import { CLOSE_EDIT_FOLDER, DELETE_FOLDER, UPDATE_FOLDER } from '../../constants';

const EditAppBar = ({ handleAction, id }) => <ManipulateAppBar
  id={id}
  handleAction={handleAction}
  closeAction={CLOSE_EDIT_FOLDER}
  deleteAction={DELETE_FOLDER}
  manipulateAction={UPDATE_FOLDER}
  title="Edit Folder"
/>;

EditAppBar.propTypes = {
  id: PropTypes.string.isRequired,
  handleAction: PropTypes.func.isRequired,
};

export default EditAppBar;
