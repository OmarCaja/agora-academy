# Examen de matrices y determinantes

**Instrucciones:** elige dos ejercicios de cada bloque. Redacta con claridad, detalladamente y razonando las respuestas.

## Bloque 1: Matrices

### Ejercicio 1 (2,5 puntos) - Rango según un parámetro
Determina, en función del parámetro $m \in \mathbb{R}$, el rango de la matriz:
$$A = \begin{pmatrix} 1 & 1 & m & m+1 \\ 1 & m & 1 & 2m \\ m & 1 & 1 & 3-m \end{pmatrix}$$

### Ejercicio 2 (2,5 puntos) - Ecuación matricial
Resuelve la ecuación matricial $X \cdot A - B^t = 2X$, sabiendo que:
$$A = \begin{pmatrix} 3 & 1 & 0 \\ 0 & 2 & 1 \\ 1 & 0 & 3 \end{pmatrix} \quad \text{y} \quad B = \begin{pmatrix} 1 & 0 & 2 \\ -1 & 1 & 0 \\ 0 & 1 & 1 \end{pmatrix}$$

### Ejercicio 3 (2,5 puntos) - Matrices que cumplen una condición
Halla todas las matrices $X$ de la forma
$$X = \begin{pmatrix} a & 0 & 1 \\ 0 & b & 0 \\ 0 & 0 & c \end{pmatrix} \quad \text{tales que} \quad X^2 = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 4 & 0 \\ 0 & 0 & 1 \end{pmatrix}$$

### Ejercicio 4 (2,5 puntos) - Potencia enésima
Sea la matriz $A = \begin{pmatrix} 1 & 0 & 0 \\ \dfrac{1}{2} & 1 & 0 \\ \dfrac{1}{2} & 0 & 1 \end{pmatrix}$. Calcula la potencia enésima de $A$.

## Bloque 2: Determinantes

### Ejercicio 5 (2,5 puntos) - Cálculo de determinantes
Calcula los siguientes determinantes:
- **a) (1,25p)** $\begin{vmatrix} x+1 & 1 & 1 & 1 \\ 1 & x+1 & 1 & 1 \\ 1 & 1 & x+1 & 1 \\ 1 & 1 & 1 & x+1 \end{vmatrix}$
- **b) (1,25p)** $\begin{vmatrix} 2 & 1 & 0 & -1 \\ 1 & 3 & 1 & 0 \\ 0 & -1 & 2 & 1 \\ 3 & 0 & 1 & 2 \end{vmatrix}$

### Ejercicio 6 (2,5 puntos) - Propiedades de los determinantes
- **a) (1,25p)** Sea $A$ una matriz cuadrada de orden $3$. Si sabemos que $\lvert 3A \rvert = -54$, ¿cuánto vale $\lvert A \rvert$? Escribe la propiedad de los determinantes que hayas usado.
- **b) (1,25p)** Dadas dos matrices $A$ y $B$ de orden $4$ con $\lvert A \rvert = 2$ y $\lvert B \rvert = -3$, calcula, justificando tu respuesta, $\lvert A^{-1} \rvert$, $\lvert (A \cdot B^{-1})^t \rvert$, $\lvert B^t \cdot A \rvert$, $\lvert 3A \rvert$ y $\lvert B^5 \rvert$.

### Ejercicio 7 (2,5 puntos) - Determinantes sin desarrollar
Sabiendo que $\begin{vmatrix} a & b & c \\ d & e & f \\ g & h & i \end{vmatrix} = 3$, aplica las propiedades de los determinantes para calcular, sin desarrollar:
$$\begin{vmatrix} 2c & b & a+3c \\ 2f & e & d+3f \\ 2i & h & g+3i \end{vmatrix}$$

### Ejercicio 8 (2,5 puntos) - Determinante de orden 4
Calcula el determinante:
$$\begin{vmatrix} 1 & 1 & 1 & 1 \\ 1 & -1 & 2 & 3 \\ 1 & 1 & 4 & 9 \\ 1 & -1 & 8 & 27 \end{vmatrix}$$

---

## Resolución

