import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faSearch, faPhone } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import Navbar from './Navbar';
import '../styles/Etusivu.css';
import EmailForm from './EmailForm';
import Timeline from './Timeline';
import Video from './Video';

const Etusivu = () => {
  const [showLinks, setShowLinks] = useState(false);
  const history = useHistory();

  const handleKurssitButtonClick = () => {
    history.push('/Kurssit');
  };

  return (
    <div className='screen'>
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
            <br />
          </div>
          <div className="image-container">
          <br /><br /><br /><br /><br /><br /><br />
            <img src="Video.png" alt=" " className="medical-image" loading="lazy" />
            <Video />
          </div>
        </div>
      </div>

      {/* Palvelumme Section */}
      <div className="palvelumme">
        <h1>Palvelumme</h1>
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
      <div className='aikajana'>
      <div className="aikajana-container">
      <h1>Aikajanamme</h1>
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
      </div>

      {/* Timeline Section */}
      <Timeline />
      {/* Lisa Tietoa Section */}
      <div className="lisa-tietoa">
        <h1>Lisätiedot</h1>
        <div className='info-card-container'>
        <div className="info-card">
          <img src="Aboutus.png" alt=" " className="card-pic" loading="lazy" />
          <h2>Lääketiede ulkomailla ?</h2>
          <p>Me haluamme olla nuorten tukena elämänsä tärkeimmän polun valitsemisessa sekä haaveiden toteuttamisessa ja tätä kautta luoda lisäarvoa tuleville kollegoille.</p>
          <div className="card-links1">
          <a href="/Meistä">Meistä</a>
          </div>
        </div>

        <div className="info-card">
          <div className="pic-frame">
          <img src="Aboutus.png" alt=" " className="card-pic" loading="lazy" />
          </div>
          <h2>Lääketiede Romaniassa</h2>
          <p>Opinnot ovat käytännönläheisiä, ja ensimmäiset vuodet keskittyvät teoriaan (prekliininen vaihe), kun taas viimeiset kolme vuotta sisältävät intensiivistä työkokemusta (postkliininen vaihe).</p>
          <div className="card-links2">
          <a href="/LääketiedeRomania">Lue Lisää</a>
          </div>
        </div>

        <div className="info-card">
          <div className="pic-frame">
          <img src="Aboutus.png" alt=" " className="card-pic" loading="lazy" />
          </div>
          <h2>Tenttivaatimukset</h2>
          <p>Romanian huippuyliopistot jättävät kemian ja fysiikan väliin. Pääsykokeissa keskittyvät anatomiaan ja fysiologiaan. Kokeet yleensä vaihtelevat (suulliset tai kirjalliset).</p>
          <div className="card-links3">
          <a href="/Tenttivaatimukset">Lue Lisää</a>
          </div>
        </div>
        </div>
      </div>
      {/* Ota Yhteyttä Section */}
      <EmailForm />
    </div>
  );
};

export default Etusivu;
