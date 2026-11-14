# Examen de matrices

### Ejercicio 1 (1,5 puntos) - Matriz traspuesta

Calcula la traspuesta de las siguientes matrices:

$$A = \begin{pmatrix} 2 & -1 & 4 \\ 0 & 3 & -5 \end{pmatrix}, \quad B = \begin{pmatrix} 1 & 0 \\ -2 & 7 \\ 3 & -4 \end{pmatrix}, \quad C = \begin{pmatrix} -3 & 6 & 1 \\ 2 & 0 & -8 \\ 5 & 4 & 9 \end{pmatrix}$$

### Ejercicio 2 (3,5 puntos) - Operaciones con matrices

Dadas las matrices:

$$M = \begin{pmatrix} 3 & -1 \\ 2 & 4 \end{pmatrix}, \quad N = \begin{pmatrix} 0 & 5 \\ -1 & 2 \end{pmatrix}, \quad P = \begin{pmatrix} 1 & 2 & -3 \\ 0 & 4 & 1 \end{pmatrix}, \quad Q = \begin{pmatrix} 2 & -1 \\ 3 & 0 \\ -2 & 5 \end{pmatrix}$$

Realiza las siguientes operaciones (si alguna no se puede hacer, explica por qué):

- **a) (0,75p)** $2M - 3N$
- **b) (0,75p)** $-M + \dfrac{1}{2}N$
- **c) (1p)** $M \cdot N$ y $N \cdot M$. ¿Es conmutativo el producto?
- **d) (1p)** $P \cdot Q$ y $Q \cdot P$

### Ejercicio 3 (3 puntos) - Ecuaciones matriciales

Resuelve las siguientes ecuaciones matriciales calculando previamente la matriz inversa necesaria:

- **a) (1,5p)** $A \cdot X = B$, siendo $A = \begin{pmatrix} 2 & 1 \\ 5 & 3 \end{pmatrix}$ y $B = \begin{pmatrix} 4 & -1 \\ 1 & 2 \end{pmatrix}$.
- **b) (1,5p)** $Y \cdot C + D = E$, siendo $C = \begin{pmatrix} 3 & 2 \\ 1 & 1 \end{pmatrix}$, $D = \begin{pmatrix} -1 & 0 \\ 2 & 3 \end{pmatrix}$ y $E = \begin{pmatrix} 2 & 5 \\ 0 & 1 \end{pmatrix}$.

### Ejercicio 4 (2 puntos) - Potencias de una matriz

Dada la matriz $A = \begin{pmatrix} 1 & 0 \\ 2 & 1 \end{pmatrix}$:

- **a) (0,75p)** Calcula $A^2$ y $A^3$.
- **b) (0,75p)** Deduce la expresión general de $A^n$ para $n \in \mathbb{N}$.
- **c) (0,5p)** Calcula $A^{50}$.

---

## Resolución

### Solución Ejercicio 1

La traspuesta se obtiene cambiando filas por columnas: la primera fila pasa a ser la primera columna, y así sucesivamente.

$$A^T = \begin{pmatrix} 2 & 0 \\ -1 & 3 \\ 4 & -5 \end{pmatrix}, \quad B^T = \begin{pmatrix} 1 & -2 & 3 \\ 0 & 7 & -4 \end{pmatrix}, \quad C^T = \begin{pmatrix} -3 & 2 & 5 \\ 6 & 0 & 4 \\ 1 & -8 & 9 \end{pmatrix}$$

### Solución Ejercicio 2

**a)**

$$2M - 3N = \begin{pmatrix} 6 & -2 \\ 4 & 8 \end{pmatrix} - \begin{pmatrix} 0 & 15 \\ -3 & 6 \end{pmatrix} = \begin{pmatrix} 6 & -17 \\ 7 & 2 \end{pmatrix}$$

**b)**

$$-M + \frac{1}{2}N = \begin{pmatrix} -3 & 1 \\ -2 & -4 \end{pmatrix} + \begin{pmatrix} 0 & \frac{5}{2} \\ -\frac{1}{2} & 1 \end{pmatrix} = \begin{pmatrix} -3 & \frac{7}{2} \\ -\frac{5}{2} & -3 \end{pmatrix}$$

**c)** Cada elemento es el producto de una fila de la primera matriz por una columna de la segunda:

$$M \cdot N = \begin{pmatrix} 3 \cdot 0 + (-1)(-1) & 3 \cdot 5 + (-1) \cdot 2 \\ 2 \cdot 0 + 4(-1) & 2 \cdot 5 + 4 \cdot 2 \end{pmatrix} = \begin{pmatrix} 1 & 13 \\ -4 & 18 \end{pmatrix}$$

