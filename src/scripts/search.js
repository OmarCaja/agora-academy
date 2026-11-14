/**
 * Shared in-page search filter (theory topics, exercise levels and the book list).
 *
 * Markup contract, rendered by SearchBox.astro plus the host page:
 *   #siteSearch / #searchKbd / #clearSearch / #searchCount  — the search box
 *   [data-search-section][data-search-text]                 — a collapsible group
 *   [data-search-item][data-search-text]                    — a filterable row
 *   [data-search-title] (optional, on items)                — enables relevance ordering of the items
 *   #tocWrapper (optional)                                  — hidden while filtering
 *   #noResults (optional)                                   — shown when nothing matches
 *   [data-search-reset] (optional)                          — button that clears the query
 *
 * How a query matches (all words, any order, synonyms, small typos) lives in utils/searchMatch.js.
 */
import { matches, parseQuery, prepare, score } from "../utils/searchMatch";

/**
 * Global shortcuts: '/' or Cmd/Ctrl+K focus the search, Escape blurs it (GlobalNav opens the
 * site-wide search with Cmd/Ctrl+K on pages that have no search box). Registered once, at
 * module scope, and looking the input up on every key, so it also works after view transitions
 * and on the site-wide search page, whose box is driven by global-search.js.
 */
const handleKeydown = (e) => {
    const input = document.getElementById("siteSearch");
    if (!input) return;
    const isShortcut = (e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k";

    const target = e.target;
    const isTyping = target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable);

    if (!isTyping && e.key === "/") {
        e.preventDefault();
        input.focus();
    } else if (isShortcut) {
        e.preventDefault();
        input.focus();
    } else if (e.key === "Escape" && document.activeElement === input) {
        input.blur();
    }
};

const initSearchFilter = () => {
    const input = document.getElementById("siteSearch");
    if (!input || input.dataset.external !== undefined) return;

    const clearBtn = document.getElementById("clearSearch");
    const kbdBadge = document.getElementById("searchKbd");
    const searchCount = document.getElementById("searchCount");
    const tocWrapper = document.getElementById("tocWrapper");
    const noResults = document.getElementById("noResults");
    const sections = document.querySelectorAll("[data-search-section]");

    // Remember the page order so relevance ordering can be undone when the query is cleared.
    const rankable = new Set();
    sections.forEach((section) => {
        section.querySelectorAll("[data-search-item]").forEach((item, i) => {
            item.dataset.order = String(i);
            if (item.dataset.searchTitle !== undefined) rankable.add(item.parentElement);
        });
    });

    const updateKbdVisibility = () => {
        if (!kbdBadge) return;
        const isFocused = document.activeElement === input;
        kbdBadge.style.display = isFocused || input.value.trim() ? "none" : "inline-flex";
    };

    const updateSearch = () => {
        const rawValue = input.value.trim();
        const terms = parseQuery(rawValue);
        let totalMatches = 0;
        let visibleSections = 0;

        if (clearBtn) {
            clearBtn.style.display = rawValue.length > 0 ? "flex" : "none";
        }
        updateKbdVisibility();

        sections.forEach((section) => {
            const sectionText = prepare(section.dataset.searchText || "");
            let sectionMatches = 0;

            section.querySelectorAll("[data-search-item]").forEach((item) => {
                const text = `${sectionText} ${prepare(item.dataset.searchText || "")} ${prepare(item.textContent || "")}`;
                const matched = terms.length === 0 || matches(terms, text);

                item.style.display = matched ? "" : "none";
                if (matched) {
                    sectionMatches++;
                    totalMatches++;
                }
                if (item.dataset.searchTitle !== undefined) {
                    item.dataset.score = String(
                        matched && terms.length
                            ? score(terms, {
                                  title: prepare(item.dataset.searchTitle),
                                  headings: prepare(item.dataset.searchHeadings || ""),
                                  text,
                              })
                            : 0,
                    );
                }
            });

            section.style.display = sectionMatches > 0 ? "" : "none";
            if (sectionMatches > 0) visibleSections++;
        });

        // Most relevant first while searching, page order otherwise.
        rankable.forEach((list) => {
            const items = [...list.children].filter((el) => el.dataset.order !== undefined);
            items
                .sort((a, b) =>
                    terms.length
                        ? Number(b.dataset.score) - Number(a.dataset.score) || a.dataset.order - b.dataset.order
                        : a.dataset.order - b.dataset.order,
                )
                .forEach((el) => list.append(el));
        });

        if (tocWrapper) {
            tocWrapper.style.display = terms.length ? "none" : "";
        }

        if (noResults) {
            noResults.style.display = visibleSections === 0 ? "block" : "none";
        }

        if (searchCount) {
            const noun = totalMatches === 1
                ? searchCount.dataset.countSingular
                : searchCount.dataset.countPlural;
            searchCount.textContent = terms.length ? `${totalMatches} ${noun}` : "";
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

};

document.addEventListener("keydown", handleKeydown);
document.addEventListener("astro:page-load", initSearchFilter);
