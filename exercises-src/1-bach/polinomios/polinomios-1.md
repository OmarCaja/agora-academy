# Ejercicios de polinomios

### Ejercicio 1 - Raíces y factorización
Calcula las raíces de los siguientes polinomios y descomponlos en factores:
- **a)** $P(x) = x^3 - 2x^2 - 5x + 6$
- **b)** $Q(x) = x^4 + 2x^3 - x^2 - 2x$
- **c)** $R(x) = 3x^5 - 3x^4 - 12x^3 + 12x^2$
- **d)** $S(x) = 2x^3 - 3x^2 - 3x + 2$

### Ejercicio 2 - Fracciones algebraicas
Simplifica las siguientes fracciones algebraicas:
- **a)** $\dfrac{x^3 - 4x}{x^2 - 4x + 4}$
- **b)** $\dfrac{2x^3 - 3x^2 - 3x + 2}{4x^2 - 1}$

---

## Resolución

### Solución Ejercicio 1
**a)** Las posibles raíces enteras son los divisores del término independiente: $\pm 1, \pm 2, \pm 3, \pm 6$. Probamos $x = 1$ por Ruffini:
$$\begin{array}{r|rrrr} & 1 & -2 & -5 & 6 \\ 1 & & 1 & -1 & -6 \\ \hline & 1 & -1 & -6 & 0 \end{array}$$
El cociente es $x^2 - x - 6$. Resolvemos la ecuación de segundo grado:
$$x = \frac{1 \pm \sqrt{1 + 24}}{2} = \frac{1 \pm 5}{2} \implies x = 3, \; x = -2$$
Raíces: $x = 1$, $x = -2$, $x = 3$.
$$P(x) = (x - 1)(x + 2)(x - 3)$$

**b)** Sacamos factor común $x$:
$$Q(x) = x(x^3 + 2x^2 - x - 2)$$
Probamos $x = 1$ en el polinomio de tercer grado:
$$\begin{array}{r|rrrr} & 1 & 2 & -1 & -2 \\ 1 & & 1 & 3 & 2 \\ \hline & 1 & 3 & 2 & 0 \end{array}$$
El cociente es $x^2 + 3x + 2$:
$$x = \frac{-3 \pm \sqrt{9 - 8}}{2} = \frac{-3 \pm 1}{2} \implies x = -1, \; x = -2$$
Raíces: $x = 0$, $x = 1$, $x = -1$, $x = -2$.
$$Q(x) = x(x - 1)(x + 1)(x + 2)$$

**c)** Sacamos factor común $3x^2$:
$$R(x) = 3x^2(x^3 - x^2 - 4x + 4)$$
Probamos $x = 1$:
$$\begin{array}{r|rrrr} & 1 & -1 & -4 & 4 \\ 1 & & 1 & 0 & -4 \\ \hline & 1 & 0 & -4 & 0 \end{array}$$
El cociente es $x^2 - 4 = (x - 2)(x + 2)$ (diferencia de cuadrados).
Raíces: $x = 0$ (doble), $x = 1$, $x = 2$, $x = -2$.
$$R(x) = 3x^2(x - 1)(x - 2)(x + 2)$$
El factor $3$ no da ninguna raíz, pero forma parte de la factorización.

**d)** El coeficiente principal es $2$, así que además de raíces enteras puede haber raíces fraccionarias. Probamos $x = 2$:
$$\begin{array}{r|rrrr} & 2 & -3 & -3 & 2 \\ 2 & & 4 & 2 & -2 \\ \hline & 2 & 1 & -1 & 0 \end{array}$$
Probamos $x = -1$ en el cociente $2x^2 + x - 1$:
$$\begin{array}{r|rrr} & 2 & 1 & -1 \\ -1 & & -2 & 1 \\ \hline & 2 & -1 & 0 \end{array}$$
El último cociente es $2x - 1$, que se anula en $x = \dfrac{1}{2}$.
Raíces: $x = 2$, $x = -1$, $x = \dfrac{1}{2}$.
Al factorizar hay que escribir el coeficiente principal delante:
$$S(x) = 2(x - 2)(x + 1)\left(x - \frac{1}{2}\right) = (x - 2)(x + 1)(2x - 1)$$
Error típico: escribir $S(x) = (x - 2)(x + 1)\left(x - \frac{1}{2}\right)$ olvidando el $2$; ese producto da $x^3 - \dots$ y no $2x^3 - \dots$

### Solución Ejercicio 2
**a)** Factorizamos numerador y denominador:
$$x^3 - 4x = x(x^2 - 4) = x(x - 2)(x + 2) \qquad x^2 - 4x + 4 = (x - 2)^2$$
$$\frac{x(x - 2)(x + 2)}{(x - 2)^2} = \frac{x(x + 2)}{x - 2}$$

**b)** El numerador es el polinomio $S(x)$ del ejercicio 1 d), y el denominador es una diferencia de cuadrados:
$$2x^3 - 3x^2 - 3x + 2 = (x - 2)(x + 1)(2x - 1) \qquad 4x^2 - 1 = (2x - 1)(2x + 1)$$
$$\frac{(x - 2)(x + 1)(2x - 1)}{(2x - 1)(2x + 1)} = \frac{(x - 2)(x + 1)}{2x + 1}$$
