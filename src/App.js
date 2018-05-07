import React, { Component } from 'react';
import Navigation from './components/Navigation';
import {BrowserRouter as Router} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <Navigation/>
        </Router>
      </div>
    );
  }
}

export default App;
