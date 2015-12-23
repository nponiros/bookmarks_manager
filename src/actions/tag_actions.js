import AppDispatcher from '../dispatcher/app_dispatcher.js';
import syncClient from '../db/sync_client.js';
import {CREATE, DB_STORE_NAME} from '../constants/tags_constants.js';

const collection = syncClient.getCollection(DB_STORE_NAME);
export function create(tag) {
  collection.save(tag).then((id) => {
    tag._id = id;
    AppDispatcher.dispatch({
      actionType: CREATE,
      data: tag
    });
  }).catch((e) => {
    console.log('error', e);
  });
}
