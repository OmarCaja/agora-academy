// Self-check for discoverExercises.ts title formatting and the override maps.
// Run: pnpm check
import assert from "node:assert/strict";
import fs from "node:fs";
import { formatDefaultTitle } from "../src/utils/discoverExercises.ts";
import { byRank } from "../src/utils/sort.ts";
import { BOOKS } from "../src/data/books.ts";
import { KINDS } from "../src/data/itemKinds.ts";
import { levelOrder, pdfNameOverrides, subjects, topicOrder, topicTitleOverrides } from "../src/data/exercises.ts";

assert.equal(formatDefaultTitle("algebra-1.pdf"), "Álgebra 1");
assert.equal(formatDefaultTitle("numeros-enteros-2.pdf"), "Números enteros 2");
assert.equal(formatDefaultTitle("razones-y-proporcionalidad-1.pdf"), "Razones y proporcionalidad 1");
assert.equal(formatDefaultTitle("estadistica-unidimensional"), "Estadística unidimensional");

// Ranked first in rank order, unranked (undefined or -1) last by tie-break.
const order = ["b", "a"];
assert.deepEqual(
    ["z", "a", "y", "b"].sort(byRank((x) => order.indexOf(x), (x, y) => x.localeCompare(y))),
    ["b", "a", "y", "z"],
);

// Every override key must point at real content, so a typo doesn't
// silently fall back to the auto-derived title or order.
for (const url of Object.keys(pdfNameOverrides)) {
    assert.ok(fs.existsSync(`public${url}`), `pdfNameOverrides: no such PDF ${url}`);
}
for (const { url, pages, at } of BOOKS) {
    assert.ok(fs.existsSync(`public${url}`), `scripts/books.json: no such PDF ${url}`);
    assert.ok(Number.isInteger(pages) && pages > 0, `scripts/books.json: missing page count for ${url} (run pnpm books)`);
    assert.ok(at && Object.keys(at).length > 0, `scripts/books.json: missing heading pages for ${url} (run pnpm books)`);
}
const topicExists = (key: string) =>
    subjects.some(({ dir }) => levelOrder.some((level) => fs.existsSync(`public/ejercicios/${dir}/${level}/${key}`)));
for (const key of [...Object.keys(topicTitleOverrides), ...Object.keys(topicOrder)]) {
    assert.ok(topicExists(key), `no topic folder public/ejercicios/<level>/${key}`);
}

// Theory topics: every card declares what it is (`kind`) and an example never
// stands alone: it follows a statement (description and/or formula).
for (const file of fs.readdirSync("src/content/topics").filter((f) => f.endsWith(".json"))) {
    const topic = JSON.parse(fs.readFileSync(`src/content/topics/${file}`, "utf8"));
    for (const section of topic.sections) {
        for (const item of section.items) {
            const where = `${file} > ${section.title} > ${item.title}`;
            assert.ok(KINDS.includes(item.kind), `topic card without a valid kind: ${where}`);
            assert.ok(item.kind === "ejemplo" || item.description || item.formula, `card has no statement before its example: ${where}`);
        }
    }
}

console.log("check-exercises: ok");
