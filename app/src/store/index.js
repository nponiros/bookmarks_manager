import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';
import { LIST_VIEW, ID_FOR_NO_PARENT } from '../constants';

const initialState = {
  view: LIST_VIEW,
  items: [],
  entities: {},
  currentFolderID: ID_FOR_NO_PARENT,
  previousFolderIDs: [], // Needed for back button when a folder is opened
  folders: [], // Needed to show a tree of all folders
};

/* eslint-disable no-underscore-dangle */
const enableDevTool = process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION__;
/* eslint-enable */

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    enableDevTool ? enableDevTool({
      serializeAction: (key, value) => {
        if (typeof value === 'symbol') {
          return String(value);
        }
        return value;
      },
    }) : f => f,
  ),
);

export default store;
