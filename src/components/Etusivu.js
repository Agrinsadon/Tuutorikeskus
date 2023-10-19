import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faSearch, faPhone } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import Navbar from './Navbar';
import '../styles/Etusivu.css';

const Etusivu = () => {
  const [showLinks, setShowLinks] = useState(false);
  const history = useHistory();

  const handleKurssitButtonClick = () => {
    history.push('/Kurssit');
  };

  const handleMeistäButtonClick = () => {
    history.push('/Meistä');
  };

  return (
    <div>
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

      {/* Lisa Tietoa Section */}
      <div className="lisa-tietoa">
      <div className='info-card'>
        <div className="big-card">
          <h2>Lääketiede ulkomailla?</h2>
          <p>Suomessa tiedeyliopistoihin hyväksytään vain alle 11,5 lääketieteen tasoisia hakijoita. Tästä johtuen suuri osa lääkkeistä löytyy ulkomailta, mm. Ruotsissa, Virossa, Latviassa ja Romaniassa.<br>
          </br> <br></br>
          Haluamme varmistaa, että tavoittelevilla opiskelijoilla on mahdollisuus toteuttaa unelmiaan ja saavuttaa täysi potentiaalinsa lääketieteen alalla. Missiomme on tukea näitä nuoria yksilöitä hallitsemaan ratkaisevan polun, joka muokkaa heidän tulevaisuuttaan ja edistää merkittävästi heidän henkilökohtaista ja ammatillista kasvuaan. Näin toimimalla annamme heille mahdollisuuden toteuttaa toiveensa, mutta pyrimme myös luomaan lisäarvoa tuleville työtovereilleen ja koko terveydenhuoltoalalle. Sitoutumisemme perustuu huippuosaamisen, innovaatioiden ja omistautumisen edistämiseen seuraavan sukupolven terveydenhuollon ammattilaisten keskuudessa.</p>
          <button className="info-button" onClick={handleMeistäButtonClick}>Meistä</button>
        </div>
      <div className='small-cards-container'>
        <div className="small-card">
          <h2>Lääketiede Romaniassa</h2>
          <p>Romanian englanninkieliset lääketieteen koulutusohjelmat ovat korkeatasoisia ja täyttävät EU-maiden ja myös Suomen vaatimukset. Opinnot ovat käytännönläheisiä, ja ensimmäiset vuodet keskittyvät teoriaan (prekliininen vaihe), kun taas viimeiset kolme vuotta sisältävät intensiivistä työkokemusta (postkliininen vaihe).</p>
          <button className="info-button" onClick={handleMeistäButtonClick}>Lue Lisää</button>
        </div>

        <div className="small-card">
          <h2>Tenttivaatimukset</h2>
          <p>Romanian huippuyliopistot jättävät kemian ja fysiikan väliin pääsykokeissa ja keskittyvät anatomiaan ja fysiologiaan. Kokeet vaihtelevat (suulliset tai kirjalliset), ja ne tarjoavat alustan englannin- ja ainetaitosi esittelemiseen.</p>
          <button className="info-button" onClick={handleMeistäButtonClick}>Lue Lisää</button>
        </div>
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
    </div>
  );
};

export default Etusivu;
