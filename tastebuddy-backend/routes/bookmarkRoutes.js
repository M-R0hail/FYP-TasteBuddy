const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const router = express.Router();
const db = new sqlite3.Database("tastebuddy.db");

router.post("/api/bookmark", (req, res) => {
  const { userId, recipeId } = req.body;

  if (!userId || !recipeId) {
    return res.status(400).json({ error: "Missing userId or recipeId" });
  }

  const query = `INSERT INTO bookmarks (user_id, recipe_id) VALUES (?, ?)`;

  db.run(query, [userId, recipeId], function (err) {
    if (err) {
      console.error("Bookmark insert failed:", err.message);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    res.json({ success: true, message: "Recipe bookmarked!" });
  });
});

module.exports = router;
