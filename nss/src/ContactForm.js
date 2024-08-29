import React from 'react';
import './ContactForm.css'; // Import CSS specific to ContactForm

function ContactForm() {
  return (
    <section className="contact-form-section">
      <div className="contact-form-wrapper">
        <div className="contact-form-container">
          <h2>Have Any Questions? Get in Touch!</h2>
          <form className="contact-form">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Email Address" required />
            <input type="tel" name="phone" placeholder="Phone Number" required />
            <input type="text" name="subject" placeholder="Subject" required />
            <textarea name="message" rows="4" placeholder="Your Message" required></textarea>
            <div className="form-buttons">
              <button type="submit" className="submit-button">Send Message</button>
              <button type="button" className="blog-button">Blog Submission</button>
            </div>
          </form>
        </div>
        <div className="contact-form-image">
          <img src="image.png" alt="" />
        </div>
      </div>

      {/* Map Section */}
      <div className="map-section">
        <iframe 
          title="Presidency University Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31082.52610946293!2d77.57271533863316!3d13.130237104503615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae27e6abdfef31%3A0x8d5b6e2d67d6cdd4!2sPresidency%20University!5e0!3m2!1sen!2sin!4v1660908123968!5m2!1sen!2sin" 
          width="100%" 
          height="300" 
          style={{ border: '0' }} 
          allowFullScreen="" 
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </section>
  );
}

export default ContactForm;
