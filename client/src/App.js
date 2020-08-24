// dependencies
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

// page components
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";
import Subscriptions from "./pages/Subscriptions";
import Subscription from "./pages/Subscription";
import NotFound from "./pages/NotFound";

// data
// import profileJSON from './data/profile.json'

// styles
import "./css/styles.css";

function App() {
  // state hook variables
  const [profile, setProfile] = useState({});

  // get profile after component mounts
  useEffect(() => {
    axios
      .get(`/api/profile/`)
      .then((res) => setProfile(res.data))
      .catch((err) => console.log(err));
    // setProfile(profileJSON)
  }, []);

  // set title when profile changes
  useEffect(() => {
    document.title = profile.fullName;
  }, [profile]);

  return (
    <Router>
      <div id="app-content">
        <div id="router-content">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/subscriptions" render={() =><Subscriptions profile={profile} />} />
            <Route exact path="/contact" component={Contact} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
