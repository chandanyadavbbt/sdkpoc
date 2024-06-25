const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello, I am a sample SDK' });
});

// Endpoint to serve the widget script from Netlify
app.get('/widget.js', (req, res) => {
  // Replace 'https://your-netlify-site.netlify.app' with your Netlify site's URL
  res.redirect('https://dreamy-fenglisu-5872fe.netlify.app/widget.js');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
