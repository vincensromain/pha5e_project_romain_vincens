import React from "react";
import "./Navbar.scss";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="gradient"></div>
      <nav className="navbar">
        <div className="nav_container inside">
          <span className="about link">à propos</span>
          <Link to="/" className="logo link">
            <Logo></Logo>
          </Link>
          <span className="burger link">
            <span className="burger_bar"></span>
            <span className="burger_bar"></span>
            <span className="burger_bar"></span>
          </span>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
