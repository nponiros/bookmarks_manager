import React, { PropTypes } from 'react';

import ManipulateAppBar from '../ManipulateAppBar';
import { CLOSE_ADD_BOOKMARK, ADD_BOOKMARK, DELETE_BOOKMARK } from '../../constants';

const AddAppBar = ({ handleAction, id }) => <ManipulateAppBar
  id={id}
  handleAction={handleAction}
  closeAction={CLOSE_ADD_BOOKMARK}
  deleteAction={DELETE_BOOKMARK}
  manipulateAction={ADD_BOOKMARK}
  title="Add Bookmark"
/>;

AddAppBar.propTypes = {
  id: PropTypes.string.isRequired,
  handleAction: PropTypes.func.isRequired,
};

export default AddAppBar;
