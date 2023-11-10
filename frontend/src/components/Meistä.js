import React, { useState } from 'react';
import Navbar from './Navbar';
import '../styles/Meistä.css';


const Meistä = () => {
    const [showLinks, setShowLinks] = useState(false);
  
    return (
      <div>
        <div className="meistä">
        <Navbar showLinks={showLinks} setShowLinks={setShowLinks} />
        <div className='meistä-pic-frame' style={{ backgroundImage: `url(/meistä.jpg)` }}>
        <div className='meistä-main'>
          <h1>Tukemassa kaltaistemme nuorien lääkäripolkua</h1>
          <p>TUUTORIKESKUS Oy on vuonna 2016  perustettu täysin suomalainen osakeyhtiö kolmen lääketieteellisen opiskelijan toimesta. Meidän ydintehtävämme on yksinkertainen: tahdomme auttaa sinua saavuttamaan unelmasi.</p>
        </div>
        </div>
        </div>
    </div>

    );
};

export default Meistä;