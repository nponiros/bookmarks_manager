import update from 'immutability-helper';
import { CHOOSE_ITEM_PARENT_VIEW, MOVE_ITEM_VIEW } from '../constants';

export function openChooseItemParent(state) {
  return update(state, {
    view: { $set: CHOOSE_ITEM_PARENT_VIEW },
    previousView: { $set: state.view },
  });
}

export function closeChooseItemParent(state) {
  return update(state, { view: { $set: state.previousView } });
}

export function openMoveItem(state, itemToUpdateID) {
  return update(state, {
    view: { $set: MOVE_ITEM_VIEW },
    previousView: { $set: state.view },
    itemToUpdateID: { $set: itemToUpdateID },
  });
}

export function closeMoveItem(state) {
  return update(state, {
    view: { $set: state.previousView },
    itemToUpdateID: { $set: '' },
  });
}

export function chooseParentFolder(state, newParentFolderID) {
  if (newParentFolderID !== state.currentFolderID) {
    return update(state, {
      entities: { [state.itemToUpdateID]: { parentID: { $set: newParentFolderID } } },
      items: { $set: state.items.filter(id => id !== state.itemToUpdateID) },
      view: { $set: state.previousView },
      itemToUpdateID: { $set: '' },
    });
  }
  return state;
}
