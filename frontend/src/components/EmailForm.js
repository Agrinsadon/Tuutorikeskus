import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import '../styles/Emailform.css'

function EmailForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [messageSent, setMessageSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const apiUrl = process.env.REACT_APP_API_URL_EMAIL;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Set loading state

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setMessageSent(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsSubmitting(false); // Reset loading state
      });
  };

  useEffect(() => {
    if (messageSent) {
      const timer = setTimeout(() => {
        setMessageSent(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [messageSent]);

  return (
    <div className='contact-container'>
      <div className='ota-yhteyttä'>
        <h1>Ota Yhteyttä</h1>
        <form onSubmit={handleSubmit}>
          <div className='inputs'>
            <input
              type="text"
              name="name"
              placeholder="Nimi*"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className='inputs'>
            <input
              type="email"
              name="email"
              placeholder="Sähköposti*"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className='inputs'>
            <input
              type="text"
              name="phone"
              placeholder="Puhelin"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className='inputs'>
            <input
              type="text"
              name="subject"
              placeholder="Otsikko*"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className='inputs'>
            <textarea
              name="message"
              placeholder="Viesti*"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className="company-info">
            <p>Email: company@example.com</p>
            <p>Phone: +123 456 7890</p>
            <div className="social-media">
              <a href="https://www.facebook.com/company" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://www.instagram.com/company" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://www.youtube.com/company" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-start' }}>
            <button className='button-lähetä' type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Lähetetään..." : "Lähetä"}
            </button>
            {messageSent && !isSubmitting && (
              <div className="message-sent" style={{ marginTop: '35px', marginLeft: '14px' }}>
                ✓ Viesti Lähettetty!
              </div>
            )}
          </div>
        </form>
        <div className='contact-image'>
        <img src="animated-doctor.png" alt=" " />
      </div>
      </div>
    </div>
  );
}

export default EmailForm;
