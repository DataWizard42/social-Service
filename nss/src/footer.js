import React from 'react';
import './Footer.css'; // Import CSS specific to Footer

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="nss.png" alt="University Logo" />
          <p>
            Focused on service, NSS thrives on meaningful engagement. We cultivate growth through dedication and community impact, fostering a spirit of change and leadership.
          </p>
        </div>
        <div className="footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-address">
          <h4>Our Address</h4>
          <p>NSS cell, Presidency University, Bengaluru, Karnataka 560064</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
