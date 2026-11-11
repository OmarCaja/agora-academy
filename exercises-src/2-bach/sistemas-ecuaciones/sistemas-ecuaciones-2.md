# Examen de sistemas de ecuaciones

### Ejercicio 1 (1 punto) - Ecuación matricial
Resuelve de forma matricial el sistema de ecuaciones
$$\begin{cases} x + y = 3 \\ x + 2y + z = 8 \\ y + 2z = 8 \end{cases}$$

### Ejercicio 2 (1 punto) - Regla de Cramer
Resuelve, utilizando la regla de Cramer, el sistema de ecuaciones
$$\begin{cases} x + y + z = 4 \\ 2x - y + z = 8 \\ x + 2y - z = -3 \end{cases}$$

### Ejercicio 3 (1,5 puntos) - Discusión con un parámetro
Dado el sistema de ecuaciones
$$\begin{cases} x + y + z = 1 \\ x + 2y + mz = 2 \\ x + 4y + m^2 z = m^2 \end{cases}$$
- **a) (1p)** Discútelo en función del valor del parámetro $m$.
- **b) (0,5p)** Resuélvelo para $m = 2$.

### Ejercicio 4 (1 punto) - Sistema homogéneo
Considera el sistema de ecuaciones
$$\begin{cases} x + y + z = 0 \\ 2x - y + az = 0 \\ x + 2y + 3z = 0 \end{cases}$$
- **a) (0,5p)** Calcula el valor de $a$ para que el sistema tenga soluciones distintas de la trivial.
- **b) (0,5p)** Resuélvelo para ese valor de $a$.

### Ejercicio 5 (1 punto) - Añadir una ecuación
Dado el sistema de ecuaciones
$$\begin{cases} x + 2y - z = 3 \\ 2x - y + z = 1 \end{cases}$$
Añade una tercera ecuación de modo que el sistema resultante sea:
- **a) (0,5p)** Compatible determinado.
- **b) (0,25p)** Compatible indeterminado.
- **c) (0,25p)** Incompatible.

### Ejercicio 6 (1 punto) - Sistema con más ecuaciones que incógnitas
Discute el sistema de ecuaciones en función del parámetro $m$ y resuélvelo cuando sea compatible.
$$\begin{cases} x + y = 3 \\ 2x - y = 0 \\ x + my = 5 \end{cases}$$

### Ejercicio 7 (1,5 puntos) - Método de Gauss
Resuelve por el método de Gauss los siguientes sistemas:
- **a) (0,75p)** $\begin{cases} x + 2y + z = 0 \\ 2x + y - z = -3 \\ 3x - y + 2z = 11 \end{cases}$
- **b) (0,75p)** $\begin{cases} x - y + 2z = 1 \\ 2x + y - z = 2 \\ x + 2y - 3z = 1 \end{cases}$

### Ejercicio 8 (1 punto) - Problema: plantea el sistema
Ana compra 3 libros, 2 cuadernos y 1 bolígrafo y paga $37$ €.
Luis compra 1 libro, 4 cuadernos y 3 bolígrafos y paga $25$ €.
Un libro cuesta lo mismo que tres cuadernos y un bolígrafo.
Plantea el sistema de ecuaciones que permite calcular el precio de cada artículo. No hace falta resolverlo.

### Ejercicio 9 (1 punto) - Problema: plantea el sistema
La suma de las edades de un abuelo, su hijo y su nieto es $120$ años.
La edad del abuelo es igual a la del hijo más la del nieto más $20$ años.
Hace $5$ años, la edad del hijo era siete veces la del nieto.
Plantea el sistema de ecuaciones que permite calcular la edad actual de los tres. No hace falta resolverlo.

---

## Resolución

