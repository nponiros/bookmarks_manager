import BaseStore from './base_store.js';
import {CREATE, CHANGE, INIT} from '../constants/tags_constants.js';

class TagsStore extends BaseStore {
  constructor() {
    super();
    this.actionHandlers = {
      [CREATE]: this._handleCreate,
      [INIT]: this._handleInit
    };
    this._tags = [];
  }

  handleAction(actionType, data) {
    const actionHandler = this.actionHandlers[actionType];
    if (actionHandler) {
      actionHandler.call(this, data);
    }
  }

  _handleCreate(data) {
    this._tags = this._tags.concat(data);
    this.emit(CHANGE, this._tags);
  }

  _handleInit(data) {
    this._tags = data;
    this.emit(CHANGE, this._tags);
  }
}

const tagsStore = new TagsStore();
export default tagsStore;
