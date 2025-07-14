// ✅ Support both localStorage and sessionStorage
const loggedInUser = localStorage.getItem("loggedInUser") || sessionStorage.getItem("loggedInUser");
const userId = localStorage.getItem("userId") || sessionStorage.getItem("userId");

// 🚫 Redirect if not logged in
if (!loggedInUser || !userId) {
  window.location.href = "login.html";
}

document.addEventListener("DOMContentLoaded", async () => {
  const toggle = document.getElementById("modeToggle");

  // 🧑 Set profile info
  document.getElementById("username").textContent = loggedInUser;

  // 🌙 Dark Mode
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    toggle.textContent = "☀️";
  }
  toggle.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-mode");
    toggle.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });

  // ✅ Avatar Selection (Fix: Ensure it's always saved and restored properly)
  const avatarSelect = document.getElementById("avatarSelect");
  const emojiAvatar = document.getElementById("emojiAvatar");

  const savedAvatar = localStorage.getItem("userAvatar");
  if (savedAvatar) {
    avatarSelect.value = savedAvatar;
    emojiAvatar.textContent = savedAvatar;
  }

  avatarSelect.addEventListener("change", () => {
    const selected = avatarSelect.value;
    localStorage.setItem("userAvatar", selected);
    emojiAvatar.textContent = selected;
  });

  // ✅ 📌 Load Bookmarked Recipes from Database
  const bookmarksContainer = document.getElementById("bookmarks");

  try {
    const response = await fetch(`http://localhost:3000/api/bookmarks/${userId}`);
    const bookmarkedRecipes = await response.json();

    if (!Array.isArray(bookmarkedRecipes) || bookmarkedRecipes.length === 0) {
      bookmarksContainer.innerHTML = "<p>No bookmarks yet.</p>";
      return;
    }

    bookmarksContainer.innerHTML = "";

    bookmarkedRecipes.forEach(recipe => {
      const imageURL = recipe.image?.startsWith("http")
        ? recipe.image
        : `http://localhost:3000/images/${recipe.image}`;

      const shortDescription = recipe.description?.length > 100
        ? recipe.description.slice(0, 100) + "..."
        : recipe.description;

      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${imageURL}" alt="${recipe.title}" />
        <div class="card-content">
          <h3>${recipe.title}</h3>
          <p>${shortDescription}</p>
          <a href="recipe.html?id=${recipe.id}">View Recipe</a>
        </div>
      `;
      bookmarksContainer.appendChild(card);
    });
  } catch (err) {
    console.error("❌ Error loading bookmarks:", err);
    bookmarksContainer.innerHTML = "<p style='color:red;'>Failed to load bookmarks.</p>";
  }

  // 🔍 Live Search
  const searchInput = document.getElementById("searchInput");
  const suggestionList = document.getElementById("suggestionList");

  searchInput.addEventListener("input", async () => {
    const query = searchInput.value.trim().toLowerCase();
    suggestionList.innerHTML = "";

    if (!query) {
      suggestionList.style.display = "none";
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/recipes");
      const recipes = await res.json();

      const matches = recipes.filter(r => {
        const t = r.title?.toLowerCase() || "";
        const d = r.description?.toLowerCase() || "";
        const i = Array.isArray(r.ingredients) ? r.ingredients.join(", ").toLowerCase() : "";
        return t.includes(query) || d.includes(query) || i.includes(query);
      });

      if (matches.length > 0) {
        suggestionList.style.display = "block";
        matches.slice(0, 6).forEach(recipe => {
          const li = document.createElement("li");
          li.textContent = recipe.title;
          li.addEventListener("click", () => {
            window.location.href = `recipe.html?id=${recipe.id}`;
          });
          suggestionList.appendChild(li);
        });
      } else {
        suggestionList.style.display = "none";
      }
    } catch (err) {
      console.error("❌ Search error:", err);
    }
  });

  // 📝 Cooking Notes
  const notes = document.getElementById("userNotes");
  if (notes) {
    notes.value = localStorage.getItem("userNotes") || "";
    notes.addEventListener("input", () => {
      localStorage.setItem("userNotes", notes.value);
    });
  }
});
