# Prueba de evaluación de matemáticas
### Ejercicio 1 (1,5 puntos) - Indeterminaciones en un punto
Resuelve las siguientes indeterminaciones:
- **a) (0,75p)** $\displaystyle\lim_{x \to 1} \frac{x^2 + 2x - 3}{x^3 - 1}$
- **b) (0,75p)** $\displaystyle\lim_{x \to 0} \frac{\sqrt{1 + x} - \sqrt{1 - x}}{x}$
### Ejercicio 2 (1 punto) - Expresiones racionales
- **a) (0,5p)** Factoriza y reduce a su mínima expresión: $\dfrac{x^3 - 4x}{x^3 + 4x^2 + 4x}$
- **b) (0,5p)** Efectúa la resta y simplifica el resultado: $\dfrac{2}{x - 2} - \dfrac{x + 6}{x^2 - 4}$
### Ejercicio 3 (1 punto) - Extracción de cartas
De una baraja española de $40$ cartas se extraen dos cartas, una tras otra y sin devolver la primera al mazo.
- **a) (0,5p)** Calcula la probabilidad de que las dos sean de oros.
- **b) (0,5p)** Calcula la probabilidad de que al menos una de ellas sea una figura (sota, caballo o rey).
### Ejercicio 4 (0,5 puntos) - Cálculo sin calculadora
Sabiendo que $\log(2) \approx 0{,}301$ y $\log(3) \approx 0{,}477$, calcula el valor aproximado de:
$$\log\left(\frac{\sqrt{72}}{5}\right)$$
### Ejercicio 5 (1 punto) - Funciones
Estudia el dominio de las siguientes funciones:
- **a) (0,5p)** $f(x) = \sqrt{\dfrac{x + 1}{x - 3}}$
- **b) (0,5p)** $g(x) = \dfrac{1}{\ln(x - 2)}$
### Ejercicio 6 (1 punto) - Problema de edades
Las edades de tres hermanos suman $35$ años. La edad del mayor es $5$ años menos que la suma de las edades de los otros dos, y la suma de las edades de los dos mayores supera en $3$ años al triple de la edad del pequeño. Plantea un sistema de ecuaciones y resuélvelo por Gauss para hallar la edad de cada hermano.
### Ejercicio 7 (1,25 puntos) - Tiempos de un trayecto
El tiempo que tarda un autobús en hacer su recorrido sigue una distribución normal con desviación típica de $4$ minutos. Se sabe que el $15{,}87\%$ de los trayectos dura más de $34$ minutos.
- **a) (0,5p)** Calcula el tiempo medio del recorrido.
- **b) (0,75p)** ¿Qué porcentaje de trayectos dura entre $25$ y $32$ minutos?
### Ejercicio 8 (0,75 puntos) - Asíntotas con parámetros
Halla los valores de $a$ y $b$ para que la función $f(x) = \dfrac{ax^2 + 3}{x + b}$ tenga una asíntota vertical en $x = 2$ y una asíntota oblicua de pendiente $3$. Escribe la ecuación de esa asíntota oblicua.
### Ejercicio 9 (0,5 puntos) - Valor exacto
Calcula el valor exacto de la siguiente expresión aplicando la definición de logaritmo:
$$\log_3\left(\sqrt{27}\right) + \log_2\left(\frac{1}{8}\right) - \ln\left(e^5\right) + \log_{25}(5)$$
### Ejercicio 10 (1,5 puntos) - Prueba diagnóstica
Una enfermedad afecta al $2\%$ de la población. Una prueba para detectarla da positivo en el $95\%$ de las personas enfermas, pero también da positivo, por error, en el $10\%$ de las personas sanas.
- **a) (0,75p)** ¿Qué probabilidad hay de que una persona elegida al azar dé positivo?
- **b) (0,75p)** Una persona ha dado positivo. ¿Cuál es la probabilidad de que esté realmente enferma? Comenta el resultado.
---
## Resolución
### Solución Ejercicio 1
**a)** Indeterminación $\frac{0}{0}$. Factorizamos numerador y denominador (por Ruffini):
$$\lim_{x \to 1} \frac{(x - 1)(x + 3)}{(x - 1)(x^2 + x + 1)} = \lim_{x \to 1} \frac{x + 3}{x^2 + x + 1} = \frac{4}{3}$$
**b)** Indeterminación $\frac{0}{0}$. Multiplicamos y dividimos por el conjugado del numerador:
$$\lim_{x \to 0} \frac{(1 + x) - (1 - x)}{x\left(\sqrt{1 + x} + \sqrt{1 - x}\right)} = \lim_{x \to 0} \frac{2x}{x\left(\sqrt{1 + x} + \sqrt{1 - x}\right)} = \frac{2}{1 + 1} = 1$$
### Solución Ejercicio 2
**a)** Sacamos factor común $x$ y usamos las identidades notables:
$$\frac{x^3 - 4x}{x^3 + 4x^2 + 4x} = \frac{x(x^2 - 4)}{x(x^2 + 4x + 4)} = \frac{x(x - 2)(x + 2)}{x(x + 2)^2} = \frac{x - 2}{x + 2}$$
**b)** El mínimo común denominador es $x^2 - 4 = (x - 2)(x + 2)$:
$$\frac{2(x + 2)}{(x - 2)(x + 2)} - \frac{x + 6}{(x - 2)(x + 2)} = \frac{2x + 4 - x - 6}{(x - 2)(x + 2)} = \frac{x - 2}{(x - 2)(x + 2)} = \frac{1}{x + 2}$$
### Solución Ejercicio 3
La baraja tiene $10$ cartas de cada palo y $12$ figuras.
**a)** Sea $O_i$ el suceso «la carta $i$ es de oros»:
$$P(O_1 \cap O_2) = P(O_1)\cdot P(O_2 \mid O_1) = \frac{10}{40}\cdot\frac{9}{39} = \frac{90}{1560} = \frac{3}{52} \approx 0{,}0577$$
**b)** Usamos el suceso contrario, «ninguna es figura», con $28$ cartas que no son figura:
$$P(\text{ninguna figura}) = \frac{28}{40}\cdot\frac{27}{39} = \frac{756}{1560} = \frac{63}{130}$$
$$P(\text{al menos una figura}) = 1 - \frac{63}{130} = \frac{67}{130} \approx 0{,}5154$$
### Solución Ejercicio 4
Descomponemos $72 = 2^3\cdot 3^2$ y escribimos $5 = \dfrac{10}{2}$:
$$\log\left(\frac{\sqrt{72}}{5}\right) = \frac{1}{2}\log(72) - \log(5) = \frac{1}{2}\big(3\log(2) + 2\log(3)\big) - \big(1 - \log(2)\big)$$
Sustituimos los valores:
$$\frac{1}{2}(0{,}903 + 0{,}954) - (1 - 0{,}301) = 0{,}9285 - 0{,}699 = 0{,}2295$$
### Solución Ejercicio 5
**a)** El radicando debe ser mayor o igual que cero y el denominador no nulo. Las raíces de numerador y denominador son $x = -1$ y $x = 3$. Estudiamos el signo:
$$\frac{x + 1}{x - 3} \ge 0 \text{ en } (-\infty, -1] \cup (3, +\infty)$$
Incluimos $x = -1$ (el radicando vale $0$) y excluimos $x = 3$ (anula el denominador):
$$\text{Dom}(f) = (-\infty, -1] \cup (3, +\infty)$$
**b)** El argumento del logaritmo debe ser positivo y el logaritmo no puede valer cero:
$$x - 2 > 0 \Rightarrow x > 2 \qquad \ln(x - 2) = 0 \Rightarrow x - 2 = 1 \Rightarrow x = 3$$
$$\text{Dom}(g) = (2, 3) \cup (3, +\infty)$$
### Solución Ejercicio 6
Llamamos $a$, $b$ y $c$ a las edades del mayor, del mediano y del pequeño:
$$\begin{cases} a + b + c = 35 \\ a = b + c - 5 \\ a + b = 3c + 3 \end{cases} \Rightarrow \begin{cases} a + b + c = 35 \\ a - b - c = -5 \\ a + b - 3c = 3 \end{cases}$$
Hacemos ceros en la primera columna:
$$F_2 \leftarrow F_2 - F_1 \Rightarrow -2b - 2c = -40$$
$$F_3 \leftarrow F_3 - F_1 \Rightarrow -4c = -32$$
El sistema ya está escalonado. Resolvemos de abajo arriba:
$$c = 8 \qquad -2b - 16 = -40 \Rightarrow b = 12 \qquad a = 35 - 12 - 8 = 15$$
Los hermanos tienen $15$, $12$ y $8$ años.
### Solución Ejercicio 7
$X \sim N(\mu, 4)$, donde $X$ es la duración del trayecto en minutos.
**a)** Tipificamos el dato conocido:
$$P(X > 34) = P\left(Z > \frac{34 - \mu}{4}\right) = 0{,}1587 \Rightarrow P\left(Z \le \frac{34 - \mu}{4}\right) = 0{,}8413$$
En la tabla, $P(Z \le 1) = 0{,}8413$, así que:
$$\frac{34 - \mu}{4} = 1 \Rightarrow \mu = 30 \text{ minutos}$$
**b)** Con $X \sim N(30, 4)$:
$$P(25 \le X \le 32) = P\left(\frac{25 - 30}{4} \le Z \le \frac{32 - 30}{4}\right) = P(-1{,}25 \le Z \le 0{,}5) = P(Z \le 0{,}5) - P(Z \le -1{,}25)$$
$$= 0{,}6915 - (1 - 0{,}8944) = 0{,}6915 - 0{,}1056 = 0{,}5859 \quad (58{,}59\%)$$
### Solución Ejercicio 8
**Asíntota vertical.** El denominador debe anularse en $x = 2$:
$$2 + b = 0 \Rightarrow b = -2$$
**Pendiente de la oblicua.**
$$m = \lim_{x \to \infty} \frac{f(x)}{x} = \lim_{x \to \infty} \frac{ax^2 + 3}{x^2 - 2x} = a \Rightarrow a = 3$$
Comprobamos que el numerador no se anula en $x = 2$: $3\cdot 4 + 3 = 15 \neq 0$, así que la asíntota vertical existe.
**Ordenada en el origen.**
$$n = \lim_{x \to \infty} \left[\frac{3x^2 + 3}{x - 2} - 3x\right] = \lim_{x \to \infty} \frac{3x^2 + 3 - 3x^2 + 6x}{x - 2} = \lim_{x \to \infty} \frac{6x + 3}{x - 2} = 6$$
La asíntota oblicua es $y = 3x + 6$.

