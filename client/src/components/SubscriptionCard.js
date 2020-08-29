// dependencies
import React from "react";
import { Link } from "react-router-dom";

const SubscriptionCard = ({ subscription }) => {
  // // destructure subscriptions
  const {
    id,
    name,
    slug,
    startDate,
    endDate,
    price,
    frequency,
    icon,
  } = subscription;

  return (
    <div className='col s12 m6 l4'>
      <div className='card'>
        <Link to={`subscriptions/${slug}`}>
          <div className='card-image'>
            <img src={icon} width='150' height='150' />
          </div>
          <div className='card-content'>
            <span className='card-title'>{name}</span>
            <p className='card-text'>
              Start Date: <i>{startDate}</i>
            </p>
            <p className='card-text'>
              End Date: <i>{endDate}</i>
            </p>
            <p className='card-text'>
              Price: <i>{price}</i>
            </p>
            <p className='card-text'>
              Frequency: <i>{frequency}</i>
            </p>
          </div>
        </Link>
        <div className='card-action'>
          <button id={id}>Edit</button>
          <button id={id}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionCard;
