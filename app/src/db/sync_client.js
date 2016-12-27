import SyncClientCode from 'sync-client';

const versions = [{
  version: 1,
  stores: {
    bookmarks: 'id, parentID',
    folders: 'id, parentID',
  },
}];

export default new SyncClientCode('BookmarksManager', versions);