### Solución Ejercicio 9
Calculamos cada término por separado:
$$\log_3\left(\sqrt{27}\right) = \log_3\left(3^{3/2}\right) = \frac{3}{2} \qquad \log_2\left(\frac{1}{8}\right) = \log_2\left(2^{-3}\right) = -3$$
$$\ln\left(e^5\right) = 5 \qquad \log_{25}(5) = \frac{1}{2} \text{ porque } 25^{1/2} = 5$$
Sumamos:
$$\frac{3}{2} - 3 - 5 + \frac{1}{2} = 2 - 8 = -6$$
### Solución Ejercicio 10
Sucesos: $E$ (estar enfermo) y $+$ (dar positivo). Datos:
$$P(E) = 0{,}02 \qquad P(\bar{E}) = 0{,}98 \qquad P(+ \mid E) = 0{,}95 \qquad P(+ \mid \bar{E}) = 0{,}10$$
**a)** Por el teorema de la probabilidad total:
$$P(+) = 0{,}02\cdot 0{,}95 + 0{,}98\cdot 0{,}10 = 0{,}019 + 0{,}098 = 0{,}117$$
**b)** Por el teorema de Bayes:
$$P(E \mid +) = \frac{P(E)\cdot P(+ \mid E)}{P(+)} = \frac{0{,}019}{0{,}117} \approx 0{,}1624 \quad (16{,}24\%)$$
Aunque la prueba detecta casi a todos los enfermos, solo uno de cada seis positivos está enfermo: como la enfermedad es poco frecuente, la mayoría de positivos son falsos positivos de personas sanas.