### Solución Ejercicio 1
Estudiamos primero el menor formado por las tres primeras columnas. Sumando las tres columnas a la primera, sacando factor común y restando la primera fila a las demás:
$$\begin{vmatrix} 1 & 1 & m \\ 1 & m & 1 \\ m & 1 & 1 \end{vmatrix} = (m+2) \begin{vmatrix} 1 & 1 & m \\ 1 & m & 1 \\ 1 & 1 & 1 \end{vmatrix} = (m+2) \begin{vmatrix} 1 & 1 & m \\ 0 & m-1 & 1-m \\ 0 & 0 & 1-m \end{vmatrix} = -(m+2)(m-1)^2$$
Se anula si y solo si $m = 1$ o $m = -2$.
1. Si $m \neq 1$ y $m \neq -2$, hay un menor de orden $3$ no nulo, luego $\text{rg}(A) = 3$.
2. Si $m = 1$, las tres filas son iguales a $\begin{pmatrix} 1 & 1 & 1 & 2 \end{pmatrix}$, luego $\text{rg}(A) = 1$.
3. Si $m = -2$, la matriz es $\begin{pmatrix} 1 & 1 & -2 & -1 \\ 1 & -2 & 1 & -4 \\ -2 & 1 & 1 & 5 \end{pmatrix}$. El menor $\begin{vmatrix} 1 & 1 \\ 1 & -2 \end{vmatrix} = -3 \neq 0$, así que el rango es al menos $2$. Orlándolo con la tercera fila y las columnas restantes:
$$\begin{vmatrix} 1 & 1 & -2 \\ 1 & -2 & 1 \\ -2 & 1 & 1 \end{vmatrix} = 0, \quad \begin{vmatrix} 1 & 1 & -1 \\ 1 & -2 & -4 \\ -2 & 1 & 5 \end{vmatrix} = (-10 + 8 - 1) - (-4 - 4 + 5) = -3 + 3 = 0$$
Por tanto, $\text{rg}(A) = 2$.

### Solución Ejercicio 2
Despejamos $X$, escribiendo $2X = X \cdot 2I$ y sacando $X$ factor común por la izquierda:
$$X \cdot A - X \cdot 2I = B^t \Rightarrow X \cdot (A - 2I) = B^t \Rightarrow X = B^t \cdot (A - 2I)^{-1}$$
Calculamos $C = A - 2I$ y su determinante:
$$C = \begin{pmatrix} 1 & 1 & 0 \\ 0 & 0 & 1 \\ 1 & 0 & 1 \end{pmatrix}, \quad \lvert C \rvert = (0 + 1 + 0) - (0 + 0 + 0) = 1 \neq 0$$
Así que $C$ es invertible. Sus adjuntos son:
$$C_{11} = 0, \quad C_{12} = 1, \quad C_{13} = 0$$
$$C_{21} = -1, \quad C_{22} = 1, \quad C_{23} = 1$$
$$C_{31} = 1, \quad C_{32} = -1, \quad C_{33} = 0$$
$$C^{-1} = \dfrac{1}{\lvert C \rvert} (\text{Adj}(C))^t = \begin{pmatrix} 0 & -1 & 1 \\ 1 & 1 & -1 \\ 0 & 1 & 0 \end{pmatrix}$$
Finalmente:
$$X = B^t \cdot C^{-1} = \begin{pmatrix} 1 & -1 & 0 \\ 0 & 1 & 1 \\ 2 & 0 & 1 \end{pmatrix} \begin{pmatrix} 0 & -1 & 1 \\ 1 & 1 & -1 \\ 0 & 1 & 0 \end{pmatrix} = \begin{pmatrix} -1 & -2 & 2 \\ 1 & 2 & -1 \\ 0 & -1 & 2 \end{pmatrix}$$

