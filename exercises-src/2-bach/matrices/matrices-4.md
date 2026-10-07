# Examen de matrices y determinantes

### Ejercicio 1 (2 puntos) - Operaciones con matrices
Dadas las matrices $A = \begin{pmatrix} 1 & 2 \\ 0 & -1 \end{pmatrix}$ y $B = \begin{pmatrix} 2 & 0 \\ 1 & 3 \end{pmatrix}$:
- **a) (0,5p)** Calcula $2A - B^t$.
- **b) (0,75p)** Calcula $A \cdot B$ y $B \cdot A$. ¿Conmutan $A$ y $B$?
- **c) (0,75p)** Calcula $A^2$ y, a partir del resultado, deduce $A^{2027}$.

### Ejercicio 2 (2 puntos) - Cálculo y propiedades de los determinantes
- **a) (1p)** Calcula el determinante $\begin{vmatrix} 1 & 2 & -1 \\ 3 & 0 & 2 \\ -2 & 1 & 4 \end{vmatrix}$.
- **b) (1p)** Sea $M$ una matriz cuadrada de orden $3$ con $\lvert M \rvert = 3$. Calcula, justificando las propiedades que uses, $\lvert 2M \rvert$, $\lvert -M \rvert$, $\lvert M^{-1} \rvert$ y $\lvert M^t \cdot M \rvert$.

### Ejercicio 3 (2 puntos) - Matriz inversa
Sea $C = \begin{pmatrix} 1 & 0 & 1 \\ 2 & 1 & 0 \\ 0 & 1 & 1 \end{pmatrix}$.
- **a) (0,5p)** Justifica que $C$ tiene inversa.
- **b) (1,5p)** Calcula $C^{-1}$ mediante la matriz adjunta.

### Ejercicio 4 (2 puntos) - Ecuación matricial
Dadas $P = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$, $Q = \begin{pmatrix} 1 & 0 \\ 2 & 1 \end{pmatrix}$ y $R = \begin{pmatrix} 3 & 2 \\ 1 & 4 \end{pmatrix}$:
- **a) (0,5p)** Despeja $X$ en la ecuación $X \cdot P + Q = R$, justificando que es posible.
- **b) (1,5p)** Calcula la matriz $X$.

### Ejercicio 5 (2 puntos) - Discusión según un parámetro
Sea $A_k = \begin{pmatrix} 1 & 1 & k \\ k & 1 & 1 \\ 1 & k & 1 \end{pmatrix}$, con $k \in \mathbb{R}$.
- **a) (1,25p)** Calcula $\lvert A_k \rvert$ y determina para qué valores de $k$ la matriz $A_k$ es invertible.
- **b) (0,75p)** Estudia el rango de $A_k$ para los valores de $k$ en los que no es invertible.

---

## Resolución

### Solución Ejercicio 1
**a)** $2A = \begin{pmatrix} 2 & 4 \\ 0 & -2 \end{pmatrix}$ y $B^t = \begin{pmatrix} 2 & 1 \\ 0 & 3 \end{pmatrix}$, luego
$$2A - B^t = \begin{pmatrix} 0 & 3 \\ 0 & -5 \end{pmatrix}$$
**b)** Multiplicando filas por columnas:
$$A \cdot B = \begin{pmatrix} 1 \cdot 2 + 2 \cdot 1 & 1 \cdot 0 + 2 \cdot 3 \\ 0 \cdot 2 + (-1) \cdot 1 & 0 \cdot 0 + (-1) \cdot 3 \end{pmatrix} = \begin{pmatrix} 4 & 6 \\ -1 & -3 \end{pmatrix}$$
$$B \cdot A = \begin{pmatrix} 2 & 4 \\ 1 & -1 \end{pmatrix}$$
Como $A \cdot B \neq B \cdot A$, las matrices no conmutan.
**c)**
$$A^2 = \begin{pmatrix} 1 & 2 \\ 0 & -1 \end{pmatrix} \begin{pmatrix} 1 & 2 \\ 0 & -1 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = I$$
Las potencias pares valen $I$ y las impares valen $A$. Como $2027 = 2 \cdot 1013 + 1$:
$$A^{2027} = (A^2)^{1013} \cdot A = I \cdot A = A = \begin{pmatrix} 1 & 2 \\ 0 & -1 \end{pmatrix}$$

