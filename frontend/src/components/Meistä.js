import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Navbar from './Navbar';
import '../styles/Meistä.css';

const Meistä = () => {
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
        <div className="meistä">
        <Navbar showLinks={showLinks} setShowLinks={setShowLinks} />
        <div className='meistä-pic-frame' style={{ backgroundImage: `url(/meistä.jpg)`}} loading="lazy" decoding="async">
        <div className='meistä-main'>
          <h1>Tukemassa kaltaistemme nuorien lääkäripolkua</h1>
          <p>TUUTORIKESKUS Oy on vuonna 2016  perustettu täysin suomalainen osakeyhtiö kolmen lääketieteellisen opiskelijan toimesta. Meidän ydintehtävämme on yksinkertainen: tahdomme auttaa sinua saavuttamaan unelmasi.</p>
        </div>
        </div>
        </div>
      <div className='myMeistä-frame'>
      <div className='myMeistä'>
      <h1>Meistä</h1>
        <svg  className="underline" width="284" height="40" viewBox="0 0 284 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M181.034 0.697709C160.838 1.32266 140.654 2.37085 120.504 3.84229C102.218 4.16634 83.9294 4.49039 65.6439 4.81443C45.5794 5.17155 25.5149 5.52535 5.45374 5.88247C3.51277 5.91553 0.507061 7.34068 0.209467 9.49328C-0.117887 11.8674 2.81838 12.2642 4.47168 12.2378C17.5096 12.0063 30.5476 11.7748 43.5855 11.5434C38.1594 12.2345 32.7398 12.952 27.3203 13.7026C25.4422 13.9638 22.82 14.8434 22.2215 16.8968C21.6859 18.7286 23.359 20.0281 25.1347 20.0612C55.2446 20.577 85.3579 21.0962 115.468 21.612C121.876 21.7211 128.284 21.8335 134.692 21.9426C125.474 22.9512 116.268 24.1118 107.089 25.4245C92.6952 27.4878 78.3611 29.9347 64.0898 32.7222C62.5489 33.0231 60.3632 34.3722 60.1285 36.1015C59.9003 37.7548 61.7222 38.8361 63.1838 38.8493C97.427 39.1469 131.67 39.4478 165.913 39.7454C175.569 39.8281 185.221 39.914 194.876 39.9967C197.088 40.0165 199.925 39.385 201.039 37.2126C202.035 35.2683 200.17 33.6513 198.269 33.6348C165.305 33.3471 132.341 33.0595 99.3779 32.7718C100.297 32.6329 101.213 32.4907 102.132 32.3551C114.588 30.5101 127.087 28.946 139.613 27.6664C164.677 25.1071 189.853 23.6819 215.046 23.4009C216.161 23.3876 217.288 23.381 218.412 23.3744C231.182 23.5926 243.949 23.8142 256.719 24.0324C258.928 24.0688 261.775 23.4075 262.883 21.2483C263.901 19.2643 261.997 17.7466 260.112 17.6705C247.081 17.1481 234.036 16.9232 220.995 16.9993C203.923 16.705 186.851 16.414 169.779 16.1197C139.669 15.6039 109.556 15.0847 79.4456 14.5689C77.0186 14.5259 74.5882 14.4863 72.1612 14.4433C87.9271 12.7668 103.719 11.3483 119.532 10.1943C152.495 9.60901 185.462 9.02705 218.426 8.44178C238.49 8.08467 258.555 7.73086 278.616 7.37374C280.457 7.34068 283.162 6.07756 283.714 4.17956C284.257 2.32456 282.57 1.08127 280.801 1.01514C247.56 -0.221528 214.279 -0.330646 181.034 0.697709Z" fill="#fff"/>
        </svg>
        <div className='myMeistä-text1-container'>
        <div className='myMeistä-text1'>
        <h2>Kokemus</h2>
        <p>Olemme perehtyneet Romanian lääketieteellisten yliopistojen valintakokeisiin, tiedämme, mitä niissä korostetaan ja mitä hakijan tulisi opiskellessaan huomioida. Ota yhteyttä, jos haluat lisätietoja Romanian lääketieteellisestä yliopistosta.</p>
        </div>
        <img src="box1.PNG" alt="" className="box1" loading="lazy" />
        </div>
        <div className='myMeistä-text2-container'>
        <img src="box1.PNG" alt="" className="box2" loading="lazy" />
        <div className='myMeistä-text2'>
        <h2>Menestys Tarina</h2>
        <p>Havaitessamme muiden tarpeen samankaltaiseen ohjeistukseen päätimme toimia. Kesällä 2017 toteutimme intensiivikurssin, jonka 13 osallistujasta peräti 11 sai opiskelupaikan Romaniasta eri yliopistoista. Tästä syntyi idea tarjota apua ja ohjausta niille, jotka tavoittelevat kansainvälisiä jatko-opintoja.</p>
        <button onClick={showForm}>Lue Lisää</button>
        </div>

        {isFormVisible && ( // Used in Romania.js
        <>
            <div className="overlay-meistä" onClick={hideForm}></div>
            <div className="form-container-meistä">
                <div className='myFormeistä'>
                <FontAwesomeIcon
                icon={faTimes}
                className="x-button"
                onClick={hideForm}
                />
                <div className="meistä-wrapper">
                    <h2>Haasteet</h2>
                    <p>Toisen asteen tutkinnon suoritettua tavoitteenamme oli hakea lääketieteelliseen yliopistoon Suomessa. Esteeksi nousivat todella vaikeat pääsykokeet, jotka ovat jokaisen hakijan painajainen. Todennäköisyys päästä suomalaiseen lääketieteelliseen yliopistoon ensimmäisellä yrityksellä on häviävän pieni. Erityisen haastavaksi teki se, että olimme juuri valmistuneet toiseen asteen koulutuksesta, eikä jäänyt paljon aikaa valmistautua valintakokeeseen joka järjestetään luonnollisesti sinä kuluvana vuonna. Toinen vaihtoehto olisi ollut toki pitää välivuosi ja valmistautua ensivuoden pääsykokeeseen, mikä olisi tarkoittanut opiskelu vuosien menettämistä. Osa meistä oli jo käynyt tämänkin vaiheen käynyt läpi ja osallistunut muutaman kerran pääsykokeeseen tuloksetta.  Todennäköisyydet valmistua lääkärin ammattiin Suomessa olivat minimaaliset. Me tiesimme nämä faktat!
                    Näitä faktoja pohtiessamme, päätimme hakea ulkomaille. Siten emme menettäsi enempää opiskeluvuosia  ja jossain vaiheessa valmistuisimme lääkäreiksi. Tällöin vastaan tuli kansainvälinen Romanian lääketieteellinen yliopisto.  Pääsykoe osoittautui yllättävän vaikeaksi sekä vastassa oli aivan erilainen hakuprosessi, puhumattakaan pääsykoemateriaalien puutteista. Emme tienneet mitä opiskella, mitä aihealuetta tulisi painottaa ja mistä asioista riittäisi vain yleistietämys. Anatomian ja fysiologian opinnot ovat erittäin laajoja sekä vaikeita aihealueita. Se oli kaikkien tiedossa oleva tosiasia. Me saimme ohjeistusta meidän onneksemme kaverilta, joka oli opiskelemassa Romaniassa lääketieteellisessä yliopistossa. Hän neuvoi ja opasti meitä. Nyt on vuoromme tehdä sama muiden puolesta.</p>
                <div className="meistä-content">
                    <h2>Ratkaisu</h2>
                    <p>Huomasimme, että jatko-opintoihin hakevat tarvitsevat ohjeistusta, valmennusta pääsykokeessa onnistumisessa, neuvoja paperiasioissa ja apua asumisjärjestelyissä. Romaniassa, jos ei ole kontakteja tai tuttavia kyseisessä maassa, hakuprosessi hankaloituu huomattavasti. Tästä syntyi meidän ideamme, joka pilotoitiin kesän 2017 puolessa välissä. Kolmen viikon intensiivikurssille osallistui 13 kurssilaista, joista 11 opiskelijaa sai opiskelupaikan kolmesta eri yliopistosta ympäri Romaniaa. </p>
                </div>
                </div>
                </div> 
            </div>
        </>
    )}
        </div>
        <div className='myMeistä-text3-container'>
        <div className='myMeistä-text3'>
        <h2>Kokemus</h2>
        <p>Olemme perehtyneet Romanian lääketieteellisten yliopistojen valintakokeisiin, tiedämme, mitä niissä korostetaan ja mitä hakijan tulisi opiskellessaan huomioida. Ota yhteyttä, jos haluat lisätietoja Romanian lääketieteellisestä yliopistosta.</p>
        </div>
        <img src="box1.PNG" alt="" className="box1" loading="lazy" />
        </div>
      </div>
      </div>
    </div>

    );
};

export default Meistä;