import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Serve static files from the built website
const publicPath = path.join(__dirname, 'dist', 'public');

// Check if build exists
if (!fs.existsSync(publicPath)) {
  console.error('Build not found! Run: npm run build');
  process.exit(1);
}

// Serve all static files (CSS, JS, images, etc.)
app.use(express.static(publicPath));

// For any route, serve the main HTML file (single page app)
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Hope Foundation donation website is live on port ${PORT}!`);
});