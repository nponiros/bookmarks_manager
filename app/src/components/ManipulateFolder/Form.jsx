import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';

import ButtonWithLabel from '../controls/ButtonWithLabel';
import { UPDATE_ITEM, LOAD_FOLDERS, OPEN_CHOOSE_ITEM_PARENT } from '../../constants';

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
    action={() => handleAction(LOAD_FOLDERS, OPEN_CHOOSE_ITEM_PARENT, id)}
  />
</div>;

FolderForm.defaultProps = {
  title: '',
};

FolderForm.propTypes = {
  id: PropTypes.string.isRequired,
  handleAction: PropTypes.func.isRequired,
  title: PropTypes.string,
  parentFolderTitle: PropTypes.string.isRequired,
};

export default FolderForm;
