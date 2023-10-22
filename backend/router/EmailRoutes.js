const express = require('express');
const bodyParser = require('body-parser');
const { sendEmail } = require('../controller/EmailSender');
require('dotenv').config();

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// Validation middleware (unchanged)
function validateRequiredFields(req, res, next) {
  const requiredFields = ['name', 'email', 'subject', 'message'];

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

router.post('/send-email', validateRequiredFields, (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  // Logging the received data for debugging
  console.log('Received data:', req.body);

  sendEmail(name, email, phone, subject, message, (error, info) => {
    if (error) {
      return res.status(500).json({ error: error.toString() }); // Send an error response
    }

    // Send a success response with a message
    res.status(200).json({ message: 'Email sent successfully' });
  });
});

module.exports = router;
