// dependencies
import React, { useEffect, useState } from "react";
import axios from "axios";

// components
import Navbar from "../components/Navbar";
import SubscriptionCard from "../components/SubscriptionCard";
import Footer from "../components/Footer";

// data
// import projectsJSON from '../data/projects.json'

const Subscriptions = (props) => {
  // state hook variables
  const [profile, setProfile] = useState({});
  const [subscriptions, setSubscriptions] = useState([]);

  // get profile after component mounts
  useEffect(() => {
    axios
      .get('/api/profile/')
      .then((res) => setProfile(res.data))
      .catch((err) => console.log(err));
    // setProfile(profileJSON)
  }, []);

  // get projects after component mounts
  useEffect(() => {
    axios
      .get("/api/subscriptions/")
      .then((res) => setSubscriptions(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navbar profile={profile} />
      <div className="container" id="subscriptions">
        <div className="row">
          {subscriptions.map((subscription, index) => {
            return <SubscriptionCard key={index} subscription={subscription} />;
          })}
        </div>
      </div>
      <Footer profile={profile} />
    </>
  );
};

export default Subscriptions;
