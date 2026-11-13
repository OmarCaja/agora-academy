/**
 * Shared in-page search filter (theory topics and exercise levels).
 *
 * Markup contract, rendered by SearchBox.astro plus the host page:
 *   #siteSearch / #searchKbd / #clearSearch / #searchCount  — the search box
 *   [data-search-section][data-search-text]                 — a collapsible group
 *   [data-search-item][data-search-text]                    — a filterable row
 *   #tocWrapper (optional)                                  — hidden while filtering
 *   #noResults (optional)                                   — shown when nothing matches
 *   [data-search-reset] (optional)                          — button that clears the query
 */
import { normalizeText } from "../utils/normalizeText";

/**
 * Global shortcuts: '/' or Cmd/Ctrl+K focus the search, Escape blurs it.
 * Kept at module scope (stable reference) so re-initialising on every
 * astro:page-load cannot stack duplicate document listeners.
 */
const handleKeydown = (e) => {
    const input = document.getElementById("siteSearch");
    if (!input) return;

    const target = e.target;
    const isTyping = target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable);

    if (!isTyping && e.key === "/") {
        e.preventDefault();
        input.focus();
    } else if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        input.focus();
    } else if (e.key === "Escape" && document.activeElement === input) {
        input.blur();
    }
};

/**
 * Easter egg: a few exact queries (spaces ignored) add a quip after the match
 * count. `shake` also rattles the search box, for the impossible ones.
 */
const SECRET_QUERIES = new Map([
    ["42", { quip: "La respuesta a la vida, el universo y todo lo demás." }],
    ["1/0", { quip: "¡Dividir entre cero está prohibido!", shake: true }],
    ["0/0", { quip: "Indeterminación: prueba con L'Hôpital." }],
]);

const initSearchFilter = () => {
    const input = document.getElementById("siteSearch");
    if (!input) return;

    const clearBtn = document.getElementById("clearSearch");
    const kbdBadge = document.getElementById("searchKbd");
    const searchCount = document.getElementById("searchCount");
    const tocWrapper = document.getElementById("tocWrapper");
    const noResults = document.getElementById("noResults");
    const sections = document.querySelectorAll("[data-search-section]");

    const updateKbdVisibility = () => {
        if (!kbdBadge) return;
        const isFocused = document.activeElement === input;
        kbdBadge.style.display = isFocused || input.value.trim() ? "none" : "inline-flex";
    };

    const updateSearch = () => {
        const rawValue = input.value.trim();
        const query = normalizeText(rawValue);
        let totalMatches = 0;
        let visibleSections = 0;

        if (clearBtn) {
            clearBtn.style.display = rawValue.length > 0 ? "flex" : "none";
        }
        updateKbdVisibility();

        sections.forEach((section) => {
            const sectionText = normalizeText(section.dataset.searchText || "");
            let sectionMatches = 0;

            section.querySelectorAll("[data-search-item]").forEach((item) => {
                const matches =
                    query === "" ||
                    sectionText.includes(query) ||
                    normalizeText(item.dataset.searchText || "").includes(query) ||
                    normalizeText(item.textContent || "").includes(query);

                item.style.display = matches ? "" : "none";
                if (matches) {
                    sectionMatches++;
                    totalMatches++;
                }
            });

            section.style.display = sectionMatches > 0 ? "" : "none";
            if (sectionMatches > 0) visibleSections++;
        });

        if (tocWrapper) {
            tocWrapper.style.display = query ? "none" : "";
        }

        if (noResults) {
            noResults.style.display = visibleSections === 0 ? "block" : "none";
        }

        if (searchCount) {
            const noun = totalMatches === 1
                ? searchCount.dataset.countSingular
                : searchCount.dataset.countPlural;
            const secret = SECRET_QUERIES.get(query.replace(/\s+/g, ""));
            const count = query ? `${totalMatches} ${noun}` : "";
            searchCount.textContent = secret ? `${count} · ${secret.quip}` : count;

            if (secret?.shake) {
                const box = input.parentElement;
                box.classList.add("is-shaking");
                box.addEventListener("animationend", () => box.classList.remove("is-shaking"), { once: true });
            }
        }
    };

    input.addEventListener("input", updateSearch);
    input.addEventListener("focus", updateKbdVisibility);
    input.addEventListener("blur", updateKbdVisibility);

    const clearSearch = () => {
        input.value = "";
        updateSearch();
        input.focus();
    };

    clearBtn?.addEventListener("click", clearSearch);
    document.querySelector("[data-search-reset]")?.addEventListener("click", clearSearch);

    document.removeEventListener("keydown", handleKeydown);
    document.addEventListener("keydown", handleKeydown);
};

document.addEventListener("astro:page-load", initSearchFilter);
