const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const router = express.Router();

const db = new sqlite3.Database("tastebuddy.db");

router.get("/api/user/:userId/bookmarks", (req, res) => {
  const userId = req.params.userId;

  const query = `
    SELECT recipes.id, recipes.title, recipes.image_url
    FROM bookmarks
    JOIN recipes ON bookmarks.recipe_id = recipes.id
    WHERE bookmarks.user_id = ?
  `;

  db.all(query, [userId], (err, rows) => {
    if (err) {
      console.error("Error fetching bookmarks:", err.message);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.json(rows);
    }
  });
});

module.exports = router;
