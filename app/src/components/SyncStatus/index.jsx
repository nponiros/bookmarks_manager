import React, { PropTypes } from 'react';
import { List, ListItem } from 'material-ui/List';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import Sync from 'material-ui/svg-icons/notification/sync';
import SyncProblem from 'material-ui/svg-icons/notification/sync-problem';
import SyncDisabled from 'material-ui/svg-icons/notification/sync-disabled';

import { SyncClient } from '../../db/sync_client';
import { CLOSE_SYNC_STATUS, RECONNECT_NODE, DISCONNECT_NODE } from '../../constants';

const listElementStyle = {
  backgroundColor: 'white',
  marginTop: '10px',
  border: '1px solid #e0e0e0',
  borderRadius: '2px',
  boxShadow: '2px 2px 5px #e0e0e0',
};

function getListItem(url, handleAction) {
  if (url.status === SyncClient.statuses.ERROR) {
    return (<ListItem
      style={listElementStyle}
      key={url.url}
      primaryText={url.url}
      secondaryText="Some error while trying to sync"
      onTouchTap={(e) => {
        e.preventDefault();
        handleAction(RECONNECT_NODE, url.url);
      }}
      rightIcon={<SyncProblem />}
    />);
  } else if (url.status === SyncClient.statuses.OFFLINE) {
    return (<ListItem
      style={listElementStyle}
      key={url.url}
      primaryText={url.url}
      secondaryText="Synchronization is disabled"
      onTouchTap={(e) => {
        e.preventDefault();
        handleAction(RECONNECT_NODE, url.url);
      }}
      rightIcon={<SyncDisabled />}
    />);
  }

  return (<ListItem
    style={listElementStyle}
    key={url.url}
    primaryText={url.url}
    secondaryText="Synchronization is enabled"
    onTouchTap={(e) => {
      e.preventDefault();
      handleAction(DISCONNECT_NODE, url.url);
    }}
    rightIcon={<Sync />}
  />);
}

const SyncStatus = ({ handleAction, items }) => <div>
  <AppBar
    title="Sync Status"
    onLeftIconButtonTouchTap={(e) => {
      e.preventDefault();
      handleAction(CLOSE_SYNC_STATUS);
    }}
    iconElementLeft={<IconButton><ArrowBack /></IconButton>}
  />
  <List>
    {
      items.map(url => getListItem(url, handleAction))
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
