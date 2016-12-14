import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';
import Toggle from 'material-ui/Toggle';

import { UPDATE_ITEM, ID_FOR_NO_PARENT } from '../../constants';

const BookmarkForm = ({
  handleAction,
  title,
  id,
  parentID,
  description,
  wasRead,
  author,
  writeDate,
}) => <div>
  <TextField
    floatingLabelText="Title"
    value={title}
    onChange={e => handleAction(UPDATE_ITEM, id, 'title', e.target.value)}
  />
  <br />
  <TextField type="url" floatingLabelText="URL" />
  <br />
  <SelectField
    floatingLabelText="Parent folder"
    value={parentID}
    onChange={(e, key, value) => handleAction(UPDATE_ITEM, id, 'parentID', value)}
  >
    <MenuItem value={ID_FOR_NO_PARENT} primaryText="None" />
  </SelectField>
  <Toggle
    label="Read"
    defaultToggled={wasRead}
    onToggle={() => handleAction(UPDATE_ITEM, id, 'wasRead', !wasRead)}
  />
  <br />
  <TextField
    floatingLabelText="Description"
    multiLine
    rows={2}
    value={description}
    onChange={e => handleAction(UPDATE_ITEM, id, 'description', e.target.value)}
  />
  <br />
  <TextField
    floatingLabelText="Author"
    value={author}
    onChange={e => handleAction(UPDATE_ITEM, id, 'author', e.target.value)}
  />
  <br />
  <DatePicker
    hintText="Write date"
    value={writeDate}
    onChange={(e, date) => handleAction(UPDATE_ITEM, id, 'writeDate', date)}
  />
</div>;

BookmarkForm.propTypes = {
  id: PropTypes.string.isRequired,
  parentID: PropTypes.string.isRequired,
  title: PropTypes.string,
  wasRead: PropTypes.bool,
  description: PropTypes.string,
  author: PropTypes.string,
  writeDate: PropTypes.instanceOf(Date),
  handleAction: PropTypes.func.isRequired,
};

export default BookmarkForm;
