// ===== THEME TOGGLE =====

// DOM elements
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const html = document.documentElement;

// Theme configuration
const THEMES = {
  LIGHT: "light",
  DARK: "dark",
};

const THEME_ICONS = {
  [THEMES.LIGHT]: "🌒",
  [THEMES.DARK]: "😎",
};

const STORAGE_KEY = "theme";
const THEME_CHANGE_DURATION = 500; // milliseconds

/**
 * Get the initial theme based on user preference or system settings
 * @returns {string} The theme to apply ('light' or 'dark')
 */
const getInitialTheme = () => {
  // Check if user has a saved preference
  const savedTheme = localStorage.getItem(STORAGE_KEY);
  if (savedTheme) {
    return savedTheme;
  }

  // Check system preference
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? THEMES.DARK : THEMES.LIGHT;
};

/**
 * Apply a theme to the document
 * @param {string} theme - The theme to apply ('light' or 'dark')
 */
const applyTheme = (theme) => {
  // Add transition class for smooth theme change
  document.body.classList.add("theme-changing");

  // Update HTML attribute and icon
  if (theme === THEMES.DARK) {
    html.setAttribute("data-theme", THEMES.DARK);
    themeIcon.textContent = THEME_ICONS[THEMES.DARK];
  } else {
    html.removeAttribute("data-theme");
    themeIcon.textContent = THEME_ICONS[THEMES.LIGHT];
  }

  // Save preference
  localStorage.setItem(STORAGE_KEY, theme);

  // Remove transition class after animation completes
  setTimeout(() => {
    document.body.classList.remove("theme-changing");
  }, THEME_CHANGE_DURATION);
};

/**
 * Toggle between light and dark themes
 */
const toggleTheme = () => {
  const currentTheme = html.getAttribute("data-theme");
  const newTheme = currentTheme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
  applyTheme(newTheme);
};

// Initialize theme on page load
const initialTheme = getInitialTheme();
applyTheme(initialTheme);

// Event listeners
themeToggle.addEventListener("click", toggleTheme);

// Listen for system theme changes (only if user hasn't set a preference)
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      applyTheme(e.matches ? THEMES.DARK : THEMES.LIGHT);
    }
  });

// ===== EASTER EGG - FALLING PI DIGITS =====

// Configuration
const PI_DIGITS = "3.1415";
const DIGITS_TO_CREATE = 50;
const DIGIT_STAGGER_DELAY = 80; // milliseconds between each digit
const ANIMATION_DURATION_MIN = 2; // seconds
const ANIMATION_DURATION_MAX = 4; // seconds

/**
 * Create a single falling digit element
 */
const createFallingDigit = () => {
  const digit = document.createElement("div");
  digit.className = "pi-digit";

  // Random digit from pi
  const randomIndex = Math.floor(Math.random() * PI_DIGITS.length);
  digit.textContent = PI_DIGITS[randomIndex];

  // Random horizontal position
  const randomX = Math.random() * window.innerWidth;
  digit.style.left = `${randomX}px`;
  digit.style.top = "-50px";

  // Random animation duration
  const duration =
    ANIMATION_DURATION_MIN +
    Math.random() * (ANIMATION_DURATION_MAX - ANIMATION_DURATION_MIN);
  digit.style.animationDuration = `${duration}s`;

  document.body.appendChild(digit);

  // Remove element after animation completes
  setTimeout(() => {
    digit.remove();
  }, duration * 1000);
};

/**
 * Trigger the pi digits easter egg animation
 */
const triggerPiEasterEgg = () => {
  // Create multiple digits with staggered timing
  for (let i = 0; i < DIGITS_TO_CREATE; i++) {
    setTimeout(() => {
      createFallingDigit();
    }, i * DIGIT_STAGGER_DELAY);
  }
};

// Add click event to level tags
const levelTags = document.querySelectorAll(".level-tag");
levelTags.forEach((tag) => {
  tag.addEventListener("click", triggerPiEasterEgg);
});
