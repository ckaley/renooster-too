// dependencies
import React from 'react'
import { Link } from 'react-router-dom';

const SubscriptionCard = ({ subscription }) => {
    // // destructure project
    const {
        name,
        slug,
        description,
        screenshot,
        github,
        demo
    } = subscription

    return (
        <div className="col s12 m6 l4">
            <div className="card">
                <Link to={`subscriptions/${slug}`}>
                    <div className="card-image">
                        <img alt={name} src={screenshot} />
                    </div>
                    <div className="card-content">
                        <span className="card-title">{name}</span>
                        <p>{description}</p>
                    </div>
                </Link>
                <div className="card-action">
                    {github ? <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a> : null}
                    {demo ? <a href={demo} target="_blank" rel="noopener noreferrer">Demo</a> : null}
                </div>
            </div>
        </div>
    )
}

export default SubscriptionCard
