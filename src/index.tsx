import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import './style/index.scss';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers'
import { ThemeProvider } from '@material-ui/styles';
import { theme } from "./style/theme";

// const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <ThemeProvider theme={theme}>
      <App/>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
