const cors = require('cors');
require('dotenv').config();
const express = require('express');
const emailRoutes = require('./router/EmailRoutes');
const path = require('path'); // Import the path module.

const app = express();
const port = process.env.PORT || 3000;

// Use the email route module
app.use(cors());
app.use('/email', emailRoutes);

// Serve static files from the 'build' directory.
app.use(express.static(path.join(__dirname, 'build')));

// Define a catch-all route to serve the 'index.html' for all other routes.
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
