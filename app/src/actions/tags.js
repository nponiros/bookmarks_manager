import syncClient from '../db/sync_client';
import {
  OPEN_TAGS_SELECT,
  CLOSE_TAGS_SELECT,
  SELECT_TAG,
  UNSELECT_TAG,
  ADD_TAG,
  LOAD_TAGS,
} from '../constants';

export function loadTags() {
  return (dispatch) => {
    syncClient.tags
        .toArray()
        .then((tags) => {
          dispatch({
            type: LOAD_TAGS,
            payload: tags,
          })
        })
        .catch((e) => {
          console.log(e);
        });
  }
}

export function openTagsSelect() {
  return (dispatch, getState) => {
    const bookmarkID = getState().itemToUpdateID;
    syncClient.tags
        .toArray()
        .then((tags) => {
          dispatch({
            type: OPEN_TAGS_SELECT,
            payload: {
              tags,
              bookmarkID,
            },
          });
        })
        .catch((e) => {
          console.log(e);
        });
  };
}

export function selectTag(tagID) {
  return (dispatch, getState) => {
    const bookmarkID = getState().itemToUpdateID;
    dispatch({
      type: SELECT_TAG,
      payload: {
        bookmarkID,
        tagID,
      },
    });
  };
}

export function unselectTag(tagID, id) {
  return (dispatch, getState) => {
    const bookmarkID = id || getState().itemToUpdateID;
    dispatch({
      type: UNSELECT_TAG,
      payload: {
        bookmarkID,
        tagID,
      },
    });
  };
}

export function closeTagsSelect() {
  return (dispatch, getState) => {
    const bookmarkID = getState().itemToUpdateID;
    const bookmarkToSave = getState().entities[bookmarkID];
    syncClient.bookmarks
        .put(bookmarkToSave)
        .then(() => {
          dispatch({
            type: CLOSE_TAGS_SELECT,
          });
        })
        .catch((e) => {
          console.log(e);
        });
  };
}

export function addTag(title) {
  return (dispatch) => {
    const tag = { id: syncClient.getID(), title };
    syncClient.tags
        .add(tag)
        .then(() => {
          dispatch({
            type: ADD_TAG,
            payload: tag,
          });
        })
        .catch((e) => {
          console.log(e);
        });
  };
}
