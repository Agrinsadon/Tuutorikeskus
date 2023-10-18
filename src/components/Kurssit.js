import React, { useState } from 'react';
import Navbar from './Navbar';
import '../styles/Kurssit.css';

const Kurssit = () => {
    const [showLinks, setShowLinks] = useState(false);
  
    return (
      <div>
        <div className="kurssit">
        <Navbar showLinks={showLinks} setShowLinks={setShowLinks} />
        </div>
        <div class="otsikko">
        <h1>Kurssitarjotin</h1>
        </div>
      <div class="kurssitarjonta">
        <div class="row">
        <div class="box">
          <p>Intensiivinen Kurssi</p>
          <p>3,5 viikkoa</p>
        </div>
        <div class="box">Super Kurssi</div>
        <div class="box">Super-takuu Kurssi</div>
        </div>
       <div class="kurssitarjotin">
        <div class="row">
        <div class="box">Hakemuspalvelu + matka</div>
        <div class="box">Hakemuspalvelu</div>
        <div class="box">Knots & suture</div>
        </div>
        </div>
    </div>
    </div>
    );
};


export default Kurssit;