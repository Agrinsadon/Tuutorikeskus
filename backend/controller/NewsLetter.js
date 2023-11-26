const nodemailer = require('nodemailer');
require('dotenv').config();

function sendNews(email, callback) {
  const emailContent = `Tämä sähköposti tilasi uutiskirje: ${email}`;

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
    subject: `UutisKirje tilattu`,
    text: emailContent,
  };

  const newsOptions = {
    from: process.env.GMAIL_USER,
    to: email,
    subject: `Tuutorikeskus uutiskirje`,
    html: `
      <h2>Tervetuloa Lääkiksen pariin</h2>
      <br />
      <p>Katso tämä video saadaksesi lisätietoja muitten opiskelijoiden kokemuksista: <a href="https://youtu.be/BadnkcGYnzg" target="_blank">Opiskelijoiden kokemukset</a></p>
      <br />
      <h3>Miksi valita Romania?</h3>
      <p>Suomessa lääkäriopintoihin hyväksytään vuosittain vain noin 10 % hakijoista. Kuitenkin Romaniaan valmistautuvista kurssilaisistamme monena vuotena peräkkäin 100 % on päässyt lääketieteelliseen tiedekuntaan! Romania tarjoaa EU-maana Valviran hyväksymän koulutuksen, joka avaa kaikki eurooppalaiset työmarkkinat Suomalaisen diplomisi lisäksi. Opiskelu tapahtuu englanniksi.</p>
      <p>Jo ensimmäisen opiskeluvuoden päätyttyä pääset mukaan työssäoppimiseen, kun vasta Suomessa vastaava mahdollisuus avautuu neljännen opiskeluvuoden jälkeen. Valmistuessasi sinulla on siis enemmän työkokemusta kuin vastavalmistuneilla suomalaisilla lääkäreillä.</p>
      <p>Opintojesi aikana solmit kontakteja ympäri maailmaa tuleviin työtovereihin, esihenkilöihin ja työnantajiin. Englanninkielinen koulutuksesi avaa myös työmahdollisuuksia, joita Suomessa opiskelleilla on vaikeampi saavuttaa.</p>
      <p>Romanian lääketieteelliseen on helpompi päästä ensikertalaisena kuin Suomessa, jossa hakijat keskimäärin käyttävät 2-3 yrityskertaa. Säästät siis 2-3 vuotta pääsemällä Romaniaan jo ensimmäisellä pääsykierroksella.</p>
      <p>Lääketieteellisen hakemiseen tarvitset lukion päättötodistuksen, ylioppilastutkintotodistuksen, väestörekisteriotteen, lääkärintodistuksen, hakulomakkeen, kuitin hakemusmaksusta ja passikuvat. Asiakirjat tulee todistaa oikeaksi ja kääntää Romanian kielelle.</p>
      <p>Suomessa valmistuneille EU-maista valmistuneille ei vaadita ylimääräisiä lisäkoulutuksia, ja suoritat lääkärin oikeudet Suomessa lähettämällä tutkintotodistuksen ja tarvittavat liitteet Valviran hyväksyttäväksi.</p>
      <p>Romaniassa opiskelu on käytännönläheisempää kuin Suomessa ja opiskelijat tekevät työharjoitteluja jo prekliinisessä vaiheessa, kun Suomessa vasta postkliinisessä. Voit itse valita suoritatko harjoittelut Romaniassa vai omassa terveysasemassasi kesäisin.</p>
      <p>KELA myöntää opintotukea ja asumislisää koko 6 vuoden opintojen ajaksi ja voit halutessasi hakea valtion takaamaa opintolainaa.</p>
      <p>Romanian lukuvuosimaksut ovat edulliset, vain 5000 € vuodessa johtuen alhaisista elinkustannuksista. Vertailuna Viron lääketieteelliset koulutukset maksavat lähes kolminkertaisesti. Asumiskustannukset mukaan lukien sähkö- ja vesimaksut ovat 300-400 € luokkaa.</p>
      <p>Valmennuskurssimme auttaa sinua valmistautumaan kattavasti Romanian lääketieteelliseen pääsykokeeseen. Tarjoamme tukea kaikissa hakuprosessiin liittyvissä käytännön asioissa, kuten asiakirjojen ja asumisjärjestelyiden kanssa. Kurssin päätteeksi matkustamme yhdessä kanssasi Romaniaan pääsykokeisiin, huolehdimme käytännön järjestelyistä ja varmistamme päivän sujuvuuden, jotta voit keskittyä olennaiseen.</p>
      <h3>Miksi valita kurssimme?</h3>
      <p>Haluat kansainvälisen lääkärikoulutuksen.
      Haluat paremmat mahdollisuudet päästä lääketieteelliseen nopeammin ja todennäköisemmin kuin Suomessa.
      Haluat säästää aikaa ja välttää 2-3 vuoden odottelun Suomen pääsykokeissa.
      Olet jo yrittänyt Suomessa, mutta et ole vielä saanut opiskelupaikkaa. 
      Innostut ajatuksesta elää ja opiskella toisessa maassa ja kulttuurissa.
      Haluat oppia lääketieteellisen sanaston suoraan englanniksi parantaen kansainvälisiä työllistymismahdollisuuksia.
      Haluat keskittyä olennaiseen eikä pääsykokeeseen liittyvään byrokratiaan.
      Haluat kulkea koko pääsykoeprosessin ihmisten kanssa, jotka ovat sen jo onnistuneesti suorittaneet ja auttaneet muitakin tekemään saman.
      Olemme täällä tukemassa sinua ja auttamassa kaikissa käytännön asioissa aina pääsykokeiden jälkeiseen valmistumiseen saakka. Onko jotain, jossa voimme auttaa sinua?</p>
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

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      callback(error, null);
    } else {
      console.log('Enroll sent: ' + info.response);
      callback(null, { message: 'Enroll sent successfully' });
    }
  });
}

module.exports = { sendNews };
