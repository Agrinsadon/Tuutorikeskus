import React from 'react';
import './Navbar.css';

const Navbar = ({ showLinks, setShowLinks }) => {
  return (
    <div className="navbar">
      <div className="logo">Tuutori Keskus</div>
      <div className={`nav-links ${showLinks ? 'show' : ''}`}>
        <a href="/">Home</a>
        <a href="/romania">Romania</a>
        <a href="/about">About Us</a>
        <a href="/contact">Contact</a>
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
