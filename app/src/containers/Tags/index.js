import { connect } from 'react-redux';

import Tags from '../../components/Tags';
import handleAction from '../../actions';

function mapStateToProps(state) {
  const {
      entities,
      itemToUpdateID,
      tags,
  } = state;
  const itemToUpdate = entities[itemToUpdateID];

  return {
    bookmarkTagIDs: itemToUpdate ? itemToUpdate.tags : [],
    tags,
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
)(Tags);
