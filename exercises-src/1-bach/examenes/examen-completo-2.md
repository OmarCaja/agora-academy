# Prueba de evaluación de matemáticas
### Ejercicio 1 (2 puntos) - Límites
Calcula los siguientes límites resolviendo las indeterminaciones:
- **a) (0,5p)** $\displaystyle\lim_{x \to 2} \frac{x^2 - 4}{x^2 - 3x + 2}$
- **b) (0,5p)** $\displaystyle\lim_{x \to +\infty} \left(\sqrt{x^2 + 3x} - x\right)$
- **c) (0,5p)** $\displaystyle\lim_{x \to +\infty} \left(\frac{x + 3}{x - 1}\right)^{x}$
- **d) (0,5p)** $\displaystyle\lim_{x \to 3} \frac{\sqrt{x + 1} - 2}{x - 3}$
### Ejercicio 2 (1,5 puntos) - Continuidad y derivabilidad
Dada la función
$$f(x) = \begin{cases} x^2 + 1 & \text{si } x \le 1 \\ 2x & \text{si } 1 < x \le 3 \\ x + 4 & \text{si } x > 3 \end{cases}$$
- **a) (0,75p)** Estudia su continuidad.
- **b) (0,75p)** Estudia su derivabilidad.
### Ejercicio 3 (1 punto) - Ecuaciones trigonométricas
Resuelve las siguientes ecuaciones:
- **a) (0,5p)** $2\cos^2 x - \cos x - 1 = 0$
- **b) (0,5p)** $\sin 2x = \cos x$
### Ejercicio 4 (1 punto) - Números complejos
Calcula las raíces cuartas del número complejo $z = -8 + 8\sqrt{3}\,i$ y exprésalas en forma polar y en forma binómica.
### Ejercicio 5 (1 punto) - Cónicas
Obtén la ecuación reducida de las siguientes cónicas, clasifícalas e indica sus elementos principales:
- **a) (0,5p)** $4x^2 + 9y^2 - 16x + 18y - 11 = 0$
- **b) (0,5p)** $x^2 - y^2 - 4x + 6y - 9 = 0$
### Ejercicio 6 (2,5 puntos) - Estudio de una función
Dada la función $f(x) = \dfrac{x^2}{x - 1}$:
- **a) (0,75p)** Estudia su dominio, su continuidad y sus asíntotas.
- **b) (1p)** Estudia su monotonía y halla sus extremos relativos.
- **c) (0,75p)** Estudia su curvatura y sus puntos de inflexión.
### Ejercicio 7 (1 punto) - Punto simétrico
Halla el punto simétrico de $P(4, 1)$ respecto de la recta $r: x - 2y + 3 = 0$.
---
## Resolución
### Solución Ejercicio 1
**a)** Sustituyendo obtenemos $\frac{0}{0}$. Factorizamos numerador y denominador:
$$\lim_{x \to 2} \frac{(x - 2)(x + 2)}{(x - 2)(x - 1)} = \lim_{x \to 2} \frac{x + 2}{x - 1} = \frac{4}{1} = 4$$
**b)** Es una indeterminación $\infty - \infty$. Multiplicamos y dividimos por el conjugado:
$$\lim_{x \to +\infty} \frac{(x^2 + 3x) - x^2}{\sqrt{x^2 + 3x} + x} = \lim_{x \to +\infty} \frac{3x}{\sqrt{x^2 + 3x} + x} = \frac{3}{1 + 1} = \frac{3}{2}$$
**c)** La base tiende a $1$ y el exponente a $+\infty$: indeterminación $1^{\infty}$. Usamos $\lim f^{g} = e^{\lim g\,(f - 1)}$:
$$\lim_{x \to +\infty} x\left(\frac{x + 3}{x - 1} - 1\right) = \lim_{x \to +\infty} x \cdot \frac{4}{x - 1} = \lim_{x \to +\infty} \frac{4x}{x - 1} = 4$$
Por tanto, el límite vale $e^{4}$.
**d)** Sustituyendo obtenemos $\frac{0}{0}$. Multiplicamos y dividimos por el conjugado del numerador:
$$\lim_{x \to 3} \frac{(x + 1) - 4}{(x - 3)\left(\sqrt{x + 1} + 2\right)} = \lim_{x \to 3} \frac{1}{\sqrt{x + 1} + 2} = \frac{1}{2 + 2} = \frac{1}{4}$$
### Solución Ejercicio 2
**a)** Cada trozo es un polinomio, así que $f$ es continua en cada intervalo abierto. Estudiamos los puntos de cambio.
En $x = 1$:
$$\lim_{x \to 1^-} (x^2 + 1) = 2, \quad \lim_{x \to 1^+} 2x = 2, \quad f(1) = 2$$
Los tres valores coinciden: $f$ es continua en $x = 1$.
En $x = 3$:
$$\lim_{x \to 3^-} 2x = 6, \quad \lim_{x \to 3^+} (x + 4) = 7$$
Los límites laterales son distintos: en $x = 3$ hay una discontinuidad de salto finito.
Conclusión: $f$ es continua en $\mathbb{R} \setminus \{3\}$.
**b)** La derivada en cada trozo es:
$$f'(x) = \begin{cases} 2x & \text{si } x < 1 \\ 2 & \text{si } 1 < x < 3 \\ 1 & \text{si } x > 3 \end{cases}$$
En $x = 1$, $f$ es continua y las derivadas laterales son $f'(1^-) = 2 \cdot 1 = 2$ y $f'(1^+) = 2$. Coinciden, así que $f$ es derivable en $x = 1$ y $f'(1) = 2$.
En $x = 3$, $f$ no es continua, así que no es derivable.
Conclusión: $f$ es derivable en $\mathbb{R} \setminus \{3\}$.
### Solución Ejercicio 3
**a)** Hacemos el cambio $t = \cos x$: $2t^2 - t - 1 = 0$.
$$t = \frac{1 \pm \sqrt{1 + 8}}{4} = \frac{1 \pm 3}{4} \Rightarrow t = 1 \text{ o } t = -\frac{1}{2}$$
Si $\cos x = 1$: $x = 0^\circ + 360^\circ k$.
Si $\cos x = -\frac{1}{2}$: $x = 120^\circ + 360^\circ k$ o $x = 240^\circ + 360^\circ k$, con $k \in \mathbb{Z}$.
**b)** Usamos $\sin 2x = 2\sin x \cos x$:
$$2\sin x \cos x - \cos x = 0 \Rightarrow \cos x\,(2\sin x - 1) = 0$$
Si $\cos x = 0$: $x = 90^\circ + 360^\circ k$ o $x = 270^\circ + 360^\circ k$.
Si $\sin x = \frac{1}{2}$: $x = 30^\circ + 360^\circ k$ o $x = 150^\circ + 360^\circ k$, con $k \in \mathbb{Z}$.
### Solución Ejercicio 4
Pasamos $z$ a forma polar:
$$\lvert z \rvert = \sqrt{(-8)^2 + \left(8\sqrt{3}\right)^2} = \sqrt{64 + 192} = \sqrt{256} = 16$$
El afijo $(-8, 8\sqrt{3})$ está en el segundo cuadrante y $\tan\alpha = \frac{8\sqrt{3}}{-8} = -\sqrt{3}$, así que $\alpha = 120^\circ$. Por tanto, $z = 16_{120^\circ}$.
Las raíces cuartas tienen módulo $\sqrt[4]{16} = 2$ y argumentos
$$\frac{120^\circ + 360^\circ k}{4} = 30^\circ + 90^\circ k, \quad k = 0, 1, 2, 3$$
1. $2_{30^\circ} = 2(\cos 30^\circ + i\sin 30^\circ) = \sqrt{3} + i$
2. $2_{120^\circ} = 2(\cos 120^\circ + i\sin 120^\circ) = -1 + \sqrt{3}\,i$
3. $2_{210^\circ} = 2(\cos 210^\circ + i\sin 210^\circ) = -\sqrt{3} - i$
4. $2_{300^\circ} = 2(\cos 300^\circ + i\sin 300^\circ) = 1 - \sqrt{3}\,i$
### Solución Ejercicio 5
**a)** Agrupamos y completamos cuadrados:
$$4(x^2 - 4x) + 9(y^2 + 2y) = 11$$
$$4\left[(x - 2)^2 - 4\right] + 9\left[(y + 1)^2 - 1\right] = 11 \Rightarrow 4(x - 2)^2 + 9(y + 1)^2 = 36$$
Dividiendo entre $36$:
$$\frac{(x - 2)^2}{9} + \frac{(y + 1)^2}{4} = 1$$
Es una elipse de centro $(2, -1)$, semieje mayor $a = 3$ (horizontal) y semieje menor $b = 2$. Como $c = \sqrt{a^2 - b^2} = \sqrt{5}$, sus focos son $F(2 \pm \sqrt{5}, -1)$.
**b)** Agrupamos y completamos cuadrados:
$$(x^2 - 4x) - (y^2 - 6y) = 9$$
$$\left[(x - 2)^2 - 4\right] - \left[(y - 3)^2 - 9\right] = 9 \Rightarrow (x - 2)^2 - (y - 3)^2 = 4$$
Dividiendo entre $4$:
$$\frac{(x - 2)^2}{4} - \frac{(y - 3)^2}{4} = 1$$
Es una hipérbola equilátera ($a = b = 2$) de centro $(2, 3)$ y eje real horizontal. Como $c = \sqrt{a^2 + b^2} = 2\sqrt{2}$, sus focos son $F(2 \pm 2\sqrt{2}, 3)$. Sus asíntotas son $y - 3 = \pm (x - 2)$, es decir, $y = x + 1$ e $y = -x + 5$.
### Solución Ejercicio 6
**a)** El denominador se anula en $x = 1$, así que $\text{Dom}\, f = \mathbb{R} \setminus \{1\}$. Al ser un cociente de polinomios, $f$ es continua en todo su dominio.
Asíntota vertical en $x = 1$:
$$\lim_{x \to 1^-} \frac{x^2}{x - 1} = -\infty, \quad \lim_{x \to 1^+} \frac{x^2}{x - 1} = +\infty$$
No tiene asíntota horizontal, porque $\displaystyle\lim_{x \to \pm\infty} \frac{x^2}{x - 1} = \pm\infty$.
Asíntota oblicua $y = mx + n$:
$$m = \lim_{x \to \pm\infty} \frac{f(x)}{x} = \lim_{x \to \pm\infty} \frac{x^2}{x^2 - x} = 1$$
$$n = \lim_{x \to \pm\infty} \left(\frac{x^2}{x - 1} - x\right) = \lim_{x \to \pm\infty} \frac{x}{x - 1} = 1$$
La asíntota oblicua es $y = x + 1$.
**b)** Derivamos:
$$f'(x) = \frac{2x(x - 1) - x^2}{(x - 1)^2} = \frac{x^2 - 2x}{(x - 1)^2} = \frac{x(x - 2)}{(x - 1)^2}$$
$f'(x) = 0 \Rightarrow x = 0$ o $x = 2$. El denominador es siempre positivo, así que el signo de $f'$ es el de $x(x - 2)$:
1. En $(-\infty, 0)$: $f' > 0$, $f$ es creciente.
2. En $(0, 1)$ y en $(1, 2)$: $f' < 0$, $f$ es decreciente.
3. En $(2, +\infty)$: $f' > 0$, $f$ es creciente.
Hay un máximo relativo en $(0, f(0)) = (0, 0)$ y un mínimo relativo en $(2, f(2)) = (2, 4)$.
**c)** Derivamos de nuevo:
$$f''(x) = \frac{(2x - 2)(x - 1)^2 - (x^2 - 2x) \cdot 2(x - 1)}{(x - 1)^4} = \frac{2(x - 1)^2 - 2(x^2 - 2x)}{(x - 1)^3} = \frac{2}{(x - 1)^3}$$
$f''$ no se anula nunca, así que no hay puntos de inflexión.
1. En $(-\infty, 1)$: $f'' < 0$, $f$ es cóncava (forma $\cap$).
2. En $(1, +\infty)$: $f'' > 0$, $f$ es convexa (forma $\cup$).
La curvatura cambia en $x = 1$, pero no es punto de inflexión porque no pertenece al dominio.
### Solución Ejercicio 7
Un vector normal de $r$ es $\vec{n} = (1, -2)$, que es vector director de la recta $s$ perpendicular a $r$ que pasa por $P$:
$$s: \frac{x - 4}{1} = \frac{y - 1}{-2} \Rightarrow 2x + y - 9 = 0$$
El punto medio $M$ entre $P$ y su simétrico es la intersección de $r$ y $s$:
$$\begin{cases} x - 2y = -3 \\ 2x + y = 9 \end{cases} \Rightarrow x = 3, \; y = 3 \Rightarrow M(3, 3)$$
Si $P'(x', y')$ es el simétrico, $M$ es el punto medio de $PP'$:
$$\frac{4 + x'}{2} = 3 \Rightarrow x' = 2, \qquad \frac{1 + y'}{2} = 3 \Rightarrow y' = 5$$
El punto simétrico es $P'(2, 5)$.
