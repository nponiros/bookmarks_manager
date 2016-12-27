import syncClient from '../db/sync_client';
import {
  OPEN_ADD_BOOKMARK,
  CLOSE_ADD_BOOKMARK,
  ADD_BOOKMARK,
  OPEN_EDIT_BOOKMARK,
  CLOSE_EDIT_BOOKMARK,
  UPDATE_BOOKMARK,
  OPEN_ADD_FOLDER,
  CLOSE_ADD_FOLDER,
  ADD_FOLDER,
  OPEN_EDIT_FOLDER,
  CLOSE_EDIT_FOLDER,
  UPDATE_FOLDER,
  FOLDER,
  BOOKMARK,
} from '../constants';

function getNewBookmark(currentFolderID) {
  return {
    id: syncClient.getID(),
    parentID: currentFolderID,
    addDate: new Date().toISOString(),
    title: '',
    description: '',
    url: '',
    writeDate: undefined,
    author: '',
    wasRead: false,
    type: BOOKMARK,
  };
}

function getNewFolder(currentFolderID) {
  return {
    id: syncClient.getID(),
    title: '',
    type: FOLDER,
    parentID: currentFolderID,
    addDate: new Date().toISOString(),
  };
}

export function openAddBookmark(currentFolderID) {
  return (dispatch) => {
    dispatch({
      type: OPEN_ADD_BOOKMARK,
      payload: getNewBookmark(currentFolderID),
    });
  };
}

export function closeAddBookmark() {
  return (dispatch) => {
    dispatch({
      type: CLOSE_ADD_BOOKMARK,
    });
  };
}

export function addBookmark(id) {
  return (dispatch, getState) => {
    syncClient
      .bookmarks
      .add(getState().entities[id])
      .then(() => {
        dispatch({
          type: ADD_BOOKMARK,
          payload: id,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };
}

export function openEditBookmark(id) {
  return (dispatch) => {
    dispatch({
      type: OPEN_EDIT_BOOKMARK,
      payload: id,
    });
  };
}

export function closeEditBookmark() {
  return (dispatch) => {
    dispatch({
      type: CLOSE_EDIT_BOOKMARK,
    });
  };
}

export function updateBookmark(id) {
  return (dispatch, getState) => {
    syncClient
      .bookmarks
      .put(getState().entities[id])
      .then(() => {
        dispatch({
          type: UPDATE_BOOKMARK,
          payload: id,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };
}

export function openAddFolder(currentFolderID) {
  return (dispatch) => {
    dispatch({
      type: OPEN_ADD_FOLDER,
      payload: getNewFolder(currentFolderID),
    });
  };
}

export function closeAddFolder() {
  return (dispatch) => {
    dispatch({
      type: CLOSE_ADD_FOLDER,
    });
  };
}

export function addFolder(id) {
  return (dispatch, getState) => {
    syncClient
      .folders
      .add(getState().entities[id])
      .then(() => {
        dispatch({
          type: ADD_FOLDER,
          payload: id,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };
}

export function openEditFolder(id) {
  return (dispatch) => {
    dispatch({
      type: OPEN_EDIT_FOLDER,
      payload: id,
    });
  };
}

export function closeEditFolder() {
  return (dispatch) => {
    dispatch({
      type: CLOSE_EDIT_FOLDER,
    });
  };
}

export function updateFolder(id) {
  return (dispatch, getState) => {
    syncClient
      .folders
      .put(getState().entities[id])
      .then(() => {
        dispatch({
          type: UPDATE_FOLDER,
          payload: id,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };
}
