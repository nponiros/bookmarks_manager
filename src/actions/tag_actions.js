import AppDispatcher from '../dispatcher/app_dispatcher.js';
import syncClient from '../db/sync_client.js';
import {CREATE, DB_STORE_NAME, INIT} from '../constants/tags_constants.js';

const collection = syncClient.getCollection(DB_STORE_NAME);
export function create(tag) {
  return collection.save(tag).then((id) => {
    tag._id = id;
    AppDispatcher.dispatch({
      actionType: CREATE,
      data: tag
    });
  });
}

export function getAll() {
  return collection.getAll().then((tags) => {
    AppDispatcher.dispatch({
      actionType: INIT,
      data: tags
    });
  });
}

export function init() {
  return getAll();
}
