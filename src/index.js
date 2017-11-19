import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const initialState = ['Ed Sheeran - Shape Of You', "Ed Sheeran - Don't"];

function reducer(state = [], action) {
  console.log('call reducer', state, action);
  if (action.type === 'ADD_ITEM') {
    return [...state, action.payload];
  }
  return state;
}

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
