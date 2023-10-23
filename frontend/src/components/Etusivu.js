import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faSearch, faPhone } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import Navbar from './Navbar';
import '../styles/Etusivu.css';
import EmailForm from './EmailForm';

const Etusivu = () => {
  const [showLinks, setShowLinks] = useState(false);
  const history = useHistory();

  const handleKurssitButtonClick = () => {
    history.push('/Kurssit');
  };

  return (
    <div style={{ maxWidth: "100%", overflowX: "auto" }}>
      <div className="etusivu">
        <Navbar showLinks={showLinks} setShowLinks={setShowLinks} />
        <div className="firstpage">
          <div className="text-container">
            <h1>Täydellinen paikka lääketieteelliselle matkallesi</h1>
            <p>Paikka jossa tuemme, ohjaamme ja mentoroimme koko sydämestämme pyrkiviä kollegoita heidän tiellään lääketieteen alalle.</p>
            <button className="kurssit-button" onClick={handleKurssitButtonClick}>Kurssit</button>
            <div className="frame-container">
              <p>Siellä missä lääketieteen taidetta rakastetaan, siellä rakastetaan myös ihmiskuntaa - Hippocrates</p>
            </div>
          </div>
          <div className="image-container">
            <img src="medical center.png" alt="Medical Center" className="medical-image" />
          </div>
        </div>
      </div>

      {/* Palvelumme Section */}
      <div className="palvelumme">
        <h1>Palvelumme</h1>
        <p>Some small text here...</p>
        <div className='card-container'>
          <div className="server-card">
            <div className="icon-frame">
              <FontAwesomeIcon icon={faBook} className="card-logo" />
            </div>
            <h2>Kurssit</h2>
            <p>Valmennuskursseillamme koulutamme tulevia kollegoitamme suoriutumaan erinomaisesti pääsykokeissa. Opetusmenetelmäämme ja pääsykokeeseen liittyvät neuvot ovat jo neljän vuoden ajan osoittautuneet kursseillemme korvaamattomiksi.</p>
          </div>

          <div className="server-card">
            <div className="icon-frame">
              <FontAwesomeIcon icon={faSearch} className="card-logo" />
            </div>
            <h2>Hakuprosessi</h2>
            <p>Paranna pääsymahdollisuuksiasi ulkoistamalla paperityöt ammattilaisille. Avullamme asia hoidetaan heti oikein ja sinulla on luonnollisesti mahdollisuus keskittyä vain lukemiseen ja pääsykokeessa menestymiseen.</p>
          </div>

          <div className="server-card">
            <div className="icon-frame">
              <FontAwesomeIcon icon={faPhone} className="card-logo" />
            </div>
            <h2>Asiakaspalvelu</h2>
            <p>Ajatus ulkomailla opiskelusta liittyy usein ällistyttävään kysymykseen. Olemme täällä sinua varten, joten ota meihin yhteyttä, jos sinulla on kysyttävää palveluistamme tai Romanian lääketieteellisestä koulutusohjelmasta yleensä.</p>
          </div>
        </div>
      </div>

      {/* Aikajana Section */}
      <div className="aikajana">
      <h2>Aikajanamme</h2>
      <p>Olemme erittäin ylpeitä tilastosaavutuksistamme vuosien varrella <br /> Tutoriemme ja opiskelijoiden yhdessä saavuttamat onnistumiset</p>
      <div className="timeline">
      <div className="timeline-item">
        <div className="circle">
        <span className="percentage">90%</span>
        </div>
      </div>
      <div className="timeline-item">
        <div className="circle">
        <span className="percentage">100%</span>
        </div>
      </div>
      <div className="timeline-item">
        <div className="circle">
        <span className="percentage">89%</span>
        </div>
      </div>
      <div className="timeline-item">
        <div className="circle">
        <span className="percentage">100%</span>
        </div>
      </div>
      <div className="timeline-item">
        <div className="circle">
        <span className="percentage">100%</span>
        </div>
      </div>
      </div>
      <div className="timeline-frame">
      <span className="year">2018</span>
      <span className="year">2019</span>
      <span className="year">2020</span>
      <span className="year">2021</span>
      <span className="year">2022</span>
      </div>
      </div>

      {/* Lisa Tietoa Section */}
      <div className="lisa-tietoa">
        <h1>Lisätiedot</h1>
        <p>Some small text here...</p>
        <div className='info-card-container'>
        <div className="info-card">
          <div className="pic-frame">
          <img src="your-image-url.jpg" alt=" " className="card-pic" />
          </div>
          <h2>Kurssit</h2>
          <p>Valmennuskursseillamme koulutamme tulevia kollegoitamme suoriutumaan erinomaisesti pääsykokeissa. Opetusmenetelmäämme ja pääsykokeeseen liittyvät neuvot ovat jo neljän vuoden ajan osoittautuneet kursseillemme korvaamattomiksi.</p>
          <a href="your-link-url">Your Link Text</a>
        </div>

        <div className="info-card">
          <div className="pic-frame">
          <img src="your-image-url.jpg" alt=" " className="card-pic" />
          </div>
          <h2>Kurssit</h2>
          <p>Valmennuskursseillamme koulutamme tulevia kollegoitamme suoriutumaan erinomaisesti pääsykokeissa. Opetusmenetelmäämme ja pääsykokeeseen liittyvät neuvot ovat jo neljän vuoden ajan osoittautuneet kursseillemme korvaamattomiksi.</p>
          <a href="your-link-url">Your Link Text</a>
        </div>

        <div className="info-card">
          <div className="pic-frame">
          <img src="your-image-url.jpg" alt=" " className="card-pic" />
          </div>
          <h2>Kurssit</h2>
          <p>Valmennuskursseillamme koulutamme tulevia kollegoitamme suoriutumaan erinomaisesti pääsykokeissa. Opetusmenetelmäämme ja pääsykokeeseen liittyvät neuvot ovat jo neljän vuoden ajan osoittautuneet kursseillemme korvaamattomiksi.</p>
          <a href="your-link-url">Your Link Text</a>
        </div>
        </div>
      </div>
      
      {/* Ota Yhteyttä Section */}
      <EmailForm />
    </div>
  );
};

export default Etusivu;
