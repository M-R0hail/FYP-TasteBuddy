const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("tastebuddy.db");

db.serialize(() => {
  db.run(`ALTER TABLE recipes ADD COLUMN image_url TEXT`, (err) => {
    if (err) {
      console.log("⚠️ Column might already exist or failed:", err.message);
    } else {
      console.log("✅ image_url column added successfully.");
    }
  });
});

db.close();
