import React from "react";
import "./Navbar.scss";
import Logo from "../Logo/Logo";

function Navbar() {
  return (
    <>
      <div className="gradient"></div>
      <nav className="navbar">
        <div className="nav_container inside">
          <span className="about link">à propos</span>
          <span className="logo link">
            <Logo></Logo>
          </span>
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
