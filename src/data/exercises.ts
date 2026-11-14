// Exercise configuration & override maps
// Dropping a PDF into public/ejercicios/<level>/<topic>/ auto-discovers it.
// Entries here are only needed if you want custom formatting different from auto-derived titles.

// Subjects in menu order. Maths lives at the root of public/ejercicios, any
// other subject in its own folder: public/ejercicios/<dir>/<level>/<topic>/.
export const subjects = [
    { dir: "", title: "Matemáticas" },
    { dir: "fisica-y-quimica", title: "Física y química" },
];

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
    "razones-y-proporcionalidad": "Proporcionalidad y porcentajes",
    "semejanza-trigonometria": "Semejanza y trigonometría",
    "potencias-raices-logaritmos": "Potencias, raíces y logaritmos",
    "interes-simple-compuesto": "Interés simple y compuesto",
    "sistemas-ecuaciones": "Sistemas de ecuaciones",
};

// Curricular order for topics within a level, lowest first. A topic key
// missing here falls back to alphabetical, so adding a new topic folder
// never requires touching this map. Keys are shared across levels; only
// the relative order inside each level matters.
export const topicOrder: Record<string, number> = {
    // 1º and 2º ESO
    "numeros-enteros": 1,
    "fracciones": 2,
    "razones-y-proporcionalidad": 3,
    "algebra": 4,

    // 4º ESO
    "semejanza-trigonometria": 2,
    "trigonometria": 3,

    // 1º Bachillerato (funciones also sorts last in 4º ESO)
    "potencias-raices-logaritmos": 1,
    "polinomios": 2,
    "interes-simple-compuesto": 3,
    "funciones": 4,
    "limites": 5,
    "estadistica": 6,
    "estadistica/unidimensional": 7,
    "estadistica/bidimensional": 8,
    "probabilidad": 9,
    "examenes": 10,

    // 2º Bachillerato
    "matrices": 1,
    "sistemas-ecuaciones": 2,
    "vectores": 3,
};

// Only needed when a PDF isn't named after its folder (a sheet named after
// its folder already takes the topic title plus its number).
export const pdfNameOverrides: Record<string, string> = {
    // 1º Bachillerato Exámenes
    "/ejercicios/1-bach/examenes/algebra-estadistica-1.pdf":
        "Álgebra y estadística 1",
    "/ejercicios/1-bach/examenes/algebra-matematica-financiera-1.pdf":
        "Álgebra y matemática financiera 1",
    "/ejercicios/1-bach/examenes/complejos-funciones-derivadas-1.pdf":
        "Números complejos, funciones y derivadas 1",
    "/ejercicios/1-bach/examenes/funciones-limites-derivadas-1.pdf":
        "Funciones, límites y derivadas 1",
    "/ejercicios/1-bach/examenes/operaciones-ecuaciones-inecuaciones-1.pdf":
        "Operaciones, ecuaciones e inecuaciones 1",
    "/ejercicios/1-bach/examenes/operaciones-ecuaciones-inecuaciones-2.pdf":
        "Operaciones, ecuaciones e inecuaciones 2",
};
