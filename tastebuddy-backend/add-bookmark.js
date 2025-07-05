const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("tastebuddy.db");

// Add bookmark for user_id = 1 and recipe_id = 1
db.run(`INSERT INTO bookmarks (user_id, recipe_id) VALUES (?, ?)`, [1, 1], (err) => {
  if (err) {
    console.error("❌ Failed to insert bookmark:", err.message);
  } else {
    console.log("✅ Bookmark added successfully.");
  }
});

db.close();
