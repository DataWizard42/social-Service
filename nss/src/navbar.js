import React from 'react';
import './Navbar.css'; // Import CSS specific to Navbar

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="nss.png" alt="University Logo" />
      </div>
      <ul className="navbar-links">
        <li>Home</li>
        <li>Pages</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Blog</li>
        <li>Contact Us</li>
      </ul>
      <div className="navbar-contact">
        <p>Call Us Now: +123-456-7890</p>
        <button className="navbar-button">Get In Touch</button>
      </div>
    </nav>
  );
}

export default Navbar;
