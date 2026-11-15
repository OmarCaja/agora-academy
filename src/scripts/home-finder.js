/**
 * Live results under the home-page search box. Same engine and index as /buscar
 * (utils/searchMatch.js + /search-index.json); without JS the form still submits to /buscar.
 * Keys: ↑/↓ move, Enter opens the highlighted result (or the full search), Esc closes,
 * "/" and Ctrl/Cmd+K focus the box.
 */
import { matches, parseQuery, prepare, score } from "../utils/searchMatch";
import { normalizeText } from "../utils/normalizeText";

const SHOWN = 6;
let index = null;

const load = async () => {
    if (index) return index;
    const raw = await (await fetch("/search-index.json")).json();
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

/** Wrap the words of `text` that start with one of the query words in <mark>. */
const highlight = (parent, text, words) => {
    const norm = normalizeText(text); // same length as text for Spanish letters; otherwise no highlight
    const spans = [];
    for (const m of norm.matchAll(/[a-z0-9]+/g)) {
        const hit = words.find((w) => (w.length <= 3 ? m[0] === w : m[0].startsWith(w)));
        if (hit) spans.push([m.index, m.index + (hit.length <= 3 ? m[0].length : hit.length)]);
    }
    let at = 0;
    for (const [a, b] of spans) {
        if (norm.length !== text.length) break;
        parent.append(text.slice(at, a));
        parent.append(el("mark", "", text.slice(a, b)));
        at = b;
    }
    parent.append(text.slice(at));
};

const init = () => {
    const input = document.getElementById("finder-input");
    const form = input?.closest("form");
    const panel = document.getElementById("finder-panel");
    if (!input || !form || !panel) return;

    const status = document.getElementById("finder-status");
    let rows = [];
    let active = -1;
    let seq = 0;

    const close = () => {
        panel.hidden = true;
        input.setAttribute("aria-expanded", "false");
        input.removeAttribute("aria-activedescendant");
        active = -1;
    };

    const setActive = (i) => {
        rows.forEach((r, n) => r.setAttribute("aria-selected", n === i ? "true" : "false"));
        active = i;
        const row = rows[i];
        if (row) {
            input.setAttribute("aria-activedescendant", row.id);
            row.scrollIntoView({ block: "nearest" });
        } else input.removeAttribute("aria-activedescendant");
    };

    const row = (e, n, words) => {
        const li = el("li", "finder-row");
        li.id = `finder-opt-${n}`;
        li.setAttribute("role", "option");
        li.style.setProperty("--n", n);
        const a = el("a", "finder-link");
        a.href = e.w;
        a.tabIndex = -1;
        const title = el("span", "finder-title");
        title.append(el("span", "finder-kind meta-label", e.l));
        highlight(title, e.t, words);
        a.append(title, el("span", "finder-where", `${e.c} › ${e.s}`));
        if (e.p) a.append(el("span", "finder-page meta-label", `libro · pág. ${e.p}`));
        li.append(a);
        li.addEventListener("pointermove", () => active !== n && setActive(n));
        return li;
    };

    const run = async () => {
        const value = input.value.trim();
        const terms = parseQuery(value);
        const mine = ++seq;
        if (!terms.length) return close();
        const entries = await load();
        if (mine !== seq) return; // a newer keystroke owns the panel

        const found = entries
            .filter((e) => matches(terms, e.text))
            .map((e) => ({ e, s: score(terms, e) }))
            .sort((a, b) => b.s - a.s)
            .map(({ e }) => e);
        const words = prepare(value).split(" ").filter(Boolean);

        const list = el("ul", "finder-list");
        list.id = "finder-list";
        list.setAttribute("role", "listbox");
        list.setAttribute("aria-label", "Resultados");
        rows = found.slice(0, SHOWN).map((e, n) => row(e, n, words));
        list.append(...rows);

        const foot = el("p", found.length ? "finder-foot" : "finder-empty");
        if (found.length) {
            const all = el("a", "", `Ver ${found.length === 1 ? "el resultado" : `los ${found.length} resultados`} en Buscar`);
            all.href = `/buscar/?q=${encodeURIComponent(value)}`;
            foot.append(all);
        } else foot.textContent = "Nada coincide. Prueba con otra palabra, sin errores de escritura.";

        panel.replaceChildren(list, foot);
        panel.hidden = false;
        input.setAttribute("aria-expanded", "true");
        setActive(-1);
        if (status) status.textContent = found.length ? `${found.length} resultados` : "Sin resultados";
    };

    input.addEventListener("input", run);
    input.addEventListener("focus", () => (input.value.trim() ? run() : load()));
    input.addEventListener("keydown", (e) => {
        if (panel.hidden || !rows.length) return;
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            e.preventDefault();
            const step = e.key === "ArrowDown" ? 1 : -1;
            const n = rows.length + 1; // the extra slot is "no row": back to typing
            setActive(((active + 1 + step + n) % n) - 1);
        } else if (e.key === "Enter" && active >= 0) {
            e.preventDefault();
            rows[active].querySelector("a").click();
        } else if (e.key === "Escape") close();
    });
    panel.addEventListener("pointerdown", (e) => e.preventDefault()); // keep focus in the box
    document.addEventListener("pointerdown", (e) => !form.contains(e.target) && !panel.contains(e.target) && close());
    form.addEventListener("submit", () => close());
};

document.addEventListener("keydown", (e) => {
    const input = document.getElementById("finder-input");
    if (!input) return;
    const typing = /^(INPUT|TEXTAREA)$/.test(e.target.tagName) || e.target.isContentEditable;
    if ((!typing && e.key === "/") || ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k")) {
        e.preventDefault();
        input.focus();
    }
});

document.addEventListener("astro:page-load", init);
