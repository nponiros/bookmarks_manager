import React, { PropTypes } from 'react';

import ManipulateAppBar from '../ManipulateAppBar';
import { CLOSE_EDIT_BOOKMARK, UPDATE_BOOKMARK, DELETE_BOOKMARK } from '../../constants';

const EditAppBar = ({ handleAction, id }) => <ManipulateAppBar
  id={id}
  handleAction={handleAction}
  closeAction={CLOSE_EDIT_BOOKMARK}
  deleteAction={DELETE_BOOKMARK}
  manipulateAction={UPDATE_BOOKMARK}
  title="Edit Bookmark"
/>;

EditAppBar.propTypes = {
  id: PropTypes.string.isRequired,
  handleAction: PropTypes.func.isRequired,
};

export default EditAppBar;
