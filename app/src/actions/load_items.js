import { LOAD_ITEMS, LOAD_FOLDERS } from '../constants';

const topFolders = [
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
      parentID: 'noparent',
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
      parentID: 'noparent',
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
      parentID: 'noparent',
    },
  ],
};

export function loadItems(parentID = 'noparent') {
  return (dispatch) => {
    dispatch({
      type: LOAD_ITEMS,
      payload: {
        items: [...(folders[parentID] || []), ...(bookmarks[parentID] || [])],
        id: parentID,
      },
    });
  };
}

export function loadFolders() {
  return (dispatch) => {
    dispatch({
      type: LOAD_FOLDERS,
      payload: Object.keys(folders).reduce((res, key) => [...res, ...folders[key]], []),
    });
  };
}
