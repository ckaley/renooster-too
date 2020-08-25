// dependencies
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

// page components
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";
import Subscriptions from "./pages/Subscriptions";
import Edit from "./pages/Edit";
import Add from "./pages/Add";
import Expiring from "./pages/Expiring";
import BudgetTracker from "./pages/BudgetTracker";
import NotFound from "./pages/NotFound";

// data
// import profileJSON from './data/profile.json'

// styles
import "./css/styles.css";

function App() {
  return (
    <Router>
      <div id="app-content">
        <div id="router-content">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/subscriptions" component={Subscriptions}/>
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/add" component={Add} />
            <Route exact path="/edit" component={Edit} />
            <Route exact path="/expiring" component={Expiring} />
            <Route exact path="/budgetTracker" component={BudgetTracker} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
