import syncClient from '../db/sync_client';
import {
  LOAD_ITEMS,
  LOAD_FOLDERS,
} from '../constants';
import handleAction from './';

/* const topFolders = [
  {
    title: 'Folder 1',
    type: 'Folder',
    id: 'b',
    parentID: 'noparent',
  },
];

const topBookmarks = [
  {
    title: 'Boo',
    description: 'Foobar',
    url: 'foo.com',
    writeDate: new Date(),
    author: 'foo bar',
    wasRead: false,
    // Private
    addDate: 'baz',
    type: 'Bookmark',
    id: 'a',
    parentID: 'noparent',
  },
  {
    title: 'Foo',
    description: 'Foobar',
    url: 'foo.com',
    writeDate: new Date(),
    author: 'foo bar',
    wasRead: false,
    // Private
    addDate: 'baz',
    type: 'Bookmark',
    id: 'c',
    parentID: 'noparent',
  },
];

const folders = {
  noparent: topFolders,
  b: [
    {
      title: 'Folder 2',
      type: 'Folder',
      id: 'foo',
      parentID: 'b',
    },
  ],
};

const bookmarks = {
  noparent: topBookmarks,
  b: [
    {
      title: 'Bar',
      description: 'Foobar',
      url: 'foo.com',
      writeDate: new Date(),
      author: 'foo bar',
      wasRead: false,
      // Private
      addDate: 'baz',
      type: 'Bookmark',
      id: 'as',
      parentID: 'b',
    },
    {
      title: 'Baz',
      description: 'Foobar',
      url: 'foo.com',
      writeDate: new Date(),
      author: 'foo bar',
      wasRead: false,
      // Private
      addDate: 'baz',
      type: 'Bookmark',
      id: 'fhg',
      parentID: 'b',
    },
  ],
  foo: [
    {
      title: 'Foo',
      description: 'Foobar',
      url: 'foo.com',
      writeDate: new Date(),
      author: 'foo bar',
      wasRead: false,
      // Private
      addDate: 'baz',
      type: 'Bookmark',
      id: 'bar',
      parentID: 'foo',
    },
  ],
};*/

export function loadItems(parentID = 'noparent') {
  return (dispatch) => {
    const foldersPromise = syncClient
      .folders
      .where({ parentID })
      .toArray();
    const bms = [];
    const bookmarksPromise = syncClient
      .bookmarks
      .where({ parentID })
      .each((item) => {
        if (item.writeDate) {
          bms.push(Object.assign({}, item, { writeDate: new Date(item.writeDate) }));
        } else {
          bms.push(item);
        }
      })
      .then(() => bms);
    Promise
      .all([foldersPromise, bookmarksPromise])
      .then(([folders, bookmarks]) => {
        dispatch({
          type: LOAD_ITEMS,
          payload: {
            items: [...folders, ...bookmarks],
            id: parentID,
          },
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };
}

export function loadFolders(actionToOpenView, itemToUpdateID = '') {
  return (dispatch) => {
    syncClient
      .folders
      .toArray()
      .then((folders) => {
        console.log(folders);
        dispatch({
          type: LOAD_FOLDERS,
          payload: folders,
        });
        dispatch(handleAction(actionToOpenView, itemToUpdateID));
      })
      .catch((e) => {
        console.log(e);
      });
  };
}
