// dependencies
import React from "react";
import { Link } from "react-router-dom";
import Moment from "moment";

const SubscriptionCard = ({
  subscription,
  deleteSubscription,
  editSubscription,
}) => {
  // destructure subscriptions
  const {
    _id,
    name,
    startDate,
    endDate,
    price,
    frequency,
    // icon,
  } = subscription;
  var icon;
  switch (name) {
    case "Netflix" || "netflix":
      icon =
        "https://mk0knowtechie1qof48y.kinstacdn.com/wp-content/uploads/2014/08/netflix-icon.jpg";
      break;
    case "Hulu" || "hulu":
      icon = "https://www.freeiconspng.com/uploads/hulu-icon-9.png";
      break;
    case "ESPN" || "espn" || "Espn":
      icon = "https://cdn.iconscout.com/icon/free/png-512/espn-1-461787.png";
      break;
    case "ArcGIS" || "arcgis" || "ARCGIS" || "ArcGis":
      icon =
        "https://upload.wikimedia.org/wikipedia/commons/d/df/ArcGIS_logo.png";
      break;
    case "Disney+" || "disney+":
      icon =
        "https://lh3.googleusercontent.com/xoGGYH2LgLibLDBoxMg-ZE16b-RNfITw_OgXBWRAPin2FZY4FGB9QKBYApR-0rSCkQ=s180-rw";
      break;
    case "Amazon" || "Amazon Prime" || "amazon prime":
      icon =
        "https://img.apksum.com/81/com.amazon.avod.thirdpartyclient/3.0.276.245/icon.png";
      break;
    default:
      icon = null;
  }

  return (
    <div className='col s12 m6 l4'>
      <div className='card blue-grey darken-1'>
        <div className='card-image'>
          <img src={icon} width='150' height='150' />
        </div>
        <div className='card-content white-text'>
          <span className='card-title'>{name}</span>
          <p className='card-text'>
            Start Date: <i>{Moment(startDate).format("MM-DD-YYYY")}</i>
          </p>
          <p className='card-text'>
            End Date: <i>{Moment(endDate).format("MM-DD-YYYY")}</i>
          </p>
          <p className='card-text'>
            Price: <i>${price.toFixed(2)}</i>
          </p>
          <p className='card-text'>
            Frequency: <i>{frequency}</i>
          </p>
        </div>
        <div className='card-action'>
          <Link className='btn blue' to={`edit/${_id}`}>
            Edit
          </Link>
          <button
            className='btn'
            id={_id}
            onClick={(event) => {
              console.log(event.target);
              deleteSubscription(_id);
            }}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionCard;
