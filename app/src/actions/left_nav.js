import { OPEN_LEFT_NAV, CLOSE_LEFT_NAV } from '../constants';

export function openLeftNav() {
  return (dispatch) => {
    dispatch({
      type: OPEN_LEFT_NAV,
    });
  };
}

export function closeLeftNav() {
  return (dispatch) => {
    dispatch({
      type: CLOSE_LEFT_NAV,
    });
  };
}
