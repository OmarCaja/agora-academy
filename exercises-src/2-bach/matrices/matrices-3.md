# Examen de matrices

### Ejercicio 1 (1,5 puntos) - Operaciones con la traspuesta

Dadas las matrices:

$$A = \begin{pmatrix} 2 & -1 & 0 \\ 1 & 3 & -2 \end{pmatrix}, \quad B = \begin{pmatrix} 1 & 4 \\ 0 & -2 \\ 3 & 1 \end{pmatrix}, \quad C = \begin{pmatrix} 2 & -1 \\ 4 & 3 \end{pmatrix}$$

Calcula $2C - \dfrac{1}{2}(A \cdot B)^T$.

### Ejercicio 2 (2,5 puntos) - Operaciones y potencias

Dadas las matrices:

$$M = \begin{pmatrix} 3 & 1 \\ -2 & 1 \end{pmatrix}, \quad N = \begin{pmatrix} 2 & -3 \\ 1 & 4 \end{pmatrix}, \quad P = \begin{pmatrix} 2 & 0 & -1 \\ 1 & -2 & 3 \end{pmatrix}, \quad Q = \begin{pmatrix} 1 & 2 \\ -1 & 0 \\ 3 & 1 \end{pmatrix}$$

- **a) (0,75p)** Calcula $\dfrac{1}{2}M + 3N^T$.
- **b) (0,75p)** Calcula $M^2 - 4M + 3I$.
- **c) (1p)** Calcula $(P \cdot Q)^2$.

### Ejercicio 3 (1,5 puntos) - Sistema de ecuaciones matriciales

Halla las matrices $X$ e $Y$ de dimensión $2 \times 2$ que cumplen:

$$\begin{cases} 3X + 2Y = \begin{pmatrix} 1 & 6 \\ 6 & 1 \end{pmatrix} \\ 2X - Y = \begin{pmatrix} 3 & 4 \\ -3 & -4 \end{pmatrix} \end{cases}$$

### Ejercicio 4 (2,5 puntos) - Ecuaciones matriciales

- **a) (1,25p)** Resuelve $A \cdot X \cdot B = C$, siendo $A = \begin{pmatrix} 2 & 1 \\ 5 & 3 \end{pmatrix}$, $B = \begin{pmatrix} 1 & 2 \\ 1 & 3 \end{pmatrix}$ y $C = \begin{pmatrix} 1 & 0 \\ 2 & 1 \end{pmatrix}$.
- **b) (1,25p)** Resuelve $Y \cdot D - 3Y = E$, siendo $D = \begin{pmatrix} 5 & 1 \\ 3 & 5 \end{pmatrix}$ y $E = \begin{pmatrix} 1 & 2 \\ -1 & 4 \end{pmatrix}$.

### Ejercicio 5 (2 puntos) - Potencia n-ésima de una matriz

Dada la matriz $A = \begin{pmatrix} 1 & 0 \\ 3 & 1 \end{pmatrix}$:

- **a) (0,75p)** Calcula $A^2$, $A^3$ y $A^4$.
- **b) (0,75p)** Deduce razonadamente la expresión de $A^n$ para todo $n \in \mathbb{N}$.
- **c) (0,5p)** Resuelve la ecuación $A^{15} - 2X = \begin{pmatrix} 3 & 0 \\ 5 & -1 \end{pmatrix}$.

---

## Resolución

### Solución Ejercicio 1

$A$ es $2 \times 3$ y $B$ es $3 \times 2$, así que $A \cdot B$ es $2 \times 2$:

$$A \cdot B = \begin{pmatrix} 2 + 0 + 0 & 8 + 2 + 0 \\ 1 + 0 - 6 & 4 - 6 - 2 \end{pmatrix} = \begin{pmatrix} 2 & 10 \\ -5 & -4 \end{pmatrix} \qquad \frac{1}{2}(A \cdot B)^T = \begin{pmatrix} 1 & -\frac{5}{2} \\ 5 & -2 \end{pmatrix}$$

$$2C - \frac{1}{2}(A \cdot B)^T = \begin{pmatrix} 4 & -2 \\ 8 & 6 \end{pmatrix} - \begin{pmatrix} 1 & -\frac{5}{2} \\ 5 & -2 \end{pmatrix} = \begin{pmatrix} 3 & \frac{1}{2} \\ 3 & 8 \end{pmatrix}$$

### Solución Ejercicio 2

**a)** $N^T = \begin{pmatrix} 2 & 1 \\ -3 & 4 \end{pmatrix}$:

$$\frac{1}{2}M + 3N^T = \begin{pmatrix} \frac{3}{2} & \frac{1}{2} \\ -1 & \frac{1}{2} \end{pmatrix} + \begin{pmatrix} 6 & 3 \\ -9 & 12 \end{pmatrix} = \begin{pmatrix} \frac{15}{2} & \frac{7}{2} \\ -10 & \frac{25}{2} \end{pmatrix}$$

**b)**

$$M^2 = \begin{pmatrix} 3 & 1 \\ -2 & 1 \end{pmatrix} \begin{pmatrix} 3 & 1 \\ -2 & 1 \end{pmatrix} = \begin{pmatrix} 9 - 2 & 3 + 1 \\ -6 - 2 & -2 + 1 \end{pmatrix} = \begin{pmatrix} 7 & 4 \\ -8 & -1 \end{pmatrix}$$

$$M^2 - 4M + 3I = \begin{pmatrix} 7 & 4 \\ -8 & -1 \end{pmatrix} - \begin{pmatrix} 12 & 4 \\ -8 & 4 \end{pmatrix} + \begin{pmatrix} 3 & 0 \\ 0 & 3 \end{pmatrix} = \begin{pmatrix} -2 & 0 \\ 0 & -2 \end{pmatrix}$$

