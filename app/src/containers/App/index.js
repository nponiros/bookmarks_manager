import { connect } from 'react-redux';

import App from '../../components/App';
import handleAction from '../../actions';

function mapStateToProps(state) {
  const {
    entities,
    errorMessage,
    itemToUpdateID,
    settings,
    showErrorDialog,
    syncStatus,
    tags,
    view,
  } = state;
  const itemToUpdate = entities[itemToUpdateID];

  return {
    errorMessage,
    selectTags: Object.assign({}, {
      tags,
      bookmarkTagIDs: itemToUpdate ? itemToUpdate.tags : [],
    }),
    settings,
    syncStatus,
    showErrorDialog,
    view,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleAction(action, ...args) {
      dispatch(handleAction(action, ...args));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
