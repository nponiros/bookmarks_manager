import { connect } from 'react-redux';

import FoldersTree from '../../components/FoldersTree';
import handleAction from '../../actions';

function mapStateToProps(state, props) {
  const {
      currentFolderID,
      folders,
  } = state;

  return {
    closeAction: props.closeAction,
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
)(FoldersTree);
