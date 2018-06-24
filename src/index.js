import React from 'react'

import App from './components/App'
import rootReducer from './reducers'
import logger from 'redux-logger'

import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux';

const middlewares = [
  logger
];

const store = createStore(rootReducer, applyMiddleware(...middlewares))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
