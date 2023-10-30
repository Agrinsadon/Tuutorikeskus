const express = require('express');
const bodyParser = require('body-parser');
const { sendEnroll } = require('../controller/EnrollmentController');
require('dotenv').config();

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// Validation middleware (unchanged)
function validateRequiredFields(req, res, next) {
  const requiredFields = ['name', 'surname', 'birthday', 'email', 'phone', 'tutkinto', 'milloin'];

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

  // Check for a valid phone format (only digits and optional plus symbol)
  const phonePattern = /^[0-9+]+$/;
  if (!phonePattern.test(req.body.phone)) {
    return res.status(400).json({ error: 'Invalid phone format. Only numbers and + are allowed.' });
  }

  next();
}


router.post('/send-enroll', validateRequiredFields, (req, res) => {
  const { name, surname, birthday, email, phone, tutkinto, milloin } = req.body;

  // Logging the received data for debugging
  console.log('Received data:', req.body);

  sendEnroll(name, surname, birthday, email, phone, tutkinto, milloin, (error, info) => {
    if (error) {
      return res.status(500).json({ error: error.toString() }); // Send an error response
    }

    // Send a success response with a message
    res.status(200).json({ message: 'Email sent successfully' });
  });
});

module.exports = router;
