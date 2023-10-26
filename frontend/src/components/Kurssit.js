import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from './Navbar';
import '../styles/Kurssit.css';

const Kurssit = () => {
    const [showLinks, setShowLinks] = useState(false);
    const history = useHistory();

    const handleIlmottauduButtonClick = () => {
      history.push('/Kurssit');

    };
  
    return (
      <div className="kurssitsivu">
        <Navbar showLinks={showLinks} setShowLinks={setShowLinks} />
        <div className="kurssit">
          <h1>Kurssit</h1>
        <div className='kurssi-card-container'>
        <div className="kurssi-card">
        <div className="kurssi-pic-frame">
          <img src="Aboutus.png" alt=" " className="kurssi-card-pic" />
        </div>
          <div className="kurssi-header">
          <h2>Intensiivinenkurssi</h2>
          <p>3,5 viikkoa</p>
          </div>
          <div className='kurssi-text'>
          <p>
          <span className="p-with-dots"></span>Sisältää 54 opetustuntia
          <br />
          <span className="p-with-dots"></span>Hakemusprosessissa avustaminen
          <br />
          <span className="p-with-dots"></span>Matkustamme kanssasi Romaniaan
          <br />
          <span className="p-with-dots"></span>Hakemusprosessissa avustaminen
          <br />
          <span className="p-with-dots"></span>Hakemusprosessissa avustaminen
          </p>
          </div>
          <div className="ilmottaudu-button-container">
          <span className="price-label">2000€</span>
          <button className="ilmottaudu-button" onClick={handleIlmottauduButtonClick}>Ilmottaudu</button>
          </div>
        </div>

        <div className="kurssi-card">
        <div className="kurssi-pic-frame">
          <img src="Aboutus.png" alt=" " className="kurssi-card-pic" />
        </div>
          <div className="kurssi-header">
          <h2>Intensiivinenkurssi</h2>
          <p>3,5 viikkoa</p>
          </div>
          <div className='kurssi-text'>
          <p>
          <span className="p-with-dots"></span>Sisältää 54 opetustuntia
          <br />
          <span className="p-with-dots"></span>Hakemusprosessissa avustaminen
          <br />
          <span className="p-with-dots"></span>Matkustamme kanssasi Romaniaan
          <br />
          <span className="p-with-dots"></span>Hakemusprosessissa avustaminen
          <br />
          <span className="p-with-dots"></span>Hakemusprosessissa avustaminen
          </p>
          </div>
          <div className="ilmottaudu-button-container">
          <span className="price-label">2000€</span>
          <button className="ilmottaudu-button" onClick={handleIlmottauduButtonClick}>Ilmottaudu</button>
          </div>
        </div>

        <div className="kurssi-card">
        <div className="kurssi-pic-frame">
          <img src="Aboutus.png" alt=" " className="kurssi-card-pic" />
        </div>
          <div className="kurssi-header">
          <h2>Intensiivinenkurssi</h2>
          <p>3,5 viikkoa</p>
          </div>
          <div className='kurssi-text'>
          <p>
          <span className="p-with-dots"></span>Sisältää 54 opetustuntia
          <br />
          <span className="p-with-dots"></span>Hakemusprosessissa avustaminen
          <br />
          <span className="p-with-dots"></span>Matkustamme kanssasi Romaniaan
          <br />
          <span className="p-with-dots"></span>Hakemusprosessissa avustaminen
          <br />
          <span className="p-with-dots"></span>Hakemusprosessissa avustaminen
          </p>
          </div>
          <div className="ilmottaudu-button-container">
          <span className="price-label">2000€</span>
          <button className="ilmottaudu-button" onClick={handleIlmottauduButtonClick}>Ilmottaudu</button>
          </div>
        </div>
        </div>
        </div>
      </div>
    );
};


export default Kurssit;