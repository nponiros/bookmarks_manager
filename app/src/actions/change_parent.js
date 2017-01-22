import syncClient from '../db/sync_client';
import {
  OPEN_CHOOSE_ITEM_PARENT,
  CLOSE_CHOOSE_ITEM_PARENT,
  OPEN_MOVE_ITEM,
  CLOSE_MOVE_ITEM,
  CHOOSE_PARENT_FOLDER,
  FOLDER,
  OPEN_ERROR_DIALOG,
} from '../constants';

export function openChooseItemParent() {
  return (dispatch) => {
    dispatch({
      type: OPEN_CHOOSE_ITEM_PARENT,
    });
  };
}

export function closeChooseItemParent() {
  return (dispatch) => {
    dispatch({
      type: CLOSE_CHOOSE_ITEM_PARENT,
    });
  };
}

export function openMoveItem(itemToUpdateID) {
  return (dispatch) => {
    dispatch({
      type: OPEN_MOVE_ITEM,
      payload: itemToUpdateID,
    });
  };
}

export function closeMoveItem() {
  return (dispatch) => {
    dispatch({
      type: CLOSE_MOVE_ITEM,
    });
  };
}

export function chooseParentFolder(parentFolderID) {
  return (dispatch, getState) => {
    const { itemToUpdateID, entities } = getState();
    const item = entities[itemToUpdateID];
    syncClient[item.type === FOLDER ? 'folders' : 'bookmarks']
        .put(Object.assign({}, item, { parentID: parentFolderID }))
        .then(() => {
          dispatch({
            type: CHOOSE_PARENT_FOLDER,
            payload: parentFolderID,
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
