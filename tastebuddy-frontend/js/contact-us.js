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
        // Optional: redirect to search page
        // window.location.href = `search.html?q=${encodeURIComponent(query)}`;
      }
    }
  });
}

// ========== 4. Contact Form Validation ==========
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    const name = contactForm.querySelector('input[name="name"]');
    const email = contactForm.querySelector('input[name="email"]');
    const message = contactForm.querySelector('textarea[name="message"]');

    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
      e.preventDefault();
      alert('Please fill in all fields before submitting the form.');
    }
  });
}
