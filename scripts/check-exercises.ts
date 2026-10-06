// Self-check for discoverExercises.ts title formatting and the override maps.
// Run: pnpm check
import assert from "node:assert/strict";
import fs from "node:fs";
import { formatDefaultTitle } from "../src/utils/discoverExercises.ts";
import { byRank } from "../src/utils/sort.ts";
import { BOOKS } from "../src/data/books.ts";
import { levelOrder, pdfNameOverrides, topicOrder, topicTitleOverrides } from "../src/data/exercises.ts";

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
for (const { url } of BOOKS) {
    assert.ok(fs.existsSync(`public${url}`), `scripts/books.json: no such PDF ${url}`);
}
const topicExists = (key: string) => levelOrder.some((level) => fs.existsSync(`public/ejercicios/${level}/${key}`));
for (const key of [...Object.keys(topicTitleOverrides), ...Object.keys(topicOrder)]) {
    assert.ok(topicExists(key), `no topic folder public/ejercicios/<level>/${key}`);
}

console.log("check-exercises: ok");
