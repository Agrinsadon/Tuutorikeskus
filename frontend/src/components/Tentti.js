import React, { useState } from 'react';
import Navbar from './Navbar';
import '../styles/Tentti.css';

const Tentti = () => {
    const [showLinks, setShowLinks] = useState(false);
  
    return (
      <div className='screen'>
        <div className="tentti">
        <Navbar showLinks={showLinks} setShowLinks={setShowLinks} />
        <div className='tentti-pic-frame' style={{ backgroundImage: `url(/tentti-image.jpeg)`}}>
        <div className='tentti-main'>
          <h1>Tenttivaatimukset</h1>
          <p>Romanian arvostetuimissa yliopistoissa ei edellytetä kemiaa ja fysiikkaa valintakokeissa. Kemian ja fysiikan puolesta pääsykokeissa painotetaan anatomian ja fysiologian osaamista. Hakemaasi yliopistoon pääsykokeet ovat joko suullisia tai kirjallisia. Anatomia ja fysiologia ovat laajoja ja haastavia opintoja. Pääset koe tilaisuuksissa näyttämään vahvaa englannin kielen taitoa sekä asiantuntevaa osaamistasi anatomiassa sekä fysiologiassa</p>        </div>
        </div>
        </div>

        <div className='myTentti'>
        <h1>Pääsykoe koostuu kahdesta vaiheesta</h1>
        <div className='tentti-container'>
        <div className="tentti-text1">
          <h2>Englanninkielen koe</h2>
            <p>Kokeessa tarkistetaan englanninkielen tasosi. Suomessa yleissivistävän koulutuksen suorittanut pärjää kokeessa hyvin kokemuksien mukaan.</p>
            <p>Haastattelu tilanteessa sinua haastattelee 2-3 professoria. Kysymykset ovat yleensä motivaatio pohjaisia. (esim. miksi sinä ansaitsisit opiskelu paikan yliopistossa). Englanninkielen kirjallinen koe taas puolestaan koostuu monivalinta tehtävistä sekä pieni muotoisesta luku harjoituksesta. Tämän lisäksi joissain koulussa kirjoitat motivaatio kirjeen koe tilaisuudessa.</p>
        </div>
        <div className="tentti-text2">
          <h2>Anatomian & Fysiologian koe</h2>
            <p>Koe on suullinen ja hyvin laaja. Professorit voivat kysyä mitä tahansa koskien ihmisen anatomiaa tai physiologiaa. Kokeessa ei katsota ainoastaan aihealueiden osaamista vaan niiden esittämistä ammatti kielellä.</p>
            <p>Suullinen pääsykoe kestää koko päivän tyypillisesti klo 9-21. Tämä johtuu siitä, että kaikki hakijat täytyy ehtiä haastatella läpi. Pidä huoli siitä, että tiedät, milloin sinut kutsutaan haastatteluun ja missä välissä on taukoja. Koska odotukset kokeiden välillä kestävät useita tunteja. Odottaessa voit myös käydä lepäämässä, tankkaamassa tai lukemassa. Kirjallinen pääsykoe tilaisuus on suomalaisille opiskelijoille tuttua. Eli koe alkaa 9:ltä aamulla ja kestää klo 12:00 asti . Kokeet ovat monivalinta kysymyksiä anatomian ja physiologian opinnoista.</p>
        </div>
        </div>
        </div>
    </div>

    );
};

export default Tentti;