const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('tastebuddy.db');

// Show the latest 6 recipes from the database
db.all("SELECT id, title, image FROM recipes ORDER BY id DESC LIMIT 6", [], (err, rows) => {
  if (err) {
    console.error("❌ Error:", err.message);
    return;
  }

  if (rows.length === 0) {
    console.log("⚠️ No recipes found in the database.");
  } else {
    console.log("✅ Latest 6 Recipes:");
    console.table(rows);
  }
});

db.close();
