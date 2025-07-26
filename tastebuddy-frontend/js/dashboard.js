// ✅ Support both localStorage and sessionStorage
const loggedInUser = localStorage.getItem("loggedInUser") || sessionStorage.getItem("loggedInUser");
const userId = localStorage.getItem("userId") || sessionStorage.getItem("userId");

// 🚫 Redirect if not logged in
if (!loggedInUser || !userId) {
  window.location.href = "login.html";
}

document.addEventListener("DOMContentLoaded", async () => {
  // Initialize all functionality
  initializeProfile();
  initializeModals();
  initializeAvatarUpload();
  initializeProfileForm();
  initializeLogout();
  loadBookmarks();
  initializeSearch();
  initializeNotes();
  initializeDarkMode();
  initializeMobileMenu();
});

// =====================
// Profile Initialization
// =====================
async function initializeProfile() {
  // Set profile info from localStorage or default values
  const profileName = document.getElementById("profileName");
  const profileEmail = document.getElementById("profileEmail");
  const joinDate = document.getElementById("joinDate");
  const avatarPreview = document.getElementById("avatarPreview");
  const profileDetails = document.getElementById("profileDetails");
  const profileBio = document.getElementById("profileBio");
  const profileCookingLevel = document.getElementById("profileCookingLevel");
  const profileFavoriteCuisine = document.getElementById("profileFavoriteCuisine");

  try {
    // Load profile data from backend
    const response = await fetch(`http://localhost:3000/api/profile/${userId}`);
    const profileData = await response.json();
    
    // Set basic profile info
    profileName.textContent = profileData.name || loggedInUser;
    profileEmail.textContent = profileData.email || "user@example.com";
    joinDate.textContent = profileData.joinDate ? new Date(profileData.joinDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long' }) : "January 2024";

    // Display profile details if they exist
    if (profileData.bio || profileData.cookingLevel || profileData.favoriteCuisine) {
      profileDetails.style.display = "block";
      
      if (profileData.bio) {
        profileBio.textContent = profileData.bio;
      }
      
      if (profileData.cookingLevel) {
        profileCookingLevel.textContent = profileData.cookingLevel.charAt(0).toUpperCase() + profileData.cookingLevel.slice(1);
      }
      
      if (profileData.favoriteCuisine) {
        profileFavoriteCuisine.textContent = profileData.favoriteCuisine;
      }
    }

    // Load saved avatar (emoji or image)
    const savedAvatar = profileData.avatar || localStorage.getItem("userAvatar");
    if (savedAvatar) {
      if (savedAvatar.startsWith("data:image")) {
        // It's an uploaded image
        avatarPreview.innerHTML = `<img src="${savedAvatar}" alt="User Avatar">`;
      } else {
        // It's an emoji
        avatarPreview.textContent = savedAvatar;
      }
    }
  } catch (error) {
    console.error("❌ Error loading profile:", error);
    // Fallback to localStorage if backend fails
    const savedProfile = JSON.parse(localStorage.getItem("userProfile") || "{}");
    
    profileName.textContent = savedProfile.name || loggedInUser;
    profileEmail.textContent = savedProfile.email || "user@example.com";
    joinDate.textContent = savedProfile.joinDate || "January 2024";

    // Display profile details if they exist
    if (savedProfile.bio || savedProfile.cookingLevel || savedProfile.favoriteCuisine) {
      profileDetails.style.display = "block";
      
      if (savedProfile.bio) {
        profileBio.textContent = savedProfile.bio;
      }
      
      if (savedProfile.cookingLevel) {
        profileCookingLevel.textContent = savedProfile.cookingLevel.charAt(0).toUpperCase() + savedProfile.cookingLevel.slice(1);
      }
      
      if (savedProfile.favoriteCuisine) {
        profileFavoriteCuisine.textContent = savedProfile.favoriteCuisine;
      }
    }

    // Load saved avatar from localStorage
    const savedAvatar = localStorage.getItem("userAvatar");
    if (savedAvatar) {
      if (savedAvatar.startsWith("data:image")) {
        avatarPreview.innerHTML = `<img src="${savedAvatar}" alt="User Avatar">`;
      } else {
        avatarPreview.textContent = savedAvatar;
      }
    }
  }
}

// =====================
// Modal Management
// =====================
function initializeModals() {
  const avatarModal = document.getElementById("avatarModal");
  const profileModal = document.getElementById("profileModal");
  const avatarEditBtn = document.getElementById("avatarEditBtn");
  const editProfileBtn = document.getElementById("editProfileBtn");
  const closeAvatarModal = document.getElementById("closeAvatarModal");
  const closeProfileModal = document.getElementById("closeProfileModal");
  const cancelProfileEdit = document.getElementById("cancelProfileEdit");

  // Open avatar modal
  avatarEditBtn.addEventListener("click", () => {
    avatarModal.style.display = "block";
    document.body.style.overflow = "hidden";
  });

  // Open profile modal
  editProfileBtn.addEventListener("click", () => {
    // Pre-fill form with current data
    const savedProfile = JSON.parse(localStorage.getItem("userProfile") || "{}");
    document.getElementById("editName").value = savedProfile.name || loggedInUser;
    document.getElementById("editEmail").value = savedProfile.email || "user@example.com";
    document.getElementById("editBio").value = savedProfile.bio || "";
    document.getElementById("editCookingLevel").value = savedProfile.cookingLevel || "beginner";
    document.getElementById("editFavoriteCuisine").value = savedProfile.favoriteCuisine || "";
    
    profileModal.style.display = "block";
    document.body.style.overflow = "hidden";
  });

  // Close modals
  closeAvatarModal.addEventListener("click", () => {
    avatarModal.style.display = "none";
    document.body.style.overflow = "auto";
  });

  closeProfileModal.addEventListener("click", () => {
    profileModal.style.display = "none";
    document.body.style.overflow = "auto";
  });

  cancelProfileEdit.addEventListener("click", () => {
    profileModal.style.display = "none";
    document.body.style.overflow = "auto";
  });

  // Close modals when clicking outside
  window.addEventListener("click", (e) => {
    if (e.target === avatarModal) {
      avatarModal.style.display = "none";
      document.body.style.overflow = "auto";
    }
    if (e.target === profileModal) {
      profileModal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });
}

// =====================
// Avatar Upload & Selection
// =====================
function initializeAvatarUpload() {
  const uploadArea = document.getElementById("uploadArea");
  const fileInput = document.getElementById("avatarFileInput");
  const uploadPreview = document.getElementById("uploadPreview");
  const previewImage = document.getElementById("previewImage");
  const useUploadBtn = document.getElementById("useUploadBtn");
  const removeUploadBtn = document.getElementById("removeUploadBtn");
  const avatarOptions = document.querySelectorAll(".avatar-option");
  const avatarPreview = document.getElementById("avatarPreview");

  // Click to upload
  uploadArea.addEventListener("click", () => {
    fileInput.click();
  });

  // Drag and drop functionality
  uploadArea.addEventListener("dragover", (e) => {
    e.preventDefault();
    uploadArea.classList.add("dragover");
  });

  uploadArea.addEventListener("dragleave", () => {
    uploadArea.classList.remove("dragover");
  });

  uploadArea.addEventListener("drop", (e) => {
    e.preventDefault();
    uploadArea.classList.remove("dragover");
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  });

  // File input change
  fileInput.addEventListener("change", (e) => {
    if (e.target.files.length > 0) {
      handleFileSelect(e.target.files[0]);
    }
  });

  // Use uploaded image
  useUploadBtn.addEventListener("click", async () => {
    const imageSrc = previewImage.src;
    avatarPreview.innerHTML = `<img src="${imageSrc}" alt="User Avatar">`;
    localStorage.setItem("userAvatar", imageSrc);
    
    // Save avatar to backend
    try {
      const response = await fetch("http://localhost:3000/api/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userId,
          avatar: imageSrc
        }),
      });

      if (!response.ok) {
        console.error("Failed to save avatar to backend");
      }
    } catch (error) {
      console.error("❌ Error saving avatar:", error);
    }
    
    // Close modal
    document.getElementById("avatarModal").style.display = "none";
    document.body.style.overflow = "auto";
    
    // Reset upload area
    resetUploadArea();
  });

  // Remove uploaded image
  removeUploadBtn.addEventListener("click", () => {
    resetUploadArea();
  });

  // Emoji avatar selection
  avatarOptions.forEach(option => {
    option.addEventListener("click", async () => {
      // Remove previous selection
      avatarOptions.forEach(opt => opt.classList.remove("selected"));
      
      // Add selection to clicked option
      option.classList.add("selected");
      
      const selectedAvatar = option.getAttribute("data-avatar");
      avatarPreview.textContent = selectedAvatar;
      localStorage.setItem("userAvatar", selectedAvatar);
      
      // Save avatar to backend
      try {
        const response = await fetch("http://localhost:3000/api/profile", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: userId,
            avatar: selectedAvatar
          }),
        });

        if (!response.ok) {
          console.error("Failed to save avatar to backend");
        }
      } catch (error) {
        console.error("❌ Error saving avatar:", error);
      }
      
      // Close modal after a short delay
      setTimeout(() => {
        document.getElementById("avatarModal").style.display = "none";
        document.body.style.overflow = "auto";
      }, 500);
    });
  });

  function handleFileSelect(file) {
    // Validate file type
    if (!file.type.startsWith("image/")) {
      alert("Please select an image file.");
      return;
    }

    // Validate file size (5MB limit)
    if (file.size > 5 * 1024 * 1024) {
      alert("File size must be less than 5MB.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      previewImage.src = e.target.result;
      uploadPreview.style.display = "block";
      uploadArea.style.display = "none";
    };
    reader.readAsDataURL(file);
  }

  function resetUploadArea() {
    uploadPreview.style.display = "none";
    uploadArea.style.display = "block";
    fileInput.value = "";
    previewImage.src = "";
  }
}

