import { connect } from 'react-redux';

import List from '../../components/List';

import handleAction from '../../actions';
import { FOLDER } from '../../constants';

function sortItems(items, entities) {
  const sortedItems = [...items];
  sortedItems.sort((firstID, secondID) => {
    const firstEntity = entities[firstID];
    const secondEntity = entities[secondID];

    // if types match -> sort title
    if (firstEntity.type === secondEntity.type) {
      if (firstEntity.title < secondEntity.title) {
        return -1;
      } else if (firstEntity.title === secondEntity.title) {
        return 0;
      }
      return 1;
    }

    // Folders come before Bookmarks
    if (firstEntity.type === FOLDER) {
      return -1;
    }
    return 1;
  });
  return sortedItems;
}

function mapStateToProps(state) {
  const {
      items,
      entities,
      currentFolderID,
      menuOpen,
  } = state;

  return {
    items: sortItems(items, entities),
    entities,
    currentFolderID,
    menuOpen,
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
)(List);
