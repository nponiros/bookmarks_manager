import AppDispatcher from '../dispatcher/app_dispatcher.js';
import syncClient from '../db/sync_client.js';
import {SEARCH, DB_STORE_NAME} from '../constants/bookmarks_constants.js';

const collection = syncClient.getCollection(DB_STORE_NAME);

export function search(queryObject) {
  const searchTitle = queryObject.title;
  return collection.getAll().then((data) => {
    const filteredData = data.filter((d) => {
      return d.title.toLowerCase().indexOf(searchTitle.toLowerCase()) !== -1;
    });
    AppDispatcher.dispatch({
      actionType: SEARCH,
      data: filteredData
    });
  });
}
