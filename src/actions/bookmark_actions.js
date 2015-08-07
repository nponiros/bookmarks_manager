import AppDispatcher from '../dispatcher/app_dispatcher.js';
import {CREATE} from '../constants/bookmarks_constants.js';

import {save} from '../db/db_wrapper.js';

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
