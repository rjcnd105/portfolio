import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import './style/index.scss';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reduxPromise from 'redux-promise'
import reducers from './reducers'
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from "@material-ui/core";

const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);
const theme = createMuiTheme();

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <ThemeProvider theme={theme}>
      <App/>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
