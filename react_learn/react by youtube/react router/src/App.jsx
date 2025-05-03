import { Routes, Route, Link , NavLink} from "react-router-dom";
import React , {Suspense} from "react";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Dashboard from "./pages/Dashboard";
// import Profile from "./pages/Profile";
// import Settings from "./pages/Settings";
// import Products from "./pages/Products";
// import ProductDetails from "./pages/ProductDetails";
// import NotFound from "./pages/NotFound";
// import Navbar from "./pages/Navbar";

// importing work as about
// import Work from "./work"

// 10 april 2025
// import Login from "./pages/Login";
// layouts import
// import DashboardLayout from "./pages/layouts/DashboardLayout";
// import DashboardHome from "./pages/DashboardHome";

// lazy loading implemention 
const Home = React.lazy(()=> import("./pages/Home"));  
const About = React.lazy(()=> import("./pages/About"));  
const Products = React.lazy(()=> import("./pages/Products"));  
const ProductDetails = React.lazy(()=> import ("./pages/ProductDetails"));
const DashboardLayout = React.lazy(()=> import ("./pages/layouts/DashboardLayout"));
const DashboardHome = React.lazy(()=> import ("./pages/DashboardHome"));
const Login = React.lazy(()=> import ("./pages/Login"));
const Profile = React.lazy(()=> import ("./pages/Profile"));
const Settings = React.lazy(()=>import ("./pages/Settings"));
const NotFound = React.lazy(()=> import ("./pages/NotFound"))
// const Navbar = React.lazy(()=>import("./pages/Navbar"));
// navbar should load faster 
import Navbar from "./pages/Navbar"
import ScrollToTop from "./pages/ScrollToTop";



function App() {
  return (
    <Suspense fallback={<div>Loading...⏳</div>}>
      <ScrollToTop />
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/about" element={<Work />} /> */}
        <Route path="/products" element={<Products />} >
        <Route path=":id" element={<ProductDetails/>}/>
      </Route>
      <Route path="*" element={<NotFound/>} />
      <Route path="/login" element={<Login />} />



      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardHome  />}/>
        <Route  path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />

      </Route>

        {/* <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route> */}
        <Route path="*" element={<h2>page not found</h2>} />
      </Routes>
      
    </div>
    </Suspense>
  );
}

export default App;

// import { BrowserRouter as Router , Routes, Route, Link } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import './App.css'

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Dashboard from "./pages/Dashboard";
// import Profile from "./pages/Profile";
// import Settings from "./pages/Settings";

// function App() {
//   return (
//     <>
//     <h1>HI</h1>
//     <nav>
//           <Link to="/">Home</Link>|<Link to="/about">About</Link>
//         </nav>
//     <Router>
//       <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/about" element={<About />} />
//         <Route path="/dashboard" element={<Dashboard />}>
//           <Route path="profile" element={<Profile />} />
//           <Route path="settings" element={<Settings />} />
//         </Route>
//       </Routes>
//     </Router>
//     </>
//   );
// }

// export default App;

// simply route
{
  /* <nav>
          <Link to="/">Home</Link>|<Link to="/about">About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes> */
}
