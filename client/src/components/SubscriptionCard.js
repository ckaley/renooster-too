// dependencies
import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Card, Row, Col } from "react-materialize";

const SubscriptionCard = ({ subscription }) => {
    // // destructure project
    const { id, name, slug, startDate, endDate, price, frequency, icon } = subscription;

    return (
        <div className="col s12 m6 l4">
                <Card>
                <Link to={`subscriptions/${slug}`}>
          <div className='card-image'>
            <img src={icon} width='150' height='150' />
          </div>
          <div className='card-content'>
            <span className='card-title'>{name}</span>
            <p class='card-text'>
              Start Date: <i>{startDate}</i>
            </p>
            <p class='card-text'>
              End Date: <i>{endDate}</i>
            </p>
            <p class='card-text'>
              Price: <i>{price}</i>
            </p>
            <p class='card-text'>
              Frequency: <i>{frequency}</i>
            </p>
          </div>
        </Link>
        <div className='card-action'>
          <Button id={id}>Edit</Button>
          <Button id={id}>Delete</Button>
        </div>
                </Card>
            </div>
    
    )
}

export default SubscriptionCard
