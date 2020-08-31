// dependencies
import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = ({ profile }) => {
  // // destructure profile
  const { firstName, lastName } = profile;

  // react router hook variable
  let location = useLocation();
  console.log(location.pathname);

  if (location.pathname === "/" || location.pathname === "/signup") {
    return null;
  } else {
    return (
      <nav className="navbar">
        <div className="row">
          <div className="col s12">
            <Link to="/" className="brand-logo">
              {firstName} {lastName}
            </Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <NavLink exact to="/subscriptions">
                  Subscriptions
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/add">
                  Add
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/expiring">
                  Expiring Soon
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/contact">
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/">
                  Sign Out
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
