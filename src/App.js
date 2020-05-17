import React, { Component } from 'react';
import './App.css';
import PathVisualizer from './PathVisualizer/PathVisualizer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I am path visualizer!</h1>
        <PathVisualizer></PathVisualizer>
      </div>
    );
  }
}

export default App;
