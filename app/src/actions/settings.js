import syncClient from '../db/sync_client';
import { OPEN_SETTINGS, CLOSE_SETTINGS, ADD_SYNC_URL, REMOVE_SYNC_URL, OPEN_ERROR_DIALOG } from '../constants';

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
          dispatch({
            type: OPEN_ERROR_DIALOG,
            payload: e,
          });
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
        })
        .catch((e) => {
          dispatch({
            type: OPEN_ERROR_DIALOG,
            payload: e,
          });
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
          dispatch({
            type: OPEN_ERROR_DIALOG,
            payload: e,
          });
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
