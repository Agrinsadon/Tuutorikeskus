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
        <div className='lääketiede-pic-frame' style={{ backgroundImage: `url(/lääketiede.jpg)`}} loading="lazy" decoding="async" >
        <div className='lääketiede-main'>
          <h1>Lääketiede Romaniassa</h1>
          <p>Moni suomalainen opiskelija pohtii mahdollisuuksiaan jatkaa opintojaan ulkomailla. Yhä useampi opiskelija suuntaa ulkomaille eri lääketieteellisiin yliopistoihin kansainvälistymismahdollisuuksia
          kansainvälistymis  mahdollisuuksia etsien.</p>
        </div>
        </div>
        </div>
        <div className='myRomania'>
        <h1>Miksi Romania?</h1>
        <div className='lääketiede-text-container'>
        <div className="lääketiede-text1">
            <div className="text1-content">
                <h2>Mikä hakijoita houkuttelee ensisijaisesti ?</h2>
                <h3>• Hyvät sisäänpääsy mahdollisuudet</h3>
                <p>Sisäänpääsy Romanian lääketieteelliseen on huomattavasti todennäköisempää.</p>
                <h3>• Laadukas ja käytännönläheinen opetus</h3>
                <p>EU:n vaatimusten mukainen koulutus ja käytännönläheisempi opetus.</p>
                <h3>• Edulliset lukuvuosimaksut</h3>
                <p>Viro, Latvia ja muut Euroopan maat voivat veloittaa jopa kaksinkertaisia tai kolminkertaisia lukuvuosimaksuja verrattuna toisiin maihin. Romaniassa lukuvuosimaksu on noin 5 000 euroa.</p>
                <h3>• Alhainen elintaso, joka sopii hyvin opiskelijalle.</h3>
                <p>Maan yleisen alhaisen elintason vuoksi opintotuki kattaa kuukausittaiset kulusi.</p>
            </div>
            <div className="text2-content">
                <h2>Tutustu muihin hyödyllisiin asioihin, kuten kansainväliset ystävyyssuhteet ja turvallisuus.</h2>
                <p>Romanian lääketieteelliset opiskelumahdollisuudet tarjoavat paljon enemmän kuin pelkän koulutuksen. Opiskelijat voivat luoda merkittäviä kansainvälisiä ystävyyssuhteita, samalla kun Romania tarjoaa turvallisen ympäristön opiskelijoille. Tämä yhdistelmä tekee opiskeluelämyksestä rikkaamman ja huolettomamman.</p>
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
                    <p>Hakiessasi Romanian lääketieteelliseen yliopistoon, olet valmis aloittamaan uuden vaiheen elämässäsi vieraassa maassa. Hakiessasi Romanian lääketieteelliseen yliopistoon, olet valmis aloittamaan uuden vaiheen elämässäsi vieraassa maassa. Voit kuitenkin olla varma, että opintojesi aikana sosiaalinen pääomasi rikastuu, ja solmit pitkäkestoisia suhteita opiskelukollegoidesi kanssa. Yliopistoissa opiskelee opiskelijoita ympäri maailmaa: Amerikasta, Aasiasta, Afrikasta ja Euroopasta. Opintojen aikana ja niiden päätyttyä sinulla on mahdollisuus luoda kansainvälisiä suhteita. Suomalaisia opiskelijoita on paljon, ja tämä luku on kasvussa vuosittain. Suomalaisia opiskelijoita löytyy jokaiselta vuosiluokalta Romanian suosituimmista yliopistoista. Vuosittain noin 120 suomalaista opiskelijaa hakee Romanian englanninkielisiin lääketieteellisiin koulutusohjelmiin.</p>
                <div className="lääkeromania-content">
                    <h2>Turvallisuus</h2>
                    <p>Yleinen turvallisuus on todella tärkeä valintakriteeri vieraaseen maahan opiskelemaan mentäessä. Tästä syystä olemme tutkineet Romanian yleistä turvallisuustilannetta. Haastattelimme opiskelijoita ja tarkastelimme maan rikollisuustilastoja. Ennakkoluulojemme vastaisesti meille selvisi Romanian rikollisuustason olevan samassa suhteessa Suomen rikollisuuden kanssa. Haastatteluissa opiskelijat kertoivat, etteivät ole koskaan joutuneet ongelmiin tai vaaratilanteisiin. Opiskelijat mainitsivat myös, että poliisi avustaa ja tukee ulkomailta tulleita opiskelijoita. Eräs opiskelija kertoi esimerkkinä, kuinka hän oli unohtanut laukkunsa bussiin, mutta poliisin avustuksella hän sai laukun takaisin saman päivän aikana. Mikäli tunnet olosi turvalliseksi Suomessa, voit nauttia samanlaisesta turvallisuudentunteesta Romaniassa. Tämä kävi ilmi haastatteluissa, joissa opiskelijat totesivat, että Suomen ja Romanian turvallisuustaso on samankaltainen.</p>
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