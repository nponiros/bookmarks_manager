import update from 'immutability-helper';
import { ID_FOR_NO_PARENT } from '../constants';

export function normalize(serverItems) {
  return serverItems.reduce((newItems, item) => ({
    items: [...newItems.items, item.id],
    entities: Object.assign({}, newItems.entities, { [item.id]: item }),
  }), { items: [], entities: {} });
}

export function createFoldersTree(folders) {
  const foldersMap = folders.reduce(
      (map, folder) => Object.assign(map, { [folder.id]: folder }), {},
  );

  return Object.keys(foldersMap).reduce((tree, key) => {
    if (foldersMap[key].parentID === ID_FOR_NO_PARENT) {
      tree.push(foldersMap[key]);
    } else if (foldersMap[foldersMap[key].parentID].items) {
      foldersMap[foldersMap[key].parentID].items.push(foldersMap[key]);
    } else {
      foldersMap[foldersMap[key].parentID].items = [foldersMap[key]];
    }
    return tree;
  }, []);
}

/*
 * Function to react on:
 * DELETE_BOOKMARK
 * DELETE_FOLDER
 */
export function deleteItem(state, itemToDeleteID) {
  if (state.items.includes(itemToDeleteID)) {
    return update(state, { items: { $set: state.items.filter(id => id !== itemToDeleteID) } });
  }
  return state;
}

/*
 * Function to react on:
 * OPEN_LEFT_NAV
 * CLOSE_LEFT_NAV
 */
export function toggleLeftNav(state, newLeftNavState) {
  return update(state, { menuOpen: { $set: newLeftNavState } });
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

// the folder to open is passed to LOAD_ITEMS
export function openFolder(state, currentFolderID) {
  return update(state, { previousFolderIDs: { $push: [currentFolderID] } });
}

export function folderBack(state) {
  return update(state, {
    previousFolderIDs: { $splice: [[state.previousFolderIDs.length - 1, 1]] },
  });
}
