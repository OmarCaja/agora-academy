# Examen de matrices

### Ejercicio 1 (1,5 puntos) - Operaciones con la traspuesta

Dadas las matrices:

$$A = \begin{pmatrix} 1 & -2 & 3 \\ 0 & 4 & -1 \end{pmatrix}, \quad B = \begin{pmatrix} 2 & 1 \\ -1 & 0 \\ 3 & -2 \end{pmatrix}, \quad C = \begin{pmatrix} -3 & 1 \\ 2 & 5 \end{pmatrix}$$

Calcula $3C - \dfrac{1}{2}(A \cdot B)^T$.

### Ejercicio 2 (2,5 puntos) - Operaciones y potencias

Dadas las matrices:

$$M = \begin{pmatrix} 2 & -1 \\ 1 & 3 \end{pmatrix}, \quad N = \begin{pmatrix} -1 & 4 \\ 2 & 0 \end{pmatrix}, \quad P = \begin{pmatrix} 1 & -1 & 2 \\ 3 & 0 & -2 \end{pmatrix}, \quad Q = \begin{pmatrix} 0 & 2 \\ -3 & 1 \\ 1 & 4 \end{pmatrix}$$

- **a) (0,75p)** Calcula $\dfrac{2}{3}M - 2N^T$.
- **b) (0,75p)** Calcula $M^2 - 3M + 2I$.
- **c) (1p)** Calcula $(P \cdot Q)^2$.

### Ejercicio 3 (1,5 puntos) - Sistema de ecuaciones matriciales

Halla las matrices $X$ e $Y$ de dimensión $2 \times 2$ que cumplen:

$$\begin{cases} 2X + 3Y = \begin{pmatrix} 5 & 2 \\ -1 & 12 \end{pmatrix} \\ 3X - 2Y = \begin{pmatrix} 1 & 16 \\ 5 & 5 \end{pmatrix} \end{cases}$$

### Ejercicio 4 (2,5 puntos) - Ecuaciones matriciales

- **a) (1,25p)** Resuelve $A \cdot X \cdot B = C$, siendo $A = \begin{pmatrix} 3 & 1 \\ 5 & 2 \end{pmatrix}$, $B = \begin{pmatrix} 2 & 3 \\ 1 & 2 \end{pmatrix}$ y $C = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$.
- **b) (1,25p)** Resuelve $Y \cdot D - 2Y = E$, siendo $D = \begin{pmatrix} 5 & 2 \\ 1 & 4 \end{pmatrix}$ y $E = \begin{pmatrix} 4 & 2 \\ -1 & 6 \end{pmatrix}$.

### Ejercicio 5 (2 puntos) - Potencia n-ésima de una matriz

Dada la matriz $A = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}$:

- **a) (0,75p)** Calcula $A^2$, $A^3$ y $A^4$.
- **b) (0,75p)** Deduce razonadamente la expresión de $A^n$ para todo $n \in \mathbb{N}$.
- **c) (0,5p)** Resuelve la ecuación $A^{20} + X = \begin{pmatrix} 2 & 50 \\ -1 & 3 \end{pmatrix}$.

---

## Resolución

### Solución Ejercicio 1

$A$ es $2 \times 3$ y $B$ es $3 \times 2$, así que $A \cdot B$ es $2 \times 2$:

$$A \cdot B = \begin{pmatrix} 2 + 2 + 9 & 1 + 0 - 6 \\ 0 - 4 - 3 & 0 + 0 + 2 \end{pmatrix} = \begin{pmatrix} 13 & -5 \\ -7 & 2 \end{pmatrix} \qquad (A \cdot B)^T = \begin{pmatrix} 13 & -7 \\ -5 & 2 \end{pmatrix}$$

$$3C - \frac{1}{2}(A \cdot B)^T = \begin{pmatrix} -9 & 3 \\ 6 & 15 \end{pmatrix} - \begin{pmatrix} \frac{13}{2} & -\frac{7}{2} \\ -\frac{5}{2} & 1 \end{pmatrix} = \begin{pmatrix} -\frac{31}{2} & \frac{13}{2} \\ \frac{17}{2} & 14 \end{pmatrix}$$

### Solución Ejercicio 2

**a)** $N^T = \begin{pmatrix} -1 & 2 \\ 4 & 0 \end{pmatrix}$:

$$\frac{2}{3}M - 2N^T = \begin{pmatrix} \frac{4}{3} & -\frac{2}{3} \\ \frac{2}{3} & 2 \end{pmatrix} - \begin{pmatrix} -2 & 4 \\ 8 & 0 \end{pmatrix} = \begin{pmatrix} \frac{10}{3} & -\frac{14}{3} \\ -\frac{22}{3} & 2 \end{pmatrix}$$

**b)**

$$M^2 = \begin{pmatrix} 2 & -1 \\ 1 & 3 \end{pmatrix} \begin{pmatrix} 2 & -1 \\ 1 & 3 \end{pmatrix} = \begin{pmatrix} 4 - 1 & -2 - 3 \\ 2 + 3 & -1 + 9 \end{pmatrix} = \begin{pmatrix} 3 & -5 \\ 5 & 8 \end{pmatrix}$$

$$M^2 - 3M + 2I = \begin{pmatrix} 3 & -5 \\ 5 & 8 \end{pmatrix} - \begin{pmatrix} 6 & -3 \\ 3 & 9 \end{pmatrix} + \begin{pmatrix} 2 & 0 \\ 0 & 2 \end{pmatrix} = \begin{pmatrix} -1 & -2 \\ 2 & 1 \end{pmatrix}$$

