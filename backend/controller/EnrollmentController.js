const nodemailer = require('nodemailer');
require('dotenv').config();
const path = require('path'); // Import the path module


function sendEnroll(name, surname, birthday, email, phone, tutkinto, milloin, callback) {
  const emailContent = `Ilmottautuiminen:\nEtunimi: ${name}\nSukunimi: ${surname}\nSyntymäpäivä: ${birthday}\nSähköposti: ${email}\nPuhelin: ${phone}\nTutkinto: ${tutkinto}\nValmistuu/Valmistunut: ${milloin}`;

  const pdfFilePath = path.join(__dirname,'contract.pdf');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465, // Use 587 for TLS
    secure: true, // For SSL
    auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

  const mailOptions = {
    from: email,
    to: process.env.GMAIL_USER,
    subject: 'Ilmottautuminen',
    text: emailContent
  };

  const enrollOptions = {
    from: process.env.GMAIL_USER,
    to: email,
    subject: 'Ilmottautuminen',
    text: emailContent,
    attachments: [
      {
        filename: 'contract.pdf', // Name of the attached file
        path: pdfFilePath, // Path to the PDF file
      },
    ],
    html: `
      <p>Tervetuloa kurssillemme, ${name}!</p>
      <p>Olemme iloisia, että päätit liittyä meidän kurssille.</p>
      <p>Liitteenä on kurssisopimus (PDF-tiedosto), joka tulee täyttää ja palauttaa meille.</p>
      <p>Kiitos ja tervetuloa!</p>
    `,
  };
  

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      callback(error, null);
    } else {
      console.log('Enroll sent: ' + info.response);
      callback(null, { message: 'Enroll sent successfully' }); // Send a success message
    }
  });

  transporter.sendMail(enrollOptions, (error, info) => {
    if (error) {
      console.error(error);
      callback(error, null);
    } else {
      console.log('Enroll sent: ' + info.response);
      callback(null, { message: 'Enroll sent successfully' });
    }
  });
}

module.exports = { sendEnroll };
