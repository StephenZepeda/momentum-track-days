import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const [Menu_Open, setMenu_Open] = useState(false);

  const isActive = (path) => location.pathname === path;

  const Menu_Toggle = () => {
    setMenu_Open(!Menu_Open);
  };

  return (
    <header>
      <nav>
        <Link to="/" className="logo">MOMENTUM</Link>
        <button className="mobile-menu-toggle" onClick={Menu_Toggle} aria-label="Toggle menu">
          <span className={`hamburger ${Menu_Open ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
        <div className={`nav-links ${Menu_Open ? 'mobile-open' : ''}`}>
          <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`} onClick={() => setMenu_Open(false)}>Home</Link>
          <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`} onClick={() => setMenu_Open(false)}>About</Link>
          <Link to="/faq" className={`nav-link ${isActive('/faq') ? 'active' : ''}`} onClick={() => setMenu_Open(false)}>FAQ</Link>
          <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`} onClick={() => setMenu_Open(false)}>Contact</Link>
          <a href="#tickets" className="cta-button mobile-cta" onClick={() => setMenu_Open(false)}>Book Now</a>
        </div>
        <a href="#tickets" className="cta-button desktop-cta">Book Now</a>
      </nav>
    </header>
  );
}

export default Header;
