# Examen de números complejos y derivadas
### Ejercicio 1 (1,5 puntos) - Raíces de números complejos
Dado el número complejo $z = -8 + 8\sqrt{3}\,i$:
- **a) (1p)** Calcula todas las raíces cuartas de $z$ y exprésalas en forma binómica.
- **b) (0,5p)** Representa las raíces en el plano complejo. ¿Qué figura forman?
### Ejercicio 2 (3 puntos) - Estudio completo de una función
Estudia la función $f(x) = \dfrac{x^2}{x - 1}$:
- **a) (0,5p)** Dominio y puntos de corte con los ejes.
- **b) (1p)** Asíntotas verticales, horizontales y oblicuas.
- **c) (1p)** Intervalos de crecimiento y decrecimiento, y extremos relativos.
- **d) (0,5p)** Representación gráfica aproximada.
### Ejercicio 3 (2,5 puntos) - Cálculo de derivadas
Calcula la derivada de cada función (0,5 puntos cada una):
- **a)** $f(x) = (3x^2 - 2x)^5$
- **b)** $f(x) = x^3 \ln x$
- **c)** $f(x) = \dfrac{e^{2x}}{x^2 + 1}$
- **d)** $f(x) = \operatorname{sen}(3x^2 + 1)$
- **e)** $f(x) = \ln \sqrt{\dfrac{x - 1}{x + 1}}$
### Ejercicio 4 (3 puntos) - Problema de optimización
Con una lámina cuadrada de cartón de $30$ cm de lado se quiere construir una caja sin tapa. Para ello se recorta un cuadrado de lado $x$ en cada esquina y se doblan los lados hacia arriba.
- **a) (0,75p)** Expresa el volumen de la caja en función de $x$ e indica entre qué valores puede variar $x$.
- **b) (1,5p)** Calcula el valor de $x$ que hace máximo el volumen.
- **c) (0,75p)** Justifica que es un máximo y calcula las dimensiones de la caja y su volumen.
---
## Resolución
### Solución Ejercicio 1
**a)** Pasamos $z$ a forma polar. El módulo es:
$$r = \sqrt{(-8)^2 + (8\sqrt{3})^2} = \sqrt{64 + 192} = 16$$
Como $z$ está en el segundo cuadrante:
$$\alpha = \operatorname{arctg}\dfrac{8\sqrt{3}}{-8} = \operatorname{arctg}(-\sqrt{3}) \Rightarrow \alpha = 120^\circ$$
Las raíces cuartas tienen módulo $\sqrt[4]{16} = 2$ y argumentos $\dfrac{120^\circ + 360^\circ k}{4}$ con $k = 0, 1, 2, 3$:
$$z_0 = 2_{30^\circ} \quad z_1 = 2_{120^\circ} \quad z_2 = 2_{210^\circ} \quad z_3 = 2_{300^\circ}$$
Pasamos a forma binómica con $2(\cos\alpha + i\operatorname{sen}\alpha)$:
$$z_0 = 2\left(\dfrac{\sqrt{3}}{2} + \dfrac{1}{2}i\right) = \sqrt{3} + i \qquad z_1 = 2\left(-\dfrac{1}{2} + \dfrac{\sqrt{3}}{2}i\right) = -1 + \sqrt{3}\,i$$
$$z_2 = 2\left(-\dfrac{\sqrt{3}}{2} - \dfrac{1}{2}i\right) = -\sqrt{3} - i \qquad z_3 = 2\left(\dfrac{1}{2} - \dfrac{\sqrt{3}}{2}i\right) = 1 - \sqrt{3}\,i$$
**b)** Las cuatro raíces están sobre la circunferencia de centro el origen y radio $2$, separadas $90^\circ$ entre sí. Sus afijos son los vértices de un cuadrado.
### Solución Ejercicio 2
**a)** El denominador se anula en $x = 1$, luego $\operatorname{Dom} f = \mathbb{R} \setminus \{1\}$.
Con el eje $OY$: $f(0) = 0$, punto $(0, 0)$.
Con el eje $OX$: $f(x) = 0 \Rightarrow x^2 = 0 \Rightarrow x = 0$, el mismo punto $(0, 0)$.
**b)** Asíntota vertical en $x = 1$, porque el denominador se anula y el numerador no:
$$\lim_{x \to 1^-} \dfrac{x^2}{x - 1} = \dfrac{1}{0^-} = -\infty \qquad \lim_{x \to 1^+} \dfrac{x^2}{x - 1} = \dfrac{1}{0^+} = +\infty$$
No hay asíntota horizontal, pues el grado del numerador es mayor que el del denominador:
$$\lim_{x \to \pm\infty} \dfrac{x^2}{x - 1} = \pm\infty$$
Asíntota oblicua $y = mx + n$:
$$m = \lim_{x \to \infty} \dfrac{f(x)}{x} = \lim_{x \to \infty} \dfrac{x^2}{x^2 - x} = 1$$
$$n = \lim_{x \to \infty} \left(\dfrac{x^2}{x - 1} - x\right) = \lim_{x \to \infty} \dfrac{x}{x - 1} = 1$$
La asíntota oblicua es $y = x + 1$. Como $f(x) - (x + 1) = \dfrac{1}{x - 1}$, la curva está por encima de la asíntota para $x > 1$ y por debajo para $x < 1$.
**c)** Derivamos:
$$f'(x) = \dfrac{2x(x - 1) - x^2}{(x - 1)^2} = \dfrac{x^2 - 2x}{(x - 1)^2} = \dfrac{x(x - 2)}{(x - 1)^2}$$
Se anula en $x = 0$ y $x = 2$. Estudiamos el signo de $f'$ (el denominador siempre es positivo) en los intervalos que determinan estos puntos y $x = 1$:
$$\begin{array}{c|cccc} & (-\infty, 0) & (0, 1) & (1, 2) & (2, +\infty) \\ \hline f'(x) & + & - & - & + \\ f(x) & \nearrow & \searrow & \searrow & \nearrow \end{array}$$
$f$ es creciente en $(-\infty, 0) \cup (2, +\infty)$ y decreciente en $(0, 1) \cup (1, 2)$.
Máximo relativo en $(0, 0)$, porque pasa de crecer a decrecer. Mínimo relativo en $(2, 4)$, porque pasa de decrecer a crecer, ya que $f(2) = \dfrac{4}{1} = 4$.
**d)** La gráfica se dibuja con los datos anteriores:
1. Asíntota vertical $x = 1$ y asíntota oblicua $y = x + 1$.
2. Pasa por el máximo $(0, 0)$ y por el mínimo $(2, 4)$.
3. A la izquierda de $x = 1$ la rama baja hacia $-\infty$ junto a la asíntota vertical y se acerca a $y = x + 1$ por debajo cuando $x \to -\infty$.
4. A la derecha de $x = 1$ la rama baja desde $+\infty$ hasta el mínimo $(2, 4)$ y después sube acercándose a $y = x + 1$ por encima.
### Solución Ejercicio 3
**a)** Regla de la cadena:
$$f'(x) = 5(3x^2 - 2x)^4 \cdot (6x - 2)$$
**b)** Derivada de un producto:
$$f'(x) = 3x^2 \ln x + x^3 \cdot \dfrac{1}{x} = 3x^2 \ln x + x^2 = x^2(3\ln x + 1)$$
**c)** Derivada de un cociente:
$$f'(x) = \dfrac{2e^{2x}(x^2 + 1) - e^{2x} \cdot 2x}{(x^2 + 1)^2} = \dfrac{e^{2x}(2x^2 - 2x + 2)}{(x^2 + 1)^2}$$
**d)** Regla de la cadena:
$$f'(x) = \cos(3x^2 + 1) \cdot 6x = 6x\cos(3x^2 + 1)$$
**e)** Antes de derivar simplificamos con las propiedades de los logaritmos:
$$f(x) = \dfrac{1}{2}\left[\ln(x - 1) - \ln(x + 1)\right]$$
$$f'(x) = \dfrac{1}{2}\left(\dfrac{1}{x - 1} - \dfrac{1}{x + 1}\right) = \dfrac{1}{2} \cdot \dfrac{2}{x^2 - 1} = \dfrac{1}{x^2 - 1}$$
### Solución Ejercicio 4
**a)** Al recortar cuadrados de lado $x$, la base es un cuadrado de lado $30 - 2x$ y la altura de la caja es $x$:
$$V(x) = x(30 - 2x)^2$$
Debe ser $x > 0$ y $30 - 2x > 0$, es decir, $x \in (0, 15)$.
**b)** Derivamos:
$$V'(x) = (30 - 2x)^2 + x \cdot 2(30 - 2x)(-2) = (30 - 2x)(30 - 2x - 4x) = (30 - 2x)(30 - 6x)$$
$$V'(x) = 0 \Rightarrow x = 15 \text{ o } x = 5$$
El valor $x = 15$ está fuera del dominio $(0, 15)$, luego el único candidato es $x = 5$.
**c)** Estudiamos el signo de $V'$ en el dominio: $V'(1) = 28 \cdot 24 > 0$ y $V'(10) = 10 \cdot (-30) < 0$. Pasa de creciente a decreciente en $x = 5$, luego es un máximo.
Con $x = 5$ cm, la base es un cuadrado de lado $30 - 10 = 20$ cm y la altura es $5$ cm. El volumen máximo es:
$$V(5) = 5 \cdot 20^2 = 2000 \text{ cm}^3$$
