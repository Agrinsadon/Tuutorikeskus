const express = require('express');
const router = express.Router();
const enrollmentController = require('../controller/EnrollmentController');

router.post('/send-enrollment', enrollmentController.sendEnrollment);

module.exports = router;
