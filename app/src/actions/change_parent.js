import syncClient from '../db/sync_client';
import {
  OPEN_CHOOSE_BOOKMARK_PARENT,
  CLOSE_CHOOSE_BOOKMARK_PARENT,
  OPEN_CHOOSE_FOLDER_PARENT,
  CLOSE_CHOOSE_FOLDER_PARENT,
  OPEN_MOVE_FOLDER_BOOKMARK,
  CLOSE_MOVE_FOLDER_BOOKMARK,
  CHOOSE_PARENT_FOLDER,
  FOLDER,
} from '../constants';

export function openChooseBookmarkParent() {
  return (dispatch) => {
    dispatch({
      type: OPEN_CHOOSE_BOOKMARK_PARENT,
    });
  };
}

export function closeChooseBookmarkParent() {
  return (dispatch) => {
    dispatch({
      type: CLOSE_CHOOSE_BOOKMARK_PARENT,
    });
  };
}

export function openChooseFolderParent() {
  return (dispatch) => {
    dispatch({
      type: OPEN_CHOOSE_FOLDER_PARENT,
    });
  };
}

export function closeChooseFolderParent() {
  return (dispatch) => {
    dispatch({
      type: CLOSE_CHOOSE_FOLDER_PARENT,
    });
  };
}

export function openMoveFolderBookmark(itemToUpdateID) {
  return (dispatch) => {
    dispatch({
      type: OPEN_MOVE_FOLDER_BOOKMARK,
      payload: itemToUpdateID,
    });
  };
}

export function closeMoveFolderBookmark() {
  return (dispatch) => {
    dispatch({
      type: CLOSE_MOVE_FOLDER_BOOKMARK,
    });
  };
}

export function chooseParentFolder(parentFolderID) {
  return (dispatch, getState) => {
    const { itemToUpdateID, entities } = getState();
    const item = entities[itemToUpdateID];
    syncClient
        [item.type === FOLDER ? 'folders' : 'bookmarks']
        .put(Object.assign({}, item, { parentID: parentFolderID }))
        .then(() => {
          dispatch({
            type: CHOOSE_PARENT_FOLDER,
            payload: parentFolderID,
          });
        })
        .catch((e) => {
          console.log(e);
        });
  };
}
