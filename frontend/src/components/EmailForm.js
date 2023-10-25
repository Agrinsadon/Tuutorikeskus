import React, { useState, useEffect} from 'react';
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
    fetch( apiUrl, {
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
      });
  };

  useEffect(() => {
    if (messageSent) {
      // After 5 seconds, reset the messageSent state to hide the message
      const timer = setTimeout(() => {
        setMessageSent(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [messageSent]);
  

  return (
    <div>
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
        <div style={{ display: 'flex', alignItems: 'flex-start'}}>
        <button className='button-lähetä' type="submit">Lähetä</button>
        {messageSent && <div className="message-sent" style={{ marginTop: '35px', marginLeft: '14px' }}>✓ Viesti Lähettetty!</div>}
        </div>
      </form>
      </div>
    </div>
  );
}

export default EmailForm;
