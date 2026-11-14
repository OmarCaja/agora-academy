# Repaso de funciones, límites y derivadas

### Ejercicio 1 - Cálculo de límites

Calcula los siguientes límites:

- **a)** $\displaystyle\lim_{x \to \infty} \frac{3x^3 - 5x^2 + 2}{2x^3 + 7x - 1}$
- **b)** $\displaystyle\lim_{x \to \infty} \left(\frac{3x - 1}{3x + 2}\right)^{x - 5}$
- **c)** $\displaystyle\lim_{x \to \infty} \frac{x^4 - 2x}{x^2 + 3x + 1}$
- **d)** $\displaystyle\lim_{x \to 2} \frac{x^2 - 4}{x^2 - 3x + 2}$
- **e)** $\displaystyle\lim_{x \to 0} \frac{x^3 - 2x^2}{x^2 + 5x}$
- **f)** $\displaystyle\lim_{x \to 1} \frac{\sqrt{x} - 1}{x - 1}$
- **g)** $\displaystyle\lim_{x \to 3} \frac{x^2 - 9}{\sqrt{x + 1} - 2}$
- **h)** $\displaystyle\lim_{x \to \infty} \frac{2x^2 - x + 4}{5x^3 + 2}$
- **i)** $\displaystyle\lim_{x \to \infty} \left(\sqrt{x^2 + 5x} - x\right)$
- **j)** $\displaystyle\lim_{x \to \infty} \left(\frac{x^2 + 1}{x - 1} - \frac{x^2 - 1}{x + 1}\right)$
- **k)** $\displaystyle\lim_{x \to \infty} \left(\sqrt{x^2 - 3} - \sqrt{x^2 + 2x}\right)$
- **l)** $\displaystyle\lim_{x \to 2} \left(\frac{1}{x - 2} - \frac{4}{x^2 - 4}\right)$
- **m)** $\displaystyle\lim_{x \to \infty} \left(\frac{x + 3}{x + 1}\right)^{2x}$
- **n)** $\displaystyle\lim_{x \to \infty} \frac{\sqrt{4x^2 + 3x - 1}}{3x + 5}$
- **ñ)** $\displaystyle\lim_{x \to \infty} \left(\frac{2x^2 + 5}{2x^2 - 1}\right)^{x^2}$
- **o)** $\displaystyle\lim_{x \to 0} (1 + 3x)^{\frac{2}{x}}$

### Ejercicio 2 - Continuidad y derivabilidad

Calcula los valores de $a$ y $b$ para que la siguiente función sea continua y derivable en todo su dominio:

$$f(x) = \begin{cases} ax^2 + bx + 1 & \text{si } x \leq 1 \\ \ln x + 2 & \text{si } x > 1 \end{cases}$$

### Ejercicio 3 - Estudio de una función

Realiza el estudio completo de la función $f(x) = \dfrac{x^2}{x - 1}$ y haz un esbozo de su gráfica:

- **a)** Dominio y recorrido.
- **b)** Asíntotas.
- **c)** Monotonía y extremos relativos.
- **d)** Curvatura y puntos de inflexión.

### Ejercicio 4 - Cálculo de derivadas

Calcula la derivada de las siguientes funciones:

- **a)** $f(x) = (3x^2 - 5x + 2)^4$
- **b)** $f(x) = \sqrt{x^3 - 2x}$
- **c)** $f(x) = e^{5x^2 - x}$
- **d)** $f(x) = \ln(4x^3 + 2x)$
- **e)** $f(x) = \sin^3(2x)$
- **f)** $f(x) = \cos(x^2 + 3)$
- **g)** $f(x) = \tan(e^x)$
- **h)** $f(x) = \ln\left(\dfrac{x + 1}{x - 1}\right)$

### Ejercicio 5 - Problemas de optimización

