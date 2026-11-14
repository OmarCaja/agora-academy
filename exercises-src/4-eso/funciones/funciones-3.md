# Examen de problemas con funciones

### Ejercicio 1 (2 puntos) - Costes de producción

Una empresa que fabrica componentes electrónicos tiene unos costes fijos mensuales de $2000$ € y un coste de fabricación de $15$ € por cada unidad producida.

- **a) (0,5p)** Determina la función de costes totales $C(x)$ en función del número de unidades producidas $x$.
- **b) (0,5p)** Si cada unidad se vende por $40$ €, escribe la función de ingresos $I(x)$.
- **c) (1p)** Calcula la función de beneficio $B(x)$ y determina cuántas unidades deben venderse para no tener pérdidas (punto de equilibrio).

### Ejercicio 2 (2 puntos) - Lanzamiento de un cohete

La altura $h$ (en metros) de un pequeño cohete de agua en función del tiempo $t$ (en segundos) desde su lanzamiento viene dada por $h(t) = -5t^2 + 20t + 25$.

- **a) (0,5p)** ¿Desde qué altura se lanza el cohete?
- **b) (0,75p)** ¿En qué segundo alcanza su altura máxima y cuál es esa altura?
- **c) (0,75p)** ¿Cuánto tiempo tarda el cohete en caer al suelo?

### Ejercicio 3 (2 puntos) - Crecimiento de bacterias

En un laboratorio, una población de bacterias crece según la función $P(t) = 500 \cdot 2^{0{,}5t}$, donde $P$ es el número de bacterias y $t$ es el tiempo en horas.

- **a) (0,5p)** ¿Cuántas bacterias hay en el momento inicial?
- **b) (0,75p)** ¿Cuántas bacterias habrá al cabo de $4$ horas?
- **c) (0,75p)** ¿Cuánto tiempo debe pasar para que la población sea de $8000$ bacterias?

### Ejercicio 4 (2 puntos) - Depreciación de una furgoneta

El valor de una furgoneta de reparto disminuye con el tiempo siguiendo una función lineal. Recién comprada (año $0$) cuesta $24\,000$ €, y a los $8$ años su valor es de $8000$ €.

- **a) (0,75p)** Halla la ecuación de la función que relaciona el valor de la furgoneta $V$ con el tiempo $t$ en años.
- **b) (0,5p)** ¿Cuál será el valor de la furgoneta a los $5$ años?
- **c) (0,75p)** ¿Al cabo de cuántos años su valor será de $0$ €?

### Ejercicio 5 (2 puntos) - Concentración de un medicamento

La concentración de un fármaco en sangre (en mg/L) viene dada por la función $C(t) = \dfrac{4t}{t^2 + 1}$, donde $t$ es el tiempo en horas transcurrido desde que se toma.

- **a) (0,5p)** ¿Cuál es el dominio de la función en el contexto del problema?
- **b) (0,75p)** ¿Qué ocurre con la concentración del fármaco cuando pasa mucho tiempo?
- **c) (0,75p)** Calcula la concentración a las $3$ horas de haber tomado el medicamento.

---

## Resolución

### Solución Ejercicio 1

**a)** Costes fijos más el coste de cada unidad: $C(x) = 15x + 2000$

**b)** $I(x) = 40x$

**c)** El beneficio es lo que se ingresa menos lo que se gasta:

$$B(x) = I(x) - C(x) = 40x - (15x + 2000) = 25x - 2000$$

No hay pérdidas cuando $B(x) \geq 0$. El punto de equilibrio es:

$$25x - 2000 = 0 \implies x = \frac{2000}{25} = 80$$

Deben venderse al menos $80$ unidades.

### Solución Ejercicio 2

**a)** En el lanzamiento $t = 0$: $h(0) = 25$. Se lanza desde $25$ metros de altura.

**b)** La gráfica es una parábola con las ramas hacia abajo, así que el máximo está en el vértice:

$$t_v = \frac{-b}{2a} = \frac{-20}{-10} = 2 \qquad h(2) = -20 + 40 + 25 = 45$$

A los $2$ segundos alcanza su altura máxima, $45$ metros.

**c)** Cae al suelo cuando $h(t) = 0$. Dividimos la ecuación entre $-5$:

$$t^2 - 4t - 5 = 0 \implies t = \frac{4 \pm \sqrt{16 + 20}}{2} = \frac{4 \pm 6}{2} \implies t = 5 \text{ o } t = -1$$

El tiempo no puede ser negativo, así que tarda $5$ segundos en caer.

### Solución Ejercicio 3

**a)** $P(0) = 500 \cdot 2^0 = 500 \cdot 1 = 500$ bacterias.

**b)** $P(4) = 500 \cdot 2^{0{,}5 \cdot 4} = 500 \cdot 2^2 = 2000$ bacterias.

**c)** $500 \cdot 2^{0{,}5t} = 8000 \implies 2^{0{,}5t} = 16 = 2^4$

Igualamos los exponentes: $0{,}5t = 4 \implies t = 8$ horas.

### Solución Ejercicio 4

**a)** La función es de la forma $V(t) = mt + n$. Como $V(0) = 24\,000$, $n = 24\,000$. La pendiente es:

$$m = \frac{8000 - 24\,000}{8 - 0} = \frac{-16\,000}{8} = -2000$$

$V(t) = -2000t + 24\,000$. La furgoneta pierde $2000$ € de valor cada año.

**b)** $V(5) = -10\,000 + 24\,000 = 14\,000$ €.

**c)** $-2000t + 24\,000 = 0 \implies t = 12$ años.

### Solución Ejercicio 5

**a)** El tiempo no puede ser negativo, así que el dominio es $[0, +\infty)$.

**b)** Cuando $t$ es muy grande, el denominador $t^2 + 1$ crece mucho más deprisa que el numerador $4t$, así que la fracción se acerca a $0$. Por ejemplo, $C(100) = \dfrac{400}{10\,001} \approx 0{,}04$. Con el paso del tiempo, el fármaco desaparece de la sangre.

**c)** $C(3) = \dfrac{4 \cdot 3}{3^2 + 1} = \dfrac{12}{10} = 1{,}2$ mg/L.
