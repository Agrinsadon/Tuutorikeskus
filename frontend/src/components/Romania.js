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
        <div class="outside-romania">
          <div class="lääketiede-text">
            <h2>Lääketiede Romaniassa</h2>
            <p>Opinnot ovat käytännönläheisiä, ja ensimmäiset vuodet keskittyvät teoriaan (prekliininen vaihe), kun taas viimeiset kolme vuotta sisältävät intensiivistä työkokemusta (postkliininen vaihe).</p>
            <ul>
              <li><a href=" ">Lue Lisää</a></li>
            </ul>
          </div>
          <div class="tentti-text">
            <h2>Tenttivaatimukset</h2>
            <p>Romanian huippuyliopistot jättävät kemian ja fysiikan väliin. Pääsykokeissa keskittyvät anatomiaan ja fysiologiaan. Kokeet yleensä vaihtelevat (suulliset tai kirjalliset).</p>
            <ul>
              <li><a href=" ">Lue Lisää</a></li>
            </ul>
          </div>
        </div>
        </div>

      </div>
    );
};

export default Romania;