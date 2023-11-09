import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Navbar from './Navbar';
import '../styles/LääkeRomania.css';

const Lääketiede = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [isFormVisible, setFormVisible] = useState(false);

  const showForm = () => {
    setFormVisible(true);
  };

  const hideForm = () => {
    setFormVisible(false);
  };
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
        <div class="lääketiede-text1">
            <div class="text1-content">
                <h2>Mikä hakijoita houkuttelee ensisijaisesti ?</h2>
                <h3>• Hyvät sisäänpääsymahdollisuudet</h3>
                <p>Sisäänpääsy Romanian lääketieteelliseen on huomattavasti todennäköisempää.</p>
                <h3>• Laadukas ja käytännönläheinen opetus</h3>
                <p>EU:n vaatimusten mukainen koulutus ja käytännön läheisempi opetus.</p>
                <h3>• Edulliset lukuvuosimaksut</h3>
                <p>Viron, Latvian sekä muut euroopan maat veloittavat jopa 2-3 kertaisia lukuvuosi maksuja. Romanian lukuvuosi maksu on n.5 000€</p>
                <h3>• Alhainen elintaso, joka sopii hyvin opiskelijalle.</h3>
                <p>Maan yleisen alhaisen elintason vuoksi opintotuki kattaa sinun kuukauden kulut.</p>
            </div>
            <div class="text2-content">
                <h2>Tutustu muihin hyödyllisiin asioihin, kuten kansainväliset ystävyyssuhteet & turvallisuuteen</h2>
                <p>Romanian lääketieteelliset opiskelut tarjoavat paljon enemmän kuin vain koulutuksen. Opiskelijat voivat luoda merkittäviä kansainvälisiä ystävyyssuhteita, samalla kun Romania tarjoaa turvallisen ympäristön opiskelijoille. Tämä yhdistelmä tekee opiskeluelämyksestä rikkaamman ja huoleton.</p>
                <button onClick={showForm}>Lue Lisää</button>
            </div>
        </div>
        </div>
        {isFormVisible && ( // Used in Romania.js
        <>
            <div className="overlay-lääkeromania" onClick={hideForm}></div>
            <div className="form-container-lääkeromania">
                <div className='mylääkeromania'>
                <FontAwesomeIcon
                icon={faTimes}
                className="x-button"
                onClick={hideForm}
                />
                <div className="lääkeromania-wrapper">
                    <h2>Kansainväliset opiskelukaverit</h2>
                    <p>Hakiessasi Romanian lääketieteelliseen yliopistoon. Olet valmis aloittamaan uuden vaiheen elämässäsi, vieraassa maassa. Voit kuitenkin olla varma siitä, että opintojesi aikana sosiaalinen pääomasi rikastuu. Solmit pitkäkestoisia suhteita opiskelu- kollegoiden kanssa. Yliopistoissa opiskelee opiskelijoita ympäri maailmaa Amerikasta, Aasiasta, Afrikasta ja Euroopasta. Opintojen aikana ja päätyttyä sinulla on kansainvälisiä suhteita. Suomalaisiakin opiskelijoita on paljon ja tämä luku on nousussa vuosittain.  Suomalaisia opiskelijoita löytyy jokaisilta vuosiluokilta Romanian suosituimmista yliopistoista. Vuosittain Romanian englanninkielisissä lääketieteellisiin koulutusohjelmiin hakee n. 120 opiskelijaa Suomesta.</p>
                <div className="lääkeromania-content">
                    <h2>Turvallisuus</h2>
                    <p>Yleinen turvallisuus on todella tärkeä valintakriteeri vieraaseen maahan opiskelemaan mentäessä. Tämän vuoksi olemme tehneet selvityksiä Romanian yleisestä turvallisuudesta. Olemme haastatelleet opiskelijoita ja selvittänyt maan rikollisuuden tilastojen valossa. Ennakkoluulojen vastaisesti meille selvisi Romanian rikollisuustason olevan samassa suhteessa Suomen rikollisuuden kanssa. Haastatteluissa opiskelijat kertoivat, kuinka eivät ole koskaan joutuneet ongelmiin tai vaaratilanteisiin. Opiskelijat myös kertoivat, kuinka poliisi avustaa ja tukee ulkomailta tulleita opiskelijoita. Eräs opiskelija kertoi esimerkkinä, kuinka hän oli unohdettuaan laukkunsa bussiin saanut poliisin toimittamana laukun saman päivän aikana kotiin omistajalleen. Mikäli tunnet olosi turvalliseksi Suomessa, niin saat nauttia samanlaisesta turvallisuuden tunteesta Romaniassa. Tämä kävi ilmi haastatteluissa, joissa opiskelijat totesivat, että suomen ja romanian turvallisuustaso on samankaltainen.</p>
                </div>
                </div>
                </div> 
            </div>
        </>
    )}
        </div>
    </div>

    );
};

export default Lääketiede;