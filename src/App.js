import React, { Component } from 'react';
import Landing from './components/Landing';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Landing/>
        </header>
      </div>
    );
  }
}

export default App;
