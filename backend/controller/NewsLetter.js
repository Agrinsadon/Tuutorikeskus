const nodemailer = require('nodemailer');
require('dotenv').config();

function sendNews(email, callback) {
  const emailContent = `Uutiskirje: ${email}`;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const newsOptions = {
    from: process.env.GMAIL_USER,
    to: email,
    subject: `Uutiskirje tilaus Tuutorikeskus`,
    text: emailContent,
    attachments: [
      {
        filename: 'contract.pdf',
        path: pdfFilePath,
      },
    ],
    html: `
      <p>Tähän tulee Uutiskirjeen tiedot. ${email}!</p>
    `,
  };

  transporter.sendMail(newsOptions, (error, info) => {
    if (error) {
      console.error(error);
      callback(error, null);
    } else {
      console.log('NewsLetter sent: ' + info.response);
      callback(null, { message: 'NewsLetter sent successfully' });
    }
  });
}

module.exports = { sendNews };
