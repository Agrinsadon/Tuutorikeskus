import React, { useState } from 'react';
import Navbar from './Navbar';
import '../styles/Meistä.css';

const Meistä = () => {
    const [showLinks, setShowLinks] = useState(false);
  
    return (
      <div>
        <div className="meistä">
        <Navbar showLinks={showLinks} setShowLinks={setShowLinks} />
        </div>
    </div>

    );
};

export default Meistä;