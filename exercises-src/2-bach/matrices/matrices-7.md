# Examen de matrices y determinantes

### Ejercicio 1 (2 puntos) - Operaciones con matrices
Dadas las matrices $A = \begin{pmatrix} -1 & 0 \\ 3 & 1 \end{pmatrix}$ y $B = \begin{pmatrix} 2 & 1 \\ 0 & -1 \end{pmatrix}$:
- **a) (0,5p)** Calcula $3A - B^t$.
- **b) (0,75p)** Calcula $A \cdot B$ y $B \cdot A$. ¿Conmutan $A$ y $B$?
- **c) (0,75p)** Calcula $A^2$ y, a partir del resultado, deduce $A^{2026}$ y $A^{2027}$.

### Ejercicio 2 (2 puntos) - Cálculo y propiedades de los determinantes
- **a) (1p)** Calcula el determinante $\begin{vmatrix} 3 & 1 & -2 \\ 0 & 2 & 1 \\ 1 & -1 & 4 \end{vmatrix}$.
- **b) (1p)** Sea $M$ una matriz cuadrada de orden $3$ con $\lvert M \rvert = 3$. Calcula, justificando las propiedades que uses, $\lvert 2M \rvert$, $\lvert -M \rvert$, $\lvert M^{-1} \rvert$ y $\lvert M^2 \cdot M^t \rvert$.

### Ejercicio 3 (2 puntos) - Matriz inversa
Sea $C = \begin{pmatrix} 1 & 0 & 1 \\ 2 & 1 & 0 \\ 0 & 1 & 1 \end{pmatrix}$.
- **a) (0,5p)** Justifica que $C$ tiene inversa.
- **b) (1,5p)** Calcula $C^{-1}$ mediante la matriz adjunta.

### Ejercicio 4 (2 puntos) - Ecuaciones matriciales
Dadas $P = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$, $Q = \begin{pmatrix} 1 & 0 \\ 2 & 1 \end{pmatrix}$ y $R = \begin{pmatrix} 1 & 2 \\ 0 & 3 \end{pmatrix}$, despeja $X$ en cada una de las siguientes ecuaciones, justificando que es posible (no hace falta calcularla):
- **a) (0,25p)** $X \cdot P + Q = R$
- **b) (0,25p)** $P \cdot X - 3X = R$
- **c) (0,25p)** $Q \cdot X \cdot P = R$
- **d) (0,25p)** $X \cdot P - Q = X$
- **e) (1p)** Calcula la matriz $X$ que cumple la ecuación del apartado d).

### Ejercicio 5 (2 puntos) - Discusión según un parámetro
Sea $A_k = \begin{pmatrix} k & 1 & 1 \\ 1 & k & 1 \\ 1 & 1 & k \end{pmatrix}$, con $k \in \mathbb{R}$.
- **a) (1,25p)** Calcula $\lvert A_k \rvert$ y determina para qué valores de $k$ la matriz $A_k$ es invertible.
- **b) (0,75p)** Estudia el rango de $A_k$ para los valores de $k$ en los que no es invertible.

---

## Resolución

### Solución Ejercicio 1
**a)** $3A = \begin{pmatrix} -3 & 0 \\ 9 & 3 \end{pmatrix}$ y $B^t = \begin{pmatrix} 2 & 0 \\ 1 & -1 \end{pmatrix}$, luego
$$3A - B^t = \begin{pmatrix} -5 & 0 \\ 8 & 4 \end{pmatrix}$$
**b)** Multiplicando filas por columnas:
$$A \cdot B = \begin{pmatrix} (-1) \cdot 2 + 0 \cdot 0 & (-1) \cdot 1 + 0 \cdot (-1) \\ 3 \cdot 2 + 1 \cdot 0 & 3 \cdot 1 + 1 \cdot (-1) \end{pmatrix} = \begin{pmatrix} -2 & -1 \\ 6 & 2 \end{pmatrix}$$
$$B \cdot A = \begin{pmatrix} -2 + 3 & 0 + 1 \\ 0 - 3 & 0 - 1 \end{pmatrix} = \begin{pmatrix} 1 & 1 \\ -3 & -1 \end{pmatrix}$$
Como $A \cdot B \neq B \cdot A$, las matrices no conmutan.
**c)**
$$A^2 = \begin{pmatrix} -1 & 0 \\ 3 & 1 \end{pmatrix} \begin{pmatrix} -1 & 0 \\ 3 & 1 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = I$$
Las potencias pares valen $I$ y las impares valen $A$:
$$A^{2026} = (A^2)^{1013} = I, \quad A^{2027} = A^{2026} \cdot A = A = \begin{pmatrix} -1 & 0 \\ 3 & 1 \end{pmatrix}$$

