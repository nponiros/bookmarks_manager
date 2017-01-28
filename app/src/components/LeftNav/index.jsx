import React, { PropTypes } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import Settings from 'material-ui/svg-icons/action/settings';
import Backup from 'material-ui/svg-icons/action/backup';

import { CLOSE_LEFT_NAV, OPEN_SETTINGS, OPEN_SYNC_STATUS } from '../../constants';

const LeftNav = ({ open, handleAction }) => <Drawer open={open}>
  <MenuItem
    leftIcon={<ArrowBack />}
    onTouchTap={(e) => {
      e.preventDefault();
      handleAction(CLOSE_LEFT_NAV);
    }}
  >
    Close
  </MenuItem>
  <MenuItem
    leftIcon={<Settings />}
    onTouchTap={(e) => {
      e.preventDefault();
      handleAction(OPEN_SETTINGS);
      handleAction(CLOSE_LEFT_NAV);
    }}
  >
    Settings
  </MenuItem>
  <MenuItem
    leftIcon={<Backup />}
    onTouchTap={(e) => {
      e.preventDefault();
      handleAction(OPEN_SYNC_STATUS);
      handleAction(CLOSE_LEFT_NAV);
    }}
  >
    Sync Status
  </MenuItem>
  {/* <MenuItem>Advanced Search</MenuItem>
  <MenuItem>About</MenuItem>*/}
</Drawer>;

LeftNav.defaultProps = {
  open: false,
};

LeftNav.propTypes = {
  open: PropTypes.bool,
  handleAction: PropTypes.func.isRequired,
};

export default LeftNav;
