// Canonical display order for the `menuGroup` values used by topic JSON files.
// Shared by the nav tree (Menu.astro) and the theory prev/next pagination
// (pages/theory/[slug].astro) so the two can never drift apart.
// Groups not listed here are appended after these, in discovery order.

export const GROUP_ORDER: string[] = [
    "Aritmética",
    "Álgebra",
    "Funciones y Límites",
    "Potencias, raíces y logaritmos",
    "Estadística y Probabilidad",
];
