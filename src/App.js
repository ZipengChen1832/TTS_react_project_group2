import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from "./components/Login";
import Tweet from "./components/tweet";


// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
  <Switch>

<Route exact path="/login" component={Login} />

<Route exact path="/tweet" component={Tweet} />

  </Switch>
</Router>,
  document.getElementById('root')
);
