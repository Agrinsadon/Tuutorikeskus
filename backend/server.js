const cors = require('cors');
require('dotenv').config();
const express = require('express');
const emailRoutes = require('./router/EmailRoutes');
const enrollRoutes = require('./router/EnrollmentRoutes')
const newsRoutes = require('./router/NewsRoutes')

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use('/news', newsRoutes);
app.use('/email', emailRoutes);
app.use('/enroll', enrollRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
