import React, { Component } from 'react';
import './App.css';
import NoState from './Examples/NoState'
import SetState from './Examples/SetState'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NoState />
        <hr />
        <SetState />
      </div>
    );
  }
}

export default App;
