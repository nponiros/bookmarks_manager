import AppDispatcher from '../dispatcher/app_dispatcher.js';
import {CREATE, CHANGE} from '../constants/bookmarks_constants.js';
import EventEmitter from '../event_emitter.js';

import {getAll} from '../db/db_wrapper.js';

function getAllBookmarks() {
  getAll({}).then((bookmarks) => {
    this._bookmarks = bookmarks;
    this.emit(CHANGE, this._bookmarks);
  }).catch((e) => {
    console.log('error', e);
  });
}

const BookmarksStore = Object.create(EventEmitter);
BookmarksStore.getAllBookmarks = getAllBookmarks;
BookmarksStore._bookmarks = [];
BookmarksStore._handleCreate = function handleCreate(payload) {
  const data = payload.data;
  this._bookmarks = this._bookmarks.concat(data);
  this.emit(CHANGE, this._bookmarks);
};

export default BookmarksStore;

const actionHandlers = {
  [CREATE]: BookmarksStore._handleCreate.bind(BookmarksStore)
};

AppDispatcher.register((payload) => {
  const action = payload.actionType;
  const actionHandler = actionHandlers[action];
  if (actionHandler) {
    actionHandler(payload);
  }
});
