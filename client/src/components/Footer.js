// dependencies
import React from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  // let location = useLocation();

  // if (location.pathname === "/" || location.pathname === "/signup") {
  //     return null;
  //   } else {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row ">
          <div className="col s12 m6 l12">
            <span className="copyright">{`© Copyright ${new Date().getFullYear()} Renooster, Inc.`}</span>
          </div>
        </div>
      </div>
    </footer>
  );
  // }
};

export default Footer;
