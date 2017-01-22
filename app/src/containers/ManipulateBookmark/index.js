import { connect } from 'react-redux';

import ManipulateBookmark from '../../components/ManipulateBookmark';

import handleAction from '../../actions';

function mapStateToProps(state) {
  const {
      view,
      entities,
      itemToUpdateID,
      tagIDToName,
  } = state;
  const itemToUpdate = entities[itemToUpdateID];

  return {
    view,
    itemToUpdate,
    parentFolderTitle: entities[itemToUpdate.parentID] ? entities[itemToUpdate.parentID].title : 'None',
    tagIDToName,
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
)(ManipulateBookmark);