### Solución Ejercicio 1
Escribimos el sistema como $AX = B$:
$$A = \begin{pmatrix} 1 & 1 & 0 \\ 1 & 2 & 1 \\ 0 & 1 & 2 \end{pmatrix} \qquad X = \begin{pmatrix} x \\ y \\ z \end{pmatrix} \qquad B = \begin{pmatrix} 3 \\ 8 \\ 8 \end{pmatrix}$$
Determinante de $A$:
$$\lvert A \rvert = 1(4 - 1) - 1(2 - 0) + 0 = 1 \neq 0$$
Luego $A$ es invertible.
Calculamos la matriz adjunta (cofactores):
$$\operatorname{Adj}(A) = \begin{pmatrix} 3 & -2 & 1 \\ -2 & 2 & -1 \\ 1 & -1 & 1 \end{pmatrix}$$
Es simétrica, luego $\operatorname{Adj}(A)^t = \operatorname{Adj}(A)$ y, como $\lvert A \rvert = 1$:
$$A^{-1} = \frac{1}{\lvert A \rvert}\operatorname{Adj}(A)^t = \begin{pmatrix} 3 & -2 & 1 \\ -2 & 2 & -1 \\ 1 & -1 & 1 \end{pmatrix}$$
De $AX = B$ se obtiene $X = A^{-1}B$:
$$X = \begin{pmatrix} 3 & -2 & 1 \\ -2 & 2 & -1 \\ 1 & -1 & 1 \end{pmatrix}\begin{pmatrix} 3 \\ 8 \\ 8 \end{pmatrix} = \begin{pmatrix} 9 - 16 + 8 \\ -6 + 16 - 8 \\ 3 - 8 + 8 \end{pmatrix} = \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}$$
La solución es $x = 1$, $y = 2$, $z = 3$.

### Solución Ejercicio 2
Determinante de la matriz de coeficientes:
$$\lvert A \rvert = \begin{vmatrix} 1 & 1 & 1 \\ 2 & -1 & 1 \\ 1 & 2 & -1 \end{vmatrix} = 1(1 - 2) - 1(-2 - 1) + 1(4 + 1) = -1 + 3 + 5 = 7 \neq 0$$
El sistema es compatible determinado y aplicamos la regla de Cramer:
$$x = \frac{\begin{vmatrix} 4 & 1 & 1 \\ 8 & -1 & 1 \\ -3 & 2 & -1 \end{vmatrix}}{7} = \frac{14}{7} = 2$$
$$y = \frac{\begin{vmatrix} 1 & 4 & 1 \\ 2 & 8 & 1 \\ 1 & -3 & -1 \end{vmatrix}}{7} = \frac{-7}{7} = -1$$
$$z = \frac{\begin{vmatrix} 1 & 1 & 4 \\ 2 & -1 & 8 \\ 1 & 2 & -3 \end{vmatrix}}{7} = \frac{21}{7} = 3$$
La solución es $x = 2$, $y = -1$, $z = 3$.

### Solución Ejercicio 3
**a)** Matriz de coeficientes $A$ y matriz ampliada $A^*$:
$$A = \begin{pmatrix} 1 & 1 & 1 \\ 1 & 2 & m \\ 1 & 4 & m^2 \end{pmatrix} \qquad A^* = \begin{pmatrix} 1 & 1 & 1 & 1 \\ 1 & 2 & m & 2 \\ 1 & 4 & m^2 & m^2 \end{pmatrix}$$
Calculamos el determinante de $A$:
$$\lvert A \rvert = 2m^2 + m + 4 - 2 - 4m - m^2 = m^2 - 3m + 2 = (m - 1)(m - 2)$$
Se anula para $m = 1$ y $m = 2$.
- Si $m \neq 1$ y $m \neq 2$: $\lvert A \rvert \neq 0$, luego $\operatorname{rg}(A) = \operatorname{rg}(A^*) = 3 = n$. Sistema compatible determinado.
- Si $m = 1$:
$$A^* = \begin{pmatrix} 1 & 1 & 1 & 1 \\ 1 & 2 & 1 & 2 \\ 1 & 4 & 1 & 1 \end{pmatrix}$$
El menor $\begin{vmatrix} 1 & 1 \\ 1 & 2 \end{vmatrix} = 1 \neq 0$, luego $\operatorname{rg}(A) = 2$.
El menor formado por las columnas 1, 2 y 4 vale $\begin{vmatrix} 1 & 1 & 1 \\ 1 & 2 & 2 \\ 1 & 4 & 1 \end{vmatrix} = -3 \neq 0$, luego $\operatorname{rg}(A^*) = 3$.
Como $\operatorname{rg}(A) \neq \operatorname{rg}(A^*)$, el sistema es incompatible.
- Si $m = 2$:
$$A^* = \begin{pmatrix} 1 & 1 & 1 & 1 \\ 1 & 2 & 2 & 2 \\ 1 & 4 & 4 & 4 \end{pmatrix}$$
Las columnas 2, 3 y 4 son iguales, luego todos los menores de orden 3 se anulan. Como $\begin{vmatrix} 1 & 1 \\ 1 & 2 \end{vmatrix} = 1 \neq 0$, el rango es $2$.
Por tanto $\operatorname{rg}(A) = \operatorname{rg}(A^*) = 2 < 3 = n$. Sistema compatible indeterminado.

