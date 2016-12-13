import {
  openAddBookmark,
  closeAddBookmark,
  openAddFolder,
  closeAddFolder,
} from './add_item';
import loadItems from './load_items';
import { updateItem } from './update_item';
import { openFolder, folderBack } from './open_folder';

import {
  OPEN_ADD_BOOKMARK,
  CLOSE_ADD_BOOKMARK,
  OPEN_ADD_FOLDER,
  CLOSE_ADD_FOLDER,
  LOAD_ITEMS,
  UPDATE_ITEM,
  OPEN_FOLDER,
  FOLDER_BACK,
} from '../constants';

export function handleAction(action, ...args) {
  return (dispatch) => {
    switch (action) {
      case OPEN_ADD_BOOKMARK:
        return dispatch(openAddBookmark(...args));
      case CLOSE_ADD_BOOKMARK:
        return dispatch(closeAddBookmark());
      case OPEN_ADD_FOLDER:
        return dispatch(openAddFolder(...args));
      case CLOSE_ADD_FOLDER:
        return dispatch(closeAddFolder());
      case LOAD_ITEMS:
        return dispatch(loadItems(...args));
      case UPDATE_ITEM:
        return dispatch(updateItem(...args));
      case OPEN_FOLDER:
        return dispatch(openFolder(...args));
      case FOLDER_BACK:
        return dispatch(folderBack(...args));
      default: throw Error('Action not supported!');
    }
  };
}
