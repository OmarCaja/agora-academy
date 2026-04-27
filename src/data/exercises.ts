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

export const exercisesData: Record<string, LevelData> = {
    "1-eso": {
        title: "1º E.S.O.",
        topics: [
            {
                title: "Números enteros",
                pdfs: [
                    {
                        name: "Ejercicios de números enteros 1",
                        url: "/ejercicios/1-eso/numeros-enteros/numeros-enteros-1.pdf",
                    },
                    {
                        name: "Ejercicios de números enteros 2",
                        url: "/ejercicios/1-eso/numeros-enteros/numeros-enteros-2.pdf",
                    },
                    {
                        name: "Ejercicios de números enteros 3",
                        url: "/ejercicios/1-eso/numeros-enteros/numeros-enteros-3.pdf",
                    },
                ],
            },
            {
                title: "Fracciones",
                pdfs: [
                    {
                        name: "Ejercicios de fracciones 1",
                        url: "/ejercicios/1-eso/fracciones/fracciones-1.pdf",
                    },
                    {
                        name: "Ejercicios de fracciones 2",
                        url: "/ejercicios/1-eso/fracciones/fracciones-2.pdf",
                    },
                ],
            },
            {
                title: "Álgebra",
                pdfs: [
                    {
                        name: "Ejercicios de álgebra 1",
                        url: "/ejercicios/1-eso/algebra/algebra-1.pdf",
                    },
                    {
                        name: "Ejercicios de álgebra 2",
                        url: "/ejercicios/1-eso/algebra/algebra-2.pdf",
                    },
                    {
                        name: "Ejercicios de álgebra 3",
                        url: "/ejercicios/1-eso/algebra/algebra-3.pdf",
                    },
                ],
            },
            {
                title: "Proporcionalidad y porcentajes",
                pdfs: [
                    {
                        name: "Ejercicios de proporcionalidad y porcentajes 1",
                        url: "/ejercicios/1-eso/proporcionalidad/razones-y-proporcionalidad-1.pdf",
                    },
                ],
            },
        ],
    },
    "3-eso": {
        title: "3º E.S.O.",
        topics: [
            {
                title: "Ecuaciones",
                pdfs: [
                    {
                        name: "Ejercicios de ecuaciones 1",
                        url: "/ejercicios/3-eso/ecuaciones/ecuaciones-1.pdf",
                    },
                ],
            },
        ],
    },
    "4-eso": {
        title: "4º E.S.O.",
        topics: [
            {
                title: "Funciones",
                pdfs: [
                    {
                        name: "Ejercicios de funciones 1",
                        url: "/ejercicios/4-eso/funciones/funciones-1.pdf",
                    },
                    {
                        name: "Ejercicios de funciones 2",
                        url: "/ejercicios/4-eso/funciones/funciones-2.pdf",
                    },
                    {
                        name: "Ejercicios de funciones 3",
                        url: "/ejercicios/4-eso/funciones/funciones-3.pdf",
                    },
                ],
            },
        ],
    },
    "1-bach": {
        title: "1º Bachillerato",
        topics: [
            {
                title: "Funciones",
                pdfs: [
                    {
                        name: "Ejercicios de funciones 1",
                        url: "/ejercicios/1-bach/funciones/funciones-1.pdf",
                    }
                ]
            },
            {
                title: "Estadística unidimensional",
                pdfs: [
                    {
                        name: "Estadística unidimensional 1",
                        url: "/ejercicios/1-bach/estadistica/unidimensional/unidimensional-1.pdf",
                    }
                ],
            },
            {
                title: "Estadística bidimensional",
                pdfs: [
                    {
                        name: "Estadística bidimensional 1",
                        url: "/ejercicios/1-bach/estadistica/bidimensional/bidimensional-1.pdf",
                    },
                    {
                        name: "Estadística bidimensional 2",
                        url: "/ejercicios/1-bach/estadistica/bidimensional/bidimensional-2.pdf",
                    }
                ],
            },
            {
                title: "Estadística",
                pdfs: [
                    {
                        name: "Ejercicios de Estadística 1",
                        url: "/ejercicios/1-bach/estadistica/estadistica-1.pdf",
                    }
                ],
            },
            {
                title: "Límites",
                pdfs: [
                    {
                        name: "Ejercicios de límites 1",
                        url: "/ejercicios/1-bach/limites/limites-1.pdf",
                    },
                ],
            },
            {
                title: "Probabilidad",
                pdfs: [
                    {
                        name: "Ejercicios de Probabilidad 1",
                        url: "/ejercicios/1-bach/probabilidad/probabilidad-1.pdf",
                    },
                    {
                        name: "Ejercicios de Probabilidad 2",
                        url: "/ejercicios/1-bach/probabilidad/probabilidad-2.pdf",
                    }
                ],
            },
        ],
    },
};
