import { prepare } from "./searchMatch";
import { slugify } from "./slugify";
import { ALIASES } from "../data/searchAliases";

/**
 * The concept map (/mapa): groups -> topics -> concepts (definition and theorem cards), plus
 * "mentions": when a card's text names another concept, the two are linked (from the card itself
 * if it is a concept, else from its topic). Everything is derived from the topic JSON, so the map
 * grows with the content.
 */

interface Item { title: string; kind: string; description?: string; example?: string }
interface Topic { id: string; data: { title: string; menuGroup?: string; sections: { title: string; items: Item[] }[] } }
interface Book { title: string; url: string; topics: string[]; at: Record<string, number> }

export interface MapNode {
    id: string;
    type: "group" | "topic" | "concept";
    label: string;
    topic?: number; // index into `topics` (its colour)
    web?: string;
    pdf?: string;
    kind?: string;
    where?: string; // section title, for concepts
}

// Concepts whose name means something else in other branches, so they only take mentions from
// their own: the space line and plane of Geometría (not the lines of functions or regression),
// a proportion a/b = c/d (not "the proportion of data"), a ratio (not the trigonometric ratios),
// an algebraic identity (not the identity function), the combinatorics counts (not "percentage
// variations"), etc.
const BRANCH_ONLY = new Set([
    "recta", "plano", "proporcion", "razon", "identidad", "variaciones", "permutaciones", "regla del producto",
    "valor numerico",
]);
// Phrases that use a concept's name without meaning it: "en función de λ".
const IDIOMS = /(^| )en funcion (de|del)( |$)/g;
// Names too generic to count as a mention of one concept.
const GENERIC = new Set([
    "definicion", "propiedades", "ejemplo", "elementos", "tipos", "punto", "valor", "numero", "tiempo", "suma", "resta",
    "producto", "division", "multiplicacion", "sentido", "direccion", "solucion", "condicion", "calculo", "negativo",
    // Same word, another meaning elsewhere: secant planes, tangent line.
    "secante", "tangente", "interseccion", "union", "aristas", "vertices", "camino",
]);
const CONCEPT_KINDS = new Set(["definicion", "teorema"]);

const strip = (html: string) => html.replace(/\$[^$]*\$/g, " ").replace(/<[^>]+>/g, " ");

// Title as plain text for the canvas: formulas kept, LaTeX commands dropped (a few symbols kept).
const SYMBOLS: Record<string, string> = { cdot: "·", times: "×", infty: "∞", to: "→", alpha: "α", sigma: "σ", mu: "μ", cap: "∩", cup: "∪", pi: "π", lambda: "λ", neq: "≠", leq: "≤", geq: "≥" };
const plainTitle = (title: string) =>
    title
        .replace(/<[^>]+>/g, " ")
        .replace(/\\([a-zA-Z]+)/g, (_, c) => SYMBOLS[c] ?? "")
        .replace(/[$&{}^_\\]/g, "")
        .replace(/\s+/g, " ")
        .trim();

/** The names a concept is mentioned by: its title without formulas, questions or the part after a colon. */
export const conceptTerms = (title: string): string[] => {
    let t = strip(title).replace(/\([^)]*\)/g, " ").replace(/[¿?]/g, " ");
    t = t.replace(/^\s*qu[eé] es (el |la |los |las |un |una )?/i, "");
    const [before, after] = t.split(":");
    const base = prepare(before).length >= 4 ? before : after ?? "";
    let names = base.split(/,| y | e | o /).map((n) => prepare(n).replace(/^(el|la|los|las|un|una) /, "")).filter(Boolean);
    // "Exponente racional y negativo": a one-word part after a longer name is an adjective, not a name.
    if (names.length > 1 && names[0].includes(" ")) names = names.filter((n) => n.includes(" "));
    names = names.filter((n) => n.length >= 4 && !GENERIC.has(n));
    // Synonyms from the site search ("mcd" for "maximo comun divisor").
    const extra = names.flatMap((n) => ALIASES.find((g) => g.includes(n))?.filter((m) => m !== n && m.length >= 3) ?? []);
    return [...new Set([...names, ...extra])];
};

