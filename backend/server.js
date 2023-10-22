const cors = require('cors');
require('dotenv').config();
const express = require('express');
const emailRoutes = require('./router/EmailRoutes');

const app = express();
const port = process.env.PORT || 3000;

// Use the email route module
app.use(cors());
app.use('/email', emailRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
