import BaseStore from './base_store.js';
import {CREATE, CHANGE, UPDATE, REMOVE, INIT} from '../constants/bookmarks_constants.js';

class BookmarksStore extends BaseStore {
  constructor() {
    super();
    this.actionHandlers = {
      [CREATE]: this._handleCreate,
      [REMOVE]: this._handleRemove,
      [UPDATE]: this._handleUpdate,
      [INIT]: this._handleInit
    };
    this._bookmarks = [];
  }

  _handleCreate(data) {
    this._bookmarks = this._bookmarks.concat(data);
    this.emit(CHANGE, this._bookmarks);
  }

  _handleRemove(id) {
    const index = this._bookmarks.findIndex((elem) => {
      return elem._id === id;
    });
    this._bookmarks.splice(index, 1);
    this.emit(CHANGE, this._bookmarks);
  }

  _handleUpdate(data) {
    const index = this._bookmarks.findIndex((elem) => {
      return elem._id === data._id;
    });
    this._bookmarks[index] = data;
    this.emit(CHANGE, this._bookmarks);
  }

  _handleInit(data) {
    this._bookmarks = data;
    this.emit(CHANGE, this._bookmarks);
  }
}

const bookmarksStore = new BookmarksStore();
export default bookmarksStore;
