import update from 'immutability-helper';
import { TAGS_SELECT_VIEW } from '../constants';

export function loadTags(state, tags) {
  return update(state, {
    tags: { $set: tags },
    tagIDToName: {
      $set: tags.reduce((map, tag) => Object.assign(map, { [tag.id]: tag.title }), {}),
    },
  });
}

export function openTagsSelect(state) {
  return update(state, {
    view: { $set: TAGS_SELECT_VIEW },
    previousView: { $set: state.view },
  });
}

export function closeTagsSelect(state) {
  return update(state, { view: { $set: state.previousView } });
}

export function selectTag(state, { bookmarkID, tagID }) {
  return update(state, {
    entities: {
      [bookmarkID]: {
        tags: { $push: [tagID] },
      },
    },
  });
}

export function unselectTag(state, { bookmarkID, tagID }) {
  const bookmarkToUpdate = state.entities[bookmarkID];
  return update(state, {
    entities: {
      [bookmarkID]: {
        tags: { $set: bookmarkToUpdate.tags.filter(id => id !== tagID) },
      },
    },
  });
}

export function addTag(state, tag) {
  return update(state, {
    tags: { $push: [tag] },
    tagIDToName: { $merge: { [tag.id]: tag.title } },
  });
}