// =====================
// Profile Form Handling
// =====================
function initializeProfileForm() {
  const profileForm = document.getElementById("profileForm");
  const profileModal = document.getElementById("profileModal");

  profileForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const formData = new FormData(profileForm);
    const profileData = {
      userId: parseInt(userId), // Ensure userId is a number
      name: formData.get("name") || null,
      email: formData.get("email") || null,
      bio: formData.get("bio") || null,
      cookingLevel: formData.get("cookingLevel") || null,
      favoriteCuisine: formData.get("favoriteCuisine") || null,
      avatar: localStorage.getItem("userAvatar") || null
    };

    // Validate required fields
    if (!profileData.name || !profileData.email) {
      showNotification("Name and email are required!", "error");
      return;
    }

    try {
      // Save to backend
      console.log("Sending profile data:", profileData);
      
      const response = await fetch("http://localhost:3000/api/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(profileData),
      });

      console.log("Response status:", response.status);
      
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Server error:", errorData);
        throw new Error(errorData.error || "Failed to save profile");
      }

      // Also save to localStorage as backup
      localStorage.setItem("userProfile", JSON.stringify(profileData));
      
      // Update display
      document.getElementById("profileName").textContent = profileData.name;
      document.getElementById("profileEmail").textContent = profileData.email;
      
      // Update profile details display
      const profileDetails = document.getElementById("profileDetails");
      const profileBio = document.getElementById("profileBio");
      const profileCookingLevel = document.getElementById("profileCookingLevel");
      const profileFavoriteCuisine = document.getElementById("profileFavoriteCuisine");
      
      // Show profile details if any additional info exists
      if (profileData.bio || profileData.cookingLevel || profileData.favoriteCuisine) {
        profileDetails.style.display = "block";
        
        if (profileData.bio) {
          profileBio.textContent = profileData.bio;
        }
        
        if (profileData.cookingLevel) {
          profileCookingLevel.textContent = profileData.cookingLevel.charAt(0).toUpperCase() + profileData.cookingLevel.slice(1);
        }
        
        if (profileData.favoriteCuisine) {
          profileFavoriteCuisine.textContent = profileData.favoriteCuisine;
        }
      }
      
      // Close modal
      profileModal.style.display = "none";
      document.body.style.overflow = "auto";
      
      // Show success message
      showNotification("Profile updated successfully!", "success");
    } catch (error) {
      console.error("❌ Error saving profile:", error);
      showNotification("Failed to save profile. Please try again.", "error");
    }
  });
}

