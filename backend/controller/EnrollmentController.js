const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465, // Use 587 for TLS
    secure: true, // For SSL
    auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

const sendEnrollment = (req, res) => {
    const userData = req.body;

    // Define the email content for the user
    const userMailOptions = {
        from: process.env.GMAIL_USER,
        to: userData.email,
        subject: 'Welcome to the Class',
        text: 'Welcome to the class. Please find the attached contract PDF.',
        attachments: [
            {
                filename: 'contract.pdf',
                path: '/path/to/your/contract.pdf', // Provide the path to your contract PDF file
            },
        ],
    };

    // Define the email content for yourself
    const yourMailOptions = {
        from: process.env.GMAIL_USER,
        to: 'process.env.GMAIL_USER', // Your email address
        subject: 'New Enrollment',
        text: `New enrollment from ${userData.firstName} ${userData.surname} (${userData.email}).`,
    };

    // Send emails to the user and yourself
    transporter.sendMail(userMailOptions, (userError, userInfo) => {
        if (userError) {
            return res.status(500).json({ error: 'Failed to send email to the user' });
        }

        transporter.sendMail(yourMailOptions, (yourError, yourInfo) => {
            if (yourError) {
                return res.status(500).json({ error: 'Failed to send email to yourself' });
            }

            res.status(200).json({ message: 'Emails sent successfully' });
        });
    });
};

module.exports = { sendEnrollment };
