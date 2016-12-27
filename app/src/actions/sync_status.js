import syncClient from '../db/sync_client';

import { OPEN_SYNC_STATUS, CLOSE_SYNC_STATUS } from '../constants';

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
          console.log(e);
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
