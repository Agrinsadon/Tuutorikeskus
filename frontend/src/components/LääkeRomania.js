import React, { useState } from 'react';
import Navbar from './Navbar';
import '../styles/LääkeRomania.css';

const Lääketiede = () => {
    const [showLinks, setShowLinks] = useState(false);
  
    return (
      <div>
        <div className="lääketiede">
        <Navbar showLinks={showLinks} setShowLinks={setShowLinks} />
        </div>
    </div>

    );
};

export default Lääketiede;