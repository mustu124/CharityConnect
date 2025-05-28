const express = require('express');
const path = require('path');
const app = express();

// Serve static files from dist/public
app.use(express.static(path.join(__dirname, 'dist', 'public')));

// Handle all routes by serving index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'public', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Donation website running on port ${PORT}`);
});