**b)** Para $m = 2$ el sistema es
$$\begin{cases} x + y + z = 1 \\ x + 2y + 2z = 2 \\ x + 4y + 4z = 4 \end{cases}$$
Como $\operatorname{rg} = 2$, nos quedamos con las dos primeras ecuaciones y llamamos $z = \lambda$:
$$\begin{cases} x + y = 1 - \lambda \\ x + 2y = 2 - 2\lambda \end{cases}$$
Restando la primera a la segunda: $y = 1 - \lambda$, y sustituyendo: $x = 0$.
La solución es $x = 0$, $y = 1 - \lambda$, $z = \lambda$, con $\lambda \in \mathbb{R}$.

### Solución Ejercicio 4
**a)** Un sistema homogéneo siempre es compatible. Tiene soluciones no triviales cuando $\operatorname{rg}(A) < 3$, es decir, cuando $\lvert A \rvert = 0$:
$$\lvert A \rvert = \begin{vmatrix} 1 & 1 & 1 \\ 2 & -1 & a \\ 1 & 2 & 3 \end{vmatrix} = 1(-3 - 2a) - 1(6 - a) + 1(4 + 1) = -4 - a$$
$$-4 - a = 0 \Rightarrow a = -4$$

**b)** Para $a = -4$ el sistema es
$$\begin{cases} x + y + z = 0 \\ 2x - y - 4z = 0 \\ x + 2y + 3z = 0 \end{cases}$$
El menor $\begin{vmatrix} 1 & 1 \\ 2 & -1 \end{vmatrix} = -3 \neq 0$, luego $\operatorname{rg}(A) = 2$ y podemos eliminar la tercera ecuación.
Llamamos $z = \lambda$ y sumamos las dos primeras ecuaciones: $3x - 3z = 0$, luego $x = \lambda$.
Sustituyendo en la primera: $y = -2\lambda$.
La solución es $x = \lambda$, $y = -2\lambda$, $z = \lambda$, con $\lambda \in \mathbb{R}$.

### Solución Ejercicio 5
Sea $A$ la matriz de coeficientes de las dos ecuaciones dadas. Como $\begin{vmatrix} 1 & 2 \\ 2 & -1 \end{vmatrix} = -5 \neq 0$, se tiene $\operatorname{rg}(A) = 2$.
Las respuestas no son únicas; damos una posible en cada caso.

**a)** Para que sea compatible determinado necesitamos $\operatorname{rg}(A) = \operatorname{rg}(A^*) = 3$. Añadimos $x + y + z = 6$:
$$\begin{vmatrix} 1 & 2 & -1 \\ 2 & -1 & 1 \\ 1 & 1 & 1 \end{vmatrix} = -2 - 2 - 3 = -7 \neq 0$$
Luego $\operatorname{rg}(A) = \operatorname{rg}(A^*) = 3 = n$.

**b)** Para que sea compatible indeterminado la tercera ecuación debe ser combinación lineal de las dos primeras. Sumándolas: $3x + y = 4$.
Entonces $\operatorname{rg}(A) = \operatorname{rg}(A^*) = 2 < 3$.

**c)** Para que sea incompatible tomamos los coeficientes de la suma pero un término independiente distinto: $3x + y = 5$.
Entonces $\operatorname{rg}(A) = 2$ y $\operatorname{rg}(A^*) = 3$, pues la ecuación añadida contradice la suma de las dos primeras ($3x + y = 4$).

### Solución Ejercicio 6
Matriz de coeficientes $A$ y matriz ampliada $A^*$:
$$A = \begin{pmatrix} 1 & 1 \\ 2 & -1 \\ 1 & m \end{pmatrix} \qquad A^* = \begin{pmatrix} 1 & 1 & 3 \\ 2 & -1 & 0 \\ 1 & m & 5 \end{pmatrix}$$
Como $\begin{vmatrix} 1 & 1 \\ 2 & -1 \end{vmatrix} = -3 \neq 0$, se tiene $\operatorname{rg}(A) = 2$ para todo $m$.
Calculamos el determinante de $A^*$:
$$\lvert A^* \rvert = 1(-5 - 0) - 1(10 - 0) + 3(2m + 1) = 6m - 12$$
- Si $m \neq 2$: $\lvert A^* \rvert \neq 0$, luego $\operatorname{rg}(A^*) = 3 \neq \operatorname{rg}(A)$. Sistema incompatible.
- Si $m = 2$: $\operatorname{rg}(A^*) = 2 = \operatorname{rg}(A) = n$. Sistema compatible determinado.
Resolvemos con las dos primeras ecuaciones:
$$\begin{cases} x + y = 3 \\ 2x - y = 0 \end{cases}$$
Sumando: $3x = 3$, luego $x = 1$ e $y = 2$. Comprobación con la tercera: $1 + 2 \cdot 2 = 5$.

