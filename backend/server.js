const cors = require('cors');
require('dotenv').config();
const express = require('express');
const emailRoutes = require('./router/EmailRoutes');
const fetch = require('node-fetch'); // Import node-fetch

const app = express();
const port = process.env.PORT || 3000;

// Use the email route module
app.use(cors());
app.use('/email', emailRoutes);

// Create a route for proxying requests to Render service
app.post('/proxy', async (req, res) => {
  try {
    const response = await fetch('https://tuutorikeskus.onrender.com/email/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
