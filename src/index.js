import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './components/HomePage.js';
import Header from './components/Header.js';
import Feedback from './components/Feedback.js';
import CustomerInfo from './components/CustomerInfo';
import AboutUs from './components/AboutUs.js';
import Transaction from './components/Transaction.js';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Routing = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/customers" component={CustomerInfo} />
        <Route path="/transfer" component={Transaction} />
        <Route path="/about" component={AboutUs} />
        <Route path="/complaints" component={Feedback} />
      </Switch>
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>    
    <Header />
    <Routing />
  </React.StrictMode>,
  document.getElementById('root')
);