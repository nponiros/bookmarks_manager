import syncClient from '../db/sync_client.js';
import {getAll as getAllTags} from './tag_actions.js';
import {getAll as getAllBookmarks} from './bookmark_actions.js';

export function sync() {
  return syncClient.sync().then(() => {
    getAllTags();
    getAllBookmarks();
  });
}
