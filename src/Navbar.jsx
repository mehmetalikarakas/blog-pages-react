import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Blog Sayfası </h1>
      <div className="links">
        <Link to="/">Ana sayfa</Link>
        <Link
          to="/create"
          style={{
            color: "white",
            backgroundColor: "#ff793f",
            borderRadius: "10px",
          }}
        >
          Yazı Ekle
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
