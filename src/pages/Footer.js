import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faYoutube, faLinkedin, faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>EduNova University</h4>
          <p>EduNova Academy is a premier educational institution dedicated to empowering students with knowledge, skills, and confidence to achieve their dreams.</p>
          <div className="social-icons">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://google.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGoogle} />
            </a>
          </div>
        </div>
        <div className="footer-section explore">
          <h4>Explore</h4>
          <p><a href="/">Home</a></p>
          <p><a href="/academics">Academics</a></p>
          <p><a href="/events">Events</a></p>
          <p><a href="/admission">Admission</a></p>
        </div>
        {/* <div className="footer-section">
          <h4>Explore</h4>
          <p><a href="/">Home</a></p>
          <p><a href="/academics">Academics</a></p>
          <p><a href="/events">Events</a></p>
          <p><a href="/admission">Admission</a></p>
        </div> */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p><FontAwesomeIcon icon={faPhone} /> <a href="tel:+919881234655">+91 9881234655</a></p>
          <p><FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:admissions@edunoveacademy.com">admissions@edunoveacademy.com</a></p>
        </div>
        <div className="footer-section">
          <h4>Location</h4>
          <p><FontAwesomeIcon icon={faLocationDot} /> 3rd Floor, Cyber Heights, Hitech City Road, Madhapur, Hyderabad, Telangana, India - 500081</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
