/**
 * Matching shared by the in-page filter (search.js) and the global search page.
 *
 * A query is a list of terms that must ALL be found (AND), in any order, ignoring case,
 * accents and dots ("m.c.d." = "mcd"). Each term can be satisfied by:
 *   - the word itself, or its singular ("determinantes" finds "determinante"),
 *   - a synonym from src/data/searchAliases.ts (a multi-word alias is read as one term),
 *   - a close misspelling of a word in the text (one wrong letter from 5 letters, two from 8).
 */
import { normalizeText } from "./normalizeText";
import { ALIASES } from "../data/searchAliases";

/** Lowercase, no accents, no dots: the form every text and query is compared in. */
export const prepare = (text) => normalizeText(text).replace(/\./g, "");

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

/** True if the words differ by at most `max` single-letter edits. */
const withinDistance = (a, b, max) => {
    if (Math.abs(a.length - b.length) > max) return false;
    let prev = Array.from({ length: b.length + 1 }, (_, i) => i);
    for (let i = 1; i <= a.length; i++) {
        const cur = [i];
        let best = i;
        for (let j = 1; j <= b.length; j++) {
            cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
            if (cur[j] < best) best = cur[j];
        }
        if (best > max) return false;
        prev = cur;
    }
    return prev[b.length] <= max;
};

const wordsCache = new Map();
const wordsOf = (text) => {
    let words = wordsCache.get(text);
    if (!words) {
        words = [...new Set(text.split(/[^a-z0-9]+/).filter((w) => w.length >= 4))];
        if (wordsCache.size > 2000) wordsCache.clear();
        wordsCache.set(text, words);
    }
    return words;
};

/** Does a prepared text satisfy every term? Exact first; misspellings only if that fails. */
export const matches = (terms, text) => {
    const missing = terms.filter((alts) => !alts.some((alt) => text.includes(alt)));
    if (missing.length === 0) return true;
    return missing.every((alts) =>
        alts.some((alt) => {
            if (alt.length < 5 || alt.includes(" ")) return false;
            const max = alt.length >= 8 ? 2 : 1;
            return wordsOf(text).some((w) => withinDistance(w, alt, max));
        }),
    );
};

/** Rough relevance: title matches count most, then headings, then the rest of the text. */
export const score = (terms, { title = "", headings = "", text = "" }) =>
    terms.reduce(
        (sum, alts) =>
            sum +
            (alts.some((a) => title.includes(a)) ? 10 : 0) +
            (alts.some((a) => headings.includes(a)) ? 4 : 0) +
            (alts.some((a) => text.includes(a)) ? 1 : 0),
        0,
    );
