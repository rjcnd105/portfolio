import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import './style/index.css';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reduxPromise from 'redux-promise'
import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}><App/></Provider>,
  document.getElementById('root')
);
