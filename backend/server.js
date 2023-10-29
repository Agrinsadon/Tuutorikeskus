const cors = require('cors');
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const emailRoutes = require('./router/EmailRoutes');
const enrollmentRoutes = require('./router/EnrollmentRoutes');


const app = express();
const port = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Use the email route module
app.use(cors());
app.use('/email', emailRoutes);
app.use('/enrollment', enrollmentRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
