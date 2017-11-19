import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    console.log('testStore', this.props.testStore);
    return (
      <div>
        <input type="text" />
        <button>Add track</button>
        <ul>
          {this.props.testStore.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(state => ({ testStore: state }), dispatch => ({}))(App);
