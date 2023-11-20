import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import '../styles/NewsletterPopup.css';

const NewsletterPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubscribing, setSubscribing] = useState(false);
  const [subscriptionSuccessful, setSubscriptionSuccessful] = useState(false);

  useEffect(() => {
    const popupTimer = setTimeout(() => {
      setShowPopup(true);
    }, 2000);

    return () => clearTimeout(popupTimer);
  }, []);

  const handleClose = () => {
    console.log("Closed");
    setShowPopup(false);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = () => {
    setSubscribing(true);
    setTimeout(() => {
      setSubscribing(false);
      setSubscriptionSuccessful(true);
      setEmail('');
      setTimeout(() => {
        setSubscriptionSuccessful(false);
      }, 2000);
    }, 2000);
  };

  return (
    <>
      {showPopup && (
        <div className='popup-container'>
          <div className="popup-frame">
            <FontAwesomeIcon
              icon={faTimes}
              className="close-button-news"
              onClick={handleClose}
            />
            <div className="popup-content">
              <div className="main-content-news">
                <h1>Tilaa uutiskirje</h1>
                <p>Rahan arvoisia vinkkejä ja alennuksia Romanian lääketieteellisestä kiinnostuneille.</p>

                <div className="input-container">
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Sähköposti"
                  />
                  <button onClick={handleSubscribe} disabled={isSubscribing}>
                    {isSubscribing ? "Tilataan..." : "Tilaa"}
                  </button>
                </div>

                {subscriptionSuccessful && (
                  <div className="message-sent">
                    ✓ Tilauksesi on vastaanotettu!
                  </div>
                )}
              </div>

              <div className="right-content-news">
                <h2>Sisällys</h2>
                <p>• Lukuvuosimaksut & Kelan tuet</p> 
                <p>• Suomessa laillistuminen & Työharjoittelut</p> 
                <p>• Miksi Romania & Romaniassa asuminen</p> 
                <p>• Lääketieteelliseen hakemisen edellytykset</p> 
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NewsletterPopup;
