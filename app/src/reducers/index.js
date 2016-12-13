import update from 'immutability-helper';

import {
  LOAD_ITEMS,
  OPEN_ADD_BOOKMARK,
  CLOSE_ADD_BOOKMARK,
  OPEN_ADD_FOLDER,
  CLOSE_ADD_FOLDER,
  ADD_BOOKMARK_VIEW,
  ADD_FOLDER_VIEW,
  LIST_VIEW,
  UPDATE_ITEM,
  OPEN_FOLDER,
  FOLDER_BACK,
} from '../constants';

function normalize(serverItems) {
  return serverItems.reduce((newItems, item) => ({
    items: [...newItems.items, item.id],
    entities: Object.assign({}, newItems.entities, { [item.id]: item }),
  }), { items: [], entities: {} });
}

export default function (state, { type, payload /* error = false*/ }) {
  switch (type) {
    case LOAD_ITEMS: {
      const { items, entities } = normalize(payload.items);
      return update(state, {
        items: { $set: items },
        entities: { $merge: entities },
        currentFolderID: { $set: payload.id },
      });
    }
    case OPEN_ADD_BOOKMARK: return update(state, {
      itemToUpdateID: { $set: payload.id },
      entities: { $merge: { [payload.id]: payload } },
      view: { $set: ADD_BOOKMARK_VIEW },
    });
    case CLOSE_ADD_BOOKMARK: return update(state, {
      itemToUpdateID: { $set: undefined }, view: { $set: LIST_VIEW },
    });
    case OPEN_ADD_FOLDER: return update(state, {
      itemToUpdateID: { $set: payload.id },
      entities: { $merge: { [payload.id]: payload } },
      view: { $set: ADD_FOLDER_VIEW },
    });
    case CLOSE_ADD_FOLDER: return update(state, {
      itemToUpdateID: { $set: undefined }, view: { $set: LIST_VIEW },
    });
    case UPDATE_ITEM: return update(state, {
      entities: { [payload.id]: { [payload.key]: { $set: payload.value } } },
    });
    // payload is the id of the current folder before a new one is opened
    case OPEN_FOLDER: return update(state, { previousFolderIDs: { $push: [payload] } });
    case FOLDER_BACK: return update(state, {
      previousFolderIDs: { $splice: [[state.previousFolderIDs.length - 1, 1]] },
    });
    default: return state;
  }
}
