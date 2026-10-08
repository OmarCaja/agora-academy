# Examen de matrices y determinantes

### Ejercicio 1 (2 puntos) - Operaciones con matrices
Dadas las matrices $A = \begin{pmatrix} 1 & 0 \\ 2 & -1 \end{pmatrix}$ y $B = \begin{pmatrix} 1 & 3 \\ 0 & 2 \end{pmatrix}$:
- **a) (0,5p)** Calcula $2A - B^t$.
- **b) (0,75p)** Calcula $A \cdot B$ y $B \cdot A$. ¿Conmutan $A$ y $B$?
- **c) (0,75p)** Calcula $A^2$ y, a partir del resultado, deduce $A^{2026}$ y $A^{2027}$.

### Ejercicio 2 (2 puntos) - Cálculo y propiedades de los determinantes
- **a) (1p)** Calcula el determinante $\begin{vmatrix} 2 & -1 & 3 \\ 1 & 4 & 0 \\ -1 & 2 & 1 \end{vmatrix}$.
- **b) (1p)** Sea $M$ una matriz cuadrada de orden $3$ con $\lvert M \rvert = -2$. Calcula, justificando las propiedades que uses, $\lvert 3M \rvert$, $\lvert -M \rvert$, $\lvert M^{-1} \rvert$ y $\lvert M \cdot M^t \rvert$.

### Ejercicio 3 (2 puntos) - Matriz inversa
Sea $C = \begin{pmatrix} 1 & 2 & 0 \\ 0 & 1 & 1 \\ 1 & 0 & 1 \end{pmatrix}$.
- **a) (0,5p)** Justifica que $C$ tiene inversa.
- **b) (1,5p)** Calcula $C^{-1}$ mediante la matriz adjunta.

### Ejercicio 4 (2 puntos) - Ecuaciones matriciales
Dadas $P = \begin{pmatrix} 3 & 1 \\ 1 & 1 \end{pmatrix}$, $Q = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}$ y $R = \begin{pmatrix} 2 & 1 \\ 3 & 4 \end{pmatrix}$, despeja $X$ en cada una de las siguientes ecuaciones, justificando que es posible (no hace falta calcularla):
- **a) (0,25p)** $P \cdot X + Q = R$
- **b) (0,25p)** $X \cdot P - 2X = R$
- **c) (0,25p)** $P \cdot X \cdot Q = R$
- **d) (0,25p)** $P \cdot X - Q = X$
- **e) (1p)** Calcula la matriz $X$ que cumple la ecuación del apartado d).

### Ejercicio 5 (2 puntos) - Discusión según un parámetro
Sea $A_k = \begin{pmatrix} 1 & k & 1 \\ 2 & 1 & k \\ 1 & 1 & 1 \end{pmatrix}$, con $k \in \mathbb{R}$.
- **a) (1,25p)** Calcula $\lvert A_k \rvert$ y determina para qué valores de $k$ la matriz $A_k$ es invertible.
- **b) (0,75p)** Estudia el rango de $A_k$ para los valores de $k$ en los que no es invertible.

---

## Resolución

### Solución Ejercicio 1
**a)** $2A = \begin{pmatrix} 2 & 0 \\ 4 & -2 \end{pmatrix}$ y $B^t = \begin{pmatrix} 1 & 0 \\ 3 & 2 \end{pmatrix}$, luego
$$2A - B^t = \begin{pmatrix} 1 & 0 \\ 1 & -4 \end{pmatrix}$$
**b)** Multiplicando filas por columnas:
$$A \cdot B = \begin{pmatrix} 1 \cdot 1 + 0 \cdot 0 & 1 \cdot 3 + 0 \cdot 2 \\ 2 \cdot 1 + (-1) \cdot 0 & 2 \cdot 3 + (-1) \cdot 2 \end{pmatrix} = \begin{pmatrix} 1 & 3 \\ 2 & 4 \end{pmatrix}$$
$$B \cdot A = \begin{pmatrix} 1 + 6 & 0 - 3 \\ 0 + 4 & 0 - 2 \end{pmatrix} = \begin{pmatrix} 7 & -3 \\ 4 & -2 \end{pmatrix}$$
Como $A \cdot B \neq B \cdot A$, las matrices no conmutan.
**c)**
$$A^2 = \begin{pmatrix} 1 & 0 \\ 2 & -1 \end{pmatrix} \begin{pmatrix} 1 & 0 \\ 2 & -1 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = I$$
Las potencias pares valen $I$ y las impares valen $A$:
$$A^{2026} = (A^2)^{1013} = I, \quad A^{2027} = A^{2026} \cdot A = A = \begin{pmatrix} 1 & 0 \\ 2 & -1 \end{pmatrix}$$

