# Ejercicios de probabilidad

### Ejercicio 1 - Operaciones con sucesos

Lanzamos un dado de seis caras. Sean los sucesos $A = \{2, 4, 6\}$ (sacar par) y $B = \{4, 5, 6\}$ (sacar más de $3$). Determina:

- **a)** $A \cup B$
- **b)** $A \cap B$
- **c)** $A - B$
- **d)** $\overline{A}$

### Ejercicio 2 - Probabilidad de la unión y del contrario

Sean $A$ y $B$ dos sucesos tales que $P(A) = 0{,}6$, $P(B) = 0{,}4$ y $P(A \cap B) = 0{,}2$. Calcula:

- **a)** $P(A \cup B)$
- **b)** $P(\overline{B})$
- **c)** $P(A \cap \overline{B})$
- **d)** ¿Son $A$ y $B$ incompatibles? Justifica tu respuesta.

### Ejercicio 3 - Probabilidad condicionada

En una baraja española de $40$ cartas extraemos una carta al azar. Sea $S$ el suceso «sacar una sota» y $B$ el suceso «sacar una carta de bastos».

- **a)** Calcula la probabilidad de sacar una sota sabiendo que la carta es de bastos.
- **b)** Calcula la probabilidad de sacar bastos sabiendo que la carta es una sota.
- **c)** ¿Son independientes los sucesos $S$ y $B$?

### Ejercicio 4 - Independencia

Se lanzan dos monedas equilibradas. Sean los sucesos $A$ = «cara en la primera moneda» y $B$ = «cara en la segunda moneda».

- **a)** Calcula $P(A \cap B)$.
- **b)** Comprueba que $A$ y $B$ son independientes.

### Ejercicio 5 - Probabilidad total

Una fábrica de tornillos utiliza dos máquinas, $M_1$ y $M_2$. La máquina $M_1$ produce el $60\,\%$ de los tornillos y el $2\,\%$ de ellos son defectuosos. La máquina $M_2$ produce el $40\,\%$ restante y el $5\,\%$ de ellos son defectuosos.

- **a)** Representa la información en un diagrama de árbol.
- **b)** Calcula la probabilidad de que un tornillo elegido al azar sea defectuoso.

### Ejercicio 6 - Teorema de Bayes

En la fábrica del ejercicio anterior se elige un tornillo al azar y resulta ser defectuoso. ¿Cuál es la probabilidad de que lo haya fabricado la máquina $M_1$?

### Ejercicio 7 - Prueba diagnóstica

Una enfermedad afecta al $1\,\%$ de la población. Un test da positivo en el $99\,\%$ de los enfermos, pero también da positivo (falso positivo) en el $5\,\%$ de las personas sanas.

- **a)** Calcula la probabilidad de que una persona elegida al azar dé positivo.
- **b)** Si una persona da positivo, ¿cuál es la probabilidad de que esté realmente enferma?

---

## Resolución

### Solución Ejercicio 1

**a)** La unión reúne los resultados de los dos sucesos: $A \cup B = \{2, 4, 5, 6\}$

**b)** La intersección contiene los resultados comunes: $A \cap B = \{4, 6\}$

**c)** La diferencia contiene los resultados de $A$ que no están en $B$: $A - B = \{2\}$

**d)** El contrario contiene los resultados que no están en $A$: $\overline{A} = \{1, 3, 5\}$

### Solución Ejercicio 2

**a)** $P(A \cup B) = P(A) + P(B) - P(A \cap B) = 0{,}6 + 0{,}4 - 0{,}2 = 0{,}8$

**b)** $P(\overline{B}) = 1 - P(B) = 1 - 0{,}4 = 0{,}6$

**c)** Es la probabilidad de que ocurra $A$ pero no $B$:

$$P(A \cap \overline{B}) = P(A) - P(A \cap B) = 0{,}6 - 0{,}2 = 0{,}4$$

**d)** No son incompatibles: dos sucesos incompatibles no pueden ocurrir a la vez, así que tendrían $P(A \cap B) = 0$, y aquí $P(A \cap B) = 0{,}2$.

### Solución Ejercicio 3

**a)** Si sabemos que la carta es de bastos, solo hay $10$ casos posibles, y uno de ellos es la sota:

$$P(S \mid B) = \frac{1}{10} = 0{,}1$$

**b)** Si sabemos que la carta es una sota, hay $4$ sotas y una de ellas es de bastos:

$$P(B \mid S) = \frac{1}{4} = 0{,}25$$

**c)** $P(S) = \dfrac{4}{40} = 0{,}1$, $P(B) = \dfrac{10}{40} = 0{,}25$ y $P(S \cap B) = \dfrac{1}{40} = 0{,}025$.

Como $P(S) \cdot P(B) = 0{,}1 \cdot 0{,}25 = 0{,}025 = P(S \cap B)$, los sucesos son independientes. También se ve en que $P(S \mid B) = P(S)$: saber que es de bastos no cambia la probabilidad de que sea sota.

### Solución Ejercicio 4

**a)** Los resultados posibles son $CC$, $CX$, $XC$ y $XX$, y solo $CC$ cumple los dos sucesos: $P(A \cap B) = \dfrac{1}{4} = 0{,}25$

**b)** $P(A) = P(B) = \dfrac{1}{2}$, así que $P(A) \cdot P(B) = \dfrac{1}{4} = P(A \cap B)$. Son independientes: el resultado de una moneda no influye en el de la otra.

### Solución Ejercicio 5

**a)** El árbol tiene dos ramas iniciales y cada una se divide en defectuoso ($D$) y no defectuoso ($\overline{D}$):

- $M_1$ con probabilidad $0{,}6$: $D$ con $0{,}02$ y $\overline{D}$ con $0{,}98$.
- $M_2$ con probabilidad $0{,}4$: $D$ con $0{,}05$ y $\overline{D}$ con $0{,}95$.

**b)** Sumamos las ramas que terminan en $D$ (teorema de la probabilidad total):

$$P(D) = P(M_1) \cdot P(D \mid M_1) + P(M_2) \cdot P(D \mid M_2) = 0{,}6 \cdot 0{,}02 + 0{,}4 \cdot 0{,}05 = 0{,}012 + 0{,}02 = 0{,}032$$

El $3{,}2\,\%$ de los tornillos son defectuosos.

### Solución Ejercicio 6

Aplicamos el teorema de Bayes: la rama de $M_1$ que acaba en $D$ dividida entre todas las ramas que acaban en $D$:

$$P(M_1 \mid D) = \frac{P(M_1) \cdot P(D \mid M_1)}{P(D)} = \frac{0{,}012}{0{,}032} = 0{,}375$$

La probabilidad es del $37{,}5\,\%$.

### Solución Ejercicio 7

Llamamos $E$ a estar enfermo, $\overline{E}$ a estar sano y $+$ a dar positivo.

**a)** $P(+) = P(E) \cdot P(+ \mid E) + P(\overline{E}) \cdot P(+ \mid \overline{E}) = 0{,}01 \cdot 0{,}99 + 0{,}99 \cdot 0{,}05 = 0{,}0099 + 0{,}0495 = 0{,}0594$

**b)** Por el teorema de Bayes:

$$P(E \mid +) = \frac{P(E) \cdot P(+ \mid E)}{P(+)} = \frac{0{,}0099}{0{,}0594} \approx 0{,}1667$$

Solo un $16{,}67\,\%$ de los positivos están realmente enfermos. Aunque el test parece muy fiable, la enfermedad es tan poco frecuente que la mayoría de los positivos son falsos positivos.
