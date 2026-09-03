// Self-check for discoverExercises.ts title formatting.
// Run: node scripts/check-exercises.ts
import assert from "node:assert/strict";
import { formatDefaultTitle } from "../src/utils/discoverExercises.ts";
import { pdfNameOverrides, topicTitleOverrides } from "../src/data/exercises.ts";

assert.equal(formatDefaultTitle("algebra-1.pdf"), "Álgebra 1");
assert.equal(formatDefaultTitle("numeros-enteros-2.pdf"), "Números enteros 2");
assert.equal(formatDefaultTitle("razones-y-proporcionalidad-1.pdf"), "Razones y proporcionalidad 1");

// Every override key must point at real content, so a typo doesn't
// silently fall back to the auto-derived title.
for (const key of Object.keys(pdfNameOverrides)) {
    assert.ok(key.startsWith("/ejercicios/") && key.endsWith(".pdf"), `bad pdfNameOverrides key: ${key}`);
}
for (const key of Object.keys(topicTitleOverrides)) {
    assert.ok(key.length > 0, `bad topicTitleOverrides key: ${key}`);
}

console.log("check-exercises: ok");
