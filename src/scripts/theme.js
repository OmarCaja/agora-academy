/**
 * Theme Toggle Functionality
 * Handles switching between light and dark modes and persisting user preference.
 */
const STORAGE_KEY = "theme";

const SELECTORS = {
    toggleBtn: "themeToggle",
    dataTheme: "data-theme"
};

const THEMES = {
    dark: "dark",
    light: "light"
};

/**
 * Toggles the current theme and persists the choice.
 */
const toggleTheme = () => {
    const isDark = document.documentElement.getAttribute(SELECTORS.dataTheme) === THEMES.dark;
    const newTheme = isDark ? THEMES.light : THEMES.dark;

    // setTheme/updateThemeUI are defined by the inline head script in
    // BaseLayout, which is blocking and always runs before any module.
    window.setTheme(newTheme);

    localStorage.setItem(STORAGE_KEY, newTheme);
};

/**
 * Initializes the theme toggle button listener.
 */
const initTheme = () => {
    const btn = document.getElementById(SELECTORS.toggleBtn);
    if (!btn) return;

    btn.removeEventListener("click", toggleTheme);
    btn.addEventListener("click", toggleTheme);

    // Sync button state with current theme
    const currentTheme = document.documentElement.getAttribute(SELECTORS.dataTheme) === THEMES.dark
        ? THEMES.dark
        : THEMES.light;
    window.updateThemeUI(currentTheme);
};

document.addEventListener("astro:page-load", initTheme);

// Listen for system preference changes (Dark Mode OS setting)
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    // Only auto-switch if the user hasn't manually set a preference
    if (!localStorage.getItem(STORAGE_KEY)) {
        const newTheme = e.matches ? THEMES.dark : THEMES.light;
        window.setTheme(newTheme);
    }
});
