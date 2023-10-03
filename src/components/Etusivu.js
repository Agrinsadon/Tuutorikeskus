// src/components/Etusivu.js

import React, { useState } from 'react';
import Navbar from './Navbar';
import './Etusivu.css';

const Etusivu = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="etusivu">
      <Navbar showLinks={showLinks} setShowLinks={setShowLinks} />
      <div className="content">
        <div className="text-container">
          <h1>Täydellinen paikka lääketieteelliselle matkallesi</h1>
          <p>Paikka jossa tuemme, ohjaamme ja mentoroimme koko sydämestämme pyrkiviä kollegoita heidän tiellään lääketieteen alalle.</p>
          <button className="kurssit-button">Kurssit</button>
          <div className="frame-container">
            <p>Siellä missä lääketieteen taidetta rakastetaan, siellä rakastetaan myös ihmiskuntaa - Hippocrates</p>
          </div>
        </div>
        <div className="image-container">
          <img src="medical center.png" alt="Medical Center" className="medical-image" />
        </div>
      </div>
    </div>
  );
};

export default Etusivu;