- **a)** Un agricultor dispone de $120$ metros de valla para cercar un terreno rectangular junto a un muro de piedra, de modo que el muro sirve como uno de los lados. Halla las dimensiones del rectángulo para que el área encerrada sea máxima.
- **b)** Se quiere fabricar una lata cilíndrica (con tapa) que tenga un volumen de $500\ \text{cm}^3$. Determina las dimensiones que minimizan la cantidad de metal necesaria.

---

## Resolución

### Solución Ejercicio 1

**a)** $\frac{\infty}{\infty}$, mismo grado: cociente de coeficientes principales, $\dfrac{3}{2}$.

**b)** $1^{\infty}$. Usamos $\lim f^g = e^{\lim g \cdot (f - 1)}$:

$$\lim_{x \to \infty} (x - 5)\left(\frac{3x - 1}{3x + 2} - 1\right) = \lim_{x \to \infty} (x - 5) \cdot \frac{-3}{3x + 2} = \lim_{x \to \infty} \frac{-3x + 15}{3x + 2} = -1$$

El límite es $e^{-1} = \dfrac{1}{e}$.

**c)** $\frac{\infty}{\infty}$ con el grado del numerador mayor: $+\infty$.

**d)** $\frac{0}{0}$. Factorizamos: $\displaystyle\lim_{x \to 2} \frac{(x - 2)(x + 2)}{(x - 2)(x - 1)} = \lim_{x \to 2} \frac{x + 2}{x - 1} = 4$

**e)** $\frac{0}{0}$. Sacamos factor común $x$: $\displaystyle\lim_{x \to 0} \frac{x^2(x - 2)}{x(x + 5)} = \lim_{x \to 0} \frac{x(x - 2)}{x + 5} = \frac{0}{5} = 0$

**f)** $\frac{0}{0}$. Multiplicamos por el conjugado del numerador:

$$\lim_{x \to 1} \frac{(\sqrt{x} - 1)(\sqrt{x} + 1)}{(x - 1)(\sqrt{x} + 1)} = \lim_{x \to 1} \frac{x - 1}{(x - 1)(\sqrt{x} + 1)} = \lim_{x \to 1} \frac{1}{\sqrt{x} + 1} = \frac{1}{2}$$

**g)** $\frac{0}{0}$. Multiplicamos por el conjugado del denominador:

$$\lim_{x \to 3} \frac{(x^2 - 9)(\sqrt{x + 1} + 2)}{(x + 1) - 4} = \lim_{x \to 3} \frac{(x - 3)(x + 3)(\sqrt{x + 1} + 2)}{x - 3} = 6 \cdot 4 = 24$$

**h)** $\frac{\infty}{\infty}$ con el grado del denominador mayor: $0$.

**i)** $\infty - \infty$. Multiplicamos y dividimos por el conjugado:

$$\lim_{x \to \infty} \frac{x^2 + 5x - x^2}{\sqrt{x^2 + 5x} + x} = \lim_{x \to \infty} \frac{5x}{\sqrt{x^2 + 5x} + x} = \frac{5}{1 + 1} = \frac{5}{2}$$

**j)** $\infty - \infty$. Restamos las fracciones:

$$\lim_{x \to \infty} \frac{(x^2 + 1)(x + 1) - (x^2 - 1)(x - 1)}{(x - 1)(x + 1)} = \lim_{x \to \infty} \frac{(x^3 + x^2 + x + 1) - (x^3 - x^2 - x + 1)}{x^2 - 1} = \lim_{x \to \infty} \frac{2x^2 + 2x}{x^2 - 1} = 2$$

**k)** $\infty - \infty$. Multiplicamos y dividimos por el conjugado:

$$\lim_{x \to \infty} \frac{(x^2 - 3) - (x^2 + 2x)}{\sqrt{x^2 - 3} + \sqrt{x^2 + 2x}} = \lim_{x \to \infty} \frac{-2x - 3}{\sqrt{x^2 - 3} + \sqrt{x^2 + 2x}} = \frac{-2}{1 + 1} = -1$$

**l)** $\infty - \infty$. Denominador común $x^2 - 4$:

