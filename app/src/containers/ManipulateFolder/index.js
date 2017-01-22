import { connect } from 'react-redux';

import ManipulateFolder from '../../components/ManipulateFolder';

import handleAction from '../../actions';

function mapStateToProps(state) {
  const {
      view,
      entities,
      itemToUpdateID,
  } = state;
  const itemToUpdate = entities[itemToUpdateID];

  return {
    view,
    itemToUpdate,
    parentFolderTitle: entities[itemToUpdate.parentID] ? entities[itemToUpdate.parentID].title : 'None',
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
)(ManipulateFolder);
