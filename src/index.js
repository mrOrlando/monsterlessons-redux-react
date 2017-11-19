// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

import { createStore } from 'redux';

function reducer(state = [], action) {
  console.log('call reducer', state, action);
  if (action.type === 'ADD_ITEM') {
    return [...state, action.payload];
  }
  return state;
}

const store = createStore(
  reducer,
  [],
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

store.subscribe(function() {
  console.log('call subscribe, state:', store.getState());
});

store.dispatch({ type: 'ADD_ITEM', payload: 'Make homework!' });
store.dispatch({ type: 'ADD_ITEM', payload: 'To smile!' });
