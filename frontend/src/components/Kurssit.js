import React, { useState } from 'react';
import Navbar from './Navbar';
import '../styles/Kurssit.css';

const Kurssit = () => {
    const [showLinks, setShowLinks] = useState(false);
  
    return (
      <div class="kurssitsivu">
        <div className="kurssit">
        <Navbar showLinks={showLinks} setShowLinks={setShowLinks} />
        </div>
        <div className="kurssiotsikko">
        <h1>Kurssitarjotin</h1>
        </div>

        <div className="row">
        <div className="box">
          <div className="otsikko">
             <img src="https://media.healthecareers.com/wp-content/uploads/2022/02/11211459/medicalschool-3.jpg" alt="Example" class="kuva"></img>
             </div>
          <span className='teksti1'>Intensiivinen Kurssi</span>
          <span className='teksti2'> 3,5 viikkoa </span>
          <div className="teksti">
          <p>1. Intensiivikurssi sisältää 54 opetustuntia.</p>
          <p> 2. Hakemusprosessissa avustaminen.</p>
          <p>3. Matkustamme kanssasi Romaniaan.</p>
          </div>
          <div className='info-container'>
          <span className="hinta">2400€</span>
          <span><button className="info-button">Ilmoittaudu</button></span>
            </div>
            </div>
          </div>
        </div>
    

    );
};


export default Kurssit;