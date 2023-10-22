import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../styles/Navbar.css';

const Navbar = ({ showLinks, setShowLinks }) => {
  const closeLinks = () => {
    setShowLinks(false);
  };

  return (
    <div className="navbar">
      <div className="logo">Tuutori Keskus</div>
      <div className={`nav-links ${showLinks ? 'show' : ''}`}>
        <Link to="/" onClick={closeLinks}>
          Koti
        </Link>
        <Link to="/Kurssit" onClick={closeLinks}>
          Kurssit
        </Link>
        <Link to="/Romania" onClick={closeLinks}>
          Romania
        </Link>
        <Link to="/Meistä" onClick={closeLinks}>
          Meistä
        </Link>
        <Link to="/Yhteistiedot" onClick={closeLinks}>
          Yhteistiedot
        </Link>
      </div>
      <FontAwesomeIcon
        icon={faBars} // Use the FontAwesome icon you prefer
        className="burger"
        onClick={() => setShowLinks(!showLinks)}
      />
    </div>
  );
};

export default Navbar;
