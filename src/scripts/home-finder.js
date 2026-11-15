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
