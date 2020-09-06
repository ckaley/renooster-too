// dependencies
import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const Navbar = ({ profile }) => {
  // return null;
  // // destructure profile
  const { firstName, lastName } = profile;

  // react router hook variable
  let location = useLocation();
  console.log(location.pathname);

  if (location.pathname === "/" || location.pathname === "/signup") {
    return null;
  } else {
    return (
      <div className="navbar-fixed">
        <nav className="navbar">
          <div className="row">
            <div className="col s12">
              <Link to="/subscriptions" className="brand-logo center">
                Hello {firstName}!
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
                  <NavLink exact to="/budgetTracker">
                    Budget
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
      </div>
    );
  }
};

export default Navbar;
