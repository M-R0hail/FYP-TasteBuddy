document.addEventListener("DOMContentLoaded", async () => {
  const toggle = document.getElementById('modeToggle');
  const recipeList = document.getElementById('recipe-list');
  const recipeDetails = document.getElementById('recipe-details');
  const searchInput = document.querySelector('.search-bar input');
  const suggestionList = document.getElementById('suggestionList');
  const filterButtons = document.getElementById('filter-buttons');

  const params = new URLSearchParams(window.location.search);
  const recipeId = params.get("id");
  const searchQuery = params.get("search")?.toLowerCase();
  const categoryFromURL = params.get('category');

  let allRecipes = [];
  let currentCategory = categoryFromURL || 'All';

  // 🌙 Dark Mode
  const userTheme = localStorage.getItem('theme');
  if (userTheme === 'dark') {
    document.body.classList.add('dark-mode');
    toggle.textContent = '☀️';
  }

  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    toggle.textContent = theme === 'dark' ? '☀️' : '🌙';
  });

  // View by ID
  if (recipeId) {
    try {
      const res = await fetch(`http://localhost:3000/api/recipes/${recipeId}`);
      const recipe = await res.json();

      document.body.innerHTML = `
        <div style="padding: 20px;">
          <h1>${recipe.title}</h1>
          <img src="${recipe.image}" alt="${recipe.title}" style="max-width: 100%; border-radius: 10px;" />
          <p>${recipe.description}</p>
          <h3>Ingredients</h3>
          <ul>${JSON.parse(recipe.ingredients).map(i => `<li>${i}</li>`).join('')}</ul>
          <h3>Instructions</h3>
          <p>${recipe.instructions}</p>
        </div>
      `;
    } catch (err) {
      console.error(err);
      document.body.innerHTML = "<h2>Recipe not found or error loading.</h2>";
    }
    return;
  }

  // Fetch all recipes
  try {
    const res = await fetch('http://localhost:3000/api/recipes');
    allRecipes = await res.json();

    if (searchInput && searchQuery) {
      searchInput.value = searchQuery;
    }

    document.querySelectorAll('#filter-buttons button').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.category === currentCategory);
    });

    renderRecipes(allRecipes);
    filterRecipes();
  } catch (err) {
    console.error('❌ Error fetching recipes:', err);
    recipeDetails.innerHTML = '<p style="color:red;">Failed to load recipes.</p>';
  }

  // Filter live on input
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();
    if (!query) {
      suggestionList.style.display = "none";
      return;
    }

    const matched = allRecipes.filter(recipe =>
      recipe.title.toLowerCase().includes(query) ||
      (Array.isArray(recipe.ingredients)
        ? recipe.ingredients.join(', ').toLowerCase().includes(query)
        : recipe.ingredients.toLowerCase().includes(query))
    );

    suggestionList.innerHTML = "";

    matched.slice(0, 7).forEach(recipe => {
      const li = document.createElement("li");
      li.textContent = recipe.title;
      li.addEventListener("click", () => {
        showRecipeDetails(recipe);
        searchInput.value = recipe.title;
        suggestionList.style.display = "none";
      });
      suggestionList.appendChild(li);
    });

    suggestionList.style.display = matched.length > 0 ? "block" : "none";
    filterRecipes();
  });

  // Hide dropdown when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-bar")) {
      suggestionList.style.display = "none";
    }
  });

  // Filter buttons
  filterButtons?.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
      currentCategory = e.target.dataset.category;
      document.querySelectorAll('#filter-buttons button').forEach(btn =>
        btn.classList.remove('active')
      );
      e.target.classList.add('active');
      filterRecipes();
    }
  });

  function filterRecipes() {
    const query = searchInput.value.trim().toLowerCase();
    let filtered = [...allRecipes];

    if (currentCategory !== 'All') {
      filtered = filtered.filter(r =>
        r.category?.toLowerCase().trim() === currentCategory.toLowerCase().trim()
      );
    }

    if (query) {
      filtered = filtered.filter(r =>
        r.title.toLowerCase().includes(query) ||
        r.description.toLowerCase().includes(query) ||
        (Array.isArray(r.ingredients)
          ? r.ingredients.join(', ').toLowerCase().includes(query)
          : r.ingredients.toLowerCase().includes(query))
      );
    }

    renderRecipes(filtered);
  }

  function renderRecipes(recipes) {
    recipeList.innerHTML = '';

    if (recipes.length === 0) {
      recipeList.innerHTML = '<p>No recipes found.</p>';
      recipeDetails.innerHTML = '<p>Select another recipe or try a new search.</p>';
      return;
    }

    recipes.forEach(recipe => {
      const item = document.createElement('div');
      item.className = 'recipe-title';
      item.textContent = recipe.title;
      item.addEventListener('click', () => showRecipeDetails(recipe));
      recipeList.appendChild(item);
    });
  }

  function showRecipeDetails(recipe) {
    const content = document.querySelector(".content");

    const ingredients = Array.isArray(recipe.ingredients)
      ? recipe.ingredients
      : recipe.ingredients.split(',');

    content.innerHTML = `
      <h2>${recipe.title}</h2>
      <img src="${recipe.image.startsWith('http') ? recipe.image : `http://localhost:3000/images/${recipe.image}`}" class="recipe-image" alt="${recipe.title}" />
      <p>${recipe.description}</p>
      <h3>Ingredients</h3>
      <ul>
        ${ingredients.map(i => `<li>${i.trim()}</li>`).join('')}
      </ul>
      <h3>Instructions</h3>
      <p>${recipe.instructions}</p>
    `;
  }
});
