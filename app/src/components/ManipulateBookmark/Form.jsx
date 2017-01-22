import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import Toggle from 'material-ui/Toggle';
import Chip from 'material-ui/Chip';

import {
  UPDATE_ITEM,
  LOAD_FOLDERS,
  OPEN_CHOOSE_ITEM_PARENT,
  OPEN_TAGS_SELECT,
  UNSELECT_TAG,
} from '../../constants';
import ButtonWithLabel from '../controls/ButtonWithLabel';

const chipWrapperStyle = {
  display: 'flex',
  flexWrap: 'wrap',
};

const chipStyle = { margin: '4px' };

function getTags(tagIDs, tagIDToName, handleAction) {
  return tagIDs.map(id => <Chip
    style={chipStyle}
    key={id}
    onRequestDelete={() => handleAction(UNSELECT_TAG, id)}
  >
    {tagIDToName[id]}
  </Chip>);
}

const BookmarkForm = ({
  author,
  description,
  id,
  handleAction,
  parentFolderTitle,
  tagIDToName,
  tags,
  title,
  url,
  wasRead,
  writeDate,
}) => <div>
  <TextField
    floatingLabelText="Title"
    value={title}
    onChange={e => handleAction(UPDATE_ITEM, id, 'title', e.target.value)}
    fullWidth
  />
  <br />
  <TextField
    type="url"
    floatingLabelText="URL"
    value={url}
    onChange={e => handleAction(UPDATE_ITEM, id, 'url', e.target.value)}
    fullWidth
  />
  <br />
  <ButtonWithLabel
    title="Parent folder"
    btnLabel={parentFolderTitle}
    action={() => handleAction(LOAD_FOLDERS, OPEN_CHOOSE_ITEM_PARENT, id)}
  />
  <ButtonWithLabel
    title="Tags"
    btnLabel="Select tags"
    action={() => handleAction(OPEN_TAGS_SELECT, id)}
  />
  <br />
  <div style={chipWrapperStyle}>
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
    fullWidth
  />
  <br />
  <DatePicker
    hintText="Write date"
    value={writeDate}
    onChange={(e, date) => handleAction(UPDATE_ITEM, id, 'writeDate', date)}
    fullWidth
  />
  <br />
  <TextField
    floatingLabelText="Description"
    multiLine
    rows={2}
    value={description}
    onChange={e => handleAction(UPDATE_ITEM, id, 'description', e.target.value)}
    fullWidth
  />
</div>;

BookmarkForm.defaultProps = {
  author: '',
  description: '',
  tags: [],
  title: '',
  url: '',
  wasRead: false,
  writeDate: undefined,
};

BookmarkForm.propTypes = {
  author: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string.isRequired,
  handleAction: PropTypes.func.isRequired,
  parentFolderTitle: PropTypes.string.isRequired,
  tagIDToName: PropTypes.objectOf(PropTypes.string).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
  url: PropTypes.string,
  wasRead: PropTypes.bool,
  writeDate: PropTypes.instanceOf(Date),
};

export default BookmarkForm;
