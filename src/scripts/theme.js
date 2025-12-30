// ===== THEME TOGGLE =====

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
 */
const getInitialTheme = () => {
    const savedTheme = localStorage.getItem(STORAGE_KEY);
    if (savedTheme) return savedTheme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? THEMES.DARK : THEMES.LIGHT;
};

/**
 * Apply a theme to the document
 */
const applyTheme = (theme, themeIcon, themeText) => {
    const html = document.documentElement;
    document.body.classList.add("theme-changing");

    if (theme === THEMES.DARK) {
        html.setAttribute("data-theme", THEMES.DARK);
        if (themeIcon) themeIcon.textContent = THEME_ICONS[THEMES.DARK];
        if (themeText) themeText.textContent = THEME_LABELS[THEMES.DARK];
    } else {
        html.removeAttribute("data-theme");
        if (themeIcon) themeIcon.textContent = THEME_ICONS[THEMES.LIGHT];
        if (themeText) themeText.textContent = THEME_LABELS[THEMES.LIGHT];
    }

    localStorage.setItem(STORAGE_KEY, theme);

    setTimeout(() => {
        document.body.classList.remove("theme-changing");
    }, THEME_CHANGE_DURATION);
};

/**
 * Initialize theme functionality
 */
const initTheme = () => {
    const themeToggle = document.getElementById("themeToggle");
    const themeIcon = document.getElementById("themeIcon");
    const themeText = document.getElementById("themeText");
    const html = document.documentElement;

    if (!themeToggle || !themeIcon || !themeText) return;

    // Apply initial theme state to UI elements
    const currentTheme = html.getAttribute("data-theme") === THEMES.DARK ? THEMES.DARK : THEMES.LIGHT;
    themeIcon.textContent = THEME_ICONS[currentTheme];
    themeText.textContent = THEME_LABELS[currentTheme];

    const toggleTheme = () => {
        const isDark = html.getAttribute("data-theme") === THEMES.DARK;
        const newTheme = isDark ? THEMES.LIGHT : THEMES.DARK;
        applyTheme(newTheme, themeIcon, themeText);
    };

    themeToggle.addEventListener("click", toggleTheme);
};

// Immediate application to prevent FLASH (runs on every page load/navigation)
const initialTheme = getInitialTheme();
if (initialTheme === THEMES.DARK) {
    document.documentElement.setAttribute("data-theme", THEMES.DARK);
}

// Initialize UI elements and listeners
document.addEventListener("astro:page-load", initTheme);

// Listen for system theme changes
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    if (!localStorage.getItem(STORAGE_KEY)) {
        const themeIcon = document.getElementById("themeIcon");
        const themeText = document.getElementById("themeText");
        applyTheme(e.matches ? THEMES.DARK : THEMES.LIGHT, themeIcon, themeText);
    }
});
