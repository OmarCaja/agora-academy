import books from "../../scripts/books.json" with { type: "json" };

export interface Book {
    topics: string[];
    title: string;
    out: string;
    // Page count of the PDF, and the (1-based) page of every chapter, section and card:
    // keys are `<slug>`, `<slug>-<section>` and `<slug>-<section>-<card>`.
    pages: number;
    at: Record<string, number>;
}

// Book PDFs, as recorded by scripts/build-book.mjs on every build.
export const BOOKS = (books as unknown as Book[]).map((b) => ({ ...b, url: b.out.replace(/^public/, "") }));