**c)** $P \cdot Q$ es $2 \times 2$:

$$P \cdot Q = \begin{pmatrix} 2 + 0 - 3 & 4 + 0 - 1 \\ 1 + 2 + 9 & 2 + 0 + 3 \end{pmatrix} = \begin{pmatrix} -1 & 3 \\ 12 & 5 \end{pmatrix}$$

$$(P \cdot Q)^2 = \begin{pmatrix} -1 & 3 \\ 12 & 5 \end{pmatrix} \begin{pmatrix} -1 & 3 \\ 12 & 5 \end{pmatrix} = \begin{pmatrix} 1 + 36 & -3 + 15 \\ -12 + 60 & 36 + 25 \end{pmatrix} = \begin{pmatrix} 37 & 12 \\ 48 & 61 \end{pmatrix}$$

### Solución Ejercicio 3

Multiplicamos la segunda ecuación por $2$ y la sumamos a la primera para eliminar $Y$:

$$7X = \begin{pmatrix} 1 & 6 \\ 6 & 1 \end{pmatrix} + \begin{pmatrix} 6 & 8 \\ -6 & -8 \end{pmatrix} = \begin{pmatrix} 7 & 14 \\ 0 & -7 \end{pmatrix} \implies X = \begin{pmatrix} 1 & 2 \\ 0 & -1 \end{pmatrix}$$

De la segunda ecuación despejamos $Y = 2X - \begin{pmatrix} 3 & 4 \\ -3 & -4 \end{pmatrix}$:

$$Y = \begin{pmatrix} 2 & 4 \\ 0 & -2 \end{pmatrix} - \begin{pmatrix} 3 & 4 \\ -3 & -4 \end{pmatrix} = \begin{pmatrix} -1 & 0 \\ 3 & 2 \end{pmatrix}$$

Comprobación: $3X + 2Y = \begin{pmatrix} 3 & 6 \\ 0 & -3 \end{pmatrix} + \begin{pmatrix} -2 & 0 \\ 6 & 4 \end{pmatrix} = \begin{pmatrix} 1 & 6 \\ 6 & 1 \end{pmatrix}$.

### Solución Ejercicio 4

**a)** $\lvert A \rvert = 6 - 5 = 1 \neq 0$ y $\lvert B \rvert = 3 - 2 = 1 \neq 0$, así que las dos son invertibles. Multiplicamos por $A^{-1}$ por la izquierda y por $B^{-1}$ por la derecha:

$$X = A^{-1} \cdot C \cdot B^{-1} \qquad A^{-1} = \begin{pmatrix} 3 & -1 \\ -5 & 2 \end{pmatrix} \qquad B^{-1} = \begin{pmatrix} 3 & -2 \\ -1 & 1 \end{pmatrix}$$

$$A^{-1} \cdot C = \begin{pmatrix} 3 & -1 \\ -5 & 2 \end{pmatrix} \begin{pmatrix} 1 & 0 \\ 2 & 1 \end{pmatrix} = \begin{pmatrix} 1 & -1 \\ -1 & 2 \end{pmatrix}$$

$$X = \begin{pmatrix} 1 & -1 \\ -1 & 2 \end{pmatrix} \begin{pmatrix} 3 & -2 \\ -1 & 1 \end{pmatrix} = \begin{pmatrix} 4 & -3 \\ -5 & 4 \end{pmatrix}$$

**b)** Sacamos factor común $Y$ por la izquierda, escribiendo $3Y = Y \cdot 3I$:

$$Y(D - 3I) = E \implies Y = E \cdot (D - 3I)^{-1}$$

$$D - 3I = \begin{pmatrix} 2 & 1 \\ 3 & 2 \end{pmatrix} \qquad \lvert D - 3I \rvert = 4 - 3 = 1 \qquad (D - 3I)^{-1} = \begin{pmatrix} 2 & -1 \\ -3 & 2 \end{pmatrix}$$

$$Y = \begin{pmatrix} 1 & 2 \\ -1 & 4 \end{pmatrix} \begin{pmatrix} 2 & -1 \\ -3 & 2 \end{pmatrix} = \begin{pmatrix} 2 - 6 & -1 + 4 \\ -2 - 12 & 1 + 8 \end{pmatrix} = \begin{pmatrix} -4 & 3 \\ -14 & 9 \end{pmatrix}$$

### Solución Ejercicio 5

**a)**

$$A^2 = \begin{pmatrix} 1 & 0 \\ 6 & 1 \end{pmatrix}, \quad A^3 = A^2 \cdot A = \begin{pmatrix} 1 & 0 \\ 9 & 1 \end{pmatrix}, \quad A^4 = A^3 \cdot A = \begin{pmatrix} 1 & 0 \\ 12 & 1 \end{pmatrix}$$

**b)** En cada potencia el elemento de la posición $(2, 1)$ aumenta en $3$ y el resto no cambia:

$$A^n = \begin{pmatrix} 1 & 0 \\ 3n & 1 \end{pmatrix}$$

Se justifica así: si $A^n$ tiene esa forma, $A^{n+1} = A^n \cdot A = \begin{pmatrix} 1 & 0 \\ 3n + 3 & 1 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 3(n + 1) & 1 \end{pmatrix}$, que también la tiene.

**c)** $A^{15} = \begin{pmatrix} 1 & 0 \\ 45 & 1 \end{pmatrix}$. Despejamos $X$:

$$2X = A^{15} - \begin{pmatrix} 3 & 0 \\ 5 & -1 \end{pmatrix} = \begin{pmatrix} -2 & 0 \\ 40 & 2 \end{pmatrix} \implies X = \begin{pmatrix} -1 & 0 \\ 20 & 1 \end{pmatrix}$$
