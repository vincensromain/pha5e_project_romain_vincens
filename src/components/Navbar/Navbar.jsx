import React from "react";
import "./Navbar.scss";
function Navbar() {
  return (
    <section className="navbar inside">
      <nav className="links">
        <span className="link">home</span>
        <span className="link">page1</span>
        <span className="link">page2</span>
      </nav>
    </section>
  );
}

export default Navbar;
