import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ textDecoration: 'none', color: 'inherit' }}>
              <h4>Momentum</h4>
            </Link>
            <p>Premium track day experiences for automotive enthusiasts. Push your limits safely on world-class racing facilities.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/#tickets">Book Now</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Location</h4>
            <p>California Thunderhill Raceway<br />5350 Midway Road<br />Willows, CA 95988</p>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: <a href="mailto:info@momentumtrackdays.com">info@momentumtrackdays.com</a></p>
            <p>Hours: Mon-Sun, 9AM-5PM PST</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Momentum Track Days. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <span>•</span>
            <a href="#">Terms of Service</a>
            <span>•</span>
            <a href="#">Safety Guidelines</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
