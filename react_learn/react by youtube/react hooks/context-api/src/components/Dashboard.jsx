import React from "react";
import UserProfile from "./UserProfile";

const DashboardStyles = {
  width: "100%",
  textAlign: "center",
  background: "antiqueWhite",
};

const Dashboard = () => {
  return (
    <div style={DashboardStyles}>
      <UserProfile />
    </div>
  );
};

export default Dashboard;

// { isLoggedIn, onLogin, onLogout }
