import * as IndexedDB from './indexeddb_connector.js';
import getQueryFunction from './queries.js';

const dbStoreName = 'Bookmarks';
export function save(data) {
  return IndexedDB.save(dbStoreName, data);
}

export function remove(id) {
  return IndexedDB.remove(dbStoreName, id);
}

export function getAll(query) {
  return IndexedDB.getAll(dbStoreName, getQueryFunction(query));
}

export function getOne(id) {
  return IndexedDB.getOne(dbStoreName, id);
}
