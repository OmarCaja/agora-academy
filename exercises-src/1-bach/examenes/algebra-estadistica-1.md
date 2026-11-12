# Examen de álgebra y estadística bidimensional
### Ejercicio 1 (1 punto) - Logaritmos
Calcula, aplicando las propiedades de los logaritmos y sin usar la calculadora:
- **a) (0,5p)** $\log_2 24 - \log_2 3 + 2\log_2 \sqrt{2} - \log_2 \dfrac{1}{8}$
- **b) (0,5p)** $\log_3 \dfrac{\sqrt{27} \cdot 9^2}{\sqrt[3]{81}}$
### Ejercicio 2 (1,5 puntos) - Fracciones algebraicas
- **a) (0,75p)** Simplifica la fracción $\dfrac{x^3 - 2x^2 - 3x}{x^3 - 9x}$.
- **b) (0,75p)** Opera y simplifica: $\dfrac{2}{x - 1} - \dfrac{x + 3}{x^2 - 1} + \dfrac{1}{x + 1}$
### Ejercicio 3 (1 punto) - Ecuación de grado 4
Resuelve la ecuación $x^4 - 2x^3 - 7x^2 + 8x + 12 = 0$.
### Ejercicio 4 (1,5 puntos) - Sistema de ecuaciones
Una academia tiene $60$ alumnos repartidos en tres grupos, $A$, $B$ y $C$, cuyas cuotas mensuales son de $40$, $50$ y $60$ euros, respectivamente. Cada mes ingresa en total $2900$ euros por las cuotas. Además, el grupo $A$ tiene $10$ alumnos menos que los grupos $B$ y $C$ juntos.
Plantea un sistema de ecuaciones y resuélvelo por el método de Gauss para averiguar cuántos alumnos hay en cada grupo.
### Ejercicio 5 (1 punto) - Inecuaciones
Resuelve las siguientes inecuaciones y expresa la solución en forma de intervalo:
- **a) (0,5p)** $x^3 - x^2 - 6x > 0$
- **b) (0,5p)** $\dfrac{x + 1}{x - 2} \le 2$
### Ejercicio 6 (1 punto) - Sistema de inecuaciones con una incógnita
Resuelve el siguiente sistema y expresa la solución en forma de intervalo:
$$\begin{cases} x^2 - 4x - 5 \le 0 \\ \dfrac{x - 1}{2} - \dfrac{x + 2}{3} > -1 \end{cases}$$
### Ejercicio 7 (1,5 puntos) - Sistema de inecuaciones con dos incógnitas
Representa gráficamente la región solución del siguiente sistema y calcula sus vértices:
$$\begin{cases} x + y \le 6 \\ 2x - y \ge 0 \\ y \ge 1 \end{cases}$$
### Ejercicio 8 (1,5 puntos) - Estadística bidimensional
Una empresa ha registrado su gasto en publicidad $x$ (en miles de euros) y sus ventas $y$ (en miles de euros) durante cinco meses:
$$\begin{array}{c|ccccc} x & 2 & 3 & 4 & 5 & 6 \\ \hline y & 4 & 5 & 7 & 8 & 11 \end{array}$$
- **a) (0,5p)** Calcula las medias, las desviaciones típicas y la covarianza.
- **b) (0,5p)** Calcula el coeficiente de correlación e interpreta su valor.
- **c) (0,5p)** Halla la recta de regresión de $y$ sobre $x$ y estima las ventas si el gasto en publicidad es de $8$ mil euros. ¿Es fiable la estimación?
---
## Resolución
### Solución Ejercicio 1
**a)** Agrupamos usando $\log_a M - \log_a N = \log_a \frac{M}{N}$ y $n\log_a M = \log_a M^n$:
$$\log_2 24 - \log_2 3 = \log_2 \frac{24}{3} = \log_2 8 = 3$$
$$2\log_2 \sqrt{2} = \log_2 \left(\sqrt{2}\right)^2 = \log_2 2 = 1$$
$$\log_2 \frac{1}{8} = \log_2 2^{-3} = -3$$
Por tanto, el resultado es $3 + 1 - (-3) = 7$.
**b)** Escribimos todo como potencias de $3$: $\sqrt{27} = 3^{3/2}$, $9^2 = 3^4$ y $\sqrt[3]{81} = 3^{4/3}$.
$$\log_3 \frac{3^{3/2} \cdot 3^4}{3^{4/3}} = \log_3 3^{\frac{3}{2} + 4 - \frac{4}{3}} = \frac{3}{2} + 4 - \frac{4}{3} = \frac{9 + 24 - 8}{6} = \frac{25}{6}$$
### Solución Ejercicio 2
**a)** Factorizamos numerador y denominador:
$$x^3 - 2x^2 - 3x = x(x^2 - 2x - 3) = x(x - 3)(x + 1)$$
$$x^3 - 9x = x(x^2 - 9) = x(x - 3)(x + 3)$$
Simplificamos los factores comunes $x$ y $x - 3$:
$$\frac{x(x - 3)(x + 1)}{x(x - 3)(x + 3)} = \frac{x + 1}{x + 3}$$
**b)** Como $x^2 - 1 = (x - 1)(x + 1)$, el mínimo común múltiplo de los denominadores es $(x - 1)(x + 1)$:
$$\frac{2(x + 1) - (x + 3) + (x - 1)}{(x - 1)(x + 1)} = \frac{2x + 2 - x - 3 + x - 1}{(x - 1)(x + 1)} = \frac{2x - 2}{(x - 1)(x + 1)}$$
Sacamos factor común en el numerador y simplificamos:
$$\frac{2(x - 1)}{(x - 1)(x + 1)} = \frac{2}{x + 1}$$
### Solución Ejercicio 3
Buscamos raíces enteras entre los divisores de $12$ y aplicamos Ruffini. Con $x = -1$:
$$\begin{array}{r|rrrrr} & 1 & -2 & -7 & 8 & 12 \\ -1 & & -1 & 3 & 4 & -12 \\ \hline & 1 & -3 & -4 & 12 & 0 \end{array}$$
Con $x = 2$ sobre el cociente:
$$\begin{array}{r|rrrr} & 1 & -3 & -4 & 12 \\ 2 & & 2 & -2 & -12 \\ \hline & 1 & -1 & -6 & 0 \end{array}$$
Queda $x^2 - x - 6 = 0$:
$$x = \frac{1 \pm \sqrt{1 + 24}}{2} = \frac{1 \pm 5}{2} \Rightarrow x = 3 \text{ o } x = -2$$
La ecuación queda $(x + 1)(x - 2)(x - 3)(x + 2) = 0$ y sus soluciones son $x = -2$, $x = -1$, $x = 2$ y $x = 3$.
### Solución Ejercicio 4
Llamamos $x$, $y$, $z$ al número de alumnos de los grupos $A$, $B$ y $C$. El enunciado da:
$$\begin{cases} x + y + z = 60 \\ 40x + 50y + 60z = 2900 \\ x = y + z - 10 \end{cases} \Rightarrow \begin{cases} x + y + z = 60 \\ 4x + 5y + 6z = 290 \\ x - y - z = -10 \end{cases}$$
La segunda ecuación se ha dividido entre $10$. Aplicamos Gauss con $E_2 - 4E_1$ y $E_3 - E_1$:
$$\begin{cases} x + y + z = 60 \\ y + 2z = 50 \\ -2y - 2z = -70 \end{cases}$$
Ahora $E_3 + 2E_2$:
$$\begin{cases} x + y + z = 60 \\ y + 2z = 50 \\ 2z = 30 \end{cases}$$
Resolvemos de abajo arriba: $z = 15$, $y = 50 - 30 = 20$ y $x = 60 - 20 - 15 = 25$.
El grupo $A$ tiene $25$ alumnos, el $B$ tiene $20$ y el $C$ tiene $15$.
Comprobación: $40 \cdot 25 + 50 \cdot 20 + 60 \cdot 15 = 1000 + 1000 + 900 = 2900$ euros.
### Solución Ejercicio 5
**a)** Factorizamos: $x^3 - x^2 - 6x = x(x^2 - x - 6) = x(x + 2)(x - 3)$. Las raíces son $-2$, $0$ y $3$. Estudiamos el signo en cada intervalo:
1. En $(-\infty, -2)$, por ejemplo $x = -3$: $(-3)(-1)(-6) = -18 < 0$.
2. En $(-2, 0)$, por ejemplo $x = -1$: $(-1)(1)(-4) = 4 > 0$.
3. En $(0, 3)$, por ejemplo $x = 1$: $(1)(3)(-2) = -6 < 0$.
4. En $(3, +\infty)$, por ejemplo $x = 4$: $(4)(6)(1) = 24 > 0$.
La desigualdad es estricta, así que las raíces no entran. Solución: $(-2, 0) \cup (3, +\infty)$.
**b)** Pasamos todo a un miembro y operamos:
$$\frac{x + 1}{x - 2} - 2 \le 0 \Rightarrow \frac{x + 1 - 2(x - 2)}{x - 2} \le 0 \Rightarrow \frac{5 - x}{x - 2} \le 0$$
El numerador se anula en $x = 5$ y el denominador en $x = 2$. Estudiamos el signo:
1. En $(-\infty, 2)$, por ejemplo $x = 0$: $\frac{5}{-2} < 0$, cumple.
2. En $(2, 5)$, por ejemplo $x = 3$: $\frac{2}{1} > 0$, no cumple.
3. En $(5, +\infty)$, por ejemplo $x = 6$: $\frac{-1}{4} < 0$, cumple.
$x = 5$ anula la fracción, así que entra; $x = 2$ anula el denominador, así que no entra. Solución: $(-\infty, 2) \cup [5, +\infty)$.
### Solución Ejercicio 6
Primera inecuación: $x^2 - 4x - 5 = 0 \Rightarrow x = \frac{4 \pm \sqrt{16 + 20}}{2} = \frac{4 \pm 6}{2}$, es decir, $x = 5$ o $x = -1$. Entonces $(x + 1)(x - 5) \le 0$, que es negativa entre las raíces. Solución: $[-1, 5]$.
Segunda inecuación: multiplicamos por $6$:
$$3(x - 1) - 2(x + 2) > -6 \Rightarrow 3x - 3 - 2x - 4 > -6 \Rightarrow x > 1$$
Solución: $(1, +\infty)$.
La solución del sistema es la intersección de ambas: $[-1, 5] \cap (1, +\infty) = (1, 5]$.
### Solución Ejercicio 7
Representamos cada recta frontera y elegimos el semiplano con un punto de prueba:
1. $x + y = 6$ pasa por $(0, 6)$ y $(6, 0)$. El punto $(0, 0)$ cumple $0 \le 6$: el semiplano es el que contiene al origen (por debajo de la recta).
2. $2x - y = 0$, es decir, $y = 2x$, pasa por $(0, 0)$ y $(2, 4)$. El punto $(1, 0)$ cumple $2 \ge 0$: el semiplano es el que queda a la derecha de la recta (por debajo de ella).
3. $y = 1$ es una recta horizontal y el semiplano es el que queda por encima.
Las rectas son frontera de la región porque las desigualdades no son estrictas.
La región solución es el triángulo cuyos vértices son las intersecciones de las rectas dos a dos:
$$\begin{cases} x + y = 6 \\ y = 2x \end{cases} \Rightarrow 3x = 6 \Rightarrow (2, 4)$$
$$\begin{cases} x + y = 6 \\ y = 1 \end{cases} \Rightarrow (5, 1)$$
$$\begin{cases} y = 2x \\ y = 1 \end{cases} \Rightarrow \left(\frac{1}{2}, 1\right)$$
Por ejemplo, el punto $(2, 2)$ está dentro: $4 \le 6$, $2 \ge 0$ y $2 \ge 1$.
### Solución Ejercicio 8
**a)** Calculamos las sumas necesarias con $n = 5$: $\sum x_i = 20$, $\sum y_i = 35$, $\sum x_i^2 = 90$, $\sum y_i^2 = 275$ y $\sum x_i y_i = 157$.
$$\bar{x} = \frac{20}{5} = 4, \qquad \bar{y} = \frac{35}{5} = 7$$
$$\sigma_x^2 = \frac{90}{5} - 4^2 = 2 \Rightarrow \sigma_x = \sqrt{2} \approx 1{,}41$$
$$\sigma_y^2 = \frac{275}{5} - 7^2 = 6 \Rightarrow \sigma_y = \sqrt{6} \approx 2{,}45$$
$$\sigma_{xy} = \frac{157}{5} - 4 \cdot 7 = 31{,}4 - 28 = 3{,}4$$
**b)** El coeficiente de correlación es:
$$r = \frac{\sigma_{xy}}{\sigma_x \sigma_y} = \frac{3{,}4}{\sqrt{2} \cdot \sqrt{6}} = \frac{3{,}4}{\sqrt{12}} \approx 0{,}98$$
Es positivo y muy próximo a $1$: la correlación es lineal, directa y muy fuerte. Cuanto más se invierte en publicidad, más se vende.
**c)** La pendiente de la recta de regresión de $y$ sobre $x$ es $\frac{\sigma_{xy}}{\sigma_x^2} = \frac{3{,}4}{2} = 1{,}7$:
$$y - \bar{y} = \frac{\sigma_{xy}}{\sigma_x^2}(x - \bar{x}) \Rightarrow y - 7 = 1{,}7(x - 4) \Rightarrow y = 1{,}7x + 0{,}2$$
Para $x = 8$: $y = 1{,}7 \cdot 8 + 0{,}2 = 13{,}8$, es decir, unas ventas de $13\,800$ euros.
La estimación es bastante fiable porque $r \approx 0{,}98$ está muy cerca de $1$, aunque $x = 8$ queda algo fuera del rango de los datos observados (de $2$ a $6$), lo que obliga a tomarla con cierta prudencia.
