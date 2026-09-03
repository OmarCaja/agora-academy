/**
 * Shared in-page search filter (theory topics and exercise levels).
 *
 * Markup contract, rendered by SearchBox.astro plus the host page:
 *   #siteSearch / #searchKbd / #clearSearch / #searchCount  — the search box
 *   [data-search-section][data-search-text]                 — a collapsible group
 *   [data-search-item][data-search-text]                    — a filterable row
 *   #tocWrapper (optional)                                  — hidden while filtering
 *   #noResults (optional)                                   — shown when nothing matches
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
            searchCount.textContent = query ? `${totalMatches} ${noun}` : "";
        }
    };

    input.addEventListener("input", updateSearch);
    input.addEventListener("focus", updateKbdVisibility);
    input.addEventListener("blur", updateKbdVisibility);

    if (clearBtn) {
        clearBtn.addEventListener("click", () => {
            input.value = "";
            updateSearch();
            input.focus();
        });
    }

    document.removeEventListener("keydown", handleKeydown);
    document.addEventListener("keydown", handleKeydown);
};

document.addEventListener("astro:page-load", initSearchFilter);
