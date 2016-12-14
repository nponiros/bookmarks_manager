import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import { UPDATE_ITEM, ID_FOR_NO_PARENT } from '../../constants';

const FolderForm = ({ handleAction, title, id, parentID }) => <div>
  <TextField
    floatingLabelText="Folder name"
    value={title}
    onChange={e => handleAction(UPDATE_ITEM, id, 'title', e.target.value)}
  />
  <br />
  <SelectField
    floatingLabelText="Parent folder"
    value={parentID}
    onChange={(e, key, value) => handleAction(UPDATE_ITEM, id, 'parentID', value)}
  >
    <MenuItem value={ID_FOR_NO_PARENT} primaryText="None" />
  </SelectField>
</div>;

FolderForm.propTypes = {
  id: PropTypes.string.isRequired,
  parentID: PropTypes.string.isRequired,
  title: PropTypes.string,
  handleAction: PropTypes.func.isRequired,
};

export default FolderForm;
