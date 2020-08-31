// dependencies
import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

// components
import SubscriptionCard from "../components/SubscriptionCard";

const Subscriptions = (props) => {
  // state hook variables
  const [profile, setProfile] = useState({});
  const [subscriptions, setSubscriptions] = useState([]);

  // get profile after component mounts
  useEffect(() => {
    axios
      .get("/api/profile/")
      .then((res) => setProfile(res.data))
      .catch((err) => console.log(err));
    // setProfile(profileJSON)
  }, []);

  // so we can call getSubscriptions more than once...upon first page load and after a subscription is deleted to render updated list of subscriptions.
  useEffect(() => {
    getSubscriptions();
  }, []);

  // get subscriptions after component mounts
  const getSubscriptions = () => {
    axios
      .get("/api/subscriptions/")
      .then((res) => {
        console.log(res.data);
        setSubscriptions(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteSubscription = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.value) {
        await axios
          .delete(`/api/subscriptions/${id}`)
          .then((res) => {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          })
          .catch((err) => {
            Swal.fire("Sorry something went wrong. Please try again.", "error");
            console.log(err);
          });

        getSubscriptions();
      }
    });
  };

  return (
    <>
      <div className="container" id="subscriptions">
        <div className="row">
          {subscriptions.map((subscription, index) => {
            return (
              <SubscriptionCard
                key={index}
                subscription={subscription}
                deleteSubscription={deleteSubscription}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Subscriptions;
