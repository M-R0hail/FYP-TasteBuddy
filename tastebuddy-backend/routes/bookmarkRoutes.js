const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const router = express.Router();
const db = new sqlite3.Database("tastebuddy.db");

// ✅ Add a bookmark (POST)
// URL: POST /api/bookmark
router.post("/bookmark", (req, res) => {
  const { userId, recipeId } = req.body;

  if (!userId || !recipeId) {
    return res.status(400).json({ error: "Missing userId or recipeId" });
  }

  const checkQuery = `SELECT * FROM bookmarks WHERE user_id = ? AND recipe_id = ?`;
  db.get(checkQuery, [userId, recipeId], (err, row) => {
    if (err) {
      console.error("🔍 Bookmark check error:", err.message);
      return res.status(500).json({ error: "Database error" });
    }

    if (row) {
      return res.status(409).json({ error: "Already bookmarked" });
    }

    const insertQuery = `INSERT INTO bookmarks (user_id, recipe_id) VALUES (?, ?)`;
    db.run(insertQuery, [userId, recipeId], function (err) {
      if (err) {
        console.error("❌ Bookmark insert failed:", err.message);
        return res.status(500).json({ error: "Internal Server Error" });
      }

      res.json({ success: true, message: "Recipe bookmarked!" });
    });
  });
});

// ✅ Get all bookmarks for a user (GET)
// URL: GET /api/bookmarks/:userId
router.get("/bookmarks/:userId", (req, res) => {
  const userId = req.params.userId;

  const query = `
    SELECT recipes.* FROM bookmarks 
    JOIN recipes ON bookmarks.recipe_id = recipes.id 
    WHERE bookmarks.user_id = ?
  `;

  db.all(query, [userId], (err, rows) => {
    if (err) {
      console.error("❌ Failed to fetch bookmarks:", err.message);
      return res.status(500).json({ error: "Failed to load bookmarks" });
    }

    res.json(rows);
  });
});

module.exports = router;
