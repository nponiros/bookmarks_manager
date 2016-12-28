import syncClient from '../db/sync_client';
import { OPEN_SETTINGS, CLOSE_SETTINGS, ADD_SYNC_URL, REMOVE_SYNC_URL } from '../constants';

export function openSettings() {
  return (dispatch) => {
    syncClient.syncable.list()
        .then((urls) => {
          dispatch({
            type: OPEN_SETTINGS,
            payload: {
              syncUrls: urls,
            },
          });
        })
        .catch((e) => {
          console.log(e);
        });
  };
}

export function addSyncUrl(url) {
  return (dispatch) => {
    syncClient.connect(url)
        .then(() => {
          dispatch({
            type: ADD_SYNC_URL,
            payload: url,
          });
        }) // TODO depending on the error, the URL might have been added (connect error adds url)
        .catch((e) => {
          console.log(e);
        });
  };
}

export function removeSyncUrl(url) {
  return (dispatch) => {
    syncClient.removeUrl(url)
        .then(() => {
          dispatch({
            type: REMOVE_SYNC_URL,
            payload: url,
          });
        })
        .catch((e) => {
          console.log(e);
        });
  };
}

export function closeSettings() {
  return (dispatch) => {
    dispatch({
      type: CLOSE_SETTINGS,
    });
  };
}
