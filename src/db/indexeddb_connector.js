import cuid from './cuid.js';

import {DB_STORE_NAME as BOOKMARKS_STORE} from '../constants/bookmarks_constants.js';
import {DB_STORE_NAME as TAGS_STORE} from '../constants/tags_constants.js';

const IDBTransactionModes = {
  'READ_ONLY': 'readonly',
  'READ_WRITE': 'readwrite',
  'VERSION_CHANGE': 'versionchange'
};

const version = 2;
const dbName = 'BookmarksManager';
const dbStoreNames = [BOOKMARKS_STORE, TAGS_STORE];

let save;
let getAll;

// TODO: needs a rewrite!
function open() {
  const promise = new Promise((resolve, reject) => {
    const request = indexedDB.open(dbName, version);

    // TODO need data for the stores to create, further handler for updates
    // TODO: need index
    request.onupgradeneeded = function(e) {
      const db = e.target.result;
      const options = {
        keyPath: '_id',
        autoIncrement: true
      };

      // Create stores
      const existingStores = Array.prototype.slice.call(db.objectStoreNames);
      dbStoreNames.forEach((dbstoreName) => {
        const storeExists = existingStores.indexOf(dbstoreName) !== -1;
        if (!storeExists) {
          db.createObjectStore(dbstoreName, options);
        }
      });

      // Version 2 has added tags, all bookmarks must be updated with tags
      getAll(BOOKMARKS_STORE, () => true).then(function(bookmarks) {
        const bookmarkPromises = bookmarks.map((bookmark) => {
          bookmark.tags = [];
          return save(BOOKMARKS_STORE, bookmark);
        });
        Promise.all(bookmarkPromises).then(function() {
          resolve(db);
        }).catch(function(err) {
          console.log('Upgrade error', err);
          reject(err);
        });
      });
    };

    request.onsuccess = function(e) {
      const db = e.target.result;
      resolve(db);
    };

    // Insert error
    request.onerror = function(e) {
      reject(e);
    };
  });
  return promise;
}

function getStore(db, dbStoreName, mode) {
  const trans = db.transaction([dbStoreName], mode);
  const store = trans.objectStore(dbStoreName);
  return store;
}

export function getAll(dbStoreName, queryFunction) {
  const promise = new Promise((resolve, reject) => {
    open().then((db) => {
      const store = getStore(db, dbStoreName, IDBTransactionModes.READ_ONLY);

      const data = [];
      const cursor = store.openCursor();

      cursor.onsuccess = function(e) {
        const result = e.target.result;

        if (result && result !== null) {
          if (queryFunction(result.value)) {
            data.push(result.value);
          }
          result.continue();
        } else {
          resolve(data);
        }
      };

      cursor.onerror = function(e) {
        reject(e);
      };
    }).catch(reject);
  });
  return promise;
}

/*function getByIndex(dbStoreName, indexName, indexValue) {
 var deferred = $q.defer();

 open().then(function(db){
 // Setup trans and store
 var trans = db.transaction([dbStoreName], IDBTransactionModes.READ_ONLY);
 var store = trans.objectStore(dbStoreName);

 var index = store.index(indexName);
 var cursor = index.openCursor();
 var data = [];
 cursor.onsuccess = function (e) {
 var result = e.target.result;

 if (result && result !== null) {
 if (result.value.category === indexValue){
 data.push(result.value);
 }
 result.continue();
 } else {
 deferred.resolve(data);
 }
 };

 cursor.onerror = function (e) {
 deferred.reject(e);
 };
 });

 return deferred.promise;
 }*/

export function getOne(dbStoreName, id) {
  const promise = new Promise((resolve, reject) => {
    open().then(function(db) {
      const store = getStore(db, dbStoreName, IDBTransactionModes.READ_ONLY);

      const requestUpdate = store.get(id);

      requestUpdate.onsuccess = function(e) {
        resolve(e.target.result);
      };

      // Insert error
      requestUpdate.onerror = function(e) {
        reject(e);
      };
    }).catch(reject);
  });
  return promise;
}

export function remove(dbStoreName, id) {
  const promise = new Promise((resolve, reject) => {
    open().then(function(db) {
      const store = getStore(db, dbStoreName, IDBTransactionModes.READ_WRITE);

      // Insert single item
      const requestUpdate = store.delete(id);

      requestUpdate.onsuccess = function() {
        resolve();
      };

      // Insert error
      requestUpdate.onerror = function(e) {
        reject(e);
      };
    }).catch(reject);
  });
  return promise;
}

// TODO need to listen to complete event
export function save(dbStoreName, data) {
  const promise = new Promise((resolve, reject) => {
    if (!data._id) {
      data._id = cuid();
    }
    open().then(function(db) {
      const store = getStore(db, dbStoreName, IDBTransactionModes.READ_WRITE);

      const requestUpdate = store.put(data);

      requestUpdate.onsuccess = function() {
        resolve(data._id);
      };

      // Insert error
      requestUpdate.onerror = function(e) {
        reject(e);
      };
    }).catch(reject);
  });
  return promise;
}
