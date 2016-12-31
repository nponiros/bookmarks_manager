import syncClient from '../db/sync_client';
import {
  OPEN_TAGS_SELECT,
  CLOSE_TAGS_SELECT,
  SELECT_TAG,
  UNSELECT_TAG,
  ADD_TAG,
} from '../constants';

export function loadTags() {
  return (dispatch) => {
    syncClient.tags
        .toArray()
        .then((tags) => {
          dispatch({
            type: '',
            payload: tags,
          })
        })
        .catch((e) => {
          console.log(e);
        });
  }
}

// TODO: can probably use itemToUpdateID
export function openTagsSelect(bookmarkID) {
  return (dispatch) => {
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

export function selectTag(bookmarkID, tagID) {
  return (dispatch) => {
    dispatch({
      type: SELECT_TAG,
      payload: {
        bookmarkID,
        tagID,
      },
    });
  };
}

export function unselectTag(bookmarkID, tagID) {
  return (dispatch) => {
    dispatch({
      type: UNSELECT_TAG,
      payload: {
        bookmarkID,
        tagID,
      },
    });
  };
}

export function closeTagsSelect(bookmarkID) {
  return (dispatch, getState) => {
    const bookmarkToSave = getState().entities[bookmarkID];
    syncClient.bookmarks
        .update(bookmarkToSave)
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
