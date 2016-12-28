import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import Chip from 'material-ui/Chip';

import { CLOSE_TAGS_SELECT } from '../../constants';

function getChip(tag, bookmarkTags) {
  return <Chip />
}
const Tags = ({ tags, bookmarkTags, bookmarkToUpdateID, handleAction }) => <div>
  <AppBar
    title="Select tag"
    onLeftIconButtonTouchTap={() => handleAction(CLOSE_TAGS_SELECT)}
    iconElementLeft={<IconButton><ArrowBack /></IconButton>}
  />
  <div>

  </div>
</div>;

Tags.propTypes = {

};

export default Tags;
