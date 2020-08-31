// dependencies
import React from "react";
import { Link } from "react-router-dom";
import Moment from "moment";

const SubscriptionCard = ({ subscription, deleteSubscription }) => {
  // destructure subscriptions
  const {
    _id,
    name,
    startDate,
    endDate,
    price,
    frequency,
    icon,
  } = subscription;

  return (
    <div className="col s12 m6 l4">
      <div className="card">
        <Link to={`subscriptions/${_id}`}>
          <div className="card-image">
            <img src={icon} width="150" height="150" />
          </div>
          <div className="card-content">
            <span className="card-title">{name}</span>
            <p className="card-text">
              Start Date: <i>{Moment(startDate).format("MM-DD-YYYY")}</i>
            </p>
            <p className="card-text">
              End Date: <i>{Moment(endDate).format("MM-DD-YYYY")}</i>
            </p>
            <p className="card-text">
              Price: <i>${price.toFixed(2)}</i>
            </p>
            <p className="card-text">
              Frequency: <i>{frequency}</i>
            </p>
          </div>
        </Link>
        <div className="card-action">
          <button id={_id}>Edit</button>
          <button
            id={_id}
            onClick={(event) => {
              console.log(event.target);
              deleteSubscription(_id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionCard;
