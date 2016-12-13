import { handleAction } from './';
import { LOAD_ITEMS, OPEN_FOLDER, FOLDER_BACK } from '../constants';

export function openFolder(folderToOpenID, currentFolderID) {
  return (dispatch) => {
    dispatch(handleAction(LOAD_ITEMS, folderToOpenID));
    dispatch({
      type: OPEN_FOLDER,
      payload: currentFolderID,
    });
  };
}

export function folderBack() {
  return (dispatch, getState) => {
    const folderID = getState().previousFolderIDs[getState().previousFolderIDs.length - 1];
    dispatch(handleAction(LOAD_ITEMS, folderID));
    dispatch({
      type: FOLDER_BACK,
    });
  };
}
