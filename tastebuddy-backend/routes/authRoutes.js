const express = require("express");
const router = express.Router();
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("tastebuddy.db");

// 📌 Signup Route
router.post("/signup", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: "Username and password are required." });
  }

  db.get("SELECT * FROM users WHERE username = ?", [username], (err, row) => {
    if (err) {
      console.error("❌ Signup DB Error:", err);
      return res.status(500).json({ error: "Database error." });
    }

    if (row) {
      return res.status(409).json({ error: "Username already exists." });
    }

    db.run(
      "INSERT INTO users (username, password) VALUES (?, ?)",
      [username, password],
      function (err) {
        if (err) {
          console.error("❌ Failed to insert user:", err);
          return res.status(500).json({ error: "Signup failed." });
        }

        res.status(201).json({ id: this.lastID, username });
      }
    );
  });
});

// 📌 Login Route
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: "Username and password required." });
  }

  db.get(
    "SELECT * FROM users WHERE username = ? AND password = ?",
    [username, password],
    (err, row) => {
      if (err) {
        console.error("❌ Login DB Error:", err);
        return res.status(500).json({ error: "Database error." });
      }

      if (!row) {
        console.warn("⚠️ Invalid login attempt:", username);
        return res.status(401).json({ error: "Invalid username or password." });
      }

      res.status(200).json({ id: row.id, username: row.username });
    }
  );
});

module.exports = router;
