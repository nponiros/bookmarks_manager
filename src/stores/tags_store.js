import AppDispatcher from '../dispatcher/app_dispatcher.js';
import {CREATE, CHANGE, INIT} from '../constants/tags_constants.js';
import EventEmitter from '../event_emitter.js';

const TagsStore = Object.create(EventEmitter);
TagsStore._tags = [];
TagsStore._handleCreate = function handleCreate(payload) {
  const data = payload.data;
  this._tags = this._tags.concat(data);
  this.emit(CHANGE, this._tags);
};
TagsStore._handleInit = function handleInit(payload) {
  this._tags = payload.data;
  this.emit(CHANGE, this._tags);
};

export default TagsStore;

const actionHandlers = {
  [CREATE]: TagsStore._handleCreate.bind(TagsStore),
  [INIT]: TagsStore._handleInit.bind(TagsStore)
};

AppDispatcher.register((payload) => {
  const action = payload.actionType;
  const actionHandler = actionHandlers[action];
  if (actionHandler) {
    actionHandler(payload);
  }
});
