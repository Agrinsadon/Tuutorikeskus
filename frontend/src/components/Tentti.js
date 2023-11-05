import React, { useState } from 'react';
import Navbar from './Navbar';
import '../styles/Tentti.css';

const Tentti = () => {
    const [showLinks, setShowLinks] = useState(false);
  
    return (
      <div>
        <div className="tentti">
        <Navbar showLinks={showLinks} setShowLinks={setShowLinks} />
        </div>
    </div>

    );
};

export default Tentti;