### Solución Ejercicio 3
Calculamos $X^2$:
$$X^2 = \begin{pmatrix} a & 0 & 1 \\ 0 & b & 0 \\ 0 & 0 & c \end{pmatrix} \begin{pmatrix} a & 0 & 1 \\ 0 & b & 0 \\ 0 & 0 & c \end{pmatrix} = \begin{pmatrix} a^2 & 0 & a + c \\ 0 & b^2 & 0 \\ 0 & 0 & c^2 \end{pmatrix}$$
Igualando a la matriz dada:
$$\begin{cases} a^2 = 1 \\ b^2 = 4 \\ c^2 = 1 \\ a + c = 0 \end{cases}$$
De $a^2 = 1$ y $a + c = 0$: $a = 1, c = -1$ o $a = -1, c = 1$. Además, $b = 2$ o $b = -2$. Hay cuatro soluciones:
$$\begin{pmatrix} 1 & 0 & 1 \\ 0 & 2 & 0 \\ 0 & 0 & -1 \end{pmatrix}, \quad \begin{pmatrix} 1 & 0 & 1 \\ 0 & -2 & 0 \\ 0 & 0 & -1 \end{pmatrix}, \quad \begin{pmatrix} -1 & 0 & 1 \\ 0 & 2 & 0 \\ 0 & 0 & 1 \end{pmatrix}, \quad \begin{pmatrix} -1 & 0 & 1 \\ 0 & -2 & 0 \\ 0 & 0 & 1 \end{pmatrix}$$

### Solución Ejercicio 4
Calculamos las primeras potencias:
$$A^2 = \begin{pmatrix} 1 & 0 & 0 \\ \dfrac{1}{2} & 1 & 0 \\ \dfrac{1}{2} & 0 & 1 \end{pmatrix} \begin{pmatrix} 1 & 0 & 0 \\ \dfrac{1}{2} & 1 & 0 \\ \dfrac{1}{2} & 0 & 1 \end{pmatrix} = \begin{pmatrix} 1 & 0 & 0 \\ 1 & 1 & 0 \\ 1 & 0 & 1 \end{pmatrix} = \begin{pmatrix} 1 & 0 & 0 \\ \dfrac{2}{2} & 1 & 0 \\ \dfrac{2}{2} & 0 & 1 \end{pmatrix}$$
$$A^3 = A^2 \cdot A = \begin{pmatrix} 1 & 0 & 0 \\ \dfrac{3}{2} & 1 & 0 \\ \dfrac{3}{2} & 0 & 1 \end{pmatrix}$$
Cada vez que multiplicamos por $A$ se suma $\frac{1}{2}$ a los elementos de la primera columna bajo la diagonal. Por tanto:
$$A^n = \begin{pmatrix} 1 & 0 & 0 \\ \dfrac{n}{2} & 1 & 0 \\ \dfrac{n}{2} & 0 & 1 \end{pmatrix}$$
Comprobación por inducción: $A^n \cdot A = \begin{pmatrix} 1 & 0 & 0 \\ \dfrac{n}{2} + \dfrac{1}{2} & 1 & 0 \\ \dfrac{n}{2} + \dfrac{1}{2} & 0 & 1 \end{pmatrix} = \begin{pmatrix} 1 & 0 & 0 \\ \dfrac{n+1}{2} & 1 & 0 \\ \dfrac{n+1}{2} & 0 & 1 \end{pmatrix} = A^{n+1}$.

### Solución Ejercicio 5
**a)** Sumamos todas las columnas a la primera y sacamos factor común $x + 4$; después restamos la primera fila a las demás:
$$\begin{vmatrix} x+1 & 1 & 1 & 1 \\ 1 & x+1 & 1 & 1 \\ 1 & 1 & x+1 & 1 \\ 1 & 1 & 1 & x+1 \end{vmatrix} = (x+4) \begin{vmatrix} 1 & 1 & 1 & 1 \\ 1 & x+1 & 1 & 1 \\ 1 & 1 & x+1 & 1 \\ 1 & 1 & 1 & x+1 \end{vmatrix} = (x+4) \begin{vmatrix} 1 & 1 & 1 & 1 \\ 0 & x & 0 & 0 \\ 0 & 0 & x & 0 \\ 0 & 0 & 0 & x \end{vmatrix} = x^3 (x+4)$$
**b)** Hacemos ceros en la segunda columna usando la primera fila: $F_2 - 3F_1$ y $F_3 + F_1$:
$$\begin{vmatrix} 2 & 1 & 0 & -1 \\ 1 & 3 & 1 & 0 \\ 0 & -1 & 2 & 1 \\ 3 & 0 & 1 & 2 \end{vmatrix} = \begin{vmatrix} 2 & 1 & 0 & -1 \\ -5 & 0 & 1 & 3 \\ 2 & 0 & 2 & 0 \\ 3 & 0 & 1 & 2 \end{vmatrix}$$
Desarrollando por la segunda columna (el $1$ ocupa la posición $(1,2)$, de signo $-$):
$$= -\begin{vmatrix} -5 & 1 & 3 \\ 2 & 2 & 0 \\ 3 & 1 & 2 \end{vmatrix} = -\left[ (-20 + 0 + 6) - (18 + 0 + 4) \right] = -(-14 - 22) = 36$$

