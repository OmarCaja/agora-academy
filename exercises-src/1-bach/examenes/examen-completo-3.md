# Prueba de evaluación de matemáticas
### Ejercicio 1 (1,5 puntos) - Indeterminaciones en un punto
Resuelve las siguientes indeterminaciones:
- **a) (0,75p)** $\displaystyle\lim_{x \to 2} \frac{x^2 - x - 2}{x^3 - 8}$
- **b) (0,75p)** $\displaystyle\lim_{x \to 0} \frac{\sqrt{9 + x} - \sqrt{9 - x}}{x}$
### Ejercicio 2 (1 punto) - Expresiones racionales
- **a) (0,5p)** Factoriza y reduce a su mínima expresión: $\dfrac{x^3 - 9x}{x^3 - 6x^2 + 9x}$
- **b) (0,5p)** Efectúa la resta y simplifica el resultado: $\dfrac{3}{x - 3} - \dfrac{2x + 12}{x^2 - 9}$
### Ejercicio 3 (1 punto) - Extracción de cartas
De una baraja española de $40$ cartas se extraen dos cartas, una tras otra y sin devolver la primera al mazo.
- **a) (0,5p)** Calcula la probabilidad de que las dos sean ases.
- **b) (0,5p)** Calcula la probabilidad de que al menos una de ellas sea de oros.
### Ejercicio 4 (0,5 puntos) - Cálculo sin calculadora
Sabiendo que $\log(2) \approx 0{,}301$ y $\log(3) \approx 0{,}477$, calcula el valor aproximado de:
$$\log\left(\frac{\sqrt{45}}{2}\right)$$
### Ejercicio 5 (1 punto) - Funciones
Estudia el dominio de las siguientes funciones:
- **a) (0,5p)** $f(x) = \sqrt{\dfrac{x - 2}{x + 4}}$
- **b) (0,5p)** $g(x) = \dfrac{1}{\ln(x + 1)}$
### Ejercicio 6 (1 punto) - Problema de dinero
Ana, Bea y Carlos tienen entre los tres $60$ €. Lo que tiene Ana es $10$ € menos que lo que tienen entre Bea y Carlos, y lo que tienen Ana y Carlos juntos es el doble de lo que tiene Bea. Plantea un sistema de ecuaciones y resuélvelo por Gauss para hallar el dinero de cada uno.
### Ejercicio 7 (1,25 puntos) - Duración de baterías
La duración de un modelo de batería sigue una distribución normal con desviación típica de $5$ horas. Se sabe que el $2{,}28\%$ de las baterías dura más de $80$ horas.
- **a) (0,5p)** Calcula la duración media de las baterías.
- **b) (0,75p)** ¿Qué porcentaje de baterías dura entre $65$ y $77$ horas?
### Ejercicio 8 (0,75 puntos) - Asíntotas con parámetros
Halla los valores de $a$ y $b$ para que la función $f(x) = \dfrac{ax^2 - 1}{x + b}$ tenga una asíntota vertical en $x = -1$ y una asíntota oblicua de pendiente $2$. Escribe la ecuación de esa asíntota oblicua.
### Ejercicio 9 (0,5 puntos) - Valor exacto
Calcula el valor exacto de la siguiente expresión aplicando la definición de logaritmo:
$$\log_2\left(\sqrt{32}\right) + \log_3\left(\frac{1}{9}\right) - \ln\left(e^3\right) + \log_{4}(2)$$
### Ejercicio 10 (1,5 puntos) - Piezas defectuosas
Una fábrica tiene dos máquinas: la máquina $A$ produce el $60\%$ de las piezas y la máquina $B$ el resto. El $3\%$ de las piezas de $A$ y el $5\%$ de las de $B$ son defectuosas.
- **a) (0,75p)** ¿Qué probabilidad hay de que una pieza elegida al azar sea defectuosa?
- **b) (0,75p)** Una pieza ha resultado defectuosa. ¿Cuál es la probabilidad de que la haya fabricado la máquina $B$? Comenta el resultado.
---
## Resolución
### Solución Ejercicio 1
**a)** Indeterminación $\frac{0}{0}$. Factorizamos numerador y denominador (por Ruffini):
$$\lim_{x \to 2} \frac{(x - 2)(x + 1)}{(x - 2)(x^2 + 2x + 4)} = \lim_{x \to 2} \frac{x + 1}{x^2 + 2x + 4} = \frac{3}{12} = \frac{1}{4}$$
**b)** Indeterminación $\frac{0}{0}$. Multiplicamos y dividimos por el conjugado del numerador:
$$\lim_{x \to 0} \frac{(9 + x) - (9 - x)}{x\left(\sqrt{9 + x} + \sqrt{9 - x}\right)} = \lim_{x \to 0} \frac{2x}{x\left(\sqrt{9 + x} + \sqrt{9 - x}\right)} = \frac{2}{3 + 3} = \frac{1}{3}$$
### Solución Ejercicio 2
**a)** Sacamos factor común $x$ y usamos las identidades notables:
$$\frac{x^3 - 9x}{x^3 - 6x^2 + 9x} = \frac{x(x^2 - 9)}{x(x^2 - 6x + 9)} = \frac{x(x - 3)(x + 3)}{x(x - 3)^2} = \frac{x + 3}{x - 3}$$
**b)** El mínimo común denominador es $x^2 - 9 = (x - 3)(x + 3)$:
$$\frac{3(x + 3)}{(x - 3)(x + 3)} - \frac{2x + 12}{(x - 3)(x + 3)} = \frac{3x + 9 - 2x - 12}{(x - 3)(x + 3)} = \frac{x - 3}{(x - 3)(x + 3)} = \frac{1}{x + 3}$$
### Solución Ejercicio 3
La baraja tiene $4$ ases y $10$ cartas de cada palo.
**a)** Sea $A_i$ el suceso «la carta $i$ es un as»:
$$P(A_1 \cap A_2) = P(A_1)\cdot P(A_2 \mid A_1) = \frac{4}{40}\cdot\frac{3}{39} = \frac{12}{1560} = \frac{1}{130} \approx 0{,}0077$$
**b)** Usamos el suceso contrario, «ninguna es de oros», con $30$ cartas que no son de oros:
$$P(\text{ninguna de oros}) = \frac{30}{40}\cdot\frac{29}{39} = \frac{870}{1560} = \frac{29}{52}$$
$$P(\text{al menos una de oros}) = 1 - \frac{29}{52} = \frac{23}{52} \approx 0{,}4423$$
### Solución Ejercicio 4
Descomponemos $45 = 3^2\cdot 5$ y usamos $\log(5) = \log\left(\dfrac{10}{2}\right) = 1 - \log(2)$:
$$\log\left(\frac{\sqrt{45}}{2}\right) = \frac{1}{2}\log(45) - \log(2) = \frac{1}{2}\big(2\log(3) + 1 - \log(2)\big) - \log(2)$$
Sustituimos los valores:
$$\frac{1}{2}(0{,}954 + 0{,}699) - 0{,}301 = 0{,}8265 - 0{,}301 = 0{,}5255$$
### Solución Ejercicio 5
**a)** El radicando debe ser mayor o igual que cero y el denominador no nulo. Las raíces de numerador y denominador son $x = 2$ y $x = -4$. Estudiamos el signo:
$$\frac{x - 2}{x + 4} \ge 0 \text{ en } (-\infty, -4) \cup [2, +\infty)$$
Excluimos $x = -4$ (anula el denominador) e incluimos $x = 2$ (el radicando vale $0$):
$$\text{Dom}(f) = (-\infty, -4) \cup [2, +\infty)$$
**b)** El argumento del logaritmo debe ser positivo y el logaritmo no puede valer cero:
$$x + 1 > 0 \Rightarrow x > -1 \qquad \ln(x + 1) = 0 \Rightarrow x + 1 = 1 \Rightarrow x = 0$$
$$\text{Dom}(g) = (-1, 0) \cup (0, +\infty)$$
### Solución Ejercicio 6
Llamamos $a$, $b$ y $c$ al dinero de Ana, Bea y Carlos:
$$\begin{cases} a + b + c = 60 \\ a = b + c - 10 \\ a + c = 2b \end{cases} \Rightarrow \begin{cases} a + b + c = 60 \\ a - b - c = -10 \\ a - 2b + c = 0 \end{cases}$$
Hacemos ceros en la primera columna:
$$F_2 \leftarrow F_2 - F_1 \Rightarrow -2b - 2c = -70$$
$$F_3 \leftarrow F_3 - F_1 \Rightarrow -3b = -60$$
Resolvemos:
$$b = 20 \qquad -40 - 2c = -70 \Rightarrow c = 15 \qquad a = 60 - 20 - 15 = 25$$
Ana tiene $25$ €, Bea $20$ € y Carlos $15$ €.
### Solución Ejercicio 7
$X \sim N(\mu, 5)$, donde $X$ es la duración de la batería en horas.
**a)** Tipificamos el dato conocido:
$$P(X > 80) = P\left(Z > \frac{80 - \mu}{5}\right) = 0{,}0228 \Rightarrow P\left(Z \le \frac{80 - \mu}{5}\right) = 0{,}9772$$
En la tabla, $P(Z \le 2) = 0{,}9772$, así que:
$$\frac{80 - \mu}{5} = 2 \Rightarrow \mu = 70 \text{ horas}$$
**b)** Con $X \sim N(70, 5)$:
$$P(65 \le X \le 77) = P\left(\frac{65 - 70}{5} \le Z \le \frac{77 - 70}{5}\right) = P(-1 \le Z \le 1{,}4) = P(Z \le 1{,}4) - P(Z \le -1)$$
$$= 0{,}9192 - (1 - 0{,}8413) = 0{,}9192 - 0{,}1587 = 0{,}7605 \quad (76{,}05\%)$$
### Solución Ejercicio 8
**Asíntota vertical.** El denominador debe anularse en $x = -1$:
$$-1 + b = 0 \Rightarrow b = 1$$
**Pendiente de la oblicua.**
$$m = \lim_{x \to \infty} \frac{f(x)}{x} = \lim_{x \to \infty} \frac{ax^2 - 1}{x^2 + x} = a \Rightarrow a = 2$$
Comprobamos que el numerador no se anula en $x = -1$: $2\cdot 1 - 1 = 1 \neq 0$, así que la asíntota vertical existe.
**Ordenada en el origen.**
$$n = \lim_{x \to \infty} \left[\frac{2x^2 - 1}{x + 1} - 2x\right] = \lim_{x \to \infty} \frac{2x^2 - 1 - 2x^2 - 2x}{x + 1} = \lim_{x \to \infty} \frac{-2x - 1}{x + 1} = -2$$
La asíntota oblicua es $y = 2x - 2$.
### Solución Ejercicio 9
Calculamos cada término por separado:
$$\log_2\left(\sqrt{32}\right) = \log_2\left(2^{5/2}\right) = \frac{5}{2} \qquad \log_3\left(\frac{1}{9}\right) = \log_3\left(3^{-2}\right) = -2$$
$$\ln\left(e^3\right) = 3 \qquad \log_{4}(2) = \frac{1}{2} \text{ porque } 4^{1/2} = 2$$
Sumamos:
$$\frac{5}{2} - 2 - 3 + \frac{1}{2} = 3 - 5 = -2$$
### Solución Ejercicio 10
Sucesos: $A$ y $B$ (máquina que fabrica la pieza) y $D$ (la pieza es defectuosa). Datos:
$$P(A) = 0{,}6 \qquad P(B) = 0{,}4 \qquad P(D \mid A) = 0{,}03 \qquad P(D \mid B) = 0{,}05$$
**a)** Por el teorema de la probabilidad total:
$$P(D) = 0{,}6\cdot 0{,}03 + 0{,}4\cdot 0{,}05 = 0{,}018 + 0{,}02 = 0{,}038$$
**b)** Por el teorema de Bayes:
$$P(B \mid D) = \frac{P(B)\cdot P(D \mid B)}{P(D)} = \frac{0{,}02}{0{,}038} \approx 0{,}5263 \quad (52{,}63\%)$$
Aunque la máquina $B$ fabrica menos piezas que la $A$, más de la mitad de las piezas defectuosas salen de ella, porque su porcentaje de defectos es mayor.
