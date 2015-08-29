import AppDispatcher from '../dispatcher/app_dispatcher.js';
import {CREATE, REMOVE, UPDATE, DB_STORE_NAME} from '../constants/bookmarks_constants.js';

import getInstance from '../db/db_wrapper.js';

const dbWrapperInstance = getInstance(DB_STORE_NAME);

export function create(bookmark) {
  dbWrapperInstance.save(bookmark).then((id) => {
    bookmark._id = id;
    AppDispatcher.dispatch({
      actionType: CREATE,
      data: bookmark
    });
  }).catch((e) => {
    console.log('error', e);
  });
}

export function remove(bookmarkId) {
  dbWrapperInstance.remove(bookmarkId).then(() => {
    AppDispatcher.dispatch({
      actionType: REMOVE,
      data: bookmarkId
    });
  }).catch((e) => {
    console.log('error', e);
  });
}

export function update(bookmark) {
  dbWrapperInstance.save(bookmark).then(() => {
    AppDispatcher.dispatch({
      actionType: UPDATE,
      data: bookmark
    });
  }).catch((e) => {
    console.log('error', e);
  });
}