### Solución Ejercicio 6
**a)** Si $A$ es de orden $n$, $\lvert \lambda A \rvert = \lambda^n \lvert A \rvert$. Con $n = 3$:
$$\lvert 3A \rvert = 3^3 \lvert A \rvert = 27 \lvert A \rvert = -54 \Rightarrow \lvert A \rvert = -2$$
**b)** Usamos $\lvert A^{-1} \rvert = \frac{1}{\lvert A \rvert}$, $\lvert A^t \rvert = \lvert A \rvert$, $\lvert A \cdot B \rvert = \lvert A \rvert \cdot \lvert B \rvert$ y $\lvert \lambda A \rvert = \lambda^4 \lvert A \rvert$ (orden $4$):
$$\lvert A^{-1} \rvert = \frac{1}{2}$$
$$\lvert (A \cdot B^{-1})^t \rvert = \lvert A \cdot B^{-1} \rvert = \lvert A \rvert \cdot \frac{1}{\lvert B \rvert} = 2 \cdot \left( -\frac{1}{3} \right) = -\frac{2}{3}$$
$$\lvert B^t \cdot A \rvert = \lvert B \rvert \cdot \lvert A \rvert = (-3) \cdot 2 = -6$$
$$\lvert 3A \rvert = 3^4 \cdot 2 = 162$$
$$\lvert B^5 \rvert = \lvert B \rvert^5 = (-3)^5 = -243$$

### Solución Ejercicio 7
1. Sacamos el factor $2$ de la primera columna.
2. A la tercera columna le restamos $3$ veces la primera ($C_3 - 3C_1$), lo que no cambia el determinante.
3. Intercambiamos la primera y la tercera columna, lo que cambia el signo.
$$\begin{vmatrix} 2c & b & a+3c \\ 2f & e & d+3f \\ 2i & h & g+3i \end{vmatrix} = 2 \begin{vmatrix} c & b & a+3c \\ f & e & d+3f \\ i & h & g+3i \end{vmatrix} = 2 \begin{vmatrix} c & b & a \\ f & e & d \\ i & h & g \end{vmatrix} = -2 \begin{vmatrix} a & b & c \\ d & e & f \\ g & h & i \end{vmatrix} = -2 \cdot 3 = -6$$

### Solución Ejercicio 8
Hacemos ceros en la primera columna restando a cada fila la anterior ($F_4 - F_3$, $F_3 - F_2$, $F_2 - F_1$, en ese orden):
$$\begin{vmatrix} 1 & 1 & 1 & 1 \\ 1 & -1 & 2 & 3 \\ 1 & 1 & 4 & 9 \\ 1 & -1 & 8 & 27 \end{vmatrix} = \begin{vmatrix} 1 & 1 & 1 & 1 \\ 0 & -2 & 1 & 2 \\ 0 & 2 & 2 & 6 \\ 0 & -2 & 4 & 18 \end{vmatrix}$$
Desarrollando por la primera columna y aplicando Sarrus:
$$= \begin{vmatrix} -2 & 1 & 2 \\ 2 & 2 & 6 \\ -2 & 4 & 18 \end{vmatrix} = (-72 - 12 + 16) - (-8 - 48 + 36) = -68 + 20 = -48$$
También se puede obtener como determinante de Vandermonde de $1, -1, 2, 3$:
$$(-1-1)(2-1)(3-1)(2+1)(3+1)(3-2) = (-2) \cdot 1 \cdot 2 \cdot 3 \cdot 4 \cdot 1 = -48$$
