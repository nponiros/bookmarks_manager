import AppDispatcher from '../dispatcher/app_dispatcher.js';
import {CREATE, CHANGE, DB_STORE_NAME} from '../constants/tags_constants.js';
import EventEmitter from '../event_emitter.js';

import getInstance from '../db/db_wrapper.js';

const dbWrapperInstance = getInstance(DB_STORE_NAME);

function getAllTags() {
  dbWrapperInstance.getAll({}).then((tags) => {
    this._tags = tags;
    this.emit(CHANGE, this._tags);
  }).catch((e) => {
    console.log('error', e);
  });
}

const TagsStore = Object.create(EventEmitter);
TagsStore.getAllTags = getAllTags;
TagsStore._tags = [];
TagsStore._handleCreate = function handleCreate(payload) {
  const data = payload.data;
  this._tags = this._tags.concat(data);
  this.emit(CHANGE, this._tags);
};

export default TagsStore;

const actionHandlers = {
  [CREATE]: TagsStore._handleCreate.bind(TagsStore)
};

AppDispatcher.register((payload) => {
  const action = payload.actionType;
  const actionHandler = actionHandlers[action];
  if (actionHandler) {
    actionHandler(payload);
  }
});
