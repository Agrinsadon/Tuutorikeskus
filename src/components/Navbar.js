import React from 'react';
import './Navbar.css';

const Navbar = ({ showLinks, setShowLinks }) => {
  const closeLinks = () => {
    setShowLinks(false);
  };

  return (
    <div className="navbar">
      <div className="logo">Tuutori Keskus</div>
      <div className={`nav-links ${showLinks ? 'show' : ''}`}>
        <a href="/" onClick={closeLinks}>
          Home
        </a>
        <a href="/romania" onClick={closeLinks}>
          Romania
        </a>
        <a href="/about" onClick={closeLinks}>
          About Us
        </a>
        <a href="/contact" onClick={closeLinks}>
          Contact
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
