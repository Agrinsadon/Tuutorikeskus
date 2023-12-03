const nodemailer = require('nodemailer');
require('dotenv').config();
const path = require('path');

function sendEnroll(name, surname, birthday, email, phone, tutkinto, milloin, courseTitle, callback) {
  const emailContent = `Ilmottautuiminen ${courseTitle}lle:\nEtunimi: ${name}\nSukunimi: ${surname}\nSyntymäpäivä: ${birthday}\nSähköposti: ${email}\nPuhelin: ${phone}\nTutkinto: ${tutkinto}\nValmistuu/Valmistunut: ${milloin}`;

  let pdfFileName;
  if (courseTitle === 'Intensiivinenkurssi') {
    pdfFileName = 'Intensiivinenkurssi-sopimus.pdf';
  } else if (courseTitle === 'Superkurssi') {
    pdfFileName = 'Superkurssi-sopimus.pdf';
  } else {
    pdfFileName = 'Supertakuukurssi-sopimus.pdf';
  }

  const pdfFilePath = path.join(__dirname, pdfFileName);

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.GMAIL_USER,
    subject: `Ilmottautuminen ${courseTitle}lle`,
    text: emailContent,
  };

  const enrollOptions = {
    from: process.env.GMAIL_USER,
    to: email,
    subject: `Ilmottautuminen ${courseTitle}lle`,
    text: emailContent,
    attachments: [
      {
        filename: pdfFileName,
        path: pdfFilePath,
      },
    ],
    html: `
      <p>Tervetuloa kurssillemme, ${name}!</p>
      <p>Olemme iloisia, että päätit liittyä meidän ${courseTitle}lle:</p>
      <p>Liitteenä on kurssisopimus (PDF-tiedosto), joka tulee täyttää ja palauttaa meille.</p>
      <p>Mikäli sinulla on kysyttävää sopimuksesta tai kurssistamme ole yhteydessä sähköpostitse tai puh: +358 44 2447576, laitathan ensin viestiä meille jossa palaamme sinulle paremmalla ajalla.</p>
      <p>Kiitos ja tervetuloa!</p>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      callback(error, null);
    } else {
      console.log('Enroll sent: ' + info.response);
      callback(null, { message: 'Enroll sent successfully' });
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