### Solución Ejercicio 7
**a)** Matriz ampliada:
$$\left(\begin{array}{ccc|c} 1 & 2 & 1 & 0 \\ 2 & 1 & -1 & -3 \\ 3 & -1 & 2 & 11 \end{array}\right)$$
Hacemos ceros bajo el primer pivote con $F_2 \to F_2 - 2F_1$ y $F_3 \to F_3 - 3F_1$:
$$\left(\begin{array}{ccc|c} 1 & 2 & 1 & 0 \\ 0 & -3 & -3 & -3 \\ 0 & -7 & -1 & 11 \end{array}\right)$$
Dividimos la segunda fila entre $-3$ ($F_2 \to F_2 / (-3)$) y hacemos $F_3 \to F_3 + 7F_2$:
$$\left(\begin{array}{ccc|c} 1 & 2 & 1 & 0 \\ 0 & 1 & 1 & 1 \\ 0 & 0 & 6 & 18 \end{array}\right)$$
El sistema escalonado es
$$\begin{cases} x + 2y + z = 0 \\ y + z = 1 \\ 6z = 18 \end{cases}$$
De la última: $z = 3$. De la segunda: $y = 1 - 3 = -2$. De la primera: $x = -2y - z = 4 - 3 = 1$.
La solución es $x = 1$, $y = -2$, $z = 3$.

**b)** Matriz ampliada:
$$\left(\begin{array}{ccc|c} 1 & -1 & 2 & 1 \\ 2 & 1 & -1 & 2 \\ 1 & 2 & -3 & 1 \end{array}\right)$$
Con $F_2 \to F_2 - 2F_1$ y $F_3 \to F_3 - F_1$:
$$\left(\begin{array}{ccc|c} 1 & -1 & 2 & 1 \\ 0 & 3 & -5 & 0 \\ 0 & 3 & -5 & 0 \end{array}\right)$$
Con $F_3 \to F_3 - F_2$ la última fila se anula:
$$\left(\begin{array}{ccc|c} 1 & -1 & 2 & 1 \\ 0 & 3 & -5 & 0 \\ 0 & 0 & 0 & 0 \end{array}\right)$$
Hay dos ecuaciones independientes y tres incógnitas: sistema compatible indeterminado con un parámetro.
Llamamos $z = 3\lambda$. De la segunda ecuación: $3y = 5z = 15\lambda$, luego $y = 5\lambda$.
De la primera: $x = 1 + y - 2z = 1 + 5\lambda - 6\lambda = 1 - \lambda$.
La solución es $x = 1 - \lambda$, $y = 5\lambda$, $z = 3\lambda$, con $\lambda \in \mathbb{R}$.

### Solución Ejercicio 8
Sean $x$ el precio de un libro, $y$ el de un cuaderno y $z$ el de un bolígrafo, en euros.
- Compra de Ana: $3x + 2y + z = 37$.
- Compra de Luis: $x + 4y + 3z = 25$.
- Un libro cuesta lo mismo que tres cuadernos y un bolígrafo: $x = 3y + z$, es decir, $x - 3y - z = 0$.
$$\begin{cases} 3x + 2y + z = 37 \\ x + 4y + 3z = 25 \\ x - 3y - z = 0 \end{cases}$$

### Solución Ejercicio 9
Sean $x$ la edad actual del abuelo, $y$ la del hijo y $z$ la del nieto.
- Suma de las edades: $x + y + z = 120$.
- El abuelo tiene la edad del hijo más la del nieto más $20$: $x = y + z + 20$, es decir, $x - y - z = 20$.
- Hace $5$ años el hijo tenía siete veces la edad del nieto: $y - 5 = 7(z - 5)$, es decir, $y - 7z = -30$.
$$\begin{cases} x + y + z = 120 \\ x - y - z = 20 \\ y - 7z = -30 \end{cases}$$
