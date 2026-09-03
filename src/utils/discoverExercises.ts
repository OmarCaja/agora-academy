import fs from "node:fs";
import path from "node:path";
import { pdfNameOverrides, topicTitleOverrides, levelTitleOverrides, levelOrder } from "../data/exercises";

export interface PdfLink {
    name: string;
    url: string;
}

export interface Topic {
    title: string;
    pdfs: PdfLink[];
}

export interface LevelData {
    title: string;
    topics: Topic[];
}

const SPANISH_ACCENT_WORDS: Record<string, string> = {
    numeros: "Números",
    algebra: "Álgebra",
    examenes: "Exámenes",
    limites: "Límites",
    estadistica: "Estadística",
    fracciones: "Fracciones",
    funciones: "Funciones",
    ecuaciones: "Ecuaciones",
    probabilidad: "Probabilidad",
    proporcionalidad: "Proporcionalidad",
    unidimensional: "Unidimensional",
    bidimensional: "Bidimensional",
    enteros: "enteros",
    derivadas: "derivadas",
    inecuaciones: "inecuaciones",
    operaciones: "operaciones",
    porcentajes: "porcentajes",
    razones: "razones",
};

function formatWord(word: string): string {
    const lower = word.toLowerCase();
    if (SPANISH_ACCENT_WORDS[lower]) {
        return SPANISH_ACCENT_WORDS[lower];
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
}

export function formatDefaultTitle(slugOrFilename: string): string {
    const clean = slugOrFilename.replace(/\.pdf$/i, "");
    const parts = clean.split("-");
    const formatted = parts.map((p, idx) => {
        if (/^\d+$/.test(p)) return p;
        const w = formatWord(p);
        return idx === 0 ? w.charAt(0).toUpperCase() + w.slice(1) : w.toLowerCase();
    });
    return formatted.join(" ");
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

    // Sort levels according to predefined levelOrder
    levelDirs.sort((a, b) => {
        const indexA = levelOrder.indexOf(a);
        const indexB = levelOrder.indexOf(b);
        if (indexA !== -1 && indexB !== -1) return indexA - indexB;
        if (indexA !== -1) return -1;
        if (indexB !== -1) return 1;
        return a.localeCompare(b);
    });

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
                    
                    let topicTitle = topicTitleOverrides[topicKey];
                    if (!topicTitle) {
                        topicTitle = relativePath
                            .map((p) => {
                                const w = formatWord(p);
                                return w.charAt(0).toUpperCase() + w.slice(1);
                            })
                            .join(" ");
                    }

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
            // macOS and the Linux CI runner), so sort topics explicitly.
            const topics: Topic[] = Array.from(topicMap.values())
                .map((t) => ({
                    title: t.title,
                    pdfs: t.pdfs.sort((a, b) => a.name.localeCompare(b.name, "es", { numeric: true })),
                }))
                .sort((a, b) => a.title.localeCompare(b.title, "es", { numeric: true }));

            result[level] = {
                title: levelTitle,
                topics,
            };
        }
    }

    return result;
}
