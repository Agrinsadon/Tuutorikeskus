import React, { useState } from 'react';
import Navbar from './Navbar';
import '../styles/LääkeRomania.css';

const Lääketiede = () => {
    const [showLinks, setShowLinks] = useState(false);
  
    return (
      <div className='screen'>
        <div className="lääketiede">
        <Navbar showLinks={showLinks} setShowLinks={setShowLinks} />
        <div className="lääketiede-main">
          <h1>Lääketiede Romaniassa</h1>
        <div className='lääketiede-card-container'>
        <div className="lääketiede-card">
        <div className="lääketiede-pic-frame">
          <img src="lääketiede.jpg" alt=" " className="lääketiede-card-pic" loading='lazy' />
        </div>
          <div className='lääketiede-text'>
          <p> Moni suomalainen opiskelija pohtii mahdollisuuksiaan jatkaa opintojaan ulkomailla. Yhä useampi opiskelija suuntaa ulkomaille eri lääketieteellisiin yliopistoihin kansainvälistymismahdollisuuksia etsien. Jos olet harkinnut mahdollisuutta suorittaa lääketieteen tutkinnon ulkomailla englanninkielisessä opetusohjelmassa? Niin olet oikeassa paikassa!</p>
          </div>
        </div>
        </div>
        </div>
        </div>
        <div className='myRomania'>
        <h1>Miksi Romania ?</h1>
        <div className='lääketiede-text-container'>
        <div className="lääketiede-text1">
          <h2>Mikä hakijoita houkuttelee ensisijaisesti ?</h2>
          <h3>Hyvät sisäänpääsymahdollisuudet</h3>
          <p>Sisäänpääsy Romanian lääketieteelliseen on huomattavasti todennäköisempää.</p>
          <h3>Laadukas ja käytännönläheinen opetus</h3>
          <p>EU:n vaatimusten mukainen koulutus ja käytännön läheisempi opetus.</p>
          <h3>Edulliset lukuvuosimaksut</h3>
          <p>Viron, Latvian sekä muut euroopan maat veloittavat jopa 2-3 kertaisia lukuvuosi maksuja. Romanian lukuvuosi maksu on n.5 000€</p>
          <h3>Alhainen elintaso, joka sopii hyvin opiskelijalle.</h3>
          <p>Maan yleisen alhaisen elintason vuoksi opintotuki kattaa sinun kuukauden kulut.</p>
        </div>
        </div>
        </div>
    </div>

    );
};

export default Lääketiede;