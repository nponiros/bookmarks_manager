import syncClient from '../db/sync_client';

import {
  OPEN_SYNC_STATUS,
  CLOSE_SYNC_STATUS,
  OPEN_ERROR_DIALOG,
  INIT_SYNC_STATUS_LISTENERS,
  UPDATE_SYNC_STATUS,
} from '../constants';

export function openSyncStatus() {
  return (dispatch) => {
    dispatch({
      type: OPEN_SYNC_STATUS,
    });
  };
}

export function initSyncStatusListeners() {
  return (dispatch) => {
    syncClient.getStatuses()
        .then((statuses) => {
          dispatch({
            type: INIT_SYNC_STATUS_LISTENERS,
            payload: statuses,
          });

          statuses.forEach((status) => {
            syncClient.statusChange(status.url, (newStatus) => {
              dispatch({
                type: UPDATE_SYNC_STATUS,
                payload: {
                  url: status.url,
                  status: newStatus,
                },
              });
            });
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
