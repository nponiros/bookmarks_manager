import syncClient from '../db/sync_client';
import { DELETE_BOOKMARK, DELETE_FOLDER } from '../constants';

export function deleteBookmark(id) {
  return (dispatch) => {
    syncClient
      .bookmarks
      .delete(id)
      .then(() => {
        dispatch({
          type: DELETE_BOOKMARK,
          payload: id,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };
}

export function deleteFolder(id) {
  return (dispatch) => {
    syncClient
      .folders
      .delete(id)
      .then(() => {
        dispatch({
          type: DELETE_FOLDER,
          payload: id,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };
}
