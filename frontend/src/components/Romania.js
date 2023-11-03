import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Navbar from './Navbar';
import '../styles/Romania.css';

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
        <div>
            <div className="romania">
                <Navbar showLinks={showLinks} setShowLinks={setShowLinks} />
                <div className="romania-card">
                    <h1>Romania</h1>
                    <img src="Romania.png" alt=" " className="romania-card-pic" />
                </div>
                <div className="outside-romania">
                    <div className="lääketiede-text">
                        <h2>Lääketiede Romaniassa</h2>
                        <p>Opinnot ovat käytännönläheisiä, ja ensimmäiset vuodet keskittyvät teoriaan (prekliininen vaihe), kun taas viimeiset kolme vuotta sisältävät intensiivistä työkokemusta (postkliininen vaihe).</p>
                        <a href="your-link-url">Lue Lisää</a>
                    </div>
                    <div className="tentti-text">
                        <h2>Tenttivaatimukset</h2>
                        <p>Romanian huippuyliopistot jättävät kemian ja fysiikan väliin. Pääsykokeissa keskittyvät anatomiaan ja fysiologiaan. Kokeet yleensä vaihtelevat (suulliset tai kirjalliset).</p>
                        <a href="your-link-url">Lue Lisää</a>
                    </div>
                </div>
            </div>

            <div className="vapaa-aika">
                <div className="centered-header">
                    <h1>Vapaa-aika</h1>
                    <p>Opintojen oheella sinulla on myös aikaa tutustua Romanian kuuluisiin nähtävyyksiin ja kauniiseen luontoon.</p>
                </div>
                <div className="vapaa-aika-content">
                <div className="vapaa-aika-text">
                    <h2>Vapaa-aika Romaniassa</h2>
                    <p>Romaniassa voit harrastaa kaikenlaista opintojen ohessa, jokainen varmasti löytää itselleen sen oikean harrastuksen mistä itse tykkää. Olit sitten kiinnostunut elokuvista, teatterista, ravintoloista, baari-illasta, ratsastuksesta, vaelluksesta tai nyrkkeilystä. Parasta vielä tässä hommassa on, että se on todella edullinen. Kelan myöntämästä opintotuesta pystyt kattamaan sen, joka antaa vielä enemmän väriä siihen opiskeluun Romaniassa.</p>
                </div>
                <img src="vapaa-aika.png" alt=" " className="vapaa-aika-image"/>
                </div>

                <div className="loma-content">
                <img src="Holiday.jpeg" alt=" " className="loma-image"/>
                <div className="loma-text">
                    <h2>Lomat</h2>
                    <p>Joululoma kestää 2 viikkoa</p>
                    <p>Hiihtoloma kestää 1 viikkoa</p>
                    <p>Pääsiäisloma kestää 11 päivää</p>
                    <p>Kesäloma kestää 3 viikkoa</p>
                </div>
              </div>

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
                            <form className='myForm'>
                            <FontAwesomeIcon
                            icon={faTimes} // Use the FontAwesome icon you prefer
                            className="x-button"
                            onClick={hideForm}
                            />
                            <h1>Harrastaminen & kustannusarviot</h1>
                            <div class="content-wrapper">
                                <p>Opiskelijalle matkakortti maksaa 7€/kk alle 27 vuotiaille opiskelijalle. Opiskelijakortilla pääset matkustamaan maan sisällä ilmaiseksi junalla. Romaniasta pääset myös muihin Euroopan maihin tosi edullisesti ja kätevästi, mm. Lontooseen tosi alle 20 punnalla ajoittain, Espanjaan 10€ jos haluat seikkailla, vaikka syyslomalla. Koti-ikävän tullessa Bukarestista lentää Suomeen suoralla lennolla kahdessa tunnissa. <br /> <br />
                                Romanian sisällä sekä naapurimaissa on paljon hienoja matkailukohteita, mihin pääset helposti junalla tai paikallisella bussilla. Kauniita aurinko kohteita ovat, Constantan ranta sekä upeat maisemat, Pääkaupungissa Bukarestissa viihtyy kovempikin bailaaja, Cluj-Napocassa on hienoimpia taidepiirteitä, Sighisoarassa on Euroopan parhaiten säilynyt keskiaikainen keskusta ja kaupungin kadut täyttyvät markkinahumusta joka viikonloppu. <br /> <br />
                                Romanian ilmasto on aivan mahtava! Niin kuin varmasti tiedät meillä Suomessa on 2-3 viikkoa vuodessa hyvät helteet, täällä Romaniassa se menee toisin päin. Romaniassa hellettä riittää ympäri vuoden. Romanian yliopistossa saat hyvät lomat, mikäli hoidat sinun työsi hyvinkoulussa.Koulun lomien pituuksiin pystyt vaikuttamaan itse, mikäli hoidatkaikki kurssisi hyvin ettet joudu uusimaan mitään niin voit päästä lomalle jo muutamaa viikkoa aikaisemmin.</p>
                            <div class="additional-content">
                                <p>Romaniassa harrastukset maksavat suunnilleen:<br />• Kuntosali jäsenyys, 10€/kk<br />• Elokuvat 4€ • Nyrkkeily kurssi 15-20€/kk <br />• Vapaaottelu kurssi 15-20€/kk<br /> • Ravintolat: Laadusta riippuen 3-15€<br /> • Kahvilat: 2-5€ <br />• Jalkapallo, koripallo, lentopallo, sulkapallo noin 15€/kk<br />
                                <br />Ilmaista harrastettavaa löytyy muun muassa:<br /> • Jalkapallo, koripallo, tennis mm. ulkotiloissa<br /> • Kirjastot <br />• Vaeltelu Romanian luonnon ympäristössä / vuoristoissa.<br /> • Opastetut turistikiertueet kaupungeissa<br /> • Koulun ohjelmat, joissa esimerkiksi jokainen halutessaan pukeutuu kulttuuri vaatetukseen, halloween juhlat, tanssiaiset, kulttuuri ruoka päivät tai koulun tanssiaiset.
                                </p>
                            </div>
                            </div>
                            </form> 
                        </div>
                    </>
                )}
                </div>
            </div>
        </div>
    );
};

export default Romania;
