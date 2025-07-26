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

// 📌 Save User Profile Route
router.post("/profile", (req, res) => {
  const { userId, name, email, bio, cookingLevel, favoriteCuisine, avatar } = req.body;

  if (!userId) {
    return res.status(400).json({ error: "User ID is required." });
  }

  // Check if profile exists
  db.get("SELECT * FROM user_profiles WHERE user_id = ?", [userId], (err, row) => {
    if (err) {
      console.error("❌ Profile check error:", err);
      return res.status(500).json({ error: "Database error." });
    }

    if (row) {
      // Update existing profile - only update fields that are provided
      let updateFields = [];
      let updateValues = [];
      
      if (name !== undefined) {
        updateFields.push("name = ?");
        updateValues.push(name);
      }
      if (email !== undefined) {
        updateFields.push("email = ?");
        updateValues.push(email);
      }
      if (bio !== undefined) {
        updateFields.push("bio = ?");
        updateValues.push(bio);
      }
      if (cookingLevel !== undefined) {
        updateFields.push("cooking_level = ?");
        updateValues.push(cookingLevel);
      }
      if (favoriteCuisine !== undefined) {
        updateFields.push("favorite_cuisine = ?");
        updateValues.push(favoriteCuisine);
      }
      if (avatar !== undefined) {
        updateFields.push("avatar = ?");
        updateValues.push(avatar);
      }
      
      // Always update the updated_at timestamp
      updateFields.push("updated_at = CURRENT_TIMESTAMP");
      
      // Add userId for WHERE clause
      updateValues.push(userId);
      
      const updateQuery = `
        UPDATE user_profiles 
        SET ${updateFields.join(", ")}
        WHERE user_id = ?
      `;
      
      console.log("Update query:", updateQuery);
      console.log("Update values:", updateValues);
      
      db.run(updateQuery, updateValues, function (err) {
        if (err) {
          console.error("❌ Profile update failed:", err);
          return res.status(500).json({ error: "Failed to update profile." });
        }
        
        res.json({ success: true, message: "Profile updated successfully!" });
      });
    } else {
      // Create new profile with provided values or defaults
      const insertQuery = `
        INSERT INTO user_profiles (user_id, name, email, bio, cooking_level, favorite_cuisine, avatar, created_at, updated_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
      `;
      
      const insertValues = [
        userId,
        name || null,
        email || null,
        bio || null,
        cookingLevel || null,
        favoriteCuisine || null,
        avatar || null
      ];
      
      console.log("Insert query:", insertQuery);
      console.log("Insert values:", insertValues);
      
      db.run(insertQuery, insertValues, function (err) {
        if (err) {
          console.error("❌ Profile creation failed:", err);
          return res.status(500).json({ error: "Failed to create profile." });
        }
        
        res.json({ success: true, message: "Profile created successfully!" });
      });
    }
  });
});

// 📌 Get User Profile Route
router.get("/profile/:userId", (req, res) => {
  const userId = req.params.userId;

  db.get("SELECT * FROM user_profiles WHERE user_id = ?", [userId], (err, row) => {
    if (err) {
      console.error("❌ Failed to fetch profile:", err);
      return res.status(500).json({ error: "Failed to load profile." });
    }

    if (!row) {
      // Return default profile data
      return res.json({
        name: null,
        email: null,
        bio: null,
        cookingLevel: null,
        favoriteCuisine: null,
        avatar: null,
        joinDate: null
      });
    }

    res.json({
      name: row.name,
      email: row.email,
      bio: row.bio,
      cookingLevel: row.cooking_level,
      favoriteCuisine: row.favorite_cuisine,
      avatar: row.avatar,
      joinDate: row.created_at
    });
  });
});

module.exports = router;
