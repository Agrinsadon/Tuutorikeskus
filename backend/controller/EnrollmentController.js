const nodemailer = require('nodemailer');
require('dotenv').config();
const path = require('path');

function sendEnroll(name, surname, birthday, email, phone, tutkinto, milloin, courseTitle, callback) {
  const emailContent = `Ilmottautuiminen ${courseTitle}lle:\nEtunimi: ${name}\nSukunimi: ${surname}\nSyntymäpäivä: ${birthday}\nSähköposti: ${email}\nPuhelin: ${phone}\nTutkinto: ${tutkinto}\nValmistuu/Valmistunut: ${milloin}`;

  const pdfFileName = getPdfFileName(courseTitle);
  const pdfFilePath = pdfFileName ? path.join(__dirname, pdfFileName) : null;

  const isAttachmentIncluded = pdfFilePath !== null;

  const enrollOptions = {
    from: process.env.GMAIL_USER,
    to: email,
    subject: `Ilmottautuminen ${courseTitle}lle`,
    text: emailContent,
    attachments: isAttachmentIncluded
      ? [
          {
            filename: pdfFileName,
            path: pdfFilePath,
          },
        ]
      : [],
    html: isAttachmentIncluded
      ? `
        <p>Tervetuloa kurssillemme, ${name}!</p>
        <p>Olemme iloisia, että päätit liittyä meidän ${courseTitle}lle:</p>
        <p>Liitteenä on kurssisopimus (PDF-tiedosto), joka tulee täyttää ja palauttaa meille.</p>
        <p>Mikäli sinulla on kysyttävää sopimuksesta tai kurssistamme ole yhteydessä sähköpostitse tai puh: +358 44 2447576, laitathan ensin viestiä meille jossa palaamme sinulle paremmalla ajalla.</p>
        <p>Kiitos ja tervetuloa!</p>
      `
      : `
        <p>Tervetuloa kurssillemme, ${name}!</p>
        <p>Olemme iloisia, että päätit liittyä meidän kursille: ${courseTitle}. Olemme teihin yhteydessä pian.</p>
        <p>Mikäli sinulla on kysyttävää kurssistamme ole yhteydessä sähköpostitse tai puh: +358 44 2447576, laitathan ensin viestiä meille jossa palaamme sinulle paremmalla ajalla.</p>
        <p>Kiitos ja tervetuloa!</p>
      `,
  };

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

function getPdfFileName(courseTitle) {
  if (
    courseTitle === 'Intensiivinenkurssi' ||
    courseTitle === 'Superkurssi' ||
    courseTitle === 'Super-Takuukurssi'
  ) {
    return courseTitle + '-sopimus.pdf';
  }

  // Exclude attachment for specific course titles
  if (
    courseTitle === 'Hakemuspalvelu' ||
    courseTitle === 'Hakemuspalvelu + matka' ||
    courseTitle === 'Knots & Suture'
  ) {
    return null;
  }

  // Default case, return a generic PDF filename
  return 'generic-sopimus.pdf';
}

module.exports = { sendEnroll };
