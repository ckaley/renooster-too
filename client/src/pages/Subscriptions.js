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
  // destructure profile
  const { firstName, lastName, _id } = profile;

  // so we can call getSubscriptions more than once...upon first page load and after a subscription is deleted to render updated list of subscriptions.
  useEffect(() => {
    getSubscriptions();
  }, []);

  // get subscriptions after component mounts
  const getSubscriptions = () => {
    console.log(props.profile._id);
    axios
      .get(`/api/subscriptions/${props.profile._id}`)
      .then((res) => {
        console.log(res.data);
        setSubscriptions(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteSubscription = (id) => {
    const audioEl = document.getElementsByClassName("audio-element")[0];
    audioEl.play();
    Swal.fire({
      title: "Are you sure you want to Remooooove it?",
      text: "This subscription will be permanently deleted!",
      imageUrl: "/images/warningcow.png",
      imageAlt: "Renooster Cow",
      // icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#D52B14",
      cancelButtonColor: "#3C4BDD",
      confirmButtonText: "Yes, remoooove it!",
    }).then(async (result) => {
      if (result.value) {
        await axios
          .delete(`/api/subscriptions/${id}`)
          .then((res) => {
            Swal.fire(
              "Deleted!",
              "Your subscription has been deleted.",
              "success"
            );
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
      <audio className="audio-element">
        <source src="/sounds/cowmoo.mp3"></source>
      </audio>
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
