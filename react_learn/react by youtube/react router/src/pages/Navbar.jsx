import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "1rem", background: "#eee" }}>
      <NavLink to="/" style={{ margin: "0 1rem" }}>Home</NavLink>
      <NavLink to="/about" style={{ margin: "0 1rem" }}>About</NavLink>
      <NavLink to="/products" style={{ margin: "0 1rem" }}>Products</NavLink>
      <NavLink to="/dashboard" style={{ margin: "0 1rem" }}>Dashboard</NavLink>
      <NavLink to="/login" style={{ margin: "0 1rem" }}>Login</NavLink>
    </nav>
  );
};

export default Navbar;
