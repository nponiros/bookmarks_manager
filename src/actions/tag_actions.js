import AppDispatcher from '../dispatcher/app_dispatcher.js';
import {CREATE, DB_STORE_NAME} from '../constants/tags_constants.js';

import getInstance from '../db/db_wrapper.js';

const dbWrapperInstance = getInstance(DB_STORE_NAME);

export function create(tag) {
  dbWrapperInstance.save(tag).then((id) => {
    tag._id = id;
    AppDispatcher.dispatch({
      actionType: CREATE,
      data: tag
    });
  }).catch((e) => {
    console.log('error', e);
  });
}
