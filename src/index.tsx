import React from 'react';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import ReactDOM from 'react-dom';
import App from './component/App';
import './style/index.scss';

import { ThemeProvider } from '@material-ui/styles';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers'
import { theme } from './style/theme';

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <ThemeProvider theme={theme}>
      <App/>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
