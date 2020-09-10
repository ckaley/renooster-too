// dependencies
import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

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
        <nav>
          <div className="nav-wrapper">
            <div className="row">
              <div className="col s12">
                <Link to="/subscriptions" className="brand-logo center">
                  <img
                    src="/images/navbar-logo.png"
                    alt="Renooster Logo"
                    id="navbar-logo"
                  />
                  Hello {firstName}!
                </Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li>
                    <NavLink exact to="/subscriptions">
                      Subscriptions
                    </NavLink>
                  </li>
                  <li>
                    <NavLink exact to="/expiring">
                      Expiring Soon
                    </NavLink>
                  </li>
                  <li>
                    <NavLink exact to="/add">
                      Add
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
          </div>
        </nav>
      </div>
    );
  }
};

export default Navbar;
