import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS
import '../styles/Emailform.css'

function EmailForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://tuutorikeskus.onrender.com/email/send-email', {
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
        return response.text(); // Parse the response as text
      })
      .then((data) => {
        try {
          const parsedData = JSON.parse(data);
          console.log(parsedData);
          // Show a success toast notification
          toast.success('Viesti on lähetetty!', { position: 'top-right' });
          // Clear the form fields
          setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
          });
        } catch (error) {
          // Handle the case where the response is not valid JSON
          console.error('Invalid JSON response:', data);
          // Show an error toast notification
          toast.error('Viestiä ei voitu lähettää!', { position: 'top-right' });
        }
      })
      .catch((error) => {
        console.error(error);
        // Show an error toast notification
        toast.error('Viestiä ei voitu lähettää!', { position: 'top-right' });
      });
    };
  
  

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
        <div>
          <button className='button-lähetä' type="submit">Lähetä</button>
        </div>
      </form>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default EmailForm;
