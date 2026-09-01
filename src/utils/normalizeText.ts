/**
 * Normalizes text by converting to lowercase, decomposing accented characters (NFD),
 * and stripping combining diacritical marks.
 * 
 * E.g., "Álgebra" -> "algebra", "Límites" -> "limites", "Fracción" -> "fraccion".
 */
export function normalizeText(str: string): string {
    if (!str) return "";
    return str
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}
