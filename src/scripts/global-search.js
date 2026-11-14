/**
 * Site-wide search page (/buscar). Loads /search-index.json (one entry per theory card) and ranks
 * the entries that match every word of the query (matching rules in utils/searchMatch.js).
 * ?q= prefills the box, and the query is kept in the URL so a search can be shared.
 */
import { matches, parseQuery, prepare, score } from "../utils/searchMatch";

const PAGE = 20;
let index = null;

const load = async () => {
    if (index) return index;
    const res = await fetch("/search-index.json");
    const raw = await res.json();
    index = raw.map((e) => ({
        ...e,
        title: prepare(e.t),
        headings: prepare(`${e.s} ${e.c} ${e.l}`),
        text: prepare(`${e.l} ${e.t} ${e.s} ${e.c} ${e.x}`),
    }));
    return index;
};

const el = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
};

const card = (e) => {
    const li = el("li", "result");
    const head = el("p", "result-title");
    head.append(el("span", `result-kind meta-label ${e.k}`, e.l), e.t);
    li.append(head, el("p", "result-where", `${e.c} › ${e.s}`));
    if (e.x) li.append(el("p", "result-snippet", e.x.length > 220 ? `${e.x.slice(0, 220).trimEnd()}…` : e.x));
    const links = el("p", "result-links");
    const web = el("a", "", "Ver en la web");
    web.href = e.w;
    links.append(web);
    if (e.u) {
        const pdf = el("a", "", `Libro PDF${e.p ? ` · pág. ${e.p}` : ""}`);
        pdf.href = e.p ? `${e.u}#page=${e.p}` : e.u;
        pdf.target = "_blank";
        pdf.rel = "noopener noreferrer";
        pdf.title = e.b;
        links.append(pdf);
    }
    li.append(links);
    return li;
};

const init = () => {
    const input = document.getElementById("siteSearch");
    const list = document.getElementById("globalResults");
    if (!input || !list) return;
    const count = document.getElementById("searchCount");
    const empty = document.getElementById("noResults");
    const more = document.getElementById("moreResults");
    const clearBtn = document.getElementById("clearSearch");
    const kbd = document.getElementById("searchKbd");
    const chips = document.querySelectorAll("[data-kind-chip]");
    let kind = "";
    let shown = PAGE;
    let results = [];

    const render = () => {
        list.replaceChildren(...results.slice(0, shown).map(card));
        more.hidden = results.length <= shown;
    };

    const run = async () => {
        const rawValue = input.value.trim();
        const terms = parseQuery(rawValue);
        if (clearBtn) clearBtn.style.display = rawValue ? "flex" : "none";
        if (kbd) kbd.style.display = rawValue ? "none" : "inline-flex";
        history.replaceState(null, "", rawValue ? `?q=${encodeURIComponent(rawValue)}` : location.pathname);

        if (!terms.length && !kind) {
            results = [];
            count.textContent = "";
            empty.hidden = true;
            return render();
        }
        const entries = await load();
        results = entries
            .filter((e) => (!kind || e.k === kind) && (terms.length === 0 || matches(terms, e.text)))
            .map((e) => ({ e, s: terms.length ? score(terms, e) : 0 }))
            .sort((a, b) => b.s - a.s)
            .map(({ e }) => e);
        shown = PAGE;
        count.textContent = `${results.length} ${results.length === 1 ? count.dataset.countSingular : count.dataset.countPlural}`;
        empty.hidden = results.length > 0;
        render();
    };

    input.addEventListener("input", run);
    more.addEventListener("click", () => {
        shown += PAGE;
        render();
    });
    chips.forEach((chip) =>
        chip.addEventListener("click", () => {
            kind = chip.dataset.kindChip;
            chips.forEach((c) => c.setAttribute("aria-pressed", String(c === chip)));
            run();
        }),
    );
    clearBtn?.addEventListener("click", () => {
        input.value = "";
        run();
        input.focus();
    });

    const initial = new URLSearchParams(location.search).get("q");
    if (initial) input.value = initial;
    run();
    input.focus();
};

document.addEventListener("astro:page-load", init);
