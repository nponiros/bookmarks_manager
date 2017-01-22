import {
    blue500,
    blue700,
    darkBlack,
    grey100,
    grey300,
    grey400,
    grey500,
    fullBlack,
    tealA700,
    white,
} from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator';

export const ID_FOR_NO_PARENT = 'noparent';

// Item types
export const FOLDER = 'Folder';
export const BOOKMARK = 'Bookmark';
export const TAG = 'Tag';

// Actions
export const LOAD_ITEMS = Symbol('LOAD_ITEMS');
export const LOAD_FOLDERS = Symbol('LOAD_FOLDERS');
export const OPEN_ADD_BOOKMARK = Symbol('OPEN_ADD_BOOKMARK');
export const CLOSE_ADD_BOOKMARK = Symbol('CLOSE_ADD_BOOKMARK');
export const OPEN_EDIT_BOOKMARK = Symbol('OPEN_EDIT_BOOKMARK');
export const CLOSE_EDIT_BOOKMARK = Symbol('CLOSE_EDIT_BOOKMARK');
export const ADD_BOOKMARK = Symbol('ADD_BOOKMARK');
export const UPDATE_BOOKMARK = Symbol('UPDATE_BOOKMARK');
export const OPEN_ADD_FOLDER = Symbol('OPEN_ADD_FOLDER');
export const CLOSE_ADD_FOLDER = Symbol('CLOSE_ADD_FOLDER');
export const OPEN_EDIT_FOLDER = Symbol('OPEN_EDIT_FOLDER');
export const CLOSE_EDIT_FOLDER = Symbol('CLOSE_EDIT_FOLDER');
export const ADD_FOLDER = Symbol('ADD_FOLDER');
export const UPDATE_FOLDER = Symbol('UPDATE_FOLDER');
export const UPDATE_ITEM = Symbol('UPDATE_ITEM'); // Used to update keys of an item with onChange
export const DELETE_FOLDER = Symbol('DELETE_FOLDER');
export const DELETE_BOOKMARK = Symbol('DELETE_BOOKMARK');
export const OPEN_FOLDER = Symbol('OPEN_FOLDER');
export const FOLDER_BACK = Symbol('FOLDER_BACK');

// Choosing parent folder
export const OPEN_MOVE_ITEM = Symbol('OPEN_MOVE_ITEM');
export const CLOSE_MOVE_ITEM = Symbol('CLOSE_MOVE_ITEM');
export const OPEN_CHOOSE_ITEM_PARENT = Symbol('OPEN_CHOOSE_ITEM_PARENT');
export const CLOSE_CHOOSE_ITEM_PARENT = Symbol('CLOSE_CHOOSE_ITEM_PARENT');
export const CHOOSE_PARENT_FOLDER = Symbol('CHOOSE_PARENT_FOLDER');

export const OPEN_LEFT_NAV = Symbol('OPEN_LEFT_NAV');
export const CLOSE_LEFT_NAV = Symbol('CLOSE_LEFT_NAV');
export const OPEN_SETTINGS = Symbol('OPEN_SETTINGS');
export const CLOSE_SETTINGS = Symbol('CLOSE_SETTINGS');
export const ADD_SYNC_URL = Symbol('ADD_SYNC_URL');
export const REMOVE_SYNC_URL = Symbol('REMOVE_SYNC_URL');
export const OPEN_SYNC_STATUS = Symbol('OPEN_SYNC_STATUS');
export const CLOSE_SYNC_STATUS = Symbol('CLOSE_SYNC_STATUS');
export const OPEN_TAGS_SELECT = Symbol('OPEN_TAGS_SELECT');
export const CLOSE_TAGS_SELECT = Symbol('CLOSE_TAGS_SELECT');
export const SELECT_TAG = Symbol('SELECT_TAG');
export const UNSELECT_TAG = Symbol('UNSELECT_TAG');
export const ADD_TAG = Symbol('ADD_TAG');
export const LOAD_TAGS = Symbol('LOAD_TAGS');

// Views
export const LIST_VIEW = Symbol('LIST_VIEW');
export const ADD_BOOKMARK_VIEW = Symbol('ADD_BOOKMARK_VIEW');
export const EDIT_BOOKMARK_VIEW = Symbol('EDIT_BOOKMARK_VIEW');
export const ADD_FOLDER_VIEW = Symbol('ADD_FOLDER_VIEW');
export const EDIT_FOLDER_VIEW = Symbol('EDIT_FOLDER_VIEW');
// Choose parent folder
export const CHOOSE_ITEM_PARENT_VIEW = Symbol('CHOOSE_ITEM_PARENT_VIEW');
// Move item
export const MOVE_ITEM_VIEW = Symbol('MOVE_ITEM_VIEW');
export const SETTINGS_VIEW = Symbol('SETTINGS_VIEW');
export const SYNC_STATUS_VIEW = Symbol('SYNC_STATUS_VIEW');
export const TAGS_SELECT_VIEW = Symbol('TAGS_SELECT_VIEW');

// This is called any time we get an error to show a dialog
// It is a temporary solution
export const OPEN_ERROR_DIALOG = Symbol('OPEN_ERROR_DIALOG');
export const CLOSE_ERROR_DIALOG = Symbol('CLOSE_ERROR_DIALOG');

export const colorPalette = {
  primary1Color: blue500,
  primary2Color: blue700,
  primary3Color: grey400,
  accent1Color: tealA700,
  accent2Color: grey100,
  accent3Color: grey500,
  textColor: darkBlack,
  alternateTextColor: white,
  canvasColor: white,
  borderColor: grey300,
  disabledColor: fade(darkBlack, 0.3),
  pickerHeaderColor: blue500,
  clockCircleColor: fade(darkBlack, 0.07),
  shadowColor: fullBlack,
};

