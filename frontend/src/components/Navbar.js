import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  };

  return (
    <div className='screen'>
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
        icon={showLinks ? faTimes : faBars}
        className={`burger ${showLinks ? 'active' : ''}`}
        onClick={toggleLinks}
      />
    </div>
    </div>
  );
};

export default Navbar;
