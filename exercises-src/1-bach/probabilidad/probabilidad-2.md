# Examen de probabilidad

### Ejercicio 1 (2 puntos) - Operaciones con sucesos

En un experimento aleatorio se sabe que $P(\overline{A}) = 0{,}6$, $P(B) = 0{,}5$ y $P(A \cap B) = 0{,}2$. Calcula:

- **a) (0,25p)** $P(A)$
- **b) (0,25p)** $P(\overline{B})$
- **c) (0,5p)** $P(A \cup B)$
- **d) (0,25p)** $P(A \cap \overline{B})$
- **e) (0,25p)** $P(A \mid B)$
- **f) (0,5p)** ¿Son $A$ y $B$ sucesos independientes? Justifica la respuesta numéricamente.

### Ejercicio 2 (2 puntos) - Tabla de contingencia

Se ha realizado un estudio sobre los hábitos de lectura y el nivel de estudios de $150$ personas. **(0,5p)** Completa la tabla:

$$\begin{array}{l|c|c|c} & \text{Lee (L)} & \text{No lee (NL)} & \text{Total} \\ \hline \text{Con estudios universitarios (U)} & & & 60 \\ \text{Sin estudios universitarios (S)} & & 55 & \\ \hline \text{Total} & 70 & & 150 \end{array}$$

Al elegir una persona al azar, calcula la probabilidad de que:

- **a) (0,5p)** Tenga estudios universitarios y no lea.
- **b) (0,5p)** No tenga estudios universitarios o lea.
- **c) (0,25p)** Lea, sabiendo que tiene estudios universitarios.
- **d) (0,25p)** Tenga estudios universitarios, sabiendo que no lee.

### Ejercicio 3 (2 puntos) - Problema de sucesos

En una academia de idiomas, el $55\,\%$ de los estudiantes estudia inglés ($I$), el $30\,\%$ francés ($F$) y el $15\,\%$ estudia ambos idiomas.

- **a) (0,75p)** ¿Qué porcentaje de estudiantes no estudia ninguno de los dos idiomas?
- **b) (0,5p)** ¿Cuál es la probabilidad de que un estudiante elegido al azar estudie solo inglés?
- **c) (0,75p)** ¿Son independientes los sucesos «estudiar inglés» y «estudiar francés»? Justifica tu respuesta.

### Ejercicio 4 (2,5 puntos) - Diagrama de árbol

En una urna hay $4$ bolas rojas ($R$) y $2$ bolas azules ($A$). Se extraen dos bolas una detrás de otra. Dibuja el diagrama de árbol y calcula la probabilidad de que:

- **a) (0,75p)** Las dos bolas sean del mismo color si la primera bola se devuelve a la urna.
- **b) (0,75p)** Las dos bolas sean del mismo color si la primera bola no se devuelve a la urna.
- **c) (0,5p)** La segunda bola sea roja, sin importar el color de la primera, si la primera se devuelve.
- **d) (0,5p)** La segunda bola sea azul, sabiendo que la primera fue roja y no se devolvió.

### Ejercicio 5 (1,5 puntos) - Sucesos independientes

La probabilidad de que ocurra al menos uno de los sucesos $A$ y $B$ es $0{,}9$, la probabilidad de $A$ es $0{,}7$ y los dos sucesos son independientes. Calcula la probabilidad de $B$.

---

## Resolución

### Solución Ejercicio 1

**a)** $P(A) = 1 - P(\overline{A}) = 1 - 0{,}6 = 0{,}4$

**b)** $P(\overline{B}) = 1 - P(B) = 1 - 0{,}5 = 0{,}5$

**c)** $P(A \cup B) = P(A) + P(B) - P(A \cap B) = 0{,}4 + 0{,}5 - 0{,}2 = 0{,}7$

**d)** Es la probabilidad de que ocurra $A$ pero no $B$: $P(A \cap \overline{B}) = P(A) - P(A \cap B) = 0{,}4 - 0{,}2 = 0{,}2$

**e)** $P(A \mid B) = \dfrac{P(A \cap B)}{P(B)} = \dfrac{0{,}2}{0{,}5} = 0{,}4$

**f)** $P(A) \cdot P(B) = 0{,}4 \cdot 0{,}5 = 0{,}2 = P(A \cap B)$, así que son independientes. También se ve en que $P(A \mid B) = 0{,}4 = P(A)$.

### Solución Ejercicio 2

Completamos las casillas restando a los totales:

