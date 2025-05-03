import { Link, Outlet } from "react-router-dom";

export default function DashboardLayout (){
    return(
        <div>
            <nav>
                <Link to={"/dashboard"}>Home</Link>|
                <Link to={"/dashboard/Profile"}>Profile</Link>|
                <Link to={"/dashboard/settings"}>Settings</Link>
            </nav>
            <Outlet />
        </div>
    );
};