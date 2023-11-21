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
    html: `
    <h2>Tervetuloa Lääkiksen pariin</h1>
    <br />
      <h3>Miksi juuri Romaniaan?</h3>
        <p>Suomessa lääkäriopintoihin hyväksytään vuosittain vain noin 10 % hakijoista. Romaniaan pääsi tänä vuonna 100 % Romanian lääketieteelliseen tiedekuntaan valmistautuvista kurssilaisistamme! Koska Romania on EU-maa, saa sieltä Valviran hyväksymän koulutuksen. Kaikki eurooppalaiset työmarkkinat ovat auki vielä paremmin kuin suomalaisella diplomilla; opiskeluhan on englanniksi.</p>
        <p>Työssäoppimiseen pääset mukaan jo 1. opiskeluvuoden päätyttyä (Suomessa vasta 4. opiskeluvuonna).  Valmistuessasi sinulla on siis enemmän työkokemusta kuin Suomessa opiskelleilla vastavalmistuneilla lääkäreillä.</p>
        <p>Opintojesi aikana luot kontakteja ympäri maailmaa tuleviin työtovereihin, esimiehiin ja työnantajiin. Avaat englanninkielisen koulutuksesi ansiosta myös sellaisia työmahdollisuuksia, jotka ovat Suomessa opiskelleille paljon vaikeammin saavutettavissa.</p>
        <p>Hakemalla Romanian lääketieteelliseen sinulla on suuremmat sisäänpääsymahdollisuudet ensikertalaisena kuin Suomessa. Suomessa sisäänpääsyyn hakijat keskimäärin kuluttavat keskimäärin 2-3 yrityskertaa. Tämä tarkoittaa sitä, että säästät 2- 3 vuotta, jos pääset Romaniaan lääketieteelliseen opiskelemaan jo heti ensimmäisellä pääsykoekierroksella. Aika on todella arvokasta. </p>
        <br />
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