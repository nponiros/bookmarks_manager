import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import Toggle from 'material-ui/Toggle';
import Chip from 'material-ui/Chip';

import {
  UPDATE_ITEM,
  LOAD_FOLDERS,
  OPEN_CHOOSE_BOOKMARK_PARENT,
  OPEN_TAGS_SELECT,
  UNSELECT_TAG,
} from '../../constants';
import ButtonWithLabel from '../controls/ButtonWithLabel';

function getTags(tagIDs, tagIDToName, handleAction) {
  return tagIDs.map(id => <Chip
    key={id}
    onRequestDelete={() => handleAction(UNSELECT_TAG, id)}
  >
    {tagIDToName[id]}
  </Chip>);
}

const labelStyle = {
  lineHeight: '22px',
  color: 'rgba(0, 0, 0, 0.298039)',
};

const BookmarkForm = ({
  handleAction,
  title,
  id,
  url,
  description,
  wasRead,
  author,
  writeDate,
  parentFolderTitle,
  tagIDToName,
  tags,
}) => <div>
  <TextField
    floatingLabelText="Title"
    value={title}
    onChange={e => handleAction(UPDATE_ITEM, id, 'title', e.target.value)}
    fullWidth={true}
  />
  <br />
  <TextField
    type="url"
    floatingLabelText="URL"
    value={url}
    onChange={e => handleAction(UPDATE_ITEM, id, 'url', e.target.value)}
    fullWidth={true}
  />
  <br />
  <ButtonWithLabel
    title="Parent folder"
    btnLabel={parentFolderTitle}
    action={() => handleAction(LOAD_FOLDERS, OPEN_CHOOSE_BOOKMARK_PARENT, id)}
  />
  <ButtonWithLabel
    title="Tags"
    btnLabel="Select tags"
    action={() => handleAction(OPEN_TAGS_SELECT, id)}
  />
  <br />
  <div>
    { getTags(tags, tagIDToName, handleAction) }
  </div>
  <br />
  <Toggle
    label="Read?"
    defaultToggled={wasRead}
    onToggle={() => handleAction(UPDATE_ITEM, id, 'wasRead', !wasRead)}
    labelPosition="right"
  />
  <TextField
    floatingLabelText="Author"
    value={author}
    onChange={e => handleAction(UPDATE_ITEM, id, 'author', e.target.value)}
    fullWidth={true}
  />
  <br />
  <DatePicker
    hintText="Write date"
    value={writeDate}
    onChange={(e, date) => handleAction(UPDATE_ITEM, id, 'writeDate', date)}
    fullWidth={true}
  />
  <br />
  <TextField
    floatingLabelText="Description"
    multiLine
    rows={2}
    value={description}
    onChange={e => handleAction(UPDATE_ITEM, id, 'description', e.target.value)}
    fullWidth={true}
  />
</div>;

BookmarkForm.propTypes = {
  id: PropTypes.string.isRequired,
  url: PropTypes.string,
  parentFolderTitle: PropTypes.string.isRequired,
  title: PropTypes.string,
  wasRead: PropTypes.bool,
  description: PropTypes.string,
  author: PropTypes.string,
  writeDate: PropTypes.instanceOf(Date),
  handleAction: PropTypes.func.isRequired,
  tagIDToName: PropTypes.objectOf(PropTypes.string).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};

export default BookmarkForm;
