import AppDispatcher from '../dispatcher/app_dispatcher.js';
import syncClient from '../db/sync_client.js';
import {CREATE, REMOVE, UPDATE, DB_STORE_NAME, INIT} from '../constants/bookmarks_constants.js';

const collection = syncClient.getCollection(DB_STORE_NAME);

export function create(bookmark) {
  collection.save(bookmark).then((id) => {
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
  collection.remove(bookmarkId).then(() => {
    AppDispatcher.dispatch({
      actionType: REMOVE,
      data: bookmarkId
    });
  }).catch((e) => {
    console.log('error', e);
  });
}

export function update(bookmark) {
  collection.save(bookmark).then(() => {
    AppDispatcher.dispatch({
      actionType: UPDATE,
      data: bookmark
    });
  }).catch((e) => {
    console.log('error', e);
  });
}

export function getAll() {
  collection.getAll().then((bookmarks) => {
    AppDispatcher.dispatch({
      actionType: INIT,
      data: bookmarks
    });
  }).catch((e) => {
    console.log('error', e);
  });
}

export function init() {
  getAll();
}
