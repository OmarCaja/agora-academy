# Examen de ecuaciones y sistemas

### Ejercicio 1 (1,5 puntos) - Ecuación de primer grado con denominadores

Resuelve la siguiente ecuación:

$$\frac{2(x - 3)}{3} - \frac{x + 1}{4} = \frac{x - 5}{6} + 1$$

### Ejercicio 2 (2,5 puntos) - Ecuaciones de segundo grado

Resuelve las siguientes ecuaciones:

- **a) (0,5p)** $3x^2 - 12 = 0$
- **b) (0,5p)** $2x^2 - 10x = 0$
- **c) (0,75p)** $x^2 - 5x + 6 = 0$
- **d) (0,75p)** $(x - 2)^2 + (x + 1)^2 = 17$

### Ejercicio 3 (2 puntos) - Ecuaciones bicuadradas

Halla las soluciones reales de las siguientes ecuaciones:

- **a) (1p)** $x^4 - 10x^2 + 9 = 0$
- **b) (1p)** $x^4 - 5x^2 - 36 = 0$

### Ejercicio 4 (2 puntos) - Sistemas de ecuaciones lineales

Resuelve los siguientes sistemas por el método que consideres más adecuado:

- **a) (1p)** $\begin{cases} 2x + 3y = 7 \\ 5x - y = 9 \end{cases}$
- **b) (1p)** $\begin{cases} \dfrac{x}{2} + y = 5 \\ x - \dfrac{y}{3} = 3 \end{cases}$

### Ejercicio 5 (2 puntos) - Problemas

- **a) (1p)** El área de un rectángulo es de $60\ \text{cm}^2$. Si la base mide $7$ cm más que la altura, ¿cuáles son las dimensiones del rectángulo?
- **b) (1p)** En una granja, entre gallinas y conejos hay un total de $35$ cabezas y $94$ patas. ¿Cuántos animales hay de cada clase?

---

## Resolución

### Solución Ejercicio 1

$\text{m.c.m.}(3, 4, 6) = 12$. Multiplicamos toda la ecuación por $12$:

$$8(x - 3) - 3(x + 1) = 2(x - 5) + 12$$

$$8x - 24 - 3x - 3 = 2x - 10 + 12$$

$$5x - 27 = 2x + 2 \implies 3x = 29 \implies x = \frac{29}{3}$$

### Solución Ejercicio 2

**a)** Incompleta sin término en $x$: despejamos $x^2$.

$$3x^2 = 12 \implies x^2 = 4 \implies x = \pm 2$$

**b)** Incompleta sin término independiente: sacamos factor común.

$$2x(x - 5) = 0 \implies x_1 = 0, \quad x_2 = 5$$

**c)** Completa, con $a = 1$, $b = -5$, $c = 6$:

$$x = \frac{5 \pm \sqrt{25 - 24}}{2} = \frac{5 \pm 1}{2} \implies x_1 = 3, \quad x_2 = 2$$

**d)** Desarrollamos los cuadrados:

$$x^2 - 4x + 4 + x^2 + 2x + 1 = 17 \implies 2x^2 - 2x - 12 = 0 \implies x^2 - x - 6 = 0$$

$$x = \frac{1 \pm \sqrt{1 + 24}}{2} = \frac{1 \pm 5}{2} \implies x_1 = 3, \quad x_2 = -2$$

### Solución Ejercicio 3

**a)** Hacemos el cambio $t = x^2$:

$$t^2 - 10t + 9 = 0 \implies t = \frac{10 \pm \sqrt{100 - 36}}{2} = \frac{10 \pm 8}{2} \implies t_1 = 9, \quad t_2 = 1$$

Deshacemos el cambio: $x^2 = 9 \implies x = \pm 3$ y $x^2 = 1 \implies x = \pm 1$. Hay cuatro soluciones: $x = 3, -3, 1, -1$.

**b)** Hacemos el cambio $t = x^2$:

$$t^2 - 5t - 36 = 0 \implies t = \frac{5 \pm \sqrt{25 + 144}}{2} = \frac{5 \pm 13}{2} \implies t_1 = 9, \quad t_2 = -4$$

Deshacemos el cambio: $x^2 = 9 \implies x = \pm 3$. La ecuación $x^2 = -4$ no tiene solución real (ningún número al cuadrado es negativo). Las soluciones son $x = 3$ y $x = -3$.

### Solución Ejercicio 4

**a)** Por reducción, multiplicando la segunda ecuación por $3$:

$$\begin{cases} 2x + 3y = 7 \\ 15x - 3y = 27 \end{cases} \implies 17x = 34 \implies x = 2$$

Sustituyendo en la segunda ecuación: $10 - y = 9 \implies y = 1$.

Solución: $x = 2$, $y = 1$.

**b)** Quitamos denominadores multiplicando la primera ecuación por $2$ y la segunda por $3$:

$$\begin{cases} x + 2y = 10 \\ 3x - y = 9 \end{cases}$$

Por sustitución, de la segunda: $y = 3x - 9$. Sustituimos en la primera:

$$x + 2(3x - 9) = 10 \implies 7x - 18 = 10 \implies 7x = 28 \implies x = 4$$

$$y = 3 \cdot 4 - 9 = 3$$

Solución: $x = 4$, $y = 3$.

### Solución Ejercicio 5

**a)** Altura: $x$. Base: $x + 7$.

$$x(x + 7) = 60 \implies x^2 + 7x - 60 = 0 \implies x = \frac{-7 \pm \sqrt{49 + 240}}{2} = \frac{-7 \pm 17}{2}$$

Obtenemos $x = 5$ y $x = -12$. Como una longitud no puede ser negativa, la altura mide $5$ cm y la base $12$ cm.

**b)** Gallinas: $g$. Conejos: $c$. Las gallinas tienen $2$ patas y los conejos $4$:

$$\begin{cases} g + c = 35 \\ 2g + 4c = 94 \end{cases}$$

De la primera, $g = 35 - c$. Sustituimos en la segunda:

$$2(35 - c) + 4c = 94 \implies 70 + 2c = 94 \implies c = 12$$

$$g = 35 - 12 = 23$$

Hay $23$ gallinas y $12$ conejos.