$$N \cdot M = \begin{pmatrix} 0 \cdot 3 + 5 \cdot 2 & 0(-1) + 5 \cdot 4 \\ -1 \cdot 3 + 2 \cdot 2 & (-1)(-1) + 2 \cdot 4 \end{pmatrix} = \begin{pmatrix} 10 & 20 \\ 1 & 9 \end{pmatrix}$$

Como $M \cdot N \neq N \cdot M$, el producto de matrices no es conmutativo.

**d)** $P$ es $2 \times 3$ y $Q$ es $3 \times 2$. Los dos productos se pueden hacer porque coinciden las columnas de la primera con las filas de la segunda. $P \cdot Q$ es $2 \times 2$ y $Q \cdot P$ es $3 \times 3$:

$$P \cdot Q = \begin{pmatrix} 2 + 6 + 6 & -1 + 0 - 15 \\ 0 + 12 - 2 & 0 + 0 + 5 \end{pmatrix} = \begin{pmatrix} 14 & -16 \\ 10 & 5 \end{pmatrix}$$

$$Q \cdot P = \begin{pmatrix} 2 & 4 - 4 & -6 - 1 \\ 3 & 6 & -9 \\ -2 & -4 + 20 & 6 + 5 \end{pmatrix} = \begin{pmatrix} 2 & 0 & -7 \\ 3 & 6 & -9 \\ -2 & 16 & 11 \end{pmatrix}$$

### Solución Ejercicio 3

**a)** Multiplicamos por $A^{-1}$ por la izquierda: $X = A^{-1} \cdot B$.

$\lvert A \rvert = 2 \cdot 3 - 1 \cdot 5 = 1 \neq 0$, así que $A$ tiene inversa. Para una matriz $2 \times 2$, se intercambian los elementos de la diagonal principal, se cambia el signo de los otros dos y se divide entre el determinante:

$$A^{-1} = \frac{1}{1}\begin{pmatrix} 3 & -1 \\ -5 & 2 \end{pmatrix} = \begin{pmatrix} 3 & -1 \\ -5 & 2 \end{pmatrix}$$

$$X = \begin{pmatrix} 3 & -1 \\ -5 & 2 \end{pmatrix} \begin{pmatrix} 4 & -1 \\ 1 & 2 \end{pmatrix} = \begin{pmatrix} 12 - 1 & -3 - 2 \\ -20 + 2 & 5 + 4 \end{pmatrix} = \begin{pmatrix} 11 & -5 \\ -18 & 9 \end{pmatrix}$$

**b)** Despejamos: $Y \cdot C = E - D \implies Y = (E - D) \cdot C^{-1}$. Como $C^{-1}$ multiplica por la derecha, debe quedar a la derecha.

$$E - D = \begin{pmatrix} 2 & 5 \\ 0 & 1 \end{pmatrix} - \begin{pmatrix} -1 & 0 \\ 2 & 3 \end{pmatrix} = \begin{pmatrix} 3 & 5 \\ -2 & -2 \end{pmatrix}$$

$\lvert C \rvert = 3 - 2 = 1$, así que $C^{-1} = \begin{pmatrix} 1 & -2 \\ -1 & 3 \end{pmatrix}$.

$$Y = \begin{pmatrix} 3 & 5 \\ -2 & -2 \end{pmatrix} \begin{pmatrix} 1 & -2 \\ -1 & 3 \end{pmatrix} = \begin{pmatrix} 3 - 5 & -6 + 15 \\ -2 + 2 & 4 - 6 \end{pmatrix} = \begin{pmatrix} -2 & 9 \\ 0 & -2 \end{pmatrix}$$

### Solución Ejercicio 4

**a)**

$$A^2 = \begin{pmatrix} 1 & 0 \\ 2 & 1 \end{pmatrix} \begin{pmatrix} 1 & 0 \\ 2 & 1 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 4 & 1 \end{pmatrix} \qquad A^3 = A^2 \cdot A = \begin{pmatrix} 1 & 0 \\ 4 & 1 \end{pmatrix} \begin{pmatrix} 1 & 0 \\ 2 & 1 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 6 & 1 \end{pmatrix}$$

**b)** Solo cambia el elemento de la posición $(2, 1)$, que vale $2$, $4$, $6$... es decir, $2n$:

$$A^n = \begin{pmatrix} 1 & 0 \\ 2n & 1 \end{pmatrix}$$

**c)** Sustituimos $n = 50$:

$$A^{50} = \begin{pmatrix} 1 & 0 \\ 100 & 1 \end{pmatrix}$$
