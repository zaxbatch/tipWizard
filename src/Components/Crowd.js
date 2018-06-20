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


class Memory extends Component {

    render() {

        return (
          <div className="wrapper center">
              <div className="heading">
                <h3>Did my server have other tables?</h3>
                <Link onClick={this.Poor} to="/total" className="option">None</Link>
                <Link onClick={this.Average} to="/total"className="option">Some</Link>
                <Link onClick={this.Good} to="/total" className="option">Swamped</Link>

              </div>
          </div>
      );
    }
}

export default Memory;