- Sin estudios, total: $150 - 60 = 90$. Sin estudios que leen: $90 - 55 = 35$.
- Con estudios que leen: $70 - 35 = 35$. Con estudios que no leen: $60 - 35 = 25$.
- No leen, total: $25 + 55 = 80$ (comprobación: $150 - 70 = 80$).

$$\begin{array}{l|c|c|c} & \text{L} & \text{NL} & \text{Total} \\ \hline \text{U} & 35 & 25 & 60 \\ \text{S} & 35 & 55 & 90 \\ \hline \text{Total} & 70 & 80 & 150 \end{array}$$

**a)** $P(U \cap NL) = \dfrac{25}{150} = \dfrac{1}{6} \approx 0{,}167$

**b)** $P(S \cup L) = P(S) + P(L) - P(S \cap L) = \dfrac{90}{150} + \dfrac{70}{150} - \dfrac{35}{150} = \dfrac{125}{150} = \dfrac{5}{6} \approx 0{,}833$

**c)** Nos quedamos solo con la fila de universitarios ($60$ personas): $P(L \mid U) = \dfrac{35}{60} = \dfrac{7}{12} \approx 0{,}583$

**d)** Nos quedamos solo con la columna de los que no leen ($80$ personas): $P(U \mid NL) = \dfrac{25}{80} = \dfrac{5}{16} = 0{,}3125$

### Solución Ejercicio 3

Datos: $P(I) = 0{,}55$, $P(F) = 0{,}30$ y $P(I \cap F) = 0{,}15$.

**a)** Primero, la probabilidad de estudiar al menos uno de los dos idiomas:

$$P(I \cup F) = 0{,}55 + 0{,}30 - 0{,}15 = 0{,}70$$

No estudiar ninguno es el suceso contrario: $1 - 0{,}70 = 0{,}30$. El $30\,\%$ no estudia ninguno de los dos idiomas.

**b)** $P(\text{solo inglés}) = P(I) - P(I \cap F) = 0{,}55 - 0{,}15 = 0{,}40$

**c)** $P(I) \cdot P(F) = 0{,}55 \cdot 0{,}30 = 0{,}165 \neq 0{,}15 = P(I \cap F)$. No son independientes.

### Solución Ejercicio 4

Hay $6$ bolas: $P(R) = \dfrac{4}{6}$ y $P(A) = \dfrac{2}{6}$ en la primera extracción.

**a)** Con devolución, la urna no cambia y la segunda extracción tiene las mismas probabilidades que la primera:

$$P(RR) + P(AA) = \frac{4}{6} \cdot \frac{4}{6} + \frac{2}{6} \cdot \frac{2}{6} = \frac{16}{36} + \frac{4}{36} = \frac{20}{36} = \frac{5}{9} \approx 0{,}556$$

**b)** Sin devolución, en la segunda extracción quedan $5$ bolas. Si la primera fue roja quedan $3R$ y $2A$; si fue azul quedan $4R$ y $1A$:

$$P(RR) + P(AA) = \frac{4}{6} \cdot \frac{3}{5} + \frac{2}{6} \cdot \frac{1}{5} = \frac{12}{30} + \frac{2}{30} = \frac{14}{30} = \frac{7}{15} \approx 0{,}467$$

**c)** Sumamos las dos ramas que terminan en roja:

$$P(R_2) = \frac{4}{6} \cdot \frac{4}{6} + \frac{2}{6} \cdot \frac{4}{6} = \frac{16}{36} + \frac{8}{36} = \frac{24}{36} = \frac{2}{3}$$

Se podía razonar directamente: al devolver la bola, la urna vuelve a tener $4$ rojas de $6$.

**d)** Si la primera fue roja y no se devolvió, quedan $3$ rojas y $2$ azules:

$$P(A_2 \mid R_1) = \frac{2}{5} = 0{,}4$$

### Solución Ejercicio 5

Al menos uno de los dos es la unión: $P(A \cup B) = 0{,}9$. Como son independientes, $P(A \cap B) = P(A) \cdot P(B)$:

$$P(A \cup B) = P(A) + P(B) - P(A) \cdot P(B)$$

$$0{,}9 = 0{,}7 + P(B) - 0{,}7 \cdot P(B) \implies 0{,}2 = 0{,}3 \cdot P(B) \implies P(B) = \frac{0{,}2}{0{,}3} = \frac{2}{3} \approx 0{,}667$$
