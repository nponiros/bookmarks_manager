import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import Toggle from 'material-ui/Toggle';
import FlatButton from 'material-ui/FlatButton';

import { UPDATE_ITEM, LOAD_FOLDERS, OPEN_CHOOSE_BOOKMARK_PARENT, OPEN_TAGS_SELECT } from '../../constants';

const BookmarkForm = ({
  handleAction,
  title,
  id,
  description,
  wasRead,
  author,
  writeDate,
  parentFolderTitle,
}) => <div>
  <TextField
    floatingLabelText="Title"
    value={title}
    onChange={e => handleAction(UPDATE_ITEM, id, 'title', e.target.value)}
  />
  <br />
  <TextField type="url" floatingLabelText="URL" />
  <br />
  <div>
    <span>Parent folder</span>
    <br />
    <FlatButton
      label={parentFolderTitle}
      onTouchTap={() => handleAction(LOAD_FOLDERS, OPEN_CHOOSE_BOOKMARK_PARENT, id)}
    />
  </div>
  <div>
    <span>Tags</span>
    <br />
    <FlatButton
      label="Select tags"
      onTouchTap={() => handleAction(OPEN_TAGS_SELECT, id)}
    />
    {/* TODO: show selected tags as chips with x */}
  </div>
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
  parentFolderTitle: PropTypes.string.isRequired,
  title: PropTypes.string,
  wasRead: PropTypes.bool,
  description: PropTypes.string,
  author: PropTypes.string,
  writeDate: PropTypes.instanceOf(Date),
  handleAction: PropTypes.func.isRequired,
};

export default BookmarkForm;
