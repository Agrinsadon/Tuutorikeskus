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
          <p>asfdafdasf </p>
          </div>
        </div>
        </div>
        </div>
        </div>
    </div>

    );
};

export default Lääketiede;