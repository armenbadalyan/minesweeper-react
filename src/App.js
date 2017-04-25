import React, { Component } from 'react';
import Game from './components/game/game';
import './App.css';
let files = require.context('./assets', false, /\.svg$/);
files.keys().forEach(files);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Game/>
      </div>
    );
  }
}

export default App;
