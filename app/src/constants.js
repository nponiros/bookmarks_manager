export const ID_FOR_NO_PARENT = 'noparent';

// Item types
export const FOLDER = 'Folder';
export const BOOKMARK = 'Bookmark';
export const TAG = 'Tag';

// Actions

export const LOAD_ITEMS = Symbol('LOAD_ITEMS');
export const OPEN_ADD_BOOKMARK = Symbol('OPEN_ADD_BOOKMARK');
export const CLOSE_ADD_BOOKMARK = Symbol('CLOSE_ADD_BOOKMARK');
export const OPEN_ADD_FOLDER = Symbol('OPEN_ADD_FOLDER');
export const CLOSE_ADD_FOLDER = Symbol('CLOSE_ADD_FOLDER');
export const UPDATE_ITEM = Symbol('UPDATE_ITEM');
export const OPEN_FOLDER = Symbol('OPEN_FOLDER');
export const FOLDER_BACK = Symbol('FOLDER_BACK');

// Views

export const LIST_VIEW = Symbol('LIST_VIEW');
export const ADD_BOOKMARK_VIEW = Symbol('ADD_BOOKMARK_VIEW');
export const ADD_FOLDER_VIEW = Symbol('ADD_FOLDER_VIEW');