$$\lim_{x \to 2} \frac{(x + 2) - 4}{x^2 - 4} = \lim_{x \to 2} \frac{x - 2}{(x - 2)(x + 2)} = \lim_{x \to 2} \frac{1}{x + 2} = \frac{1}{4}$$

**m)** $1^{\infty}$: $\displaystyle\lim_{x \to \infty} 2x\left(\frac{x + 3}{x + 1} - 1\right) = \lim_{x \to \infty} 2x \cdot \frac{2}{x + 1} = \lim_{x \to \infty} \frac{4x}{x + 1} = 4$. El límite es $e^4$.

**n)** $\frac{\infty}{\infty}$. El numerador se comporta como $\sqrt{4x^2} = 2x$, de grado $1$ como el denominador: $\dfrac{2}{3}$.

**ñ)** $1^{\infty}$: $\displaystyle\lim_{x \to \infty} x^2\left(\frac{2x^2 + 5}{2x^2 - 1} - 1\right) = \lim_{x \to \infty} x^2 \cdot \frac{6}{2x^2 - 1} = \lim_{x \to \infty} \frac{6x^2}{2x^2 - 1} = 3$. El límite es $e^3$.

**o)** $1^{\infty}$: $\displaystyle\lim_{x \to 0} \frac{2}{x} \cdot (1 + 3x - 1) = \lim_{x \to 0} \frac{6x}{x} = 6$. El límite es $e^6$.

### Solución Ejercicio 2

**Continuidad en $x = 1$:**

$$f(1) = \lim_{x \to 1^-} f(x) = a + b + 1 \qquad \lim_{x \to 1^+} f(x) = \ln 1 + 2 = 2$$

Para que sea continua: $a + b + 1 = 2 \implies a + b = 1$.

**Derivabilidad en $x = 1$:** derivamos cada tramo.

$$f'(x) = \begin{cases} 2ax + b & \text{si } x < 1 \\ \dfrac{1}{x} & \text{si } x > 1 \end{cases} \qquad f'(1^-) = 2a + b \qquad f'(1^+) = 1$$

Para que sea derivable: $2a + b = 1$.

**Sistema:** restando las dos ecuaciones, $(2a + b) - (a + b) = 1 - 1 \implies a = 0$, y entonces $b = 1$.

Solución: $a = 0$ y $b = 1$.

### Solución Ejercicio 3

**a)** El denominador se anula en $x = 1$: $\text{Dom}(f) = \mathbb{R} \setminus \{1\}$.

Para el recorrido despejamos $x$ en $y = \dfrac{x^2}{x - 1}$: $x^2 - yx + y = 0$. Esta ecuación tiene solución real si su discriminante no es negativo:

$$\Delta = y^2 - 4y \geq 0 \implies y(y - 4) \geq 0 \implies y \in (-\infty, 0] \cup [4, +\infty)$$

$\text{Im}(f) = (-\infty, 0] \cup [4, +\infty)$.

**b)** Asíntota vertical en $x = 1$: $\displaystyle\lim_{x \to 1^-} f(x) = -\infty$ y $\displaystyle\lim_{x \to 1^+} f(x) = +\infty$.

Asíntota horizontal: no tiene, porque $\displaystyle\lim_{x \to \pm\infty} f(x) = \pm\infty$.

Asíntota oblicua $y = mx + n$:

$$m = \lim_{x \to \infty} \frac{x^2}{x^2 - x} = 1 \qquad n = \lim_{x \to \infty} \left(\frac{x^2}{x - 1} - x\right) = \lim_{x \to \infty} \frac{x}{x - 1} = 1$$

La asíntota oblicua es $y = x + 1$.

**c)** Derivamos con la regla del cociente:

$$f'(x) = \frac{2x(x - 1) - x^2}{(x - 1)^2} = \frac{x^2 - 2x}{(x - 1)^2} = \frac{x(x - 2)}{(x - 1)^2}$$

