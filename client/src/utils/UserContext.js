import React from "react";

const UserContext = React.createContext({
  firstName: "",
  LastName: "",
  loggedIn: false,
  // handleBtnClick: () => {}
});

export default UserContext;
