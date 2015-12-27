export default class EventEmitter {
  constructor() {
    this._listeners = [];
  }

  addListener(event, cb) {
    if (this._listeners[event]) {
      this._listeners[event].push(cb);
    } else {
      this._listeners[event] = [cb];
    }
  }

  removeListener(event, cb) {
    const listeners = this._listeners[event];
    if (listeners) {
      const index = listeners.indexOf(cb);
      if (index !== -1) {
        listeners.splice(index, 1);
      }
    }
  }

  emit(event, ...args) {
    const listeners = this._listeners[event];
    if (listeners) {
      listeners.forEach(function(cb) {
        cb(...args);
      });
    }
  }
}
