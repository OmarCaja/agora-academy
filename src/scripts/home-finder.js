/**
 * Keyboard shortcut for the home-page search box: "/" and Ctrl/Cmd+K focus it.
 * The form itself submits to /buscar, where the results (web + book PDF links) live.
 */
document.addEventListener("keydown", (e) => {
    const input = document.getElementById("finder-input");
    if (!input) return;
    const typing = /^(INPUT|TEXTAREA)$/.test(e.target.tagName) || e.target.isContentEditable;
    if ((!typing && e.key === "/") || ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k")) {
        e.preventDefault();
        input.focus();
    }
});

// An empty search nudges the box (a short shake) and refocuses it instead of showing the browser's "required" bubble.
document.addEventListener("submit", (e) => {
    const input = e.target.querySelector?.("#finder-input");
    if (input && !input.value.trim()) {
        e.preventDefault();
        e.stopImmediatePropagation();
        input.focus();
        const field = input.parentElement;
        field.classList.remove("nudge");
        void field.offsetWidth; // restart the animation on repeated clicks
        field.classList.add("nudge");
    }
}, true); // capture: must run before the view-transitions router handles the submit

// The placeholder walks through the real example searches, so students see what the box understands.
// Paused while focused or typing; static under prefers-reduced-motion.
let timer;
document.addEventListener("astro:page-load", () => {
    clearInterval(timer);
    const input = document.getElementById("finder-input");
    if (!input || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const terms = [...document.querySelectorAll(".finder-examples a")].map((a) => a.textContent.trim());
    if (terms.length < 2) return;
    let n = 0;
    timer = setInterval(() => {
        if (document.activeElement === input || input.value) return;
        n = (n + 1) % terms.length;
        input.placeholder = `p. ej. ${terms[n]}…`;
    }, 2600);
});
