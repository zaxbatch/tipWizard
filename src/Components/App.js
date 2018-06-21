import React from 'react';
// import ReactDOM from 'react-dom';
import './App.css';
import Bill from './Bill';
import Attitude from './Attitude';
import Speed from './Speed';
import Memory from './Memory';
import Crowd from './Crowd';
import Total from './Total';
import PropTypes from 'prop-types';

// import route Components here
import {
  BrowserRouter as Router,
  Route,
//  Link,
//  Switch,
//  Redirect
} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ticket: 0,
    }

  }

  myCallback =(event)=> {

    var a = document.getElementById('bill').value
    //this.setState = { price: a };
    // this.setState({ ticket:event.target.value });
    this.setState({ ticket: a * 1.18 });

    //alert(this.state.ticket);
  }

    render() {

      console.log("state = ");

        return (
          <Router>
          <div className="wrapper center">

             <Route exact path="/"  render={()=><Bill test={this.myCallback}  />} />
             <Route path="/attitude" render={()=><Attitude />} />
             <Route path="/speed" render={()=><Speed />} />
             <Route path="/memory" render={()=><Memory />} />
             <Route path="/crowd" render={()=><Crowd />} />
             <Route path="/total" render={()=><Total finally={this.state.ticket}/>} />

        </div>
        </Router>


      );
    }
}

App.propTypes = {



};

export default App;
