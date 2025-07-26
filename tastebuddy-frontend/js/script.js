// =====================
// Mobile Menu Toggle
// =====================
document.addEventListener("DOMContentLoaded", () => {
  // Hamburger menu for mobile
  const hamburger = document.getElementById("hamburgerBtn");
  const menuWrapper = document.querySelector(".menu-wrapper");
  if (hamburger && menuWrapper) {
    hamburger.addEventListener("click", () => {
      menuWrapper.classList.toggle("active");
    });
  }

  // =====================
  // Dark/Light Mode Toggle
  // =====================
  const toggle = document.getElementById("modeToggle");
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

  // =====================
  // Recipe Search & Filtering
  // =====================
  const recipeList = document.getElementById("recipe-list");
  const recipeDetails = document.getElementById("recipe-details");
  const searchInput = document.getElementById("searchInput");
  const filterButtons = document.getElementById("filter-buttons");
  const urlParams = new URLSearchParams(window.location.search);
  const recipeId = urlParams.get("id");
  const userId = localStorage.getItem("userId") || 1;

  // If viewing a single recipe
  if (recipeId && recipeDetails) {
    fetch(`http://localhost:3000/api/recipes/${recipeId}`)
      .then((res) => res.json())
      .then((recipe) => {
        const ingredients = JSON.parse(recipe.ingredients || "[]");
        const ingredientsHTML = ingredients
          .map((i) => `<li>${i}</li>`)
          .join("");
        recipeDetails.innerHTML = `
          <h2>${recipe.title}</h2>
          <img src="${recipe.image_url}" class="recipe-image" />
          <p>${recipe.description}</p>
          <h3>Ingredients</h3>
          <ul>${ingredientsHTML}</ul>
          <h3>Instructions</h3>
          <p>${recipe.instructions}</p>
          <button id="bookmarkBtn">⭐ Bookmark This Recipe</button>
        `;
        // Bookmark logic
        const bookmarkBtn = document.getElementById("bookmarkBtn");
        bookmarkBtn.addEventListener("click", () => {
          fetch("http://localhost:3000/api/bookmark", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userId, recipeId }),
          })
            .then((res) => res.json())
            .then(() => {
              bookmarkBtn.textContent = "✅ Bookmarked";
              bookmarkBtn.disabled = true;
            });
        });
      })
      .catch(() => {
        recipeDetails.innerHTML =
          "<h2 style='color:red;'>Recipe not found.</h2>";
      });
    return; // Don't load all recipes if showing just one
  }

  // Load and display all recipes
  let allRecipes = [];
  let currentCategory = "All";

  function renderRecipes(recipes) {
    if (!recipeList || !recipeDetails) return;
    recipeList.innerHTML = "";
    if (recipes.length === 0) {
      recipeList.innerHTML = "<p>No recipes found.</p>";
      recipeDetails.innerHTML =
        "<p>Select another recipe or try a new search.</p>";
      return;
    }
    recipes.forEach((recipe) => {
      const item = document.createElement("div");
      item.className = "recipe-title";
      item.textContent = recipe.title;
      item.addEventListener("click", () => {
        const ingredients = JSON.parse(recipe.ingredients || "[]");
        const ingredientsHTML = ingredients
          .map((i) => `<li>${i}</li>`)
          .join("");
        recipeDetails.innerHTML = `
          <h2>${recipe.title}</h2>
          <img src="${recipe.image_url}" class="recipe-image" />
          <p>${recipe.description}</p>
          <h3>Ingredients</h3>
          <ul>${ingredientsHTML}</ul>
          <h3>Instructions</h3>
          <p>${recipe.instructions}</p>
          <button id="bookmarkBtn">⭐ Bookmark This Recipe</button>
        `;
        // Bookmark logic
        const bookmarkBtn = document.getElementById("bookmarkBtn");
        bookmarkBtn.addEventListener("click", () => {
          fetch("http://localhost:3000/api/bookmark", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userId, recipeId: recipe.id }),
          })
            .then((res) => res.json())
            .then(() => {
              bookmarkBtn.textContent = "✅ Bookmarked";
              bookmarkBtn.disabled = true;
            });
        });
      });
      recipeList.appendChild(item);
    });
  }

  function filterRecipes() {
    const query = searchInput.value.trim().toLowerCase();
    let filtered = [...allRecipes];
    if (currentCategory !== "All") {
      filtered = filtered.filter(
        (r) =>
          r.category &&
          r.category.toLowerCase() === currentCategory.toLowerCase()
      );
    }
    if (query) {
      filtered = filtered.filter(
        (r) =>
          r.title.toLowerCase().includes(query) ||
          r.description.toLowerCase().includes(query) ||
          (Array.isArray(r.ingredients)
            ? r.ingredients.join(", ").toLowerCase().includes(query)
            : r.ingredients.toLowerCase().includes(query))
      );
    }
    renderRecipes(filtered);
  }

  // Fetch all recipes
  fetch("http://localhost:3000/api/recipes")
    .then((res) => res.json())
    .then((data) => {
      allRecipes = data;
      renderRecipes(allRecipes);
    });

  // Filter buttons
  if (filterButtons) {
    filterButtons.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") {
        currentCategory = e.target.dataset.category;
        document
          .querySelectorAll("#filter-buttons button")
          .forEach((btn) => btn.classList.remove("active"));
        e.target.classList.add("active");
        filterRecipes();
      }
    });
  }

  // Search input
  if (searchInput) {
    searchInput.addEventListener("input", filterRecipes);
  }
});

// =====================
// Search Suggestions (Autocomplete)
// =====================
const searchInput = document.getElementById("searchInput");
const suggestionList = document.getElementById("suggestionList");

if (searchInput && suggestionList) {
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();
    suggestionList.innerHTML = "";
    if (!query) {
      suggestionList.style.display = "none";
      return;
    }
    fetch("http://localhost:3000/api/recipes")
      .then((res) => res.json())
      .then((recipes) => {
        const matches = recipes.filter((recipe) => {
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
          matches.slice(0, 6).forEach((recipe) => {
            const li = document.createElement("li");
            li.textContent = recipe.title;
            li.addEventListener("click", () => {
              searchInput.value = "";
              suggestionList.style.display = "none";
              window.location.href = `../pages/recipe.html?id=${recipe.id}`;
            });
            suggestionList.appendChild(li);
          });
        } else {
          suggestionList.style.display = "none";
        }
      })
      .catch((err) => {
        console.error("Search failed:", err);
        suggestionList.style.display = "none";
      });
  });
}

// =====================
// Star Rating (for cards)
// =====================
document.querySelectorAll(".rating").forEach((ratingEl) => {
  let currentRating = parseInt(ratingEl.dataset.rating) || 0;
  // Create 5 stars
  for (let i = 1; i <= 5; i++) {
    const star = document.createElement("span");
    star.classList.add("star");
    star.textContent = "★";
    if (i <= currentRating) {
      star.classList.add("filled");
    }
    // Add click event with toggle/unstar logic
    star.addEventListener("click", () => {
      if (currentRating === i) {
        currentRating = 0;
        ratingEl.dataset.rating = 0;
      } else {
        currentRating = i;
        ratingEl.dataset.rating = i;
      }
      // Update visual stars
      ratingEl.querySelectorAll(".star").forEach((s, index) => {
        s.classList.toggle("filled", index < currentRating);
      });
    });
    ratingEl.appendChild(star);
  }
});
