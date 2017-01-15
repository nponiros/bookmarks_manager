import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';

import ButtonWithLabel from '../controls/ButtonWithLabel';
import { UPDATE_ITEM, LOAD_FOLDERS, OPEN_CHOOSE_FOLDER_PARENT } from '../../constants';

const FolderForm = ({ handleAction, title, id, parentFolderTitle }) => <div>
  <TextField
    floatingLabelText="Folder name"
    value={title}
    onChange={e => handleAction(UPDATE_ITEM, id, 'title', e.target.value)}
    fullWidth
  />
  <br />
  <ButtonWithLabel
    title="Parent folder"
    btnLabel={parentFolderTitle}
    action={() => handleAction(LOAD_FOLDERS, OPEN_CHOOSE_FOLDER_PARENT, id)}
  />
</div>;

FolderForm.propTypes = {
  id: PropTypes.string.isRequired,
  parentFolderTitle: PropTypes.string.isRequired,
  title: PropTypes.string,
  handleAction: PropTypes.func.isRequired,
};

export default FolderForm;
