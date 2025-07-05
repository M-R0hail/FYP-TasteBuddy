const bookmarkRoutes = require('./routes/bookmarkRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

// ✅ Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.use(dashboardRoutes);
app.use(bookmarkRoutes);

// ✅ Serve static images from /images folder
app.use('/images', express.static(path.join(__dirname, 'images')));

// ✅ SQLite Database Connection
const db = new sqlite3.Database('tastebuddy.db', (err) => {
  if (err) {
    console.error('❌ Failed to connect to database', err);
  } else {
    console.log('✅ Connected to SQLite database');
  }
});

// ✅ Tables
db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password TEXT
  )
`);

db.run(`
  CREATE TABLE IF NOT EXISTS recipes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    description TEXT,
    ingredients TEXT,
    instructions TEXT,
    category TEXT,
    image TEXT
  )
`);

// ✅ Routes

app.get('/', (req, res) => {
  res.send('✅ TasteBuddy Backend is working!');
});

// ✅ GET all recipes
app.get('/api/recipes', (req, res) => {
  db.all('SELECT * FROM recipes', [], (err, rows) => {
    if (err) {
      console.error("Error fetching recipes:", err);
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

app.get("/api/recipes/:id", (req, res) => {
  const recipeId = req.params.id;

  const sql = "SELECT * FROM recipes WHERE id = ?";
  db.get(sql, [recipeId], (err, row) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ error: "Database error" });
    }

    if (!row) {
      return res.status(404).json({ error: "Recipe not found" });
    }

    res.json(row);
  });
});

// 🔍 Search recipes by title or ingredients
app.get('/api/search', (req, res) => {
  const query = req.query.q?.toLowerCase() || '';
  const sql = `
    SELECT * FROM recipes
    WHERE LOWER(title) LIKE ? OR LOWER(ingredients) LIKE ?
    LIMIT 10
  `;
  const value = `%${query}%`;

  db.all(sql, [value, value], (err, rows) => {
    if (err) {
      console.error("Search error:", err);
      return res.status(500).json({ error: "Search failed" });
    }
    res.json(rows);
  });
});



// ✅ Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

