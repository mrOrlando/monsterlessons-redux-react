import { combineReducers } from 'redux';

import tracks from './tracks';
import playlists from './playlists';

export default combineReducers({
  tracks, // => tracks: tracks(state.tracks, action)
  playlists, // => playlists: playlists(state.playlists, action)
});
