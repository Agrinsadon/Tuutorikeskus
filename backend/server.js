const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Validation middleware
function validateRequiredFields(req, res, next) {
  const requiredFields = ['name', 'email', 'phone', 'subject', 'message'];

  for (const field of requiredFields) {
    if (!req.body[field]) {
      return res.status(400).json({ error: `${field} is required` });
    }
  }

  // Check for a valid email format
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(req.body.email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  next();
}

app.post('/send-email', validateRequiredFields, (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  const emailContent = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    }
  });

  const mailOptions = {
    from: email,
    to: 'sadon.code@gmail.com',
    subject: subject,
    text: emailContent
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
