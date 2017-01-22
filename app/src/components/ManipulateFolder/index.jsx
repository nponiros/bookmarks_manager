import React, { PropTypes } from 'react';

import FolderForm from './Form';
import AddAppBar from './AddAppBar';
import EditAppBar from './EditAppBar';
import { ADD_FOLDER_VIEW, EDIT_FOLDER_VIEW } from '../../constants';

const Folder = ({
  handleAction,
  itemToUpdate,
  parentFolderTitle,
  view,
}) => <div>
  {
    view === ADD_FOLDER_VIEW
      ? <AddAppBar handleAction={handleAction} id={itemToUpdate.id} />
      : <EditAppBar handleAction={handleAction} id={itemToUpdate.id} />
  }
  <FolderForm
    {...itemToUpdate}
    handleAction={handleAction}
    parentFolderTitle={parentFolderTitle}
  />
</div>;

Folder.propTypes = {
  handleAction: PropTypes.func.isRequired,
  itemToUpdate: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
  parentFolderTitle: PropTypes.string.isRequired,
  view: PropTypes.oneOf([ADD_FOLDER_VIEW, EDIT_FOLDER_VIEW]).isRequired,
};

export default Folder;