const mentionRe = (term: string) => new RegExp(`(^| )${term}(s|es)?( |$)`);

export function buildConceptMap(topics: Topic[], books: Book[]) {
    const nodes: MapNode[] = [];
    const links: [string, string][] = [];
    const seen = new Set<string>();
    const link = (a: string, b: string) => {
        const key = a < b ? `${a}|${b}` : `${b}|${a}`;
        if (a !== b && !seen.has(key)) { seen.add(key); links.push([a, b]); }
    };

    // A group named like one of its topics ("Trigonometría") would be a duplicate node: that topic
    // stands in for the group and the group's other topics hang from it.
    const groupOf = (t: Topic) => t.data.menuGroup ?? "Otros";
    const groupNode = new Map<string, string>();
    for (const g of new Set(topics.map(groupOf))) {
        const same = topics.find((t) => groupOf(t) === g && prepare(t.data.title) === prepare(g));
        groupNode.set(g, same ? `t:${same.id}` : `g:${g}`);
        if (!same) nodes.push({ id: `g:${g}`, type: "group", label: g });
    }

    const cards: { id: string; owner: string; text: string }[] = [];
    const terms = new Map<string, string[]>(); // name -> concepts it names
    const branchOnly = new Set<string>(); // concepts linked only from their own group
    topics.forEach((topic, ti) => {
        const book = books.find((b) => b.topics.includes(topic.id));
        const pdf = (key: string) => (book?.at[key] ? `${book.url}#page=${book.at[key]}` : undefined);
        const tid = `t:${topic.id}`;
        nodes.push({ id: tid, type: "topic", label: topic.data.title, topic: ti, web: `/teoria/${topic.id}/`, pdf: pdf(topic.id) });
        link(groupNode.get(groupOf(topic))!, tid);
        topic.data.sections.forEach((section, j) =>
            section.items.forEach((item, k) => {
                const id = `c:${topic.id}-${j}-${k}`;
                const isConcept = CONCEPT_KINDS.has(item.kind);
                if (isConcept) {
                    nodes.push({
                        id, type: "concept", label: plainTitle(item.title),
                        topic: ti, kind: item.kind, where: section.title,
                        web: `/teoria/${topic.id}/#${slugify(section.title)}-${k + 1}`, pdf: pdf(`${topic.id}-${j}-${k}`),
                    });
                    link(tid, id);
                    const names = conceptTerms(item.title);
                    if (names.some((t) => BRANCH_ONLY.has(t))) branchOnly.add(id);
                    for (const t of names) terms.set(t, [...(terms.get(t) ?? []), id]);
                }
                cards.push({ id: isConcept ? id : tid, owner: tid, text: prepare(strip(`${item.description ?? ""} ${item.example ?? ""}`)).replace(IDIOMS, " ") });
            }),
        );
    });

    const topicOf = new Map(nodes.filter((n) => n.type === "concept").map((n) => [n.id, `t:${n.id.slice(2).replace(/-\d+-\d+$/, "")}`]));
    const groupById = new Map(topics.map((t) => [`t:${t.id}`, groupOf(t)]));
    const patterns = [...terms].map(([t, ids]) => ({ re: mentionRe(t), ids }));
    for (const card of cards)
        for (const { re, ids } of patterns) {
            if (!re.test(card.text)) continue;
            // A name shared by several concepts ("rango" of a matrix and of a data set) points to the
            // one in the same topic, else in the same group; with no such hint it is skipped.
            const same = ids.filter((id) => topicOf.get(id) === card.owner);
            const near = ids.filter((id) => groupById.get(topicOf.get(id)!) === groupById.get(card.owner));
            const far = ids.length === 1 && !branchOnly.has(ids[0]) ? ids : [];
            for (const id of same.length ? same : near.length ? near : far) {
                // A topic already links to its own concepts.
                if (card.id === card.owner && topicOf.get(id) === card.owner) continue;
                link(card.id, id);
            }
        }

    return { topics: topics.map((t) => t.data.title), nodes, links };
}
