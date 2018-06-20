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


class Speed extends Component {

    render() {

        return (
          <div className="wrapper center">
              <div className="heading">
                <h3>Speed: My server was...</h3>
                <Link onClick={this.Poor} to="/memory" className="option">Slow</Link>
                <Link onClick={this.Average} to="/memory"className="option">Average</Link>
                <Link onClick={this.Good} to="/memory"className="option">Fast</Link>
              </div>
          </div>
      );
    }
}

export default Speed;
