import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const initialState = {
  tracks: ['Ed Sheeran - Shape Of You', "Ed Sheeran - Don't"],
  playlists: ['My home playlist', 'My work playlist'],
};

function reducer(state, action) {
  console.log('call reducer', state, action);
  if (action.type === 'ADD_ITEM') {
    return { ...state, tracks: [...state.tracks, action.payload] };
  } else if (action.type === 'DELETE_ITEM') {
    // some logic here
    return state;
  } else if (action.type === 'ADD_PLAYLIST') {
    // some logic here
    return state;
  } else if (action.type === 'DELETE_PLAYLIST') {
    // some logic here
    return state;
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
