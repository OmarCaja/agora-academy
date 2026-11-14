// Kinds of theory card (`kind` in topic JSON) and the label each one shows.
// "ejemplo" is a worked example that applies the cards above it, so it has no statement of its own.
// Order of every card: statement (description) -> formula -> example, so a
// definition always comes before any example that uses it.
export const KINDS = ["definicion", "teorema", "propiedad", "procedimiento", "observacion", "ejemplo"] as const;
export type Kind = (typeof KINDS)[number];

export const KIND_LABELS: Record<Kind, string> = {
    definicion: "Definición",
    teorema: "Teorema",
    propiedad: "Propiedad",
    procedimiento: "Procedimiento",
    observacion: "Observación",
    ejemplo: "Ejemplo resuelto",
};
