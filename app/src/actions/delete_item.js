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
        .transaction('rw', syncClient.folders, syncClient.bookmarks, () => {
          syncClient.folders.where('parentID').equals(id).delete();
          syncClient.bookmarks.where('parentID').equals(id).delete();
          syncClient.folders.delete(id);
        })
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
