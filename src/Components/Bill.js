import React from 'react';
// import ReactDOM from 'react-dom';
import './App.css';
// import Performance from './Performance';
// import Attitude from './Attitude';
import Total from './Total';
import PropTypes from 'prop-types';
//import InputChanged from '../Services/InputChanged';

// import route Components here
import {
//  BrowserRouter as Router,
  Route,
  Link,
//  Switch,
//  Redirect
} from 'react-router-dom';

class Bill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 0,
    }
  }

InputChanged =(event)=> {

   this.setState({ price:event.target.value });

  }

    render() {
      console.log("bill state:",);
      console.log("test state:", this.props.tip);


        return (
          <div className="wrapper center">
              <div id="q1" className="heading">
              <h3>What is the total?</h3>
                <h3>{this.state.price}</h3>
                <input type="number" id="bill" className="inputField" value={this.state.price}
                onChange={(event) => this.InputChanged(event)}></input>

                <Link to="/attitude" className="btn">--></Link>


               </div>
          </div>


      );
    }
}

Bill.propTypes = {
tip: PropTypes.number
};

export default Bill;
