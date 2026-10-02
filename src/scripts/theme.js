/**
 * Theme Toggle Functionality
 * Handles switching between light and dark modes and persisting user preference.
 * setTheme/updateThemeUI are defined by the inline head script in BaseLayout,
 * which is blocking and always runs before any module.
 */
const STORAGE_KEY = "theme";

const currentTheme = () =>
    document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";

const toggleTheme = () => {
    const newTheme = currentTheme() === "dark" ? "light" : "dark";
    window.setTheme(newTheme);
    localStorage.setItem(STORAGE_KEY, newTheme);
};

const initTheme = () => {
    const btn = document.getElementById("themeToggle");
    if (!btn) return;

    btn.removeEventListener("click", toggleTheme);
    btn.addEventListener("click", toggleTheme);
    window.updateThemeUI(currentTheme());
};

document.addEventListener("astro:page-load", initTheme);

// Follow OS dark-mode changes unless the user has picked a theme manually
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    if (!localStorage.getItem(STORAGE_KEY)) {
        window.setTheme(e.matches ? "dark" : "light");
    }
});
