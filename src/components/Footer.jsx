import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <a href="https://github.com/Gareth-Kwan?tab=repositories" target="_blank" rel="noopener noreferrer">
        <img className="icons" src="image\github_icon.png" alt="github icon" width="65" />
      </a>
      <a href="https://www.linkedin.com/in/gareth-kwan-a5509514a/" target="_blank" rel="noopener noreferrer">
        <img className="icons" src="\image\LinkedIn.png" alt="linkedin icon" width="50" />
      </a>
    </footer>
  );
};

export default Footer;
