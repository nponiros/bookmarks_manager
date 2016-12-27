import React, { PropTypes } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import { CLOSE_LEFT_NAV, OPEN_SETTINGS, OPEN_SYNC_STATUS } from '../../constants';

// TODO add icons
const LeftNav = ({ open, handleAction }) => <Drawer open={open}>
  <MenuItem onTouchTap={() => handleAction(CLOSE_LEFT_NAV)}>Close</MenuItem>
  <MenuItem
    onTouchTap={() => {
      handleAction(OPEN_SETTINGS);
      handleAction(CLOSE_LEFT_NAV);
    }}
  >
    Settings
  </MenuItem>
  <MenuItem
    onTouchTap={() => {
      handleAction(OPEN_SYNC_STATUS);
      handleAction(CLOSE_LEFT_NAV);
    }}
  >
    Sync Status
  </MenuItem>
  {/*<MenuItem>Advanced Search</MenuItem>
  <MenuItem>About</MenuItem>*/}
</Drawer>;

LeftNav.propTypes = {
  open: PropTypes.bool,
  handleAction: PropTypes.func.isRequired,
};

export default LeftNav;
