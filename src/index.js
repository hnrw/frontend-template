import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux' 
import { composeWithDevTools } from 'redux-devtools-extension'
import App from './App'

import testReducer from './reducers/testReducer'

const reducer = combineReducers({
  tests: testReducer,
})

const store = createStore(reducer, composeWithDevTools())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)