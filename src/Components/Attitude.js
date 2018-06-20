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
} from 'react-router-dom';


class Attitude extends Component {

    render() {

        return (
          <div className="wrapper center">
              <div className="heading">
                <h3>Attitude: My server was...</h3>
                <Link onClick={this.Poor} to="/speed" className="option">Rude</Link>
                <Link onClick={this.Average} to="/speed"className="option">Average</Link>
                <Link onClick={this.Good} to="/speed"className="option">Polite</Link>
              </div>
          </div>
      );
    }
}

export default Attitude;
