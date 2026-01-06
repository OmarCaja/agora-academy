// ===== THEME TOGGLE =====
const STORAGE_KEY = "theme";

const toggleTheme = () => {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    const newTheme = isDark ? "light" : "dark";

    if (window.setTheme) {
        window.setTheme(newTheme);
    } else {
        // Fallback
        document.documentElement.setAttribute("data-theme", newTheme);
        if (window.updateThemeUI) window.updateThemeUI(newTheme);
    }

    localStorage.setItem(STORAGE_KEY, newTheme);
};

const initTheme = () => {
    const btn = document.getElementById("themeToggle");
    if (!btn) return;

    btn.removeEventListener("click", toggleTheme);
    btn.addEventListener("click", toggleTheme);

    // Sync UI with current attribute
    if (window.updateThemeUI) {
        const currentTheme = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
        window.updateThemeUI(currentTheme);
    }
};

document.addEventListener("astro:page-load", initTheme);

// System preference listener
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    if (!localStorage.getItem(STORAGE_KEY)) {
        const newTheme = e.matches ? "dark" : "light";
        if (window.setTheme) window.setTheme(newTheme);
    }
});
