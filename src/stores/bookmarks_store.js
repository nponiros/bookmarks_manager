import AppDispatcher from '../dispatcher/app_dispatcher.js';
import {CREATE, CHANGE, UPDATE, REMOVE, INIT} from '../constants/bookmarks_constants.js';
import EventEmitter from '../event_emitter.js';

const BookmarksStore = Object.create(EventEmitter);
BookmarksStore._bookmarks = [];
BookmarksStore._handleCreate = function handleCreate(payload) {
  const data = payload.data;
  this._bookmarks = this._bookmarks.concat(data);
  this.emit(CHANGE, this._bookmarks);
};
BookmarksStore._handleRemove = function handleRemove(payload) {
  const id = payload.data;
  const index = this._bookmarks.findIndex((elem) => {
    return elem._id === id;
  });
  this._bookmarks.splice(index, 1);
  this.emit(CHANGE, this._bookmarks);
};
BookmarksStore._handleUpdate = function handleUpdate(payload) {
  const data = payload.data;
  const index = this._bookmarks.findIndex((elem) => {
    return elem._id === data._id;
  });
  this._bookmarks[index] = data;
  this.emit(CHANGE, this._bookmarks);
};
BookmarksStore._handleInit = function handleInit(payload) {
  this._bookmarks = payload.data;
  this.emit(CHANGE, this._bookmarks);
};

export default BookmarksStore;

const actionHandlers = {
  [CREATE]: BookmarksStore._handleCreate.bind(BookmarksStore),
  [REMOVE]: BookmarksStore._handleRemove.bind(BookmarksStore),
  [UPDATE]: BookmarksStore._handleUpdate.bind(BookmarksStore),
  [INIT]: BookmarksStore._handleInit.bind(BookmarksStore)
};

AppDispatcher.register((payload) => {
  const action = payload.actionType;
  const actionHandler = actionHandlers[action];
  if (actionHandler) {
    actionHandler(payload);
  }
});
