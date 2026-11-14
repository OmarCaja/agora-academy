/**
 * Matching shared by the in-page filter (search.js) and the global search page.
 *
 * A query is a list of terms that must ALL be found (AND), in any order, ignoring case,
 * accents and dots ("m.c.d." = "mcd"). Each term can be satisfied by:
 *   - the word itself, or its singular ("determinantes" finds "determinante"),
 *   - a synonym from src/data/searchAliases.ts (a multi-word alias is read as one term).
 * There is no typo tolerance: a misspelled word finds nothing rather than something unrelated.
 * A term must match at the START of a word of the text ("ecuacion" does not find "inecuaciones"),
 * and is accepted as a prefix ("inecuacion" finds "inecuaciones").
 */
import { normalizeText } from "./normalizeText";
import { ALIASES } from "../data/searchAliases";

/** Lowercase, no accents, no dots, words separated by single spaces: the form every text and query is compared in. */
export const prepare = (text) =>
    normalizeText(text)
        .replace(/\./g, "")
        .replace(/[^a-z0-9]+/g, " ")
        .trim();

const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const aliasMembers = ALIASES.flatMap((group) => group.map((member) => ({ member, group })))
    .sort((a, b) => b.member.length - a.member.length); // longest phrase first

const forms = (word) => {
    const out = [word];
    if (word.length > 4 && word.endsWith("es")) out.push(word.slice(0, -2));
    if (word.length > 3 && word.endsWith("s")) out.push(word.slice(0, -1));
    return out;
};

/** Query -> array of terms; each term is the list of strings that satisfy it. */
export const parseQuery = (query) => {
    let rest = ` ${prepare(query).replace(/\s+/g, " ").trim()} `;
    const terms = [];
    if (rest.trim() === "") return terms;
    for (const { member, group } of aliasMembers) {
        const re = new RegExp(` ${escapeRe(member)} `);
        if (re.test(rest)) {
            rest = rest.replace(re, " ");
            terms.push(group.flatMap((alias) => forms(alias)));
        }
    }
    for (const word of rest.split(" ").filter(Boolean)) terms.push(forms(word));
    return terms;
};

/** Is `alt` found at the start of a word of the prepared text? Up to 3 letters it must be the whole word. */
const atWordStart = (text, alt) => (alt.length <= 3 ? ` ${text} `.includes(` ${alt} `) : ` ${text}`.includes(` ${alt}`));

/** Does a prepared text satisfy every term? Exact matches only: no typo tolerance. */
export const matches = (terms, text) => terms.every((alts) => alts.some((alt) => atWordStart(text, alt)));

/** Rough relevance: title matches count most, then headings, then the rest of the text. */
export const score = (terms, { title = "", headings = "", text = "" }) =>
    terms.reduce(
        (sum, alts) =>
            sum +
            (alts.some((a) => atWordStart(title, a)) ? 10 : 0) +
            (alts.some((a) => atWordStart(headings, a)) ? 4 : 0) +
            (alts.some((a) => atWordStart(text, a)) ? 1 : 0),
        0,
    );
