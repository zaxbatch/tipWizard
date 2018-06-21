import React from 'react';
//import ReactDOM from 'react-dom';
import './App.css';
//import Bill from './Bill';
//import Attitude from './Attitude';
//import Speed from './Speed';
//import Memory from './Memory';
//import Crowd from './Crowd';
import PropTypes from 'prop-types';

// import route Components here
import {
//  BrowserRouter as Router,
//  Route,
 Link,
//  Switch,
//  Redirect
} from 'react-router-dom';


class Total extends React.Component {
 constructor(props) {
   super(props);
 }


   render(props) {
     console.log("TOTAL:",);

       return (
         <div className="wrapper center">
             <div id="q2" className="heading">
               <h3>Total: ${this.props.finally}</h3>

               <Link to="/"  onClick={this.startOver} className="btn">Start Over</Link>

              </div>
         </div>
     );
   }
}

Total.propTypes = {
 calc: PropTypes.number
};

export default Total;
