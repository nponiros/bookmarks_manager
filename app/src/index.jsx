import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {
  blue500,
  blue700,
  darkBlack,
  grey100,
  grey300,
  grey400,
  grey500,
  fullBlack,
  tealA700,
  white,
} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {fade} from 'material-ui/utils/colorManipulator';

import AppContainer from './containers/App';
import store from './store';

import handleAction from './actions';
import {LOAD_ITEMS, LOAD_TAGS} from './constants';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

store.dispatch(handleAction(LOAD_ITEMS));
store.dispatch(handleAction(LOAD_TAGS));

const muiTheme = {
  palette: {
    primary1Color: blue500,
    primary2Color: blue700,
    primary3Color: grey400,
    accent1Color: tealA700,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: blue500,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  },
};

ReactDOM.render(
    <Provider store={store}>
      <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
        <AppContainer />
      </MuiThemeProvider>
    </Provider>,
    document.getElementById('root'),
);
