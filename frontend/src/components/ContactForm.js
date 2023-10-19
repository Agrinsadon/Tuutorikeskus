// ContactForm.js
import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSendMessage = async () => {
    try {
      const response = await fetch('/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Email sent successfully');
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error}`);
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <div className="ota-yhteytta">
      <h2>Ota Yhteyttä</h2>
      <div className="contact-form">
        <div className="input-group">
          <label>Name:</label>
          <input type="text" name="name" required onChange={handleInputChange} />
        </div>
        <div className="input-group">
          <label>Email:</label>
          <input type="email" name="email" required onChange={handleInputChange} />
        </div>
        <div className="input-group">
          <label>Phone:</label>
          <input type="tel" name="phone" onChange={handleInputChange} />
        </div>
        <div className="input-group">
          <label>Subject:</label>
          <input type="text" name="subject" required onChange={handleInputChange} />
        </div>
        <div className="input-group">
          <label>Message:</label>
          <textarea name="message" required onChange={handleInputChange}></textarea>
        </div>
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default ContactForm;
