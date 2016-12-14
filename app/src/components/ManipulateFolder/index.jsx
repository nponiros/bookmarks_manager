import React, { PropTypes } from 'react';

import { ADD_FOLDER_VIEW, EDIT_FOLDER_VIEW } from '../../constants';
import FolderForm from './Form';
import AddAppBar from './AddAppBar';
import EditAppBar from './EditAppBar';

const Folder = props => <div>
  {
    props.view === ADD_FOLDER_VIEW ?
      <AddAppBar handleAction={props.handleAction} id={props.id} /> :
      <EditAppBar handleAction={props.handleAction} id={props.id} />
  }
  <FolderForm {...props} />
</div>;

Folder.propTypes = {
  id: PropTypes.string.isRequired,
  handleAction: PropTypes.func.isRequired,
  view: PropTypes.oneOf([ADD_FOLDER_VIEW, EDIT_FOLDER_VIEW]),
};

export default Folder;
