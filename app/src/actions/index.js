import {
  openAddBookmark,
  closeAddBookmark,
  addBookmark,
  openEditBookmark,
  closeEditBookmark,
  updateBookmark,
  openAddFolder,
  closeAddFolder,
  addFolder,
  openEditFolder,
  closeEditFolder,
  updateFolder,
} from './manipulate_item';
import { loadItems, loadFolders } from './load_items';
import updateItem from './update_item';
import { openFolder, folderBack } from './open_folder';
import { deleteBookmark, deleteFolder } from './delete_item';
import {
  openChooseBookmarkParent,
  closeChooseBookmarkParent,
  openChooseFolderParent,
  closeChooseFolderParent,
  openMoveFolderBookmark,
  closeMoveFolderBookmark,
  chooseParentFolder,
} from './change_parent';
import { openLeftNav, closeLeftNav } from './left_nav';
import { openSettings, closeSettings, addSyncUrl, removeSyncUrl } from './settings';
import { openSyncStatus, closeSyncStatus } from './sync_status';
import {
  openTagsSelect,
  closeTagsSelect,
  selectTag,
  unselectTag,
  addTag,
} from './tags';
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
  LOAD_ITEMS,
  LOAD_FOLDERS,
  UPDATE_ITEM,
  OPEN_FOLDER,
  FOLDER_BACK,
  DELETE_BOOKMARK,
  DELETE_FOLDER,
  OPEN_CHOOSE_BOOKMARK_PARENT,
  CLOSE_CHOOSE_BOOKMARK_PARENT,
  OPEN_CHOOSE_FOLDER_PARENT,
  CLOSE_CHOOSE_FOLDER_PARENT,
  OPEN_MOVE_FOLDER_BOOKMARK,
  CLOSE_MOVE_FOLDER_BOOKMARK,
  CHOOSE_PARENT_FOLDER,
  OPEN_LEFT_NAV,
  CLOSE_LEFT_NAV,
  OPEN_SETTINGS,
  CLOSE_SETTINGS,
  ADD_SYNC_URL,
  REMOVE_SYNC_URL,
  OPEN_SYNC_STATUS,
  CLOSE_SYNC_STATUS,
  OPEN_TAGS_SELECT,
  CLOSE_TAGS_SELECT,
  SELECT_TAG,
  UNSELECT_TAG,
  ADD_TAG,
} from '../constants';

export default function handleAction(action, ...args) {
  return (dispatch) => {
    switch (action) {
      case OPEN_ADD_BOOKMARK:
        return dispatch(openAddBookmark(...args));
      case CLOSE_ADD_BOOKMARK:
        return dispatch(closeAddBookmark(...args));
      case ADD_BOOKMARK:
        return dispatch(addBookmark(...args));
      case OPEN_EDIT_BOOKMARK:
        return dispatch(openEditBookmark(...args));
      case CLOSE_EDIT_BOOKMARK:
        return dispatch(closeEditBookmark(...args));
      case UPDATE_BOOKMARK:
        return dispatch(updateBookmark(...args));
      case OPEN_ADD_FOLDER:
        return dispatch(openAddFolder(...args));
      case CLOSE_ADD_FOLDER:
        return dispatch(closeAddFolder(...args));
      case ADD_FOLDER:
        return dispatch(addFolder(...args));
      case OPEN_EDIT_FOLDER:
        return dispatch(openEditFolder(...args));
      case CLOSE_EDIT_FOLDER:
        return dispatch(closeEditFolder(...args));
      case UPDATE_FOLDER:
        return dispatch(updateFolder(...args));
      case LOAD_ITEMS:
        return dispatch(loadItems(...args));
      case LOAD_FOLDERS:
        return dispatch(loadFolders(...args));
      case UPDATE_ITEM:
        return dispatch(updateItem(...args));
      case OPEN_FOLDER:
        return dispatch(openFolder(...args));
      case FOLDER_BACK:
        return dispatch(folderBack(...args));
      case DELETE_BOOKMARK:
        return dispatch(deleteBookmark(...args));
      case DELETE_FOLDER:
        return dispatch(deleteFolder(...args));
      case OPEN_CHOOSE_BOOKMARK_PARENT:
        return dispatch(openChooseBookmarkParent(...args));
      case CLOSE_CHOOSE_BOOKMARK_PARENT:
        return dispatch(closeChooseBookmarkParent(...args));
      case OPEN_CHOOSE_FOLDER_PARENT:
        return dispatch(openChooseFolderParent(...args));
      case CLOSE_CHOOSE_FOLDER_PARENT:
        return dispatch(closeChooseFolderParent(...args));
      case OPEN_MOVE_FOLDER_BOOKMARK:
        return dispatch(openMoveFolderBookmark(...args));
      case CLOSE_MOVE_FOLDER_BOOKMARK:
        return dispatch(closeMoveFolderBookmark(...args));
      case CHOOSE_PARENT_FOLDER:
        return dispatch(chooseParentFolder(...args));
      case OPEN_LEFT_NAV:
        return dispatch(openLeftNav(...args));
      case CLOSE_LEFT_NAV:
        return dispatch(closeLeftNav(...args));
      case OPEN_SETTINGS:
        return dispatch(openSettings(...args));
      case CLOSE_SETTINGS:
        return dispatch(closeSettings(...args));
      case ADD_SYNC_URL:
        return dispatch(addSyncUrl(...args));
      case REMOVE_SYNC_URL:
        return dispatch(removeSyncUrl(...args));
      case OPEN_SYNC_STATUS:
        return dispatch(openSyncStatus(...args));
      case CLOSE_SYNC_STATUS:
        return dispatch(closeSyncStatus(...args));
      case OPEN_TAGS_SELECT:
        return dispatch(openTagsSelect(...args));
      case CLOSE_TAGS_SELECT:
        return dispatch(closeTagsSelect(...args));
      case SELECT_TAG:
        return dispatch(selectTag(...args));
      case UNSELECT_TAG:
        return dispatch(unselectTag(...args));
      case ADD_TAG:
        return dispatch(addTag(...args));
      default: throw Error(`Action ${String(action)} not supported!`);
    }
  };
}
