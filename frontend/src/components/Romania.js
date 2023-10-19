import React, { useState } from 'react';
import Navbar from './Navbar';
import '../styles/Romania.css';

const Romania = () => {
    const [showLinks, setShowLinks] = useState(false);
  
    return (
      <div>
        <div className="romania">
        <Navbar showLinks={showLinks} setShowLinks={setShowLinks} />
        </div>
    </div>

    );
};

export default Romania;