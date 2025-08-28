const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const app = express();
app.use(cors());
app.use(express.json());

const db = new sqlite3.Database('./db.sqlite', (err) => {
  if (err) throw err;
  console.log('Database connected');
});

// Basic route example
app.get('/', (req, res) => {
  res.json({ message: 'YTMonster Clone Backend is running!' });
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
