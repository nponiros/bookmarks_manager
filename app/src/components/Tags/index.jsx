import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import Chip from 'material-ui/Chip';

import { CLOSE_TAGS_SELECT } from '../../constants';
import AddTag from './AddTag';

function getChip(tag, bookmarkTagIDs) {
  return (<Chip
    key={tag.id}
    onTouchTap={() => {}}
  >
    {tag.title}
  </Chip>);
}

const Tags = ({ tags, bookmarkTagIDs, bookmarkToUpdateID, handleAction }) => <div>
  <AppBar
    title="Select tags"
    onLeftIconButtonTouchTap={() => handleAction(CLOSE_TAGS_SELECT)}
    iconElementLeft={<IconButton><ArrowBack /></IconButton>}
  />
  <AddTag handleAction={handleAction} />
  <div>
    {
      tags.map((tag) => getChip(tag, bookmarkTagIDs, handleAction))
    }
  </div>
</div>;

Tags.propTypes = {

};

export default Tags;
