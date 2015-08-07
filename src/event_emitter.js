export default {
  listeners: [],
  addListener(event, cb) {
    if (this.listeners[event]) {
      this.listeners[event].push(cb);
    } else {
      this.listeners[event] = [cb];
    }
  },
  removeListener(event, cb) {
    const listeners = this.listeners[event];
    if (listeners) {
      const index = listeners.indexOf(cb);
      if (index !== -1) {
        listeners.splice(index, 1);
      }
    }
  },
  emit(event, ...args) {
    const listeners = this.listeners[event];
    if (listeners) {
      listeners.forEach(function(cb) {
        cb(...args);
      });
    }
  }
};
