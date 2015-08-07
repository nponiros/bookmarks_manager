import AppDispatcher from '../dispatcher/app_dispatcher.js';
import {CREATE, REMOVE, UPDATE} from '../constants/bookmarks_constants.js';

import {save, remove as rm} from '../db/db_wrapper.js';

export function create(bookmark) {
  save(bookmark).then((id) => {
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
  rm(bookmarkId).then(() => {
    AppDispatcher.dispatch({
      actionType: REMOVE,
      data: bookmarkId
    });
  }).catch((e) => {
    console.log('error', e);
  });
}

export function update(bookmark) {
  save(bookmark).then(() => {
    AppDispatcher.dispatch({
      actionType: UPDATE,
      data: bookmark
    });
  }).catch((e) => {
    console.log('error', e);
  });
}
