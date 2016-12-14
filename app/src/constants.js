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

// Views
export const LIST_VIEW = Symbol('LIST_VIEW');
export const ADD_BOOKMARK_VIEW = Symbol('ADD_BOOKMARK_VIEW');
export const EDIT_BOOKMARK_VIEW = Symbol('EDIT_BOOKMARK_VIEW');
export const ADD_FOLDER_VIEW = Symbol('ADD_FOLDER_VIEW');
export const EDIT_FOLDER_VIEW = Symbol('EDIT_FOLDER_VIEW');
export const FOLDER_TREE_VIEW = Symbol('FOLDER_TREE_VIEW');
