import React, { useState } from 'react';
import Navbar from './Navbar';
import '../styles/Romania.css';

const Romania = () => {
    const [showLinks, setShowLinks] = useState(false);
  
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
                <img src="vapaa-aika.png" alt=" " class="vapaa-aika-image"/>
                </div>

                <div className="vapaa-aika-content">
                <img src="vapaa-aika.png" alt=" " class="vapaa-aika-image"/>
                <div className="vapaa-aika-text">
                    <h2>Vapaa-aika Romaniassa</h2>
                    <p>Romaniassa voit harrastaa kaikenlaista opintojen ohessa, jokainen varmasti löytää itselleen sen oikean harrastuksen mistä itse tykkää. Olit sitten kiinnostunut elokuvista, teatterista, ravintoloista, baari-illasta, ratsastuksesta, vaelluksesta tai nyrkkeilystä. Parasta vielä tässä hommassa on, että se on todella edullinen. Kelan myöntämästä opintotuesta pystyt kattamaan sen, joka antaa vielä enemmän väriä siihen opiskeluun Romaniassa.</p>
                </div>
              </div>
            </div>
            
        </div>
    );
};

export default Romania;
