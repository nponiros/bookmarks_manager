import SyncClient from 'syncClient';
import {DB_STORE_NAME as BOOKMARKS_STORE} from '../constants/bookmarks_constants.js';
import {DB_STORE_NAME as TAGS_STORE} from '../constants/tags_constants.js';
import {DB_NAME} from '../constants/sync_constants.js';

const syncClient = new SyncClient(DB_NAME, [BOOKMARKS_STORE, TAGS_STORE]);
export default syncClient;
