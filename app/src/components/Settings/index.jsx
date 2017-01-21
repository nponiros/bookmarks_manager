import React, { PropTypes } from 'react';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import Clear from 'material-ui/svg-icons/content/clear';

import { CLOSE_SETTINGS, REMOVE_SYNC_URL } from '../../constants';
import AddSyncUrl from './AddSyncUrl';

const Settings = ({ syncUrls, handleAction }) => <div>
  <AppBar
    title="Settings"
    onLeftIconButtonTouchTap={() => handleAction(CLOSE_SETTINGS)}
    iconElementLeft={<IconButton><ArrowBack /></IconButton>}
  />
  <div>
    <Subheader style={{ paddingLeft: 0 }}>Add new sync server</Subheader>
    <AddSyncUrl handleAction={handleAction} />
    <Subheader style={{ paddingLeft: 0 }}>Sync Servers</Subheader>
    <List>
      {
        syncUrls.map(url => <ListItem
          key={url}
          rightIcon={<Clear />}
          onTouchTap={() => handleAction(REMOVE_SYNC_URL, url)}
        >
          {url}
        </ListItem>)
      }
    </List>
  </div>
</div>;

Settings.propTypes = {
  syncUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleAction: PropTypes.func.isRequired,
};

export default Settings;
