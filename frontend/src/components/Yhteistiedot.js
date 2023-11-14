import React, { useState } from 'react';
import Navbar from './Navbar';
import EmailForm from './EmailForm';
import '../styles/Yhteistiedot.css';

const Yhteistiedot = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className='screen'>
      <div className="yhteistiedot">
        <Navbar showLinks={showLinks} setShowLinks={setShowLinks} />
        <div className='yhteistiedot-main'>
          <div className="email-form-container">
            <EmailForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Yhteistiedot;
