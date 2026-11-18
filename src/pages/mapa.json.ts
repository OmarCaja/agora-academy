import { getCollection } from "astro:content";
import { BOOKS } from "../data/books";
import { sortTopics } from "../data/topics";
import { buildConceptMap } from "../utils/conceptGraph";

// Data for the concept map (/mapa): nodes, links and topic names, rebuilt from the topics on every build.
export async function GET() {
    const map = buildConceptMap(sortTopics(await getCollection("topics")), BOOKS);
    return new Response(JSON.stringify(map), { headers: { "Content-Type": "application/json" } });
}
