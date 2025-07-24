// Hamburger menu toggle for mobile
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburgerBtn");
  const menuWrapper = document.querySelector(".menu-wrapper");
  if (hamburger && menuWrapper) {
    hamburger.addEventListener("click", () => {
      menuWrapper.classList.toggle("active");
    });
  }
});

// ========== Dark Mode with localStorage ==========

const modeToggle = document.querySelector('.mode-toggle');

// 1. Check saved theme on page load
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
  if (modeToggle) modeToggle.textContent = '☀️';
}

// 2. Toggle and save theme on click
if (modeToggle) {
  modeToggle.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    modeToggle.textContent = isDark ? '☀️' : '🌙';
  });
}


// ========== 3. Search Input Handler ==========
const searchInput = document.querySelector('.search-bar input');

if (searchInput) {
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const query = searchInput.value.trim();
      if (query) {
        alert(`Searching for: ${query}`);
        // Future: window.location.href = `search.html?q=${encodeURIComponent(query)}`;
      }
    }
  });
}
