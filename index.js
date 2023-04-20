const express = require('express');
const path = require('path');
const fs = require('fs');
const rateLimit = require("express-rate-limit");
const app = express();
const port = process.env.PORT || 3000;

// Serve the frontend from the "front" folder
app.use('/', express.static(path.join(__dirname, 'front')));

const apiLimiter = rateLimit({
  windowMs: 24 * 60 * 60 * 1000, // 24 hours
  max: 2, 
  message: "You have ran out of uses for today. Please wait..."
});

app.get('/api/fetchp', apiLimiter, (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync('./prx/data.json', 'utf8'));
    const type = req.query.type;
    const now = Math.floor(Date.now() / 1000);
    const time = parseInt(req.query.time);

    if (isNaN(time) || now - time > 30) {
      res.status(400).send("Request expired. TIP: Requests only last for 30 seconds.");
      return;
    }

    if (!data[type]) {
      res.status(400).send("Invalid type");
      return;
    }

    const entries = data[type];
    const randomIndex = Math.floor(Math.random() * entries.length);
    const randomEntry = entries[randomIndex];

    res.send(randomEntry);
  } catch (err) {
    console.error(err);
    res.status(500).send(`Internal server error.  Debugging info: ${err} `);
  }
});
// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
