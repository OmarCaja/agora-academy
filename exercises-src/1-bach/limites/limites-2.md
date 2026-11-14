# Repaso de límites y continuidad

### Ejercicio 1 - Cálculo de límites

Calcula los siguientes límites, indicando el tipo de indeterminación si aparece:

- **a)** $\displaystyle\lim_{x \to 2} \frac{x^3 - 2x^2 - x + 2}{x^2 - 4}$
- **b)** $\displaystyle\lim_{x \to 3} \frac{\sqrt{x + 1} - 2}{x - 3}$
- **c)** $\displaystyle\lim_{x \to +\infty} \frac{5x^3 - 2x + 1}{2x^3 + 4x^2 - 7}$
- **d)** $\displaystyle\lim_{x \to +\infty} \frac{\sqrt{9x^4 + 2x}}{2x^2 - 5x + 1}$
- **e)** $\displaystyle\lim_{x \to 2} \left(\frac{1}{x - 2} - \frac{4}{x^2 - 4}\right)$
- **f)** $\displaystyle\lim_{x \to +\infty} \left(\sqrt{x^2 + 4x} - x\right)$
- **g)** $\displaystyle\lim_{x \to +\infty} \left(\frac{2x + 3}{2x - 1}\right)^{3x}$
- **h)** $\displaystyle\lim_{x \to 0} (1 + 4x)^{\frac{1}{2x}}$
- **i)** $\displaystyle\lim_{x \to 1} \frac{2x + 3}{x - 1}$
- **j)** $\displaystyle\lim_{x \to -2} \frac{x^2 + 1}{(x + 2)^2}$

### Ejercicio 2 - Asíntotas

Dada la función $f(x) = \dfrac{x^2 - 3x}{x - 1}$:

- **a)** Determina su dominio.
- **b)** Halla sus asíntotas.

### Ejercicio 3 - Continuidad de una función a trozos

Estudia la continuidad de la siguiente función y clasifica todos sus puntos de discontinuidad:

$$g(x) = \begin{cases} \dfrac{1}{x + 2} & \text{si } x < 0 \\ \dfrac{x^2 - 1}{x - 1} & \text{si } 0 \leq x \leq 2 \\ \dfrac{6}{x - 4} & \text{si } x > 2 \end{cases}$$

### Ejercicio 4 - Parámetro para la continuidad

Halla el valor de $a$ para que la función $h(x)$ sea continua en todos sus puntos:

$$h(x) = \begin{cases} 2x^2 + ax - 3 & \text{si } x \leq 1 \\ \dfrac{x^2 + 3x - 4}{x - 1} & \text{si } x > 1 \end{cases}$$

---

## Resolución

### Solución Ejercicio 1

**a)** Indeterminación $\frac{0}{0}$. Factorizamos el numerador por Ruffini y el denominador como diferencia de cuadrados:

$$\lim_{x \to 2} \frac{(x - 2)(x^2 - 1)}{(x - 2)(x + 2)} = \lim_{x \to 2} \frac{x^2 - 1}{x + 2} = \frac{3}{4}$$

**b)** Indeterminación $\frac{0}{0}$. Multiplicamos y dividimos por el conjugado del numerador:

$$\lim_{x \to 3} \frac{(\sqrt{x + 1} - 2)(\sqrt{x + 1} + 2)}{(x - 3)(\sqrt{x + 1} + 2)} = \lim_{x \to 3} \frac{x - 3}{(x - 3)(\sqrt{x + 1} + 2)} = \lim_{x \to 3} \frac{1}{\sqrt{x + 1} + 2} = \frac{1}{4}$$

**c)** Indeterminación $\frac{\infty}{\infty}$ con el mismo grado arriba y abajo: dividimos los coeficientes principales.

$$\lim_{x \to +\infty} \frac{5x^3 - 2x + 1}{2x^3 + 4x^2 - 7} = \frac{5}{2}$$

**d)** Indeterminación $\frac{\infty}{\infty}$. El numerador se comporta como $\sqrt{9x^4} = 3x^2$, de grado $2$ como el denominador:

$$\lim_{x \to +\infty} \frac{\sqrt{9x^4 + 2x}}{2x^2 - 5x + 1} = \frac{3}{2}$$

**e)** Indeterminación $\infty - \infty$. Restamos las fracciones con denominador común $x^2 - 4 = (x - 2)(x + 2)$:

$$\lim_{x \to 2} \frac{x + 2 - 4}{(x - 2)(x + 2)} = \lim_{x \to 2} \frac{x - 2}{(x - 2)(x + 2)} = \lim_{x \to 2} \frac{1}{x + 2} = \frac{1}{4}$$

**f)** Indeterminación $\infty - \infty$. Multiplicamos y dividimos por el conjugado:

$$\lim_{x \to +\infty} \frac{x^2 + 4x - x^2}{\sqrt{x^2 + 4x} + x} = \lim_{x \to +\infty} \frac{4x}{\sqrt{x^2 + 4x} + x} = \frac{4}{1 + 1} = 2$$

