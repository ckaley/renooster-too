import React from "react";

const UserContext = React.createContext({
  firstName: "",
  LastName: "",
  loggedIn: false,
  profileID: "",
  // handleBtnClick: () => {}
});

export default UserContext;
