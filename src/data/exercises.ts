// Exercise configuration & override maps
// Dropping a PDF into public/ejercicios/<level>/<topic>/ auto-discovers it.
// Entries here are only needed if you want custom formatting different from auto-derived titles.

export const levelOrder: string[] = [
    "1-eso",
    "2-eso",
    "3-eso",
    "4-eso",
    "1-bach",
    "2-bach",
];

export const levelTitleOverrides: Record<string, string> = {
    "1-eso": "1º E.S.O.",
    "2-eso": "2º E.S.O.",
    "3-eso": "3º E.S.O.",
    "4-eso": "4º E.S.O.",
    "1-bach": "1º Bachillerato",
    "2-bach": "2º Bachillerato",
};

export const topicTitleOverrides: Record<string, string> = {
    "proporcionalidad": "Proporcionalidad y porcentajes",
    "numeros-enteros": "Números enteros",
    "estadistica/unidimensional": "Estadística unidimensional",
    "estadistica/bidimensional": "Estadística bidimensional",
    "estadistica": "Estadística",
};

export const pdfNameOverrides: Record<string, string> = {
    // 1º ESO
    "/ejercicios/1-eso/proporcionalidad/razones-y-proporcionalidad-1.pdf":
        "Ejercicios de proporcionalidad y porcentajes 1",
    "/ejercicios/1-eso/proporcionalidad/razones-y-proporcionalidad-2.pdf":
        "Ejercicios de proporcionalidad y porcentajes 2",

    // 1º Bachillerato Exámenes
    "/ejercicios/1-bach/examenes/funciones-limites-derivadas-1.pdf":
        "Funciones, límites y derivadas 1",
    "/ejercicios/1-bach/examenes/funciones-limites-1.pdf":
        "Funciones y límites 1",
    "/ejercicios/1-bach/examenes/operaciones-ecuaciones-inecuaciones-1.pdf":
        "Operaciones, ecuaciones e inecuaciones 1",
    "/ejercicios/1-bach/examenes/operaciones-ecuaciones-inecuaciones-2.pdf":
        "Operaciones, ecuaciones e inecuaciones 2",
};
