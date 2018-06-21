import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App.js';
import registerServiceWorker from './registerServiceWorker';

import {
  BrowserRouter as Router,
  Route,
//  Link,
//  Switch,
//  Redirect
} from 'react-router-dom';

ReactDOM.render(
    <App />,
  document.getElementById('root'));
registerServiceWorker();
