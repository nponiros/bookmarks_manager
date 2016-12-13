import React, { PropTypes } from 'react';

import { ADD_BOOKMARK_VIEW, ADD_FOLDER_VIEW, LIST_VIEW, FOLDER, BOOKMARK } from '../../constants';

import List from '../List';
import AddBookmark from '../AddBookmark';
import AddFolder from '../AddFolder';

const App = ({ view, items, entities, handleAction, itemToUpdate, currentFolderID }) => {
  switch (view) {
    case LIST_VIEW: return (<List
      items={items}
      entities={entities}
      handleAction={handleAction}
      currentFolderID={currentFolderID}
    />);
    case ADD_BOOKMARK_VIEW: return <AddBookmark {...itemToUpdate} handleAction={handleAction} />;
    case ADD_FOLDER_VIEW: return <AddFolder {...itemToUpdate} handleAction={handleAction} />;
    default: return null;
  }
};

App.propTypes = {
  view: PropTypes.symbol.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  entities: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.oneOf([FOLDER]).isRequired,
      title: PropTypes.string,
      parentID: PropTypes.string.isRequired,
      addDate: PropTypes.string,
    }),
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.oneOf([BOOKMARK]).isRequired,
      title: PropTypes.string,
      parentID: PropTypes.string.isRequired,
      addDate: PropTypes.string,
      description: PropTypes.string,
      url: PropTypes.string,
      writeDate: PropTypes.instanceOf(Date),
      author: PropTypes.string,
      wasRead: PropTypes.bool,
    }),
  ])).isRequired,
  handleAction: PropTypes.func.isRequired,
  itemToUpdate: PropTypes.oneOfType([
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.oneOf([FOLDER]).isRequired,
      title: PropTypes.string,
      parentID: PropTypes.string.isRequired,
      addDate: PropTypes.string,
    }),
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.oneOf([BOOKMARK]).isRequired,
      title: PropTypes.string,
      parentID: PropTypes.string.isRequired,
      addDate: PropTypes.string,
      description: PropTypes.string,
      url: PropTypes.string,
      writeDate: PropTypes.instanceOf(Date),
      author: PropTypes.string,
      wasRead: PropTypes.bool,
    }),
  ]),
  currentFolderID: PropTypes.string.isRequired,
};

export default App;
