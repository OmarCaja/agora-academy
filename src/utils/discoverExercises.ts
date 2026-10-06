import fs from "node:fs";
import path from "node:path";
import { byRank } from "./sort";
import { pdfNameOverrides, topicTitleOverrides, topicOrder, levelTitleOverrides, levelOrder } from "../data/exercises";

export interface PdfLink {
    name: string;
    url: string;
    detail?: string;
}

export interface Topic {
    title: string;
    pdfs: PdfLink[];
}

export interface LevelData {
    title: string;
    topics: Topic[];
}

// Only words whose accent can't be derived from the slug; anything else is
// only capitalised when first.
const SPANISH_ACCENT_WORDS: Record<string, string> = {
    numeros: "números",
    algebra: "álgebra",
    examenes: "exámenes",
    limites: "límites",
    estadistica: "estadística",
};

export function formatDefaultTitle(slugOrFilename: string): string {
    const words = slugOrFilename
        .replace(/\.pdf$/i, "")
        .split("-")
        .map((p) => (SPANISH_ACCENT_WORDS[p.toLowerCase()] ?? p).toLowerCase());
    words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
    return words.join(" ");
}

export function discoverExercises(baseDir: string = "public/ejercicios"): Record<string, LevelData> {
    const fullBaseDir = path.resolve(process.cwd(), baseDir);
    if (!fs.existsSync(fullBaseDir)) {
        return {};
    }

    const result: Record<string, LevelData> = {};

    const levelDirs = fs.readdirSync(fullBaseDir, { withFileTypes: true })
        .filter((d) => d.isDirectory() && !d.name.startsWith("."))
        .map((d) => d.name);

    levelDirs.sort(byRank((l) => levelOrder.indexOf(l), (a, b) => a.localeCompare(b)));

    for (const level of levelDirs) {
        const levelPath = path.join(fullBaseDir, level);
        const topicMap = new Map<string, { title: string; pdfs: PdfLink[] }>();

        function scanDir(dirPath: string, relativePath: string[]) {
            const entries = fs.readdirSync(dirPath, { withFileTypes: true });

            for (const entry of entries) {
                if (entry.name.startsWith(".")) continue;

                const entryPath = path.join(dirPath, entry.name);
                if (entry.isDirectory()) {
                    scanDir(entryPath, [...relativePath, entry.name]);
                } else if (entry.isFile() && entry.name.toLowerCase().endsWith(".pdf")) {
                    const topicKey = relativePath.length > 0 ? relativePath.join("/") : "general";
                    const url = `/ejercicios/${level}/${relativePath.length > 0 ? relativePath.join("/") + "/" : ""}${entry.name}`;
                    
                    const topicTitle = topicTitleOverrides[topicKey] || formatDefaultTitle(relativePath.join("-"));

                    if (!topicMap.has(topicKey)) {
                        topicMap.set(topicKey, { title: topicTitle, pdfs: [] });
                    }

                    const name = pdfNameOverrides[url] || formatDefaultTitle(entry.name);
                    topicMap.get(topicKey)!.pdfs.push({ name, url });
                }
            }
        }

        scanDir(levelPath, []);

        if (topicMap.size > 0) {
            const levelTitle = levelTitleOverrides[level] || formatDefaultTitle(level);
            // readdirSync order is filesystem-dependent (it differs between
            // macOS and the Linux CI runner), so sort topics explicitly:
            // curricular order first (topicOrder), alphabetical fallback for
            // any topic without an explicit position.
            const topics: Topic[] = Array.from(topicMap.entries())
                .map(([key, t]) => ({
                    key,
                    title: t.title,
                    pdfs: t.pdfs.sort((a, b) => a.name.localeCompare(b.name, "es", { numeric: true })),
                }))
                .sort(byRank(
                    (t) => topicOrder[t.key],
                    (a, b) => a.title.localeCompare(b.title, "es", { numeric: true }),
                ))
                .map(({ title, pdfs }) => ({ title, pdfs }));

            result[level] = {
                title: levelTitle,
                topics,
            };
        }
    }

    return result;
}
