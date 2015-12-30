import AppDispatcher from '../dispatcher/app_dispatcher.js';
import syncClient from '../db/sync_client.js';
import {CREATE, REMOVE, UPDATE, DB_STORE_NAME, INIT} from '../constants/bookmarks_constants.js';

const collection = syncClient.getCollection(DB_STORE_NAME);

export function create(bookmark) {
  return collection.save(bookmark).then((id) => {
    bookmark._id = id;
    AppDispatcher.dispatch({
      actionType: CREATE,
      data: bookmark
    });
  });
}

export function remove(bookmarkId) {
  return collection.remove(bookmarkId).then(() => {
    AppDispatcher.dispatch({
      actionType: REMOVE,
      data: bookmarkId
    });
  });
}

export function update(bookmark) {
  return collection.save(bookmark).then(() => {
    AppDispatcher.dispatch({
      actionType: UPDATE,
      data: bookmark
    });
  });
}

export function getAll() {
  return collection.getAll().then((bookmarks) => {
    AppDispatcher.dispatch({
      actionType: INIT,
      data: bookmarks
    });
  });
}

export function init() {
  return getAll();
}
