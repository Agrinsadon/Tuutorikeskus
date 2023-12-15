import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Navbar from './Navbar';
import '../styles/Romania.css';
import VideoCarousel from './VideoCarousel';

const Romania = () => {
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
            <div className="romania">
                <Navbar showLinks={showLinks} setShowLinks={setShowLinks} />
                <div className="romania-main">
                <h1>Romania</h1>
                <div className='romania-card-container'>
                <div className="romania-card">
                <div className="romania-pic-frame">
                <iframe
                    src="https://www.youtube.com/embed/snc2a09ra40?si=FtLaRye07gmWPbzs&autoplay=1&loop=1&playlist=snc2a09ra40&mute=1&modestbranding=1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
                </div>


                <div className="outside-romania">
                    <div className="lääketiede-romania-text">
                        <h2>Lääketiede Romaniassa</h2>
                        <p>Opinnot ovat käytännönläheisiä. Ensimmäisinä vuosina keskitytään teoriaan (prekliininen vaihe), kun taas viimeiset kolme vuotta sisältävät intensiivistä työkokemusta (postkliininen vaihe).</p>
                        <a href="/LääketiedeRomaniassa">Lue Lisää</a>
                    </div>
                    <div className="tentti-romania-text">
                        <h2>Tenttivaatimukset</h2>
                        <p>Romaniassa huippuyliopistot eivät vaadi kemiaa tai fysiikkaa. Pääsykokeissa keskitytään anatomiaan ja fysiologiaan. Koe on pääpainoitteisesti suullinen.<br /><br /></p>
                        <a href="/Tenttivaatimukset">Lue Lisää</a>
                    </div>
                </div>
                </div>
                </div>
                </div>
            </div>

            <div className="vapaa-aika">
                <div className="centered-header">
                    <h1>Vapaa-aika</h1>
                    <p>Opintojen ohella sinulla on aikaa tutustua Romanian kuuluisiin nähtävyyksiin ja kauniiseen luontoon</p>
                </div>
                <div className="vapaa-aika-content">
                <div className="vapaa-aika-text">
                    <h2>Vapaa-aika Romaniassa</h2>
                    <p>Romaniassa on monipuoliset harrastusmahdollisuudet, josta jokainen varmasti löytää itsellensä sen oikean harrastuksen. Olit sitten kiinnostunut elokuvista, teatterista, ravintoloista, ratsastuksesta, vaelluksesta tai nyrkkeilystä. Romaniassa harrastukset ovat todella edullisia ja Kelan myöntämästä opintotuesta pystyt kattamaan harrastuksesi.</p>
                </div>
                <img src="vapaa-aika.png" alt=" " className="vapaa-aika-image"/>
                </div>

                <div className="loma-content">
                <img src="Holiday.jpeg" alt=" " className="loma-image"/>
                <div className="loma-text">
                    <h2>Lomat</h2>
                    <p>Joululoma kestää 2 viikkoa</p>
                    <p>Hiihtoloma kestää 1 viikon</p>
                    <p>Pääsiäisloma kestää 11 päivää</p>
                    <p>Kesäloma kestää 3 kuukautta</p>
                </div>
              </div>

              <VideoCarousel />

              <div className="harrastus-content">
                <div className="harrastus-text">
                    <h2>Harrastaminen & kustannusarviot</h2>
                    <p>Lisätietoa harrastuksista sekä niiden kustannuksista</p>
                    <button className="show-form-button" onClick={showForm}>Lue Lisää</button>
                </div>
                {isFormVisible && (
                    <>
                        <div className="overlay" onClick={hideForm}></div>
                        <div className="form-container">
                            <div className='myForm'>
                            <FontAwesomeIcon
                            icon={faTimes}
                            className="x-button"
                            onClick={hideForm}
                            />
                            <h1>Harrastaminen & kustannusarviot</h1>
                            <div className="content-wrapper">
                                <p>Alle 27-vuotiaalle opiskelijalle matkakortti matkakortti maksaa 7€/kk. Opiskelijakortilla pääset matkustamaan maan sisällä ilmaiseksi junalla. Romaniasta pääset myös muihin Euroopan maihin tosi edullisesti ja kätevästi. Muun muassa Lontooseen pääsee ajoittain alle 20 punnalla ja Espanjaan 10€. Koti-ikävän tullessa Bukarestista lentää Suomeen suoralla lennolla kahdessa tunnissa. <br /> <br />
                                Romanian sisällä sekä naapurimaissa on paljon hienoja matkailukohteita, joihin pääset helposti junalla tai paikallisella bussilla. Kauniita aurinkokohteita ovat, Constantan ranta sekä upeat maisemat, Pääkaupungissa Bukarestissa viihtyy kovempikin bailaaja, Cluj-Napocassa on hienoimpia taidepiirteitä, Sighisoarassa on Euroopan parhaiten säilynyt keskiaikainen keskusta ja kaupungin kadut täyttyvät markkinahumusta joka viikonloppu. <br /> <br />
                                Romanian ilmasto on aivan mahtava! Niin kuin varmasti tiedät meillä Suomessa on 2-3 viikkoa vuodessa hyvät helteet, täällä Romaniassa se menee toisin päin. Romaniassa hellettä riittää ympäri vuoden. Romanian yliopistossa saat hyvät lomat, Mikäli hoidat työsi hyvin. Koulun lomien pituuksiin pystyt vaikuttamaan itse, mikäli hoidat kaikki kurssisi hyvin ettet joudu uusimaan mitään niin voit päästä lomalle jo muutamaa viikkoa aikaisemmin.</p>
                            <div className="additional-content">
                                <p>Romaniassa harrastukset maksavat suunnilleen:<br />• Kuntosali jäsenyys, 10€/kk<br />• Elokuvat 4€ <br />• Nyrkkeily kurssi 15-20€/kk <br />• Vapaaottelu kurssi 15-20€/kk<br /> • Ravintolat: Laadusta riippuen 3-15€<br /> • Kahvilat: 2-5€ <br />• Jalkapallo, koripallo, lentopallo, sulkapallo noin 15€/kk<br />
                                <br />Ilmaista harrastettavaa löytyy muun muassa:<br /> • Jalkapallo, koripallo, tennis mm. ulkotiloissa<br /> • Kirjastot <br />• Vaeltelu Romanian luonnon ympäristössä / vuoristoissa.<br /> • Opastetut turistikiertueet kaupungeissa<br /> • Koulunohjelmat, joissa esimerkiksi jokainen halutessaan pukeutuu kulttuuri vaatetukseen, tanssiaiset, kulttuuri ruoka päivät tai koulun tanssiaiset.
                                </p>
                            </div>
                            </div>
                            </div> 
                        </div>
                    </>
                )}
                </div>
                <br /> <br />
            </div>
        </div>
    );
};

export default Romania;
