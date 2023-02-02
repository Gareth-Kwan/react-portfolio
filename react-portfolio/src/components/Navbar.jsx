import React from "react";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav class="navBar">
    <ul>
      <li>
        <a href="#home" class="home">
          HOME
        </a>
      </li>
      <li>
        <a href="#about">ABOUT ME</a>
      </li>
      <li>
        <a href="#portfolio">PORTFOLIO</a>
      </li>
      <li>
        <a href="#contact">CONTACT</a>
      </li>
    </ul>
  </nav>
  );
}

export default Navbar;

