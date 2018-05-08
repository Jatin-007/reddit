import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Navigation from './components/Navigation';
import Landing from './components/Landing';

import * as routes from './constants/routes';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <Navigation/>

          <hr/>
        </Router>
      </div>
    );
  }
}

export default App;
