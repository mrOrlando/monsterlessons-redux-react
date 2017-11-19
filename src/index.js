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

const list = document.querySelector('.list');
const trackInput = document.querySelector('.trackInput');
const addTrackButton = document.querySelector('.addTrack');

store.subscribe(function() {
  console.log('call subscribe, state:', store.getState());
  list.innerHTML = '';
  trackInput.value = '';
  store.getState().forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    list.appendChild(li);
  });
});

store.dispatch({ type: 'ADD_ITEM', payload: 'Make homework!' });
store.dispatch({ type: 'ADD_ITEM', payload: 'To smile!' });

addTrackButton.addEventListener('click', () => {
  const trackName = trackInput.value;
  console.log('trackName', trackName);
  store.dispatch({ type: 'ADD_ITEM', payload: trackName });
});