// =====================
// Logout Functionality
// =====================
function initializeLogout() {
  const logoutBtn = document.getElementById("logoutBtn");
  
  logoutBtn.addEventListener("click", () => {
    if (confirm("Are you sure you want to logout?")) {
      // Clear only authentication data, keep profile data in localStorage as backup
      localStorage.removeItem("loggedInUser");
      localStorage.removeItem("userId");
      sessionStorage.clear();
      
      // Redirect to login page
      window.location.href = "login.html";
    }
  });
}

// =====================
// Bookmarked Recipes
// =====================
async function loadBookmarks() {
  const bookmarksContainer = document.getElementById("bookmarks");

  try {
    const response = await fetch(`http://localhost:3000/api/bookmarks/${userId}`);
    const bookmarkedRecipes = await response.json();

    if (!Array.isArray(bookmarkedRecipes) || bookmarkedRecipes.length === 0) {
      bookmarksContainer.innerHTML = "<p>No bookmarks yet. Start exploring recipes to bookmark your favorites!</p>";
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
    bookmarksContainer.innerHTML = "<p style='color:red;'>Failed to load bookmarks. Please try again later.</p>";
  }
}

// =====================
// Search Functionality
// =====================
function initializeSearch() {
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

  // Hide suggestions when clicking outside
  document.addEventListener("click", (e) => {
    if (!searchInput.contains(e.target) && !suggestionList.contains(e.target)) {
      suggestionList.style.display = "none";
    }
  });
}

// =====================
// Notes Functionality
// =====================
function initializeNotes() {
  const notes = document.getElementById("userNotes");
  if (notes) {
    notes.value = localStorage.getItem("userNotes") || "";
    notes.addEventListener("input", () => {
      localStorage.setItem("userNotes", notes.value);
    });
  }
}

// =====================
// Dark Mode Toggle
// =====================
function initializeDarkMode() {
  const toggle = document.getElementById("modeToggle");

  // Set initial state
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    toggle.textContent = "☀️";
  }

  toggle.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-mode");
    toggle.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
}

// =====================
// Utility Functions
// =====================
function showNotification(message, type = "info") {
  // Create notification element
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  
  // Style the notification
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    color: white;
    font-weight: 500;
    z-index: 10000;
    animation: slideIn 0.3s ease;
    max-width: 300px;
  `;
  
  // Set background color based on type
  if (type === "success") {
    notification.style.backgroundColor = "#28a745";
  } else if (type === "error") {
    notification.style.backgroundColor = "#dc3545";
  } else {
    notification.style.backgroundColor = "#17a2b8";
  }
  
  // Add to page
  document.body.appendChild(notification);
  
  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.animation = "slideOut 0.3s ease";
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 3000);
}

// =====================
// Mobile Menu Toggle
// =====================
function initializeMobileMenu() {
  const hamburger = document.getElementById("hamburgerBtn");
  const menuWrapper = document.querySelector(".menu-wrapper");
  
  if (hamburger && menuWrapper) {
    hamburger.addEventListener("click", () => {
      menuWrapper.classList.toggle("active");
    });
  }
}

// Add CSS animations for notifications
const style = document.createElement("style");
style.textContent = `
  @keyframes slideIn {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  @keyframes slideOut {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(100%); opacity: 0; }
  }
`;
document.head.appendChild(style);