### Solución Ejercicio 2
**a)** Por la regla de Sarrus:
$$\begin{vmatrix} 3 & 1 & -2 \\ 0 & 2 & 1 \\ 1 & -1 & 4 \end{vmatrix} = (24 + 1 + 0) - (-4 + 0 - 3) = 25 + 7 = 32$$
**b)** Usamos que $\lvert \lambda M \rvert = \lambda^n \lvert M \rvert$ con $n = 3$, $\lvert M^{-1} \rvert = \frac{1}{\lvert M \rvert}$, $\lvert M^t \rvert = \lvert M \rvert$ y $\lvert M \cdot N \rvert = \lvert M \rvert \cdot \lvert N \rvert$:
$$\lvert 2M \rvert = 2^3 \cdot 3 = 24$$
$$\lvert -M \rvert = (-1)^3 \cdot 3 = -3$$
$$\lvert M^{-1} \rvert = \frac{1}{3}$$
$$\lvert M^2 \cdot M^t \rvert = \lvert M \rvert^2 \cdot \lvert M^t \rvert = 3^2 \cdot 3 = 27$$

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
Calculamos los determinantes que vamos a necesitar:
$$\lvert P \rvert = 2 - 1 = 1 \neq 0, \quad \lvert Q \rvert = 1 \neq 0$$
$$P - 3I = \begin{pmatrix} -1 & 1 \\ 1 & -2 \end{pmatrix}, \quad \lvert P - 3I \rvert = 1 \neq 0$$
$$P - I = \begin{pmatrix} 1 & 1 \\ 1 & 0 \end{pmatrix}, \quad \lvert P - I \rvert = -1 \neq 0$$
**a)** Restando $Q$ y multiplicando por $P^{-1}$ por la derecha ($P$ es invertible):
$$X \cdot P = R - Q \Rightarrow X = (R - Q) \cdot P^{-1}$$
**b)** Sacando $X$ factor común por la derecha, escribiendo $3X = 3I \cdot X$:
$$(P - 3I) \cdot X = R \Rightarrow X = (P - 3I)^{-1} \cdot R$$
Es posible porque $P - 3I$ es invertible.
**c)** Multiplicando por $Q^{-1}$ por la izquierda y por $P^{-1}$ por la derecha (ambas son invertibles):
$$X = Q^{-1} \cdot R \cdot P^{-1}$$
**d)** Pasando $X$ a la izquierda y $Q$ a la derecha, y sacando $X$ factor común por la izquierda:
$$X \cdot P - X = Q \Rightarrow X \cdot (P - I) = Q \Rightarrow X = Q \cdot (P - I)^{-1}$$
Es posible porque $P - I$ es invertible.
**e)** Calculamos la inversa de $P - I$:
$$(P - I)^{-1} = \frac{1}{-1} \begin{pmatrix} 0 & -1 \\ -1 & 1 \end{pmatrix} = \begin{pmatrix} 0 & 1 \\ 1 & -1 \end{pmatrix}$$
$$X = \begin{pmatrix} 1 & 0 \\ 2 & 1 \end{pmatrix} \begin{pmatrix} 0 & 1 \\ 1 & -1 \end{pmatrix} = \begin{pmatrix} 0 & 1 \\ 1 & 1 \end{pmatrix}$$
Comprobación: $X \cdot P - Q = \begin{pmatrix} 1 & 1 \\ 3 & 2 \end{pmatrix} - \begin{pmatrix} 1 & 0 \\ 2 & 1 \end{pmatrix} = \begin{pmatrix} 0 & 1 \\ 1 & 1 \end{pmatrix} = X$.

### Solución Ejercicio 5
**a)** Por Sarrus:
$$\lvert A_k \rvert = (k^3 + 1 + 1) - (k + k + k) = k^3 - 3k + 2 = (k - 1)^2 (k + 2)$$
$$\lvert A_k \rvert = 0 \iff k = 1 \text{ o } k = -2$$
$A_k$ es invertible si y solo si $k \neq 1$ y $k \neq -2$.
**b)**
1. Si $k = 1$, las tres filas son $\begin{pmatrix} 1 & 1 & 1 \end{pmatrix}$, iguales y no nulas, así que $\text{rg}(A_1) = 1$.
2. Si $k = -2$, $\lvert A_{-2} \rvert = 0$ y el menor $\begin{vmatrix} -2 & 1 \\ 1 & -2 \end{vmatrix} = 3 \neq 0$, así que $\text{rg}(A_{-2}) = 2$.
