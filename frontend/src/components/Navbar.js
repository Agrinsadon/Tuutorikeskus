import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const handleLinkClick = () => {
    setShowLinks(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="screen">
      <div className="navbar">
        <div className="logo">
          <img src="tuutorikeskus-logo.png" alt="Tuutori Keskus Logo" className="tuutorikeskus-logo" />
        </div>
        <div className={`nav-links ${showLinks ? 'show' : ''}`}>
          <Link to="/" onClick={handleLinkClick}>
            Koti
          </Link>
          <Link to="/Kurssit" onClick={handleLinkClick}>
            Kurssit
          </Link>
          <Link to="/Romania" onClick={handleLinkClick}>
            Romania
          </Link>
          <Link to="/Meistä" onClick={handleLinkClick}>
            Meistä
          </Link>
          <Link to="/Yhteistiedot" onClick={handleLinkClick}>
            Yhteistiedot
          </Link>
        </div>
        <FontAwesomeIcon
          icon={showLinks ? faTimes : faBars}
          className={`burger ${showLinks ? 'active' : ''}`}
          onClick={toggleLinks}
        />
      </div>
    </div>
  );
};

export default Navbar;
