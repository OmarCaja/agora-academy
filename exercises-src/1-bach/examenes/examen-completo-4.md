# Prueba de evaluación de matemáticas
### Ejercicio 1 (2 puntos) - Límites
Calcula los siguientes límites resolviendo las indeterminaciones:
- **a) (0,5p)** $\displaystyle\lim_{x \to 3} \frac{x^2 - 9}{x^2 - 5x + 6}$
- **b) (0,5p)** $\displaystyle\lim_{x \to +\infty} \left(\sqrt{x^2 + 5x} - x\right)$
- **c) (0,5p)** $\displaystyle\lim_{x \to +\infty} \left(\frac{2x + 1}{2x - 1}\right)^{x}$
- **d) (0,5p)** $\displaystyle\lim_{x \to 5} \frac{\sqrt{x + 4} - 3}{x - 5}$
### Ejercicio 2 (1,5 puntos) - Continuidad y derivabilidad
Dada la función
$$f(x) = \begin{cases} x^2 - 2 & \text{si } x \le 2 \\ 4x - 6 & \text{si } 2 < x \le 4 \\ x + 6 & \text{si } x > 4 \end{cases}$$
- **a) (0,75p)** Estudia su continuidad.
- **b) (0,75p)** Estudia su derivabilidad.
### Ejercicio 3 (1 punto) - Ecuaciones trigonométricas
Resuelve las siguientes ecuaciones:
- **a) (0,5p)** $2\sin^2 x + \sin x - 1 = 0$
- **b) (0,5p)** $\sin 2x = \sin x$
### Ejercicio 4 (1 punto) - Números complejos
Calcula $z = (1 - i)^6$ usando la forma polar y halla las raíces cúbicas de $z$, expresándolas en forma polar y en forma binómica.
### Ejercicio 5 (1 punto) - Cónicas
Obtén la ecuación reducida de las siguientes cónicas, clasifícalas e indica sus elementos principales:
- **a) (0,5p)** $9x^2 + 4y^2 + 18x - 16y - 11 = 0$
- **b) (0,5p)** $y^2 - 4y - 8x + 12 = 0$
### Ejercicio 6 (2,5 puntos) - Estudio de una función
Dada la función $f(x) = \dfrac{x^2 + 3}{x - 1}$:
- **a) (0,75p)** Estudia su dominio, su continuidad y sus asíntotas.
- **b) (1p)** Estudia su monotonía y halla sus extremos relativos.
- **c) (0,75p)** Estudia su curvatura y sus puntos de inflexión.
### Ejercicio 7 (1 punto) - Punto simétrico
Halla el punto simétrico de $P(5, 4)$ respecto de la recta $r: 2x + y - 4 = 0$.
---
## Resolución
### Solución Ejercicio 1
**a)** Sustituyendo obtenemos $\frac{0}{0}$. Factorizamos numerador y denominador:
$$\lim_{x \to 3} \frac{(x - 3)(x + 3)}{(x - 3)(x - 2)} = \lim_{x \to 3} \frac{x + 3}{x - 2} = \frac{6}{1} = 6$$
**b)** Es una indeterminación $\infty - \infty$. Multiplicamos y dividimos por el conjugado:
$$\lim_{x \to +\infty} \frac{(x^2 + 5x) - x^2}{\sqrt{x^2 + 5x} + x} = \lim_{x \to +\infty} \frac{5x}{\sqrt{x^2 + 5x} + x} = \frac{5}{1 + 1} = \frac{5}{2}$$
**c)** La base tiende a $1$ y el exponente a $+\infty$: indeterminación $1^{\infty}$. Usamos $\lim f^{g} = e^{\lim g\,(f - 1)}$:
$$\lim_{x \to +\infty} x\left(\frac{2x + 1}{2x - 1} - 1\right) = \lim_{x \to +\infty} x \cdot \frac{2}{2x - 1} = \lim_{x \to +\infty} \frac{2x}{2x - 1} = 1$$
Por tanto, el límite vale $e^{1} = e$.
**d)** Sustituyendo obtenemos $\frac{0}{0}$. Multiplicamos y dividimos por el conjugado del numerador:
$$\lim_{x \to 5} \frac{(x + 4) - 9}{(x - 5)\left(\sqrt{x + 4} + 3\right)} = \lim_{x \to 5} \frac{1}{\sqrt{x + 4} + 3} = \frac{1}{3 + 3} = \frac{1}{6}$$
### Solución Ejercicio 2
**a)** Cada trozo es un polinomio, así que $f$ es continua en cada intervalo abierto. Estudiamos los puntos de cambio.
En $x = 2$:
$$\lim_{x \to 2^-} (x^2 - 2) = 2, \quad \lim_{x \to 2^+} (4x - 6) = 2, \quad f(2) = 2$$
Los tres valores coinciden: $f$ es continua en $x = 2$.
En $x = 4$:
$$\lim_{x \to 4^-} (4x - 6) = 10, \quad \lim_{x \to 4^+} (x + 6) = 10, \quad f(4) = 10$$
Los tres valores coinciden: $f$ es continua en $x = 4$.
Conclusión: $f$ es continua en $\mathbb{R}$.
**b)** La derivada en cada trozo es:
$$f'(x) = \begin{cases} 2x & \text{si } x < 2 \\ 4 & \text{si } 2 < x < 4 \\ 1 & \text{si } x > 4 \end{cases}$$
En $x = 2$, $f$ es continua y las derivadas laterales son $f'(2^-) = 2 \cdot 2 = 4$ y $f'(2^+) = 4$. Coinciden, así que $f$ es derivable en $x = 2$ y $f'(2) = 4$.
En $x = 4$, $f$ es continua pero las derivadas laterales son $f'(4^-) = 4$ y $f'(4^+) = 1$. Son distintas: hay un punto anguloso y $f$ no es derivable en $x = 4$.
Conclusión: $f$ es derivable en $\mathbb{R} \setminus \{4\}$.
### Solución Ejercicio 3
**a)** Hacemos el cambio $t = \sin x$: $2t^2 + t - 1 = 0$.
$$t = \frac{-1 \pm \sqrt{1 + 8}}{4} = \frac{-1 \pm 3}{4} \Rightarrow t = \frac{1}{2} \text{ o } t = -1$$
Si $\sin x = \frac{1}{2}$: $x = 30^\circ + 360^\circ k$ o $x = 150^\circ + 360^\circ k$.
Si $\sin x = -1$: $x = 270^\circ + 360^\circ k$, con $k \in \mathbb{Z}$.
**b)** Usamos $\sin 2x = 2\sin x \cos x$:
$$2\sin x \cos x - \sin x = 0 \Rightarrow \sin x\,(2\cos x - 1) = 0$$
Si $\sin x = 0$: $x = 0^\circ + 360^\circ k$ o $x = 180^\circ + 360^\circ k$.
Si $\cos x = \frac{1}{2}$: $x = 60^\circ + 360^\circ k$ o $x = 300^\circ + 360^\circ k$, con $k \in \mathbb{Z}$.
### Solución Ejercicio 4
Pasamos $1 - i$ a forma polar:
$$\lvert 1 - i \rvert = \sqrt{1^2 + (-1)^2} = \sqrt{2}$$
El afijo $(1, -1)$ está en el cuarto cuadrante y $\tan\alpha = \frac{-1}{1} = -1$, así que $\alpha = 315^\circ$. Por tanto, $1 - i = \sqrt{2}_{315^\circ}$.
Elevamos a la sexta: el módulo queda $\left(\sqrt{2}\right)^6 = 8$ y el argumento $6 \cdot 315^\circ = 1890^\circ = 5 \cdot 360^\circ + 90^\circ$:
$$z = \left(\sqrt{2}_{315^\circ}\right)^6 = 8_{1890^\circ} = 8_{90^\circ} = 8i$$
Las raíces cúbicas tienen módulo $\sqrt[3]{8} = 2$ y argumentos
$$\frac{90^\circ + 360^\circ k}{3} = 30^\circ + 120^\circ k, \quad k = 0, 1, 2$$
1. $2_{30^\circ} = 2(\cos 30^\circ + i\sin 30^\circ) = \sqrt{3} + i$
2. $2_{150^\circ} = 2(\cos 150^\circ + i\sin 150^\circ) = -\sqrt{3} + i$
3. $2_{270^\circ} = 2(\cos 270^\circ + i\sin 270^\circ) = -2i$
### Solución Ejercicio 5
**a)** Agrupamos y completamos cuadrados:
$$9(x^2 + 2x) + 4(y^2 - 4y) = 11$$
$$9\left[(x + 1)^2 - 1\right] + 4\left[(y - 2)^2 - 4\right] = 11 \Rightarrow 9(x + 1)^2 + 4(y - 2)^2 = 36$$
Dividiendo entre $36$:
$$\frac{(x + 1)^2}{4} + \frac{(y - 2)^2}{9} = 1$$
Es una elipse de centro $(-1, 2)$, semieje mayor $a = 3$ (vertical) y semieje menor $b = 2$. Como $c = \sqrt{a^2 - b^2} = \sqrt{5}$, sus focos son $F(-1, 2 \pm \sqrt{5})$.
**b)** Solo aparece $y$ al cuadrado, así que completamos el cuadrado en $y$:
$$(y - 2)^2 - 4 - 8x + 12 = 0 \Rightarrow (y - 2)^2 = 8x - 8 = 8(x - 1)$$
Es una parábola de vértice $V(1, 2)$ y eje horizontal $y = 2$, abierta hacia la derecha. Comparando con $(y - y_0)^2 = 2p(x - x_0)$, tenemos $2p = 8$, es decir, $p = 4$.
Su foco es $F\left(1 + \frac{p}{2}, 2\right) = F(3, 2)$ y su directriz es $x = 1 - \frac{p}{2} = -1$.
### Solución Ejercicio 6
**a)** El denominador se anula en $x = 1$, así que $\text{Dom}\, f = \mathbb{R} \setminus \{1\}$. Al ser un cociente de polinomios, $f$ es continua en todo su dominio.
Asíntota vertical en $x = 1$:
$$\lim_{x \to 1^-} \frac{x^2 + 3}{x - 1} = -\infty, \quad \lim_{x \to 1^+} \frac{x^2 + 3}{x - 1} = +\infty$$
No tiene asíntota horizontal, porque $\displaystyle\lim_{x \to \pm\infty} \frac{x^2 + 3}{x - 1} = \pm\infty$.
Asíntota oblicua $y = mx + n$:
$$m = \lim_{x \to \pm\infty} \frac{f(x)}{x} = \lim_{x \to \pm\infty} \frac{x^2 + 3}{x^2 - x} = 1$$
$$n = \lim_{x \to \pm\infty} \left(\frac{x^2 + 3}{x - 1} - x\right) = \lim_{x \to \pm\infty} \frac{x + 3}{x - 1} = 1$$
La asíntota oblicua es $y = x + 1$.
**b)** Derivamos:
$$f'(x) = \frac{2x(x - 1) - (x^2 + 3)}{(x - 1)^2} = \frac{x^2 - 2x - 3}{(x - 1)^2} = \frac{(x + 1)(x - 3)}{(x - 1)^2}$$
$f'(x) = 0 \Rightarrow x = -1$ o $x = 3$. El denominador es siempre positivo, así que el signo de $f'$ es el de $(x + 1)(x - 3)$:
1. En $(-\infty, -1)$: $f' > 0$, $f$ es creciente.
2. En $(-1, 1)$ y en $(1, 3)$: $f' < 0$, $f$ es decreciente.
3. En $(3, +\infty)$: $f' > 0$, $f$ es creciente.
Hay un máximo relativo en $(-1, f(-1)) = (-1, -2)$ y un mínimo relativo en $(3, f(3)) = (3, 6)$.
**c)** Derivamos de nuevo:
$$f''(x) = \frac{(2x - 2)(x - 1)^2 - (x^2 - 2x - 3) \cdot 2(x - 1)}{(x - 1)^4} = \frac{2(x - 1)^2 - 2(x^2 - 2x - 3)}{(x - 1)^3} = \frac{8}{(x - 1)^3}$$
$f''$ no se anula nunca, así que no hay puntos de inflexión.
1. En $(-\infty, 1)$: $f'' < 0$, $f$ es cóncava (forma $\cap$).
2. En $(1, +\infty)$: $f'' > 0$, $f$ es convexa (forma $\cup$).
La curvatura cambia en $x = 1$, pero no es punto de inflexión porque no pertenece al dominio.
### Solución Ejercicio 7
Un vector normal de $r$ es $\vec{n} = (2, 1)$, que es vector director de la recta $s$ perpendicular a $r$ que pasa por $P$:
$$s: \frac{x - 5}{2} = \frac{y - 4}{1} \Rightarrow x - 2y + 3 = 0$$
El punto medio $M$ entre $P$ y su simétrico es la intersección de $r$ y $s$:
$$\begin{cases} 2x + y = 4 \\ x - 2y = -3 \end{cases} \Rightarrow x = 1, \; y = 2 \Rightarrow M(1, 2)$$
Si $P'(x', y')$ es el simétrico, $M$ es el punto medio de $PP'$:
$$\frac{5 + x'}{2} = 1 \Rightarrow x' = -3, \qquad \frac{4 + y'}{2} = 2 \Rightarrow y' = 0$$
El punto simétrico es $P'(-3, 0)$.
