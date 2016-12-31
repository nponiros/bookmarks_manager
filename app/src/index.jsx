import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppContainer from './containers/App';
import store from './store';

import handleAction from './actions';
import { LOAD_ITEMS, LOAD_TAGS } from './constants';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

store.dispatch(handleAction(LOAD_ITEMS));
store.dispatch(handleAction(LOAD_TAGS));

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <AppContainer />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
