import React from "react";

import Dashboard from "./Dashboard";
// import SideNav from "./SideNav";

const homepageStyle = {
  display: "flex",
  justifyContent: "space-between",
};

const Home = () => {
  return (
    <div style={homepageStyle}>
      {/* <SideNav /> */}
      <Dashboard />
    </div>
  );
};

export default Home;

// { isLoggedIn, onLogin, onLogout }
