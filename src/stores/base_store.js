import AppDispatcher from '../dispatcher/app_dispatcher.js';
import EventEmitter from '../event_emitter.js';

export default class BaseStore extends EventEmitter {
  constructor() {
    super();
    AppDispatcher.register((payload) => {
      this.handleAction(payload.actionType, payload.data);
    });
  }

  handleAction(actionType, data) {
    const actionHandler = this.actionHandlers[actionType];
    if (actionHandler) {
      actionHandler.call(this, data);
    }
  }
}
