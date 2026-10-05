import { byRank } from "../utils/sort";

// Canonical display order for the `menuGroup` values used by topic JSON files.
// Groups not listed here are appended after these.
export const GROUP_ORDER: string[] = [
    "Aritmética",
    "Álgebra",
    "Funciones, límites y derivadas",
    "Potencias, raíces y logaritmos",
    "Estadística y probabilidad",
];

interface TopicLike {
    data: { title: string; menuGroup?: string; menuOrder?: number };
}

// The single topic order (group, then menuOrder, then title), shared by the
// nav tree (Menu.astro) and the theory prev/next pagination
// (pages/theory/[slug].astro) so the two can never drift apart.
export const sortTopics = <T extends TopicLike>(topics: T[]): T[] => {
    const withinGroup = byRank<T>(
        (t) => t.data.menuOrder,
        (a, b) => a.data.title.localeCompare(b.data.title, "es"),
    );
    // Unlisted groups tie on rank, so keep each one together by name.
    const groupName = (t: T) => t.data.menuGroup ?? "";
    return [...topics].sort(
        byRank(
            (t) => GROUP_ORDER.indexOf(groupName(t)),
            (a, b) => groupName(a).localeCompare(groupName(b), "es") || withinGroup(a, b),
        ),
    );
};
