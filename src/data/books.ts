import books from "../../scripts/books.json" with { type: "json" };

// Book PDFs, as recorded by scripts/build-book.mjs on every build.
export const BOOKS = books.map((b) => ({ ...b, url: b.out.replace(/^public/, "") }));
