import React, { useState } from 'react';
import Navbar from './Navbar';
import '../styles/Yhteistiedot.css';

const Yhteistiedot = () => {
    const [showLinks, setShowLinks] = useState(false);
  
    return (
      <div>
        <div className="yhteistiedot">
        <Navbar showLinks={showLinks} setShowLinks={setShowLinks} />
        </div>
    </div>

    );
};

export default Yhteistiedot;