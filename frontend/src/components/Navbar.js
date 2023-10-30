import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; // Import both icons
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false); // State variable to control link visibility

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div className="navbar">
      <div className="logo">Tuutori Keskus</div>
      <div className={`nav-links ${showLinks ? 'show' : ''}`}>
        <Link to="/" onClick={toggleLinks}>
          Koti
        </Link>
        <Link to="/Kurssit" onClick={toggleLinks}>
          Kurssit
        </Link>
        <Link to="/Romania" onClick={toggleLinks}>
          Romania
        </Link>
        <Link to="/Meistä" onClick={toggleLinks}>
          Meistä
        </Link>
        <Link to="/Yhteistiedot" onClick={toggleLinks}>
          Yhteistiedot
        </Link>
      </div>
      <FontAwesomeIcon
        icon={showLinks ? faTimes : faBars} // Toggle between "x" and "burger" icons
        className={`burger ${showLinks ? 'active' : ''}`} // Add "active" class when links are shown
        onClick={toggleLinks}
      />
    </div>
  );
};

export default Navbar;