**c)** $P$ es $2 \times 3$ y $Q$ es $3 \times 2$, así que $P \cdot Q$ es $2 \times 2$ y se puede elevar al cuadrado:

$$P \cdot Q = \begin{pmatrix} 0 + 3 + 2 & 2 - 1 + 8 \\ 0 + 0 - 2 & 6 + 0 - 8 \end{pmatrix} = \begin{pmatrix} 5 & 9 \\ -2 & -2 \end{pmatrix}$$

$$(P \cdot Q)^2 = \begin{pmatrix} 5 & 9 \\ -2 & -2 \end{pmatrix} \begin{pmatrix} 5 & 9 \\ -2 & -2 \end{pmatrix} = \begin{pmatrix} 25 - 18 & 45 - 18 \\ -10 + 4 & -18 + 4 \end{pmatrix} = \begin{pmatrix} 7 & 27 \\ -6 & -14 \end{pmatrix}$$

### Solución Ejercicio 3

Llamamos $R_1$ y $R_2$ a las matrices de la derecha y resolvemos por reducción, igual que con números.

Para eliminar $Y$, multiplicamos la primera ecuación por $2$ y la segunda por $3$ y sumamos:

$$13X = 2R_1 + 3R_2 = \begin{pmatrix} 10 & 4 \\ -2 & 24 \end{pmatrix} + \begin{pmatrix} 3 & 48 \\ 15 & 15 \end{pmatrix} = \begin{pmatrix} 13 & 52 \\ 13 & 39 \end{pmatrix} \implies X = \begin{pmatrix} 1 & 4 \\ 1 & 3 \end{pmatrix}$$

Para eliminar $X$, multiplicamos la primera por $3$ y la segunda por $2$ y restamos:

$$13Y = 3R_1 - 2R_2 = \begin{pmatrix} 15 & 6 \\ -3 & 36 \end{pmatrix} - \begin{pmatrix} 2 & 32 \\ 10 & 10 \end{pmatrix} = \begin{pmatrix} 13 & -26 \\ -13 & 26 \end{pmatrix} \implies Y = \begin{pmatrix} 1 & -2 \\ -1 & 2 \end{pmatrix}$$

### Solución Ejercicio 4

**a)** Multiplicamos por $A^{-1}$ por la izquierda y por $B^{-1}$ por la derecha. Como $C = I$:

$$X = A^{-1} \cdot C \cdot B^{-1} = A^{-1} \cdot B^{-1}$$

$\lvert A \rvert = 6 - 5 = 1$ y $\lvert B \rvert = 4 - 3 = 1$:

$$A^{-1} = \begin{pmatrix} 2 & -1 \\ -5 & 3 \end{pmatrix} \qquad B^{-1} = \begin{pmatrix} 2 & -3 \\ -1 & 2 \end{pmatrix}$$

$$X = \begin{pmatrix} 2 & -1 \\ -5 & 3 \end{pmatrix} \begin{pmatrix} 2 & -3 \\ -1 & 2 \end{pmatrix} = \begin{pmatrix} 4 + 1 & -6 - 2 \\ -10 - 3 & 15 + 6 \end{pmatrix} = \begin{pmatrix} 5 & -8 \\ -13 & 21 \end{pmatrix}$$

**b)** Sacamos factor común $Y$ por la izquierda. Hay que escribir $2Y = Y \cdot 2I$, porque no se puede restar un número a una matriz:

$$Y \cdot D - Y \cdot 2I = E \implies Y(D - 2I) = E \implies Y = E \cdot (D - 2I)^{-1}$$

$$D - 2I = \begin{pmatrix} 3 & 2 \\ 1 & 2 \end{pmatrix} \qquad \lvert D - 2I \rvert = 6 - 2 = 4 \qquad (D - 2I)^{-1} = \frac{1}{4}\begin{pmatrix} 2 & -2 \\ -1 & 3 \end{pmatrix}$$

$$Y = \frac{1}{4}\begin{pmatrix} 4 & 2 \\ -1 & 6 \end{pmatrix} \begin{pmatrix} 2 & -2 \\ -1 & 3 \end{pmatrix} = \frac{1}{4}\begin{pmatrix} 6 & -2 \\ -8 & 20 \end{pmatrix} = \begin{pmatrix} \frac{3}{2} & -\frac{1}{2} \\ -2 & 5 \end{pmatrix}$$

### Solución Ejercicio 5

**a)**

$$A^2 = \begin{pmatrix} 1 & 4 \\ 0 & 1 \end{pmatrix}, \quad A^3 = A^2 \cdot A = \begin{pmatrix} 1 & 6 \\ 0 & 1 \end{pmatrix}, \quad A^4 = A^3 \cdot A = \begin{pmatrix} 1 & 8 \\ 0 & 1 \end{pmatrix}$$

**b)** Cada vez que multiplicamos por $A$, el elemento de la posición $(1, 2)$ aumenta en $2$ y los demás no cambian. Por tanto:

$$A^n = \begin{pmatrix} 1 & 2n \\ 0 & 1 \end{pmatrix}$$

**c)** $A^{20} = \begin{pmatrix} 1 & 40 \\ 0 & 1 \end{pmatrix}$, así que:

$$X = \begin{pmatrix} 2 & 50 \\ -1 & 3 \end{pmatrix} - \begin{pmatrix} 1 & 40 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 1 & 10 \\ -1 & 2 \end{pmatrix}$$
