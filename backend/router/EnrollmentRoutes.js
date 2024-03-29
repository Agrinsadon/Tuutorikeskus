const express = require('express');
const bodyParser = require('body-parser');
const { sendEnroll } = require('../controller/EnrollmentController');
require('dotenv').config();

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

function validateRequiredFields(req, res, next) {
  const requiredFields = ['name', 'surname', 'birthday', 'email', 'phone', 'tutkinto', 'milloin'];

  for (const field of requiredFields) {
    if (!req.body[field]) {
      return res.status(400).json({ error: `${field} is required` });
    }
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(req.body.email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }
  next();
}

router.post('/send-enroll', validateRequiredFields, (req, res) => {
  const { name, surname, birthday, email, phone, tutkinto, milloin, courseTitle } = req.body;

  console.log('Received data:', req.body);

  sendEnroll(name, surname, birthday, email, phone, tutkinto, milloin, courseTitle, (error, info) => {
    if (error) {
      return res.status(500).json({ error: error.toString() });
    }

    res.status(200).json({ message: 'Email sent successfully' });
  });
});

module.exports = router;
