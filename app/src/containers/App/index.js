import { connect } from 'react-redux';

import App from '../../components/App';

import handleAction from '../../actions';

function mapStateToProps(state) {
  const { view, items, entities, itemToUpdateID, currentFolderID, folders } = state;
  return {
    view,
    items,
    entities,
    itemToUpdate: entities[itemToUpdateID],
    currentFolderID,
    folders,
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