### Solución Ejercicio 2
**a)** Por la regla de Sarrus:
$$\begin{vmatrix} 2 & -1 & 3 \\ 1 & 4 & 0 \\ -1 & 2 & 1 \end{vmatrix} = (8 + 0 + 6) - (-12 - 1 + 0) = 14 + 13 = 27$$
**b)** Usamos que $\lvert \lambda M \rvert = \lambda^n \lvert M \rvert$ con $n = 3$, $\lvert M^{-1} \rvert = \frac{1}{\lvert M \rvert}$, $\lvert M^t \rvert = \lvert M \rvert$ y $\lvert M \cdot N \rvert = \lvert M \rvert \cdot \lvert N \rvert$:
$$\lvert 3M \rvert = 3^3 \cdot (-2) = -54$$
$$\lvert -M \rvert = (-1)^3 \cdot (-2) = 2$$
$$\lvert M^{-1} \rvert = \frac{1}{-2} = -\frac{1}{2}$$
$$\lvert M \cdot M^t \rvert = \lvert M \rvert \cdot \lvert M^t \rvert = (-2) \cdot (-2) = 4$$

### Solución Ejercicio 3
**a)** Por Sarrus, $\lvert C \rvert = (1 + 2 + 0) - (0 + 0 + 0) = 3 \neq 0$, así que $C$ es invertible.
**b)** Usamos $C^{-1} = \frac{1}{\lvert C \rvert} (\text{Adj}(C))^t$. Los adjuntos son:
$$C_{11} = 1, \quad C_{12} = 1, \quad C_{13} = -1$$
$$C_{21} = -2, \quad C_{22} = 1, \quad C_{23} = 2$$
$$C_{31} = 2, \quad C_{32} = -1, \quad C_{33} = 1$$
$$\text{Adj}(C) = \begin{pmatrix} 1 & 1 & -1 \\ -2 & 1 & 2 \\ 2 & -1 & 1 \end{pmatrix} \Rightarrow (\text{Adj}(C))^t = \begin{pmatrix} 1 & -2 & 2 \\ 1 & 1 & -1 \\ -1 & 2 & 1 \end{pmatrix}$$
$$C^{-1} = \frac{1}{3} \begin{pmatrix} 1 & -2 & 2 \\ 1 & 1 & -1 \\ -1 & 2 & 1 \end{pmatrix}$$
Comprobación: $C \cdot C^{-1} = I$.

### Solución Ejercicio 4
Calculamos los determinantes que vamos a necesitar:
$$\lvert P \rvert = 3 - 1 = 2 \neq 0, \quad \lvert Q \rvert = 1 \neq 0$$
$$P - 2I = \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}, \quad \lvert P - 2I \rvert = -2 \neq 0$$
$$P - I = \begin{pmatrix} 2 & 1 \\ 1 & 0 \end{pmatrix}, \quad \lvert P - I \rvert = -1 \neq 0$$
**a)** Restando $Q$ y multiplicando por $P^{-1}$ por la izquierda ($P$ es invertible):
$$P \cdot X = R - Q \Rightarrow X = P^{-1} \cdot (R - Q)$$
**b)** Sacando $X$ factor común por la izquierda, escribiendo $2X = X \cdot 2I$:
$$X \cdot (P - 2I) = R \Rightarrow X = R \cdot (P - 2I)^{-1}$$
Es posible porque $P - 2I$ es invertible.
**c)** Multiplicando por $P^{-1}$ por la izquierda y por $Q^{-1}$ por la derecha (ambas son invertibles):
$$X = P^{-1} \cdot R \cdot Q^{-1}$$
**d)** Pasando $X$ a la izquierda y $Q$ a la derecha, y sacando $X$ factor común por la derecha:
$$P \cdot X - X = Q \Rightarrow (P - I) \cdot X = Q \Rightarrow X = (P - I)^{-1} \cdot Q$$
Es posible porque $P - I$ es invertible.
**e)** Calculamos la inversa de $P - I$:
$$(P - I)^{-1} = \frac{1}{-1} \begin{pmatrix} 0 & -1 \\ -1 & 2 \end{pmatrix} = \begin{pmatrix} 0 & 1 \\ 1 & -2 \end{pmatrix}$$
$$X = \begin{pmatrix} 0 & 1 \\ 1 & -2 \end{pmatrix} \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$$
Comprobación: $P \cdot X - Q = \begin{pmatrix} 1 & 3 \\ 1 & 1 \end{pmatrix} - \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix} = X$.

### Solución Ejercicio 5
**a)** Por Sarrus:
$$\lvert A_k \rvert = (1 + k^2 + 2) - (1 + k + 2k) = k^2 - 3k + 2 = (k - 1)(k - 2)$$
$$\lvert A_k \rvert = 0 \iff k = 1 \text{ o } k = 2$$
$A_k$ es invertible si y solo si $k \neq 1$ y $k \neq 2$.
**b)**
1. Si $k = 1$, $\lvert A_1 \rvert = 0$ y el menor $\begin{vmatrix} 1 & 1 \\ 2 & 1 \end{vmatrix} = -1 \neq 0$, así que $\text{rg}(A_1) = 2$.
2. Si $k = 2$, $\lvert A_2 \rvert = 0$ y el menor $\begin{vmatrix} 1 & 2 \\ 2 & 1 \end{vmatrix} = -3 \neq 0$, así que $\text{rg}(A_2) = 2$.
