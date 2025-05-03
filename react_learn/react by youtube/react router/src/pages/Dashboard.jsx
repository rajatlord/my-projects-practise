import { Link , Outlet, useNavigate, Route, Routes } from "react-router-dom";
import Profile from "./Profile";
import Settings from "./Settings";

function Dashboard() {
  const Navigate = useNavigate();

  const goToProfile = ()=>{
    // Navigate(-1); here magic begins 
    Navigate("profile")
  }
  return (
    <div>
    <h1>Dashboard</h1>
    <nav>
      <Link to="profile">Profile</Link> | <Link to="settings">Settings</Link>
    </nav>
    <br />
    <button onClick={goToProfile}>Go to Profile (Programmatic)</button>
    <Outlet />

  </div>
  );
}

export default Dashboard;
