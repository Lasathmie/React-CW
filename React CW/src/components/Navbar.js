import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav style={styles.nav}>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/categories">Categories</Link>
      <Link to="/items">Items</Link>
      <Link to="/stock">Stock</Link>
      <Link to="/pos">POS</Link>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    gap: "20px",
    padding: "10px",
    backgroundColor: "#eee",
  },
};

export default Navbar;