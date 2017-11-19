const initialState = ['My home playlist', 'My work playlist'];

export default function playlists(state = initialState, action) {
  console.log('call reducer', state, action);
  if (action.type === 'ADD_PLAYLIST') {
    // some logic here
    return state;
  } else if (action.type === 'DELETE_PLAYLIST') {
    // some logic here
    return state;
  }
  return state;
}
