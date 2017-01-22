import update from 'immutability-helper';
import { LIST_VIEW } from '../constants';

/*
 * Function to react on:
 * CLOSE_ADD_BOOKMARK
 * CLOSE_EDIT_BOOKMARK
 * CLOSE_ADD_FOLDER
 * CLOSE_EDIT_FOLDER
 */
export function closeManipulateItem(state) {
  return update(state, {
    itemToUpdateID: { $set: undefined }, view: { $set: LIST_VIEW },
  });
}

/*
 * Function to react on:
 * ADD_BOOKMARK
 * UPDATE_BOOKMARK
 * ADD_FOLDER
 * UPDATE_FOLDER
 */
export function manipulateItem(state, itemToManipulateID) {
  const bookmark = state.entities[itemToManipulateID];
  if (bookmark.parentID !== state.currentFolderID) {
    return update(state, {
      items: { $set: state.items.filter(id => id !== itemToManipulateID) },
      itemToUpdateID: { $set: '' },
    });
  }
  return update(state, { itemToUpdateID: { $set: '' } });
}

/*
 * Function to react on:
 * OPEN_ADD_BOOKMARK
 * OPEN_ADD_FOLDER
 */
export function openAddItem(state, payload, view) {
  return update(state, {
    itemToUpdateID: { $set: payload.id },
    entities: { $merge: { [payload.id]: payload } },
    view: { $set: view },
    items: { $push: [payload.id] },
  });
}

/*
 * Function to react on:
 * UPDATE_ITEM
 */
export function updateItem(state, payload) {
  return update(state, {
    entities: { [payload.id]: { [payload.key]: { $set: payload.value } } },
  });
}

/*
 * Function to react on:
 * OPEN_EDIT_BOOKMARK
 * OPEN_EDIT_FOLDER
 */
export function openEditItem(state, itemToEditID, view) {
  return update(state, {
    itemToUpdateID: { $set: itemToEditID },
    view: { $set: view },
  });
}
