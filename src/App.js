import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  addTrack = () => {
    console.log('call addTrack', this.trackInput.value);
    this.props.onTrackName(this.trackInput.value);
    this.trackInput.value = '';
  };
  render() {
    console.log('tracks', this.props.tracks);
    return (
      <div>
        <input type="text" ref={input => (this.trackInput = input)} />
        <button onClick={this.addTrack}>Add track</button>
        <ul>
          {this.props.tracks.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({ tracks: state.tracks }),
  dispatch => ({
    onTrackName: trackName =>
      dispatch({ type: 'ADD_ITEM', payload: trackName }),
  }),
)(App);
