// 🚫 Redirect to login if not logged in
if (!localStorage.getItem("loggedInUser")) {
  window.location.href = "login.html";
}

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("modeToggle");
  const userName = localStorage.getItem("loggedInUser") || "User";
  const userId = localStorage.getItem("userId") || 1;
  const profileImage = localStorage.getItem("profileImage");

  // 🧑‍💼 Set user name and profile
  document.getElementById("username").textContent = userName;
  document.getElementById("profileName").textContent = userName;
  if (profileImage) {
    document.getElementById("profileImage").src = profileImage;
  }

  // 🌙 Apply dark mode
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    toggle.textContent = "☀️";
  }

  toggle.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-mode");
    toggle.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });

  // 📌 Load Bookmarked Recipes
  fetch(`http://localhost:3000/api/user/${userId}/bookmarks`)
    .then(res => res.json())
    .then(recipes => {
      const bookmarkContainer = document.getElementById("bookmarks");
      if (recipes.length > 0) {
        bookmarkContainer.innerHTML = "";
        recipes.forEach(recipe => {
          const card = document.createElement("div");
          card.className = "card";
          card.innerHTML = `
            <img src="${recipe.image_url}" alt="${recipe.title}" style="width: 100%; height: 150px; object-fit: cover; border-radius: 8px 8px 0 0;">
            <div class="card-content"><h3>${recipe.title}</h3></div>`;
          bookmarkContainer.appendChild(card);
        });
      }
    })
    .catch(err => {
      console.error("❌ Error loading bookmarks:", err);
      document.getElementById("bookmarks").innerHTML = "<p>Failed to load bookmarks.</p>";
    });

  // 🕘 Load Recently Viewed
  const recentContainer = document.getElementById("recent");
  const recent = JSON.parse(localStorage.getItem("recent")) || [];
  if (recentContainer && recent.length > 0) {
    recentContainer.innerHTML = "";
    recent.forEach(recipe => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${recipe.image_url}" alt="${recipe.title}" style="width: 100%; height: 150px; object-fit: cover; border-radius: 8px 8px 0 0;">
        <div class="card-content"><h3>${recipe.title}</h3></div>`;
      recentContainer.appendChild(card);
    });
  }

  // 👋 Welcome Text
  const welcomeText = document.getElementById('welcomeText');
  if (welcomeText) {
    welcomeText.textContent = `Welcome, ${userName}!`;
  }

  // 🔍 Search bar
  const searchInput = document.getElementById("searchInput");
  const suggestionList = document.getElementById("suggestionList");

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();
    suggestionList.innerHTML = "";

    if (!query) {
      suggestionList.style.display = "none";
      return;
    }

    fetch("http://localhost:3000/api/recipes")
      .then(res => res.json())
      .then(recipes => {
        const matches = recipes.filter(recipe => {
          const title = recipe.title?.toLowerCase() || "";
          const desc = recipe.description?.toLowerCase() || "";
          const ingredients = Array.isArray(recipe.ingredients)
            ? recipe.ingredients.join(", ").toLowerCase()
            : (recipe.ingredients || "").toLowerCase();

          return (
            title.includes(query) ||
            desc.includes(query) ||
            ingredients.includes(query)
          );
        });

        if (matches.length > 0) {
          suggestionList.style.display = "block";
          matches.slice(0, 6).forEach(recipe => {
            const li = document.createElement("li");
            li.textContent = recipe.title;
            li.addEventListener("click", () => {
              searchInput.value = "";
              suggestionList.style.display = "none";
              scrollToAndHighlightRecipe(recipe.title);
            });
            suggestionList.appendChild(li);
          });
        } else {
          suggestionList.style.display = "none";
        }
      })
      .catch(err => console.error("Search failed:", err));
  });
});

// 📝 Notes - Save and Load from localStorage
const notesArea = document.getElementById("userNotes");
if (notesArea) {
  notesArea.value = localStorage.getItem("userNotes") || "";
  notesArea.addEventListener("input", () => {
    localStorage.setItem("userNotes", notesArea.value);
  });
}
