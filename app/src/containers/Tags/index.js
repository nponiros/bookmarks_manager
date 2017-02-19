import { connect } from 'react-redux';

import Tags from '../../components/Tags';
import handleAction from '../../actions';

function sortTags(tags) {
  const sortedTags = [...tags];
  sortedTags.sort((tag1, tag2) => {
    if (tag1.title < tag2.title) {
      return -1;
    } else if (tag1.title > tag2.title) {
      return 1;
    } else {
      return 0;
    }
  });
  return sortedTags;
}

function mapStateToProps(state) {
  const {
      entities,
      itemToUpdateID,
      tags,
  } = state;
  const itemToUpdate = entities[itemToUpdateID];

  return {
    bookmarkTagIDs: itemToUpdate ? itemToUpdate.tags : [],
    tags: sortTags(tags),
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
