import React, { useState } from 'react';
import Navbar from './Navbar';
import '../styles/Kurssit.css';

const Kurssit = () => {
    const [showLinks, setShowLinks] = useState(false);
  
    return (
      <div>
        <div className="kurssit">
        <Navbar showLinks={showLinks} setShowLinks={setShowLinks} />
        </div>
    </div>

    );
};

export default Kurssit;