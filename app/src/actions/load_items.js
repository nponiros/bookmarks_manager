import syncClient from '../db/sync_client';
import {
  LOAD_ITEMS,
  LOAD_FOLDERS,
  OPEN_ERROR_DIALOG,
} from '../constants';
import handleAction from './';

export function loadItems(parentID = 'noparent') {
  return (dispatch) => {
    const foldersPromise = syncClient
      .folders
      .where({ parentID })
      .toArray();
    const bms = [];
    const bookmarksPromise = syncClient
      .bookmarks
      .where({ parentID })
      .each((item) => {
        if (item.writeDate) {
          bms.push(Object.assign({}, item, { writeDate: new Date(item.writeDate) }));
        } else {
          bms.push(item);
        }
      })
      .then(() => bms);
    Promise
      .all([foldersPromise, bookmarksPromise])
      .then(([folders, bookmarks]) => {
        dispatch({
          type: LOAD_ITEMS,
          payload: {
            items: [...folders, ...bookmarks],
            id: parentID,
          },
        });
      })
      .catch((e) => {
        dispatch({
          type: OPEN_ERROR_DIALOG,
          payload: e,
        });
      });
  };
}

export function loadFolders(actionToOpenView, itemToUpdateID = '') {
  return (dispatch) => {
    syncClient
      .folders
      .toArray()
      .then((folders) => {
        dispatch({
          type: LOAD_FOLDERS,
          payload: folders,
        });
        dispatch(handleAction(actionToOpenView, itemToUpdateID));
      })
      .catch((e) => {
        dispatch({
          type: OPEN_ERROR_DIALOG,
          payload: e,
        });
      });
  };
}
