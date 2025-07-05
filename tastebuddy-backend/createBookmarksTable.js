const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("tastebuddy.db");

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS bookmarks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER,
      recipe_id INTEGER,
      FOREIGN KEY (user_id) REFERENCES users(id),
      FOREIGN KEY (recipe_id) REFERENCES recipes(id)
    );
  `, (err) => {
    if (err) console.error("Table creation failed:", err.message);
    else console.log("✅ Bookmarks table created!");
  });
});

db.close();
