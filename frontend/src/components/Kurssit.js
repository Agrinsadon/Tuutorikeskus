import React, { useState } from 'react';
import Navbar from './Navbar';
import EmailForm from './EmailForm';
import EnrollmentForm from './EnrollmentForm'; // New component
import '../styles/Kurssit.css';

const Kurssit = () => {
    const [showLinks, setShowLinks] = useState(false);
    const [enrollmentInfo, setEnrollmentInfo] = useState(null); // State to store enrollment info

    const handleIlmottauduButtonClick = (courseInfo) => {
        setEnrollmentInfo(courseInfo);
    };

    const handleEnrollmentSuccess = () => {
        setEnrollmentInfo(null); // Clear the enrollment info to hide the form
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
          <span className="p-with-dots"></span>54 opetustuntia
          <br />
          <span className="p-with-dots"></span>Hakemusprosessissa avustaminen
          <br />
          <span className="p-with-dots"></span>Matkustamme kanssasi Romaniaan
          <br />
          <span className="p-with-dots"></span>Hakemusprosessissa avustaminen
          <br />
          <span className="p-with-dots"></span>Hakemusprosessissa avustaminen
          <br />
          </p>
          </div>
          <div className="ilmottaudu-button-container">
          <span className="price-label">2400€</span>
          <button onClick={() => handleIlmottauduButtonClick({ title: 'Intensiivinenkurssi' })} className='ilmottaudu-button'>Ilmottaudu</button>
          </div>
        </div>

        <div className="kurssi-card">
        <div className="kurssi-pic-frame">
          <img src="Aboutus.png" alt=" " className="kurssi-card-pic" />
        </div>
          <div className="kurssi-header1">
          <h2>Superkurssi</h2>
          <p>9 viikkoa</p>
          </div>
          <div className='kurssi-text'>
          <p>
          <span className="p-with-dots"></span>108 opetustuntia
          <br />
          <span className="p-with-dots"></span>Yksityisopetusta 1h
          <br />
          <span className="p-with-dots"></span>Nettimateriaali & tehtäviä
          <br />
          <span className="p-with-dots"></span>Hakemusprosessissa avustaminen
          <br />
          <span className="p-with-dots"></span>Matkustamme kanssasi Romaniaan
          </p>
          </div>
          <div className="ilmottaudu-button-container">
          <span className="price-label">4500€</span>
          <button onClick={() => handleIlmottauduButtonClick({ title: 'Superkurssi' })} className='ilmottaudu-button'>Ilmottaudu</button>
          </div>
        </div>

        <div className="kurssi-card">
        <div className="kurssi-pic-frame">
          <img src="Aboutus.png" alt=" " className="kurssi-card-pic" />
        </div>
          <div className="kurssi-header">
          <h2>Super-Takuu kurssi</h2>
          <p>10 viikkoa</p>
          </div>
          <div className='kurssi-text'>
          <p>
          <span className="p-with-dots"></span>114 opetustuntia + rahan palautus 
          <br />
          <span className="p-with-dots"></span>Yksityisopetusta 2h
          <br />
          <span className="p-with-dots"></span>Nettimateriaali & tehtäviä
          <br />
          <span className="p-with-dots"></span>Hakemusprosessissa avustaminen
          <br />
          <span className="p-with-dots"></span>Matkustamme kanssasi Romaniaan
          </p>
          </div>
          <div className="ilmottaudu-button-container">
          <span className="price-label">5500€</span>
          <button onClick={() => handleIlmottauduButtonClick({ title: 'Super-Takuu kurssi' })} className='ilmottaudu-button'>Ilmottaudu</button>
          </div>
        </div>

        <div className="kurssi-card-small">
        <div className="kurssi-pic-frame">
          <img src="Aboutus.png" alt=" " className="kurssi-card-pic" />
        </div>
          <div className="kurssi-header">
          <h2>Hakemuspalvelu + matka</h2>
          </div>
          <div className='kurssi-text'>
          <p>
          <span className="p-with-dots"></span>Hakemusprosessissa avustaminen
          <br />
          <span className="p-with-dots"></span>Matkustamme kanssasi Romaniaan
          </p>
          </div>
          <div className="ilmottaudu-button-container-small">
          <span className="price-label-small">499€</span>
          <button onClick={() => handleIlmottauduButtonClick({ title: 'Hakemuspalvelu + matka' })} className='ilmottaudu-button'>Ilmottaudu</button>
          </div>
        </div>

        <div className="kurssi-card-small">
        <div className="kurssi-pic-frame">
          <img src="Aboutus.png" alt=" " className="kurssi-card-pic" />
        </div>
          <div className="kurssi-header">
          <h2>Hakemuspalvelu</h2>
          </div>
          <div className='kurssi-text'>
          <p>
          <span className="p-with-dots"></span>Hakemusprosessissa avustaminen sekä 
          hakemuksen toimitus yliopistoon.
          </p>
          </div>
          <div className="ilmottaudu-button-container-small">
          <span className="price-label-small">299€</span>
          <button onClick={() => handleIlmottauduButtonClick({ title: 'Hakemuspalvelu' })} className='ilmottaudu-button'>Ilmottaudu</button>
          </div>
        </div>

        <div className="kurssi-card-small">
        <div className="kurssi-pic-frame">
          <img src="Aboutus.png" alt=" " className="kurssi-card-pic" />
        </div>
          <div className="kurssi-header">
          <h2>Knots & Suture</h2>
          </div>
          <div className='kurssi-text'>
          <p>
          <span className="p-with-dots"></span>Romaniassa 2 päivän kurssi kirurgian perusteiden teoriaan ja käytäntöön.
          </p>
          </div>
          <div className="ilmottaudu-button-container-small">
          <span className="price-label-small">149€</span>
          <button onClick={() => handleIlmottauduButtonClick({ title: 'Knots & Suture' })} className='ilmottaudu-button'>Ilmottaudu</button>
          </div>
        </div>
        </div>
        </div>
        <EmailForm />
        {enrollmentInfo && (<EnrollmentForm courseInfo={enrollmentInfo} onEnrollmentSuccess={handleEnrollmentSuccess}/>)}
      </div>
    );
};


export default Kurssit;