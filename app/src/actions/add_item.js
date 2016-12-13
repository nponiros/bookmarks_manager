import {
  OPEN_ADD_BOOKMARK,
  CLOSE_ADD_BOOKMARK,
  OPEN_ADD_FOLDER,
  CLOSE_ADD_FOLDER,
  FOLDER,
  BOOKMARK,
} from '../constants';

let counter = 0;
function getID() {
  return String(counter++);
}

// TODO get _id from sync client
function getNewBookmark() {
  return {
    id: getID(),
    parentID: 'noparent',
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

function getNewFolder() {
  return {
    id: getID(),
    title: '',
    type: FOLDER,
    parentID: 'noparent',
    addDate: new Date().toISOString(),
  };
}

export function openAddBookmark() {
  return (dispatch) => {
    dispatch({
      type: OPEN_ADD_BOOKMARK,
      payload: getNewBookmark(),
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

export function openAddFolder() {
  return (dispatch) => {
    dispatch({
      type: OPEN_ADD_FOLDER,
      payload: getNewFolder(),
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
