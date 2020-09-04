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
// import Signup from "./components/Sign-Up";

// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// styles
import "./css/styles.css";

function App() {
  const [profile, setProfile] = useState({});

  return (
    <Router>
      <div id="app-content">
        <Navbar profile={profile} />
        <div id="router-content">
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => <Login {...props} setProfile={setProfile} />}
            />
            <Route exact path="/signup" component={Signup} />
            <Route
              exact
              path="/subscriptions"
              render={(props) => <Subscriptions {...props} profile={profile} />}
            />
            <Route exact path="/contact" component={Contact} />
            <Route
              exact
              path="/add"
              render={(props) => <Add {...props} profile={profile} />}
            />
            <Route
              exact
              path="/edit/:id"
              render={(props) => <Edit {...props} profile={profile} />}
            />
            <Route
              exact
              path="/expiring"
              render={(props) => <Expiring {...props} profile={profile} />}
            />
            <Route
              exact
              path="/budgetTracker"
              render={(props) => <BudgetTracker {...props} profile={profile} />}
            />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
        <Footer profile={profile} />
      </div>
    </Router>
  );
}

export default App;
