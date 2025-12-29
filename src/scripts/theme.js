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