### Solución Ejercicio 2
**a)** Por la regla de Sarrus:
$$\begin{vmatrix} 1 & 2 & -1 \\ 3 & 0 & 2 \\ -2 & 1 & 4 \end{vmatrix} = (0 - 8 - 3) - (0 + 2 + 24) = -11 - 26 = -37$$
**b)** Usamos que $\lvert \lambda M \rvert = \lambda^n \lvert M \rvert$ con $n = 3$, $\lvert M^{-1} \rvert = \frac{1}{\lvert M \rvert}$, $\lvert M^t \rvert = \lvert M \rvert$ y $\lvert M \cdot N \rvert = \lvert M \rvert \cdot \lvert N \rvert$:
$$\lvert 2M \rvert = 2^3 \cdot 3 = 24$$
$$\lvert -M \rvert = (-1)^3 \cdot 3 = -3$$
$$\lvert M^{-1} \rvert = \frac{1}{3}$$
$$\lvert M^t \cdot M \rvert = \lvert M^t \rvert \cdot \lvert M \rvert = 3 \cdot 3 = 9$$

### Solución Ejercicio 3
**a)** Por Sarrus, $\lvert C \rvert = (1 + 0 + 2) - (0 + 0 + 0) = 3 \neq 0$, así que $C$ es invertible.
**b)** Usamos $C^{-1} = \frac{1}{\lvert C \rvert} (\text{Adj}(C))^t$. Los adjuntos son:
$$C_{11} = 1, \quad C_{12} = -2, \quad C_{13} = 2$$
$$C_{21} = 1, \quad C_{22} = 1, \quad C_{23} = -1$$
$$C_{31} = -1, \quad C_{32} = 2, \quad C_{33} = 1$$
$$\text{Adj}(C) = \begin{pmatrix} 1 & -2 & 2 \\ 1 & 1 & -1 \\ -1 & 2 & 1 \end{pmatrix} \Rightarrow (\text{Adj}(C))^t = \begin{pmatrix} 1 & 1 & -1 \\ -2 & 1 & 2 \\ 2 & -1 & 1 \end{pmatrix}$$
$$C^{-1} = \frac{1}{3} \begin{pmatrix} 1 & 1 & -1 \\ -2 & 1 & 2 \\ 2 & -1 & 1 \end{pmatrix}$$
Comprobación: $C \cdot C^{-1} = I$.

### Solución Ejercicio 4
**a)** $\lvert P \rvert = 2 - 1 = 1 \neq 0$, luego $P$ es invertible. Restando $Q$ y multiplicando por $P^{-1}$ por la derecha:
$$X \cdot P = R - Q \Rightarrow X = (R - Q) \cdot P^{-1}$$
**b)** Calculamos:
$$P^{-1} = \frac{1}{1} \begin{pmatrix} 1 & -1 \\ -1 & 2 \end{pmatrix} = \begin{pmatrix} 1 & -1 \\ -1 & 2 \end{pmatrix}, \quad R - Q = \begin{pmatrix} 2 & 2 \\ -1 & 3 \end{pmatrix}$$
$$X = \begin{pmatrix} 2 & 2 \\ -1 & 3 \end{pmatrix} \begin{pmatrix} 1 & -1 \\ -1 & 2 \end{pmatrix} = \begin{pmatrix} 0 & 2 \\ -4 & 7 \end{pmatrix}$$
Comprobación: $X \cdot P + Q = \begin{pmatrix} 2 & 2 \\ -1 & 3 \end{pmatrix} + \begin{pmatrix} 1 & 0 \\ 2 & 1 \end{pmatrix} = R$.

### Solución Ejercicio 5
**a)** Por Sarrus:
$$\lvert A_k \rvert = (1 + 1 + k^3) - (k + k + k) = k^3 - 3k + 2$$
Por Ruffini, $k = 1$ es raíz y $k^3 - 3k + 2 = (k - 1)(k^2 + k - 2) = (k - 1)^2 (k + 2)$.
$$\lvert A_k \rvert = 0 \iff k = 1 \text{ o } k = -2$$
$A_k$ es invertible si y solo si $k \neq 1$ y $k \neq -2$.
**b)**
1. Si $k = 1$, todas las filas son $(1, 1, 1)$, así que $\text{rg}(A_1) = 1$.
2. Si $k = -2$, $\lvert A_{-2} \rvert = 0$ y el menor $\begin{vmatrix} 1 & 1 \\ -2 & 1 \end{vmatrix} = 3 \neq 0$, así que $\text{rg}(A_{-2}) = 2$.
