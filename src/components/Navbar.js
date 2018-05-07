import React, {Component} from 'react';
import {Router, Route} from 'react-router';
import Signup from './Signup';

class Navbar extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav class="navbar navbar-dark bg-dark">
                        <Route path="/Signup" component = {Signup}/>
                    </nav>
                </div>
            </Router>
        );
    }
}

export default Navbar;