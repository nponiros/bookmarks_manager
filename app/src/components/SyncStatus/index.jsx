import React, { PropTypes } from 'react';
import { List, ListItem } from 'material-ui/List';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';

import { CLOSE_SYNC_STATUS } from '../../constants';

// TODO: add reconnect
const SyncStatus = ({ handleAction, items }) => <div>
  <AppBar
      title="Sync Status"
      onLeftIconButtonTouchTap={() => handleAction(CLOSE_SYNC_STATUS)}
      iconElementLeft={<IconButton><ArrowBack /></IconButton>}
  />
  <List>
    {
      items.map((url) => <ListItem key={url.url} primaryText={url.url} secondaryText={url.status} />)
    }
  </List>
</div>;

SyncStatus.propTypes = {
  handleAction: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string,
    status: PropTypes.string,
  })),
};

export default SyncStatus;
