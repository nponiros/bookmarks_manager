import { UPDATE_ITEM } from '../constants';

export default function updateItem(id, key, value) {
  return (dispatch) => {
    dispatch({
      type: UPDATE_ITEM,
      payload: {
        id,
        key,
        value,
      },
    });
  };
}
