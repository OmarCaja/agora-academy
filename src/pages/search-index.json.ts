import { getCollection } from "astro:content";
import { BOOKS } from "../data/books";
import { KIND_LABELS } from "../data/itemKinds";
import { sortTopics } from "../data/topics";
import { slugify } from "../utils/slugify";

// Site-wide search index (read by /buscar): one entry per theory card, with where to find it
// on the web and in the book PDF.
const plain = (html: string) =>
    html
        .replace(/<[^>]+>/g, " ")
        .replace(/\\[a-zA-Z]+/g, " ")
        .replace(/[$&{}^_\\]/g, " ")
        .replace(/\s+/g, " ")
        .replace(/\s+([.,;:)»])/g, "$1")
        .replace(/([(«])\s+/g, "$1")
        .trim();

export async function GET() {
    const topics = sortTopics(await getCollection("topics"));
    const entries = topics.flatMap((topic) => {
        const book = BOOKS.find((b) => b.topics.includes(topic.id));
        const at = book?.at ?? {};
        return topic.data.sections.flatMap((section, j) =>
            section.items.map((item, k) => ({
                t: plain(item.title),
                k: item.kind,
                l: KIND_LABELS[item.kind],
                s: section.title,
                c: topic.data.title,
                g: topic.data.menuGroup ?? "",
                w: `/theory/${topic.id}/#${slugify(section.title)}-${k + 1}`,
                x: plain(item.description ?? "").slice(0, 600),
                ...(book ? { u: book.url, b: book.title } : {}),
                ...(book && at[`${topic.id}-${j}-${k}`] ? { p: at[`${topic.id}-${j}-${k}`] } : {}),
            })),
        );
    });
    return new Response(JSON.stringify(entries), { headers: { "Content-Type": "application/json" } });
}
