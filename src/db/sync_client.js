import SyncClient from 'syncClient';
import {DB_STORE_NAME as BOOKMARKS_STORE} from '../constants/bookmarks_constants.js';
import {DB_STORE_NAME as TAGS_STORE} from '../constants/tags_constants.js';

console.log(SyncClient)
console.log('sync client called');
const syncClient = new SyncClient('BookmarksManager', [BOOKMARKS_STORE, TAGS_STORE], 'http://127.0.0.1:8080');
export default syncClient;
