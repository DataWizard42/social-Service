import React from 'react';
import './Body.css'; // Import CSS specific to Body
import ContactForm from './ContactForm'; // Import ContactForm component

function Body() {
  return (
    <div className="body">
      {/* Hero Section */}
      <section className="hero">
        <img src="Background.png" alt="Hero" className="hero-image" />
        <div className="hero-text">
          <h1>Contact Us</h1>
          <p>VISIT CELL | CONTACT US</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="contact-info">
        <div className="info-card">
          <h3>Mail us 24/7</h3>
          <p>nss@presidencyuniversity.in</p>
        </div>
        <div className="info-card">
          <h3>Call us 24/7</h3>
          <p>Phone: (+45) 654 - 545 - 5418</p>
          <p>Mobile: (+01) 654 - 545 - 1235</p>
        </div>
        <div className="info-card">
          <h3>Our Locations</h3>
          <p>NSS cell, Presidency University, Bengaluru, Karnataka 560064</p>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />
    </div>
  );
}

export default Body;
