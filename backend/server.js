const cors = require('cors');
require('dotenv').config();
const express = require('express');
const emailRoutes = require('./router/EmailRoutes');
const enrollRoutes = require('./router/EnrollmentRoutes')

const app = express();
const port = process.env.PORT || 3000;

app.get('/Etusivu.css', function(req, res) {
  res.setHeader('Content-Type', 'text/css');
});

app.use(cors());
app.use('/email', emailRoutes);
app.use('/enroll', enrollRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
