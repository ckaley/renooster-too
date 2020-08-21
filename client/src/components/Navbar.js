// dependencies
import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const Navbar = ({ profile }) => {
    // // destructure profile
    const { fullName } = profile

    return (
        <nav>
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <Link to="/" className="brand-logo">{fullName}</Link>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><NavLink exact to="/">Portfolio</NavLink></li>
                            <li><NavLink exact to="/contact">Contact</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar