import React, { PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

import {
    ADD_BOOKMARK_VIEW,
    EDIT_BOOKMARK_VIEW,
    ADD_FOLDER_VIEW,
    EDIT_FOLDER_VIEW,
    LIST_VIEW,
    SETTINGS_VIEW,
    SYNC_STATUS_VIEW,
    CHOOSE_ITEM_PARENT_VIEW,
    MOVE_ITEM_VIEW,
    TAGS_SELECT_VIEW,
    // Actions
    CLOSE_ERROR_DIALOG,
    CLOSE_CHOOSE_ITEM_PARENT,
    CLOSE_MOVE_ITEM,
} from '../../constants';

import List from '../../containers/List';
import ManipulateBookmark from '../../containers/ManipulateBookmark';
import ManipulateFolder from '../../containers/ManipulateFolder';
import FoldersTree from '../../containers/FoldersTree';
import Settings from '../Settings';
import SyncStatus from '../SyncStatus';
import Tags from '../../containers/Tags';

const App = ({
  view,
  handleAction,
  settings,
  syncStatus,
  showErrorDialog,
  errorMessage,
}) => {
  const actions = [
    <FlatButton
      label="Close"
      primary
      onTouchTap={(e) => {
        e.preventDefault();
        handleAction(CLOSE_ERROR_DIALOG);
      }}
    />,
  ];

  return (<div>
    <Dialog
      title="Error"
      actions={actions}
      modal={false}
      open={showErrorDialog}
      autoScrollBodyContent
    >
      <div dangerouslySetInnerHTML={errorMessage} />
    </Dialog>
    {(function getView() {
      switch (view) {
        case LIST_VIEW:
          return (<List />);
        case ADD_BOOKMARK_VIEW:
          return (<ManipulateBookmark />);
        case EDIT_BOOKMARK_VIEW:
          return (<ManipulateBookmark />);
        case ADD_FOLDER_VIEW:
          return (<ManipulateFolder />);
        case EDIT_FOLDER_VIEW:
          return (<ManipulateFolder />);
        case CHOOSE_ITEM_PARENT_VIEW:
          return (<FoldersTree closeAction={CLOSE_CHOOSE_ITEM_PARENT} />);
        case MOVE_ITEM_VIEW:
          return <FoldersTree closeAction={CLOSE_MOVE_ITEM} />;
        case SETTINGS_VIEW:
          return (<Settings
            {...settings}
            handleAction={handleAction}
          />);
        case SYNC_STATUS_VIEW:
          return (<SyncStatus
            items={syncStatus}
            handleAction={handleAction}
          />);
        case TAGS_SELECT_VIEW:
          return (<Tags />);
        default:
          return null;
      }
    }())}
  </div>);
};

App.defaultProps = {
  errorMessage: { __html: '' },
  showErrorDialog: false,
};

App.propTypes = {
  handleAction: PropTypes.func.isRequired,
  errorMessage: PropTypes.shape({
    __html: PropTypes.string,
  }),
  settings: PropTypes.shape({
    syncUrls: PropTypes.arrayOf(PropTypes.string),
  }),
  showErrorDialog: PropTypes.bool,
  syncStatus: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string,
    status: PropTypes.string,
  })),
  view: PropTypes.symbol.isRequired,
};

export default App;
