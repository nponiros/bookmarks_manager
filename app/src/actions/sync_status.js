import syncClient from '../db/sync_client';

import { OPEN_SYNC_STATUS, CLOSE_SYNC_STATUS, OPEN_ERROR_DIALOG } from '../constants';

export function openSyncStatus() {
  return (dispatch) => {
    syncClient.getStatuses()
        .then((urls) => {
          dispatch({
            type: OPEN_SYNC_STATUS,
            payload: urls,
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

export function closeSyncStatus() {
  return (dispatch) => {
    dispatch({
      type: CLOSE_SYNC_STATUS,
    });
  };
}

export function reconnectNode(url) {
  return () => {
    syncClient.connect(url);
  };
}

export function disconnectNode(url) {
  return () => {
    syncClient.disconnect(url);
  };
}
