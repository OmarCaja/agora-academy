// ===== THEME TOGGLE =====

// DOM elements
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const themeText = document.getElementById("themeText");
const html = document.documentElement;

// Theme configuration
const THEMES = {
  LIGHT: "light",
  DARK: "dark",
};

const THEME_ICONS = {
  [THEMES.LIGHT]: "🌑",
  [THEMES.DARK]: "☀️",
};

const THEME_LABELS = {
  [THEMES.LIGHT]: "Cambiar a tema oscuro",
  [THEMES.DARK]: "Cambiar a tema claro",
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

  // Update HTML attribute, icon, and accessibility text
  if (theme === THEMES.DARK) {
    html.setAttribute("data-theme", THEMES.DARK);
    themeIcon.textContent = THEME_ICONS[THEMES.DARK];
    themeText.textContent = THEME_LABELS[THEMES.DARK];
  } else {
    html.removeAttribute("data-theme");
    themeIcon.textContent = THEME_ICONS[THEMES.LIGHT];
    themeText.textContent = THEME_LABELS[THEMES.LIGHT];
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

// ===== HAMBURGER MENU =====

const menuToggle = document.getElementById("menuToggle");
const menuOverlay = document.getElementById("menuOverlay");
const menuSymbol = document.querySelector(".menu-symbol");

// Math symbols for animation
const MATH_SYMBOLS = ["+", "-", "π", "X", "÷", "="];

/**
 * Animate the menu symbol by cycling through math characters
 * @param {string} finalSymbol - The symbol to settle on
 */
const animateMenuSymbol = (finalSymbol) => {
  let iterations = 0;
  const maxIterations = 10;
  const intervalTime = 50;

  const interval = setInterval(() => {
    menuSymbol.innerText = MATH_SYMBOLS[Math.floor(Math.random() * MATH_SYMBOLS.length)];
    iterations++;

    if (iterations >= maxIterations) {
      clearInterval(interval);
      menuSymbol.innerText = finalSymbol;
    }
  }, intervalTime);
};

/**
 * Toggle the menu open/closed
 */
const toggleMenu = () => {
  menuToggle.classList.toggle("active");
  menuOverlay.classList.toggle("active");

  // Get current symbol to avoid picking the same one
  const currentSymbol = menuSymbol.innerText;
  let randomSymbol;

  // Pick a random symbol different from the current one
  do {
    randomSymbol = MATH_SYMBOLS[Math.floor(Math.random() * MATH_SYMBOLS.length)];
  } while (randomSymbol === currentSymbol);

  // Animate to new random symbol
  animateMenuSymbol(randomSymbol);

  // Prevent body scroll when menu is open
  if (menuOverlay.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
};

// Event listener for menu toggle button
menuToggle.addEventListener("click", toggleMenu);

// Close menu when clicking outside the nav
menuOverlay.addEventListener("click", (e) => {
  if (e.target === menuOverlay) {
    toggleMenu();
  }
});

// Close menu when pressing Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && menuOverlay.classList.contains("active")) {
    toggleMenu();
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

// ===== SCROLL ANIMATIONS (INTERSECTION OBSERVER) =====

/**
 * Initialize intersection observer for scroll animations
 */
const initScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -20px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        // Stop observing after animation
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all elements with fade-in class
  const fadeElements = document.querySelectorAll(".fade-in");
  fadeElements.forEach((element) => {
    // Check if element is already in viewport on page load
    const rect = element.getBoundingClientRect();
    const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;

    if (isInViewport) {
      // Show immediately if already visible
      element.classList.add("visible");
    } else {
      // Observe if not visible yet
      observer.observe(element);
    }
  });
};

// Initialize scroll animations when DOM is ready
initScrollAnimations();

// ===== KATEX INITIALIZATION =====

// Wait for KaTeX auto-render to load, then render all math
document.addEventListener("DOMContentLoaded", function () {
  if (window.renderMathInElement) {
    renderMathInElement(document.body, {
      delimiters: [
        { left: "$", right: "$", display: true },
        { left: "$", right: "$", display: false }
      ],
      throwOnError: false
    });
  }
});