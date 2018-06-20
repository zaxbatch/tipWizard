import React, { Component } from 'react';
import './App.css';
import './App.js';
import Poor from '../Services/Poor';
import Average from '../Services/Average';
import Good from '../Services/Good';
import {
//  BrowserRouter as Router,
//  Route,
  Link,
//  Switch,
//  Redirect
} from '/react-router-dom';


class Memory extends Component {

    render() {

        return (
          <div className="wrapper center">
              <div className="heading">
                <h3>Memory: My server was...</h3>
                <Link onClick={this.Poor} to="/crowd" className="option">Forgetful</Link>
                <Link onClick={this.Average} to="/crowd"className="option">Average</Link>
                <Link onClick={this.Good} to="/crowd" className="option">Responsive</Link>
              </div>
          </div>
      );
    }
}

export default Memory;