**g)** Indeterminación $1^{\infty}$. Usamos $\lim f(x)^{g(x)} = e^{\lim g(x) \cdot (f(x) - 1)}$:

$$\lim_{x \to +\infty} 3x \left(\frac{2x + 3}{2x - 1} - 1\right) = \lim_{x \to +\infty} 3x \cdot \frac{4}{2x - 1} = \lim_{x \to +\infty} \frac{12x}{2x - 1} = 6$$

El límite es $e^6$.

**h)** Indeterminación $1^{\infty}$:

$$\lim_{x \to 0} \frac{1}{2x} \cdot (1 + 4x - 1) = \lim_{x \to 0} \frac{4x}{2x} = 2$$

El límite es $e^2$.

**i)** Al sustituir obtenemos $\frac{5}{0}$: el límite es infinito y hay que estudiar los límites laterales.

$$\lim_{x \to 1^-} \frac{2x + 3}{x - 1} = \frac{5}{0^-} = -\infty \qquad \lim_{x \to 1^+} \frac{2x + 3}{x - 1} = \frac{5}{0^+} = +\infty$$

Los límites laterales son distintos, así que el límite no existe.

**j)** Al sustituir obtenemos $\frac{5}{0}$. El denominador es un cuadrado, así que es positivo por los dos lados:

$$\lim_{x \to -2^-} \frac{x^2 + 1}{(x + 2)^2} = \lim_{x \to -2^+} \frac{x^2 + 1}{(x + 2)^2} = \frac{5}{0^+} = +\infty$$

El límite es $+\infty$.

### Solución Ejercicio 2

**a)** El denominador se anula en $x = 1$: $\text{Dom}(f) = \mathbb{R} \setminus \{1\}$.

**b)** Asíntota vertical en $x = 1$, porque el numerador vale $1 - 3 = -2 \neq 0$:

$$\lim_{x \to 1^-} \frac{x^2 - 3x}{x - 1} = \frac{-2}{0^-} = +\infty \qquad \lim_{x \to 1^+} \frac{x^2 - 3x}{x - 1} = \frac{-2}{0^+} = -\infty$$

Asíntota horizontal: no hay, porque $\displaystyle\lim_{x \to \pm\infty} f(x) = \pm\infty$ (el grado del numerador es mayor).

Asíntota oblicua $y = mx + n$:

$$m = \lim_{x \to \infty} \frac{f(x)}{x} = \lim_{x \to \infty} \frac{x^2 - 3x}{x^2 - x} = 1$$

$$n = \lim_{x \to \infty} \left(f(x) - x\right) = \lim_{x \to \infty} \frac{x^2 - 3x - x^2 + x}{x - 1} = \lim_{x \to \infty} \frac{-2x}{x - 1} = -2$$

La asíntota oblicua es $y = x - 2$.

### Solución Ejercicio 3

Estudiamos los puntos donde se anula algún denominador y los puntos donde cambia la definición.

**$x = -2$ (primer tramo):** el denominador $x + 2$ se anula y el numerador no. Discontinuidad inevitable de salto infinito (asíntota vertical).

**$x = 0$ (cambio de tramo):** $g(0) = \dfrac{0 - 1}{0 - 1} = 1$.

$$\lim_{x \to 0^-} \frac{1}{x + 2} = \frac{1}{2} \qquad \lim_{x \to 0^+} \frac{x^2 - 1}{x - 1} = 1$$

Los límites laterales son distintos: discontinuidad inevitable de salto finito.

**$x = 1$ (segundo tramo):** el denominador $x - 1$ se anula, así que $g(1)$ no existe. Sin embargo:

$$\lim_{x \to 1} \frac{(x - 1)(x + 1)}{x - 1} = \lim_{x \to 1} (x + 1) = 2$$

El límite existe pero la función no está definida: discontinuidad evitable.

**$x = 2$ (cambio de tramo):** $g(2) = \dfrac{4 - 1}{2 - 1} = 3$.

$$\lim_{x \to 2^-} \frac{x^2 - 1}{x - 1} = 3 \qquad \lim_{x \to 2^+} \frac{6}{x - 4} = -3$$

Discontinuidad inevitable de salto finito (salto de $6$ unidades).

**$x = 4$ (tercer tramo):** el denominador se anula y el numerador no. Discontinuidad inevitable de salto infinito.

Conclusión: $g$ es continua en $\mathbb{R} \setminus \{-2, 0, 1, 2, 4\}$.

### Solución Ejercicio 4

Cada tramo es continuo en su intervalo (el segundo solo se anula su denominador en $x = 1$, que no pertenece a su tramo). Solo hay que imponer la continuidad en $x = 1$:

$h(1) = 2 \cdot 1^2 + a \cdot 1 - 3 = a - 1$, que coincide con el límite por la izquierda.

Por la derecha, indeterminación $\frac{0}{0}$:

$$\lim_{x \to 1^+} \frac{x^2 + 3x - 4}{x - 1} = \lim_{x \to 1^+} \frac{(x - 1)(x + 4)}{x - 1} = \lim_{x \to 1^+} (x + 4) = 5$$

Igualamos: $a - 1 = 5 \implies a = 6$.
