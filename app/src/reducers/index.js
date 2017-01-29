import update from 'immutability-helper';

import {
  // Views
  ADD_BOOKMARK_VIEW,
  EDIT_BOOKMARK_VIEW,
  ADD_FOLDER_VIEW,
  EDIT_FOLDER_VIEW,
  LIST_VIEW,
  SETTINGS_VIEW,
  SYNC_STATUS_VIEW,

  LOAD_ITEMS,
  LOAD_FOLDERS,
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
  UPDATE_ITEM,
  OPEN_FOLDER,
  FOLDER_BACK,
  DELETE_BOOKMARK,
  DELETE_FOLDER,
  CHOOSE_PARENT_FOLDER,
  OPEN_LEFT_NAV,
  CLOSE_LEFT_NAV,
  OPEN_SETTINGS,
  CLOSE_SETTINGS,
  ADD_SYNC_URL,
  REMOVE_SYNC_URL,
  OPEN_SYNC_STATUS,
  CLOSE_SYNC_STATUS,
  LOAD_TAGS,
  OPEN_TAGS_SELECT,
  CLOSE_TAGS_SELECT,
  ADD_TAG,
  SELECT_TAG,
  UNSELECT_TAG,
  OPEN_ERROR_DIALOG,
  CLOSE_ERROR_DIALOG,

  OPEN_MOVE_ITEM,
  CLOSE_MOVE_ITEM,
  OPEN_CHOOSE_ITEM_PARENT,
  CLOSE_CHOOSE_ITEM_PARENT,
} from '../constants';
import {
  normalize,
  createFoldersTree,
  deleteItem,
  toggleLeftNav,
  updateItem,
  openFolder,
  folderBack,
} from './helpers';
import {
  openChooseItemParent,
  closeChooseItemParent,
  openMoveItem,
  closeMoveItem,
  chooseParentFolder,
} from './change_parent';
import {
  manipulateItem,
  closeManipulateItem,
  openAddItem,
  openEditItem,
} from './manipulate_item';
import {
  loadTags,
  openTagsSelect,
  closeTagsSelect,
  selectTag,
  unselectTag,
  addTag,
} from './tags';

export default function (state, { type, payload /* error = false*/ }) {
  switch (type) {
    case LOAD_ITEMS: {
      const { items, entities } = normalize(payload.items);
      return update(state, {
        items: { $set: items },
        entities: { $merge: entities },
        currentFolderID: { $set: payload.id },
      });
    }
    case LOAD_FOLDERS: {
      return update(state, {
        folders: { $set: createFoldersTree(payload) },
      });
    }

    // Manipulate item
    case OPEN_ADD_BOOKMARK: return openAddItem(state, payload, ADD_BOOKMARK_VIEW);
    case CLOSE_ADD_BOOKMARK: return closeManipulateItem(state);
    case ADD_BOOKMARK: return manipulateItem(state, payload);
    case OPEN_EDIT_BOOKMARK: return openEditItem(state, payload, EDIT_BOOKMARK_VIEW);
    case CLOSE_EDIT_BOOKMARK: return closeManipulateItem(state);
    case UPDATE_BOOKMARK: return manipulateItem(state, payload);
    case OPEN_ADD_FOLDER: return openAddItem(state, payload, ADD_FOLDER_VIEW);
    case CLOSE_ADD_FOLDER: return closeManipulateItem(state);
    case ADD_FOLDER: return manipulateItem(state, payload);
    case OPEN_EDIT_FOLDER: return openEditItem(state, payload, EDIT_FOLDER_VIEW);
    case CLOSE_EDIT_FOLDER: return closeManipulateItem(state);
    case UPDATE_FOLDER: return manipulateItem(state, payload);

    case UPDATE_ITEM: return updateItem(state, payload);
    case DELETE_BOOKMARK: return deleteItem(state, payload);
    case DELETE_FOLDER: return deleteItem(state, payload);

    // Folder navigation
    // payload is the id of the current folder before a new one is opened
    case OPEN_FOLDER: return openFolder(state);
    case FOLDER_BACK: return folderBack(state);

    // Change parent
    case OPEN_CHOOSE_ITEM_PARENT: return openChooseItemParent(state);
    case CLOSE_CHOOSE_ITEM_PARENT: return closeChooseItemParent(state);
    case OPEN_MOVE_ITEM: return openMoveItem(state, payload);
    case CLOSE_MOVE_ITEM: return closeMoveItem(state);
    case CHOOSE_PARENT_FOLDER: return chooseParentFolder(state, payload);

    case OPEN_LEFT_NAV: return toggleLeftNav(state, true);
    case CLOSE_LEFT_NAV: return toggleLeftNav(state, false);

    // Settings
    case OPEN_SETTINGS: return update(state, {
      view: { $set: SETTINGS_VIEW },
      settings: { $set: payload },
    });
    case CLOSE_SETTINGS: return update(state, { view: { $set: LIST_VIEW } });
    case ADD_SYNC_URL: return update(state, { settings: { syncUrls: { $push: [payload] } } });
    case REMOVE_SYNC_URL: return update(state, {
      settings: {
        syncUrls: {
          $set: state.settings.syncUrls.filter(url => url !== payload),
        },
      },
    });

    // Sync status
    case OPEN_SYNC_STATUS: return update(state, {
      view: { $set: SYNC_STATUS_VIEW },
      syncStatus: { $set: payload } });
    case CLOSE_SYNC_STATUS: return update(state, { view: { $set: LIST_VIEW } });

    // Tags
    case LOAD_TAGS: return loadTags(state, payload);
    case OPEN_TAGS_SELECT: return openTagsSelect(state);
    case CLOSE_TAGS_SELECT: return closeTagsSelect(state);
    case SELECT_TAG: return selectTag(state, payload);
    case UNSELECT_TAG: return unselectTag(state, payload);
    case ADD_TAG: return addTag(state, payload);

    case OPEN_ERROR_DIALOG: {
      console.log(payload.stack);
      return update(state, {
        showErrorDialog: { $set: true },
        errorMessage: { $set: { __html: `${payload.stack.replace(/\n/g, '<br/>')}` } },
      });
    }
    case CLOSE_ERROR_DIALOG: return update(state, { showErrorDialog: { $set: false } });
    default: return state;
  }
}
