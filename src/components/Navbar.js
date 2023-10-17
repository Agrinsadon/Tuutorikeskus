import React from 'react';
import '../styles/Navbar.css';

const Navbar = ({ showLinks, setShowLinks }) => {
  const closeLinks = () => {
    setShowLinks(false);
  };

  return (
    <div className="navbar">
      <div className="logo">Tuutori Keskus</div>
      <div className={`nav-links ${showLinks ? 'show' : ''}`}>
        <a href="/" onClick={closeLinks}>
          Koti
        </a>
        <a href="/Kurssit" onClick={closeLinks}>
          Kurssit
        </a>
        <a href="/Romania" onClick={closeLinks}>
          Romania
        </a>
        <a href="/Meistä" onClick={closeLinks}>
          Meistä
        </a>
        <a href="/Yhteistiedot" onClick={closeLinks}>
          Yhteistiedot
        </a>
      </div>
      <button className="burger" onClick={() => setShowLinks(!showLinks)}>
        <div></div>
        <div></div>
        <div></div>
      </button>
    </div>
  );
};

export default Navbar;
