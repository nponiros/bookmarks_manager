import SyncClient from 'sync-client';

const versions = [{
  version: 1,
  stores: {
    bookmarks: 'id, parentID',
    folders: 'id, parentID',
  },
}, {
  version: 2,
  stores: {
    bookmarks: 'id, parentID, *tags',
    folders: 'id, parentID',
    tags: 'id',
  },
}];

export default new SyncClient('BookmarksManager', versions);
export { SyncClient };
