import React, { PropTypes } from 'react';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
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
  <List>
    <Subheader>Add new sync server</Subheader>
    <ListItem>
      <AddSyncUrl handleAction={handleAction} />
    </ListItem>
    <Divider/>
    <Subheader>Sync Servers</Subheader>
    {
      syncUrls.map((url) => <ListItem
        key={url}
        rightIcon={<Clear />}
        onTouchTap={() => handleAction(REMOVE_SYNC_URL, url)}
      >
        {url}
      </ListItem>)
    }
  </List>
</div>;

Settings.propTypes = {
  syncUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Settings;
