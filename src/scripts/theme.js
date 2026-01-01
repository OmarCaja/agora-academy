// ===== THEME TOGGLE =====

const STORAGE_KEY = "theme";

const toggleTheme = () => {
    const html = document.documentElement;
    const currentTheme = html.getAttribute("data-theme") === "dark" ? "dark" : "light";
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    // Apply theme using the function from BaseLayout (if available) or manually
    if (window.setTheme) {
        window.setTheme(newTheme);
    } else {
        // Fallback if BaseLayout's inline script isn't available for some reason
        if (newTheme === "dark") {
            html.setAttribute("data-theme", "dark");
        } else {
            html.removeAttribute("data-theme");
        }
        const themeIcon = document.getElementById("themeIcon");
        const themeText = document.getElementById("themeText");
        if (themeIcon) themeIcon.textContent = newTheme === "dark" ? "☀️" : "🌑";
        if (themeText) themeText.textContent = newTheme === "dark" ? "Cambiar a tema claro" : "Cambiar a tema oscuro";
    }

    localStorage.setItem(STORAGE_KEY, newTheme);
};

/**
 * Initialize theme functionality
 */
const initTheme = () => {
    const themeToggle = document.getElementById("themeToggle");
    if (!themeToggle) return;

    // Remove existing listener if any (to prevent multiple listeners on persisted elements)
    themeToggle.removeEventListener("click", toggleTheme);
    themeToggle.addEventListener("click", toggleTheme);

    // Sync UI state with applied theme
    const currentTheme = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
    if (window.updateThemeUI) {
        window.updateThemeUI(currentTheme);
    }
};

// Initialize after every navigation
document.addEventListener("astro:page-load", initTheme);

// Handle system theme changes
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    if (!localStorage.getItem(STORAGE_KEY)) {
        const newTheme = e.matches ? "dark" : "light";
        if (window.setTheme) {
            window.setTheme(newTheme);
        } else {
            document.documentElement.setAttribute("data-theme", newTheme);
        }
    }
});
