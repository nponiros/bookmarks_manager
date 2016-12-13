import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

import { UPDATE_ITEM, ID_FOR_NO_PARENT, CLOSE_ADD_FOLDER } from '../../constants';

const Folder = ({ handleAction, title, id, parentID }) => <div>
  <AppBar
    title="Add folder"
    onLeftIconButtonTouchTap={() => handleAction(CLOSE_ADD_FOLDER)}
    iconElementLeft={<IconButton><NavigationClose /></IconButton>}
    iconElementRight={<FlatButton label="Save" />}
  />
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

Folder.propTypes = {
  id: PropTypes.string.isRequired,
  parentID: PropTypes.string.isRequired,
  title: PropTypes.string,
  handleAction: PropTypes.func.isRequired,
};

export default Folder;
