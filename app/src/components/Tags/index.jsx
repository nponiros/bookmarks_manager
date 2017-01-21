import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import Chip from 'material-ui/Chip';

import { CLOSE_TAGS_SELECT, SELECT_TAG, UNSELECT_TAG, colorPalette } from '../../constants';
import AddTag from './AddTag';

function isSelected(tagID, selectedTagIDs) {
  return selectedTagIDs.indexOf(tagID) !== -1;
}

const chipStyleSelected = { margin: '4px', backgroundColor: colorPalette.primary1Color };
const chipStyleNotSelected = { margin: '4px', backgroundColor: colorPalette.accent3Color };

const chipWrapperStyle = {
  display: 'flex',
  flexWrap: 'wrap',
};

function getChip(tag, bookmarkTagIDs, handleAction) {
  return (<Chip
    key={tag.id}
    onTouchTap={() => {
      handleAction(
        isSelected(tag.id, bookmarkTagIDs)
          ? UNSELECT_TAG
          : SELECT_TAG,
        tag.id);
    }}
    style={isSelected(tag.id, bookmarkTagIDs) ? chipStyleSelected : chipStyleNotSelected}
  >
    {tag.title}
  </Chip>);
}

const Tags = ({ tags, handleAction, bookmarkTagIDs }) => <div>
  <AppBar
    title="Select tags"
    onLeftIconButtonTouchTap={() => handleAction(CLOSE_TAGS_SELECT)}
    iconElementLeft={<IconButton><ArrowBack /></IconButton>}
  />
  <AddTag handleAction={handleAction} />
  <div style={chipWrapperStyle}>
    {
      tags.map(tag => getChip(tag, bookmarkTagIDs, handleAction))
    }
  </div>
</div>;

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
  })),
  handleAction: PropTypes.func.isRequired,
  bookmarkTagIDs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Tags;
