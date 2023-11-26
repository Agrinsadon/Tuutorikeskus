import React, { useState } from 'react';
import Navbar from './Navbar';
import EmailForm from './EmailForm';
import EnrollmentForm from './EnrollmentForm';
import '../styles/Kurssit.css';

const Kurssit = () => {
    const [showLinks, setShowLinks] = useState(false);
    const [enrollmentInfo, setEnrollmentInfo] = useState(null);

    const handleIlmottauduButtonClick = (courseInfo) => {
        setEnrollmentInfo(courseInfo);
    };

    const handleEnrollmentSuccess = () => {
        setEnrollmentInfo(null);
    };
  
    return (
      <div className='screen'>
      <div className="kurssitsivu">
        <Navbar showLinks={showLinks} setShowLinks={setShowLinks} />
        <div className="kurssit">
          <h1>Kurssit</h1>
        <div className='kurssi-card-container'>
        <div className="kurssi-card">
        <div className="kurssi-pic-frame">
          <img src="intensiivinen-small.jpeg" alt=" " className="kurssi-card-pic"  loading='lazy'/>
        </div>
          <div className="kurssi-header">
          <h2>Intensiivinenkurssi</h2>
          <p>3,5 viikkoa</p>
          </div>
          <div className='kurssi-text'>
          <p>
          <span className="p-with-dots"></span>Kurssikirja 
          <br />
          <span className="p-with-dots"></span>54 opetustuntia
          <br />
          <span className="p-with-dots"></span>Hakemusprosessissa avustaminen
          <br />
          <span className="p-with-dots"></span>Matkustamme kanssasi Romaniaan
          <br />
          <br />
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
          <img src="superkurssi-small.jpeg" alt=" " className="kurssi-card-pic" loading='lazy'/>
        </div>
          <div className="kurssi-header1">
          <h2>Superkurssi</h2>
          <p>9 viikkoa</p>
          </div>
          <div className='kurssi-text'>
          <p>
          <span className="p-with-dots"></span>Kurssikirja 
          <br />
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
          <img src="supertakuu-small.jpeg" alt=" " className="kurssi-card-pic" loading='lazy' />
        </div>
          <div className="kurssi-header">
          <h2>Super-Takuu kurssi</h2>
          <p>10 viikkoa</p>
          </div>
          <div className='kurssi-text'>
          <p>
          <span className="p-with-dots"></span>Kurssikirja 
          <br />
          <span className="p-with-dots"></span>114 opetustuntia + rahanpalautus 
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
          <img src="hakemus-matka-small.jpeg" alt=" " className="kurssi-card-pic" loading='lazy'/>
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
          <img src="hakemus-small.jpeg" alt=" " className="kurssi-card-pic" loading='lazy'/>
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
          <img src="kirurgi.jpg" alt=" " className="kurssi-card-pic" loading='lazy'/>
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
      </div>
    );
};


export default Kurssit;