# Examen de sistemas de ecuaciones con matrices

### Ejercicio 1 (3 puntos) - Ecuación matricial
Resuelve de forma matricial el sistema de ecuaciones
$$\begin{cases} 2x + y = 4 \\ x + y + z = 2 \\ y + z = 1 \end{cases}$$

### Ejercicio 2 (3,5 puntos) - Discusión con un parámetro
Dado el sistema de ecuaciones
$$\begin{cases} kx + y + z = 1 \\ x + ky + z = k \\ x + y + kz = k^2 \end{cases}$$
Discute el sistema en función del valor del parámetro $k$.

### Ejercicio 3 (3,5 puntos) - Problema y regla de Cramer
Un cine vende 100 entradas para una sesión.
La entrada de adulto cuesta $8$ €, la de niño $5$ € y la de jubilado $4$ €.
La recaudación total ha sido de $595$ € y hay $5$ adultos más que niños.
- **a) (1p)** Plantea el sistema de ecuaciones que permite averiguar cuántas entradas de cada tipo se han vendido.
- **b) (2,5p)** Resuélvelo utilizando la regla de Cramer.

---

## Resolución

### Solución Ejercicio 1
Escribimos el sistema en forma matricial $AX = B$. La matriz de coeficientes, la de incógnitas y la de términos independientes son:
$$A = \begin{pmatrix} 2 & 1 & 0 \\ 1 & 1 & 1 \\ 0 & 1 & 1 \end{pmatrix} \qquad X = \begin{pmatrix} x \\ y \\ z \end{pmatrix} \qquad B = \begin{pmatrix} 4 \\ 2 \\ 1 \end{pmatrix}$$
Comprobamos que $A$ es invertible y calculamos $A^{-1}$.
Calculamos el determinante de $A$:
$$\lvert A \rvert = 2(1 - 1) - 1(1 - 0) + 0 = -1 \neq 0$$
Como $\lvert A \rvert \neq 0$, la matriz $A$ es invertible.
Calculamos la matriz adjunta, es decir, los cofactores de cada elemento:
$$\operatorname{Adj}(A) = \begin{pmatrix} 0 & -1 & 1 \\ -1 & 2 & -2 \\ 1 & -2 & 1 \end{pmatrix}$$
Es simétrica, luego $\operatorname{Adj}(A)^t = \operatorname{Adj}(A)$ y:
$$A^{-1} = \frac{1}{\lvert A \rvert}\operatorname{Adj}(A)^t = -\begin{pmatrix} 0 & -1 & 1 \\ -1 & 2 & -2 \\ 1 & -2 & 1 \end{pmatrix} = \begin{pmatrix} 0 & 1 & -1 \\ 1 & -2 & 2 \\ -1 & 2 & -1 \end{pmatrix}$$

Resolvemos la ecuación matricial. Multiplicamos por $A^{-1}$ por la izquierda: $AX = B \Rightarrow X = A^{-1}B$.
$$X = \begin{pmatrix} 0 & 1 & -1 \\ 1 & -2 & 2 \\ -1 & 2 & -1 \end{pmatrix}\begin{pmatrix} 4 \\ 2 \\ 1 \end{pmatrix} = \begin{pmatrix} 0 + 2 - 1 \\ 4 - 4 + 2 \\ -4 + 4 - 1 \end{pmatrix} = \begin{pmatrix} 1 \\ 2 \\ -1 \end{pmatrix}$$
La solución es $x = 1$, $y = 2$, $z = -1$.

### Solución Ejercicio 2
Matriz de coeficientes $A$ y matriz ampliada $A^*$:
$$A = \begin{pmatrix} k & 1 & 1 \\ 1 & k & 1 \\ 1 & 1 & k \end{pmatrix} \qquad A^* = \begin{pmatrix} k & 1 & 1 & 1 \\ 1 & k & 1 & k \\ 1 & 1 & k & k^2 \end{pmatrix}$$
Calculamos el determinante de $A$:
$$\lvert A \rvert = k^3 + 1 + 1 - k - k - k = k^3 - 3k + 2 = (k + 2)(k - 1)^2$$
Se anula para $k = -2$ y $k = 1$.

- Si $k \neq -2$ y $k \neq 1$: $\lvert A \rvert \neq 0$, luego $\operatorname{rg}(A) = \operatorname{rg}(A^*) = 3 = n$. Sistema compatible determinado (solución única).
- Si $k = -2$:
$$A^* = \begin{pmatrix} -2 & 1 & 1 & 1 \\ 1 & -2 & 1 & -2 \\ 1 & 1 & -2 & 4 \end{pmatrix}$$
El menor $\begin{vmatrix} -2 & 1 \\ 1 & -2 \end{vmatrix} = 3 \neq 0$, luego $\operatorname{rg}(A) = 2$.
El menor formado por las columnas 2, 3 y 4 vale $\begin{vmatrix} 1 & 1 & 1 \\ -2 & 1 & -2 \\ 1 & -2 & 4 \end{vmatrix} = 9 \neq 0$, luego $\operatorname{rg}(A^*) = 3$.
Como $\operatorname{rg}(A) \neq \operatorname{rg}(A^*)$, el sistema es incompatible (no tiene solución).
- Si $k = 1$:
$$A^* = \begin{pmatrix} 1 & 1 & 1 & 1 \\ 1 & 1 & 1 & 1 \\ 1 & 1 & 1 & 1 \end{pmatrix}$$
Las tres filas son iguales, luego $\operatorname{rg}(A) = \operatorname{rg}(A^*) = 1 < 3$. Sistema compatible indeterminado (infinitas soluciones, con $3 - 1 = 2$ parámetros).

### Solución Ejercicio 3
**a)** Sean $x$ el número de entradas de adulto, $y$ las de niño y $z$ las de jubilado.
- Entradas vendidas: $x + y + z = 100$.
- Recaudación: $8x + 5y + 4z = 595$.
- Hay 5 adultos más que niños: $x = y + 5$, es decir, $x - y = 5$.
$$\begin{cases} x + y + z = 100 \\ 8x + 5y + 4z = 595 \\ x - y = 5 \end{cases}$$

**b)** Determinante de la matriz de coeficientes:
$$\lvert A \rvert = \begin{vmatrix} 1 & 1 & 1 \\ 8 & 5 & 4 \\ 1 & -1 & 0 \end{vmatrix} = (0 + 4) - (0 - 4) + (-8 - 5) = -5 \neq 0$$
El sistema es compatible determinado y podemos aplicar la regla de Cramer: $x = \dfrac{\lvert A_x \rvert}{\lvert A \rvert}$, $y = \dfrac{\lvert A_y \rvert}{\lvert A \rvert}$, $z = \dfrac{\lvert A_z \rvert}{\lvert A \rvert}$.
$$x = \frac{\begin{vmatrix} 100 & 1 & 1 \\ 595 & 5 & 4 \\ 5 & -1 & 0 \end{vmatrix}}{-5} = \frac{400 + 20 - 620}{-5} = \frac{-200}{-5} = 40$$
$$y = \frac{\begin{vmatrix} 1 & 100 & 1 \\ 8 & 595 & 4 \\ 1 & 5 & 0 \end{vmatrix}}{-5} = \frac{-20 + 400 - 555}{-5} = \frac{-175}{-5} = 35$$
$$z = \frac{\begin{vmatrix} 1 & 1 & 100 \\ 8 & 5 & 595 \\ 1 & -1 & 5 \end{vmatrix}}{-5} = \frac{620 + 555 - 1300}{-5} = \frac{-125}{-5} = 25$$
Se han vendido $40$ entradas de adulto, $35$ de niño y $25$ de jubilado.
