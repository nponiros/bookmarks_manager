import syncClient from '../db/sync_client.js';
import {getAll as getAllTags} from './tag_actions.js';
import {getAll as getAllBookmarks} from './bookmark_actions.js';
import constructServerUrl from '../helpers/construct_server_url.js';

export function sync() {
  return syncClient.sync().then(() => {
    getAllTags();
    getAllBookmarks();
  });
}

export function init(url, port) {
  syncClient.serverUrl = constructServerUrl(url, port);
}

export function changeUrl(url, port) {
  syncClient.serverUrl = constructServerUrl(url, port);
}
