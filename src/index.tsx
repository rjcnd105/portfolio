import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import './style/index.scss';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import ReduxPromise from 'redux-promise'
import reducers from './reducers'
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from "@material-ui/core";

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 450,
      md: 960,
      lg: 1280,
      xl: 1920
    }
  }
});

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <ThemeProvider theme={theme}>
      <App/>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