$f'(x) = 0 \implies x = 0$ o $x = 2$. El denominador siempre es positivo, así que el signo de $f'$ es el de $x(x - 2)$:

- Creciente en $(-\infty, 0) \cup (2, +\infty)$, donde $f'(x) > 0$.
- Decreciente en $(0, 1) \cup (1, 2)$, donde $f'(x) < 0$.

Máximo relativo en $(0, 0)$ y mínimo relativo en $(2, 4)$.

**d)** Derivamos otra vez y simplificamos:

$$f''(x) = \frac{(2x - 2)(x - 1)^2 - (x^2 - 2x) \cdot 2(x - 1)}{(x - 1)^4} = \frac{2}{(x - 1)^3}$$

El numerador nunca vale cero, así que no hay puntos de inflexión.

- Convexa ($\cup$) en $(1, +\infty)$, donde $f''(x) > 0$.
- Cóncava ($\cap$) en $(-\infty, 1)$, donde $f''(x) < 0$.

### Solución Ejercicio 4

**a)** Regla de la cadena: $f'(x) = 4(3x^2 - 5x + 2)^3 \cdot (6x - 5)$

**b)** $f'(x) = \dfrac{1}{2\sqrt{x^3 - 2x}} \cdot (3x^2 - 2) = \dfrac{3x^2 - 2}{2\sqrt{x^3 - 2x}}$

**c)** $f'(x) = e^{5x^2 - x} \cdot (10x - 1)$

**d)** $f'(x) = \dfrac{12x^2 + 2}{4x^3 + 2x} = \dfrac{6x^2 + 1}{2x^3 + x}$

**e)** $f'(x) = 3\sin^2(2x) \cdot \cos(2x) \cdot 2 = 6\sin^2(2x)\cos(2x)$

**f)** $f'(x) = -\sin(x^2 + 3) \cdot 2x = -2x\sin(x^2 + 3)$

**g)** $f'(x) = \dfrac{1}{\cos^2(e^x)} \cdot e^x = \dfrac{e^x}{\cos^2(e^x)}$

**h)** Simplificamos con las propiedades de los logaritmos antes de derivar: $f(x) = \ln(x + 1) - \ln(x - 1)$.

$$f'(x) = \frac{1}{x + 1} - \frac{1}{x - 1} = \frac{(x - 1) - (x + 1)}{(x + 1)(x - 1)} = \frac{-2}{x^2 - 1}$$

### Solución Ejercicio 5

**a)** Sea $x$ cada lado perpendicular al muro e $y$ el lado paralelo. La valla cubre tres lados: $2x + y = 120 \implies y = 120 - 2x$.

Área: $A(x) = x(120 - 2x) = 120x - 2x^2$.

$$A'(x) = 120 - 4x = 0 \implies x = 30 \qquad A''(x) = -4 < 0 \text{ (máximo)}$$

$y = 120 - 60 = 60$. Los lados perpendiculares al muro miden $30$ m y el paralelo $60$ m.

**b)** Sea $r$ el radio y $h$ la altura. Del volumen: $\pi r^2 h = 500 \implies h = \dfrac{500}{\pi r^2}$.

Superficie total (dos tapas y la pared lateral):

$$S(r) = 2\pi r^2 + 2\pi r h = 2\pi r^2 + \frac{1000}{r}$$

$$S'(r) = 4\pi r - \frac{1000}{r^2} = 0 \implies r^3 = \frac{250}{\pi} \implies r = \sqrt[3]{\frac{250}{\pi}} \approx 4{,}30 \text{ cm}$$

$S''(r) = 4\pi + \dfrac{2000}{r^3} > 0$, así que es un mínimo.

$$h = \frac{500}{\pi r^2} = \frac{2 \cdot 250}{\pi r^2} = \frac{2 \pi r^3}{\pi r^2} = 2r \approx 8{,}60 \text{ cm}$$

La lata debe tener un radio de unos $4{,}30$ cm y una altura igual al diámetro, unos $8{,}60$ cm.
