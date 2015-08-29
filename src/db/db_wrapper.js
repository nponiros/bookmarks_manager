import * as IndexedDB from './indexeddb_connector.js';
import getQueryFunction from './queries.js';

const instances = new Map();

class DBWrapper {
  constructor(dbStoreName) {
    this.dbStoreName = dbStoreName;
  }

  save(data) {
    return IndexedDB.save(this.dbStoreName, data);
  }

  remove(id) {
    return IndexedDB.remove(this.dbStoreName, id);
  }

  getAll(query) {
    return IndexedDB.getAll(this.dbStoreName, getQueryFunction(query));
  }

  getOne(id) {
    return IndexedDB.getOne(this.dbStoreName, id);
  }
}

export default function getInstance(dbStoreName) {
  const instance = instances.get(dbStoreName);
  if (instance) {
    return instance;
  } else {
    const newInstance = new DBWrapper(dbStoreName);
    instances.set(dbStoreName, newInstance);
    return newInstance;
  }
}
