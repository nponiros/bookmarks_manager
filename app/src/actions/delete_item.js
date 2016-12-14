import { DELETE_BOOKMARK, DELETE_FOLDER } from '../constants';

export function deleteBookmark(id) {
  return (dispatch) => {
    dispatch({
      type: DELETE_BOOKMARK,
      payload: id,
    });
  };
}

export function deleteFolder(id) {
  return (dispatch) => {
    dispatch({
      type: DELETE_FOLDER,
      payload: id,
    });
  };
}
