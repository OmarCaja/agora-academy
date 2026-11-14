# Examen de números enteros

### Ejercicio 1 (2 puntos) - Múltiplos y divisores

Resuelve los siguientes problemas justificando el proceso y los cálculos realizados:

- **a) (1p)** Un faro emite una luz verde cada $12$ segundos, una luz roja cada $18$ segundos y una luz blanca cada $30$ segundos. Si a las 20:00 h las tres luces coinciden, ¿cuántos segundos tardarán en volver a coincidir? ¿A qué hora exacta se producirá esa nueva coincidencia?
- **b) (1p)** Queremos empaquetar $48$ botellas de agua y $72$ refrescos en cajas iguales, sin mezclar los dos tipos de bebida en una misma caja, de modo que todas las cajas contengan la misma cantidad de botellas y que esa cantidad sea la mayor posible. ¿Cuántas botellas habrá en cada caja? ¿Cuántas cajas necesitaremos en total?

### Ejercicio 2 (4 puntos) - Operaciones combinadas

Realiza las siguientes operaciones combinadas mostrando todo el procedimiento paso a paso:

- **a) (1p)** $-5 \cdot (-3) + (-12) : 4 - (-2)^3$
- **b) (1p)** $(-3)^2 \cdot (-2) + \sqrt{64} : (-4) - (-5)$
- **c) (1p)** $18 - 2 \cdot \left[-3 + \sqrt{25} \cdot (-2) - (-4)^2\right]$
- **d) (1p)** $(-2)^4 : (-2)^2 + \sqrt{100 - 36} \cdot (-3) - (-1)^{15}$

### Ejercicio 3 (4 puntos) - Problemas

- **a) (1,25p)** Un congelador industrial se encuentra a una temperatura inicial de $4\,^{\circ}\mathrm{C}$. Primero baja su temperatura a razón de $3\,^{\circ}\mathrm{C}$ cada hora durante $5$ horas. Después, debido a un fallo eléctrico, la temperatura sube $7\,^{\circ}\mathrm{C}$. ¿Cuál es la temperatura final del congelador?
- **b) (1,25p)** La cima del Everest está a $8849$ metros sobre el nivel del mar y el punto más profundo del océano, en la fosa de las Marianas, está a unos $11\,000$ metros bajo el nivel del mar. Expresa las dos alturas con números enteros y calcula la diferencia de altura entre ambos puntos.
- **c) (1,5p)** Un submarino navega a una profundidad de $180$ metros. Asciende $60$ metros para evitar una corriente marina y, posteriormente, desciende el triple de la altura que había ascendido. ¿A qué profundidad se encuentra el submarino al final?

---

## Resolución

### Solución Ejercicio 1

**a)** Buscamos el mínimo común múltiplo de $12$, $18$ y $30$. Descomponemos en factores primos:

$$12 = 2^2 \cdot 3 \qquad 18 = 2 \cdot 3^2 \qquad 30 = 2 \cdot 3 \cdot 5$$

Tomamos los factores comunes y no comunes elevados al mayor exponente:

$$\text{m.c.m.}(12, 18, 30) = 2^2 \cdot 3^2 \cdot 5 = 180$$

Las luces vuelven a coincidir a los $180$ segundos, es decir, a los $3$ minutos: a las 20:03 h.

**b)** Buscamos el máximo común divisor de $48$ y $72$:

$$48 = 2^4 \cdot 3 \qquad 72 = 2^3 \cdot 3^2$$

Tomamos solo los factores comunes elevados al menor exponente:

$$\text{m.c.d.}(48, 72) = 2^3 \cdot 3 = 24$$

Cada caja tendrá $24$ botellas. Cajas de agua: $48 : 24 = 2$. Cajas de refrescos: $72 : 24 = 3$. En total, $2 + 3 = 5$ cajas.

### Solución Ejercicio 2

**a)** Potencia: $(-2)^3 = -8$. Multiplicación y división: $-5 \cdot (-3) = 15$ y $(-12) : 4 = -3$

$$15 + (-3) - (-8) = 15 - 3 + 8 = 20$$

**b)** Potencia y raíz: $(-3)^2 = 9$ y $\sqrt{64} = 8$. Multiplicación y división: $9 \cdot (-2) = -18$ y $8 : (-4) = -2$

$$-18 + (-2) - (-5) = -18 - 2 + 5 = -15$$

**c)** Dentro del corchete, potencias y raíces: $\sqrt{25} = 5$ y $(-4)^2 = 16$. Después la multiplicación: $5 \cdot (-2) = -10$

$$\left[-3 + (-10) - 16\right] = -29$$

$$18 - 2 \cdot (-29) = 18 + 58 = 76$$

**d)** Radicando: $\sqrt{100 - 36} = \sqrt{64} = 8$. Potencias: $(-2)^4 = 16$, $(-2)^2 = 4$ y $(-1)^{15} = -1$ (exponente impar)

División y multiplicación: $16 : 4 = 4$ y $8 \cdot (-3) = -24$

$$4 + (-24) - (-1) = 4 - 24 + 1 = -19$$

### Solución Ejercicio 3

**a)** En $5$ horas baja $5 \cdot 3 = 15\,^{\circ}\mathrm{C}$:

$$4 + 5 \cdot (-3) + 7 = 4 - 15 + 7 = -4$$

La temperatura final es de $-4\,^{\circ}\mathrm{C}$ ($4$ grados bajo cero).

**b)** Everest: $+8849$ m. Fosa de las Marianas: $-11\,000$ m.

$$8849 - (-11\,000) = 8849 + 11\,000 = 19\,849$$

La diferencia de altura es de unos $19\,849$ metros.

**c)** Posición inicial: $-180$ m. Asciende $+60$ m y desciende el triple: $3 \cdot 60 = 180$ m.

$$-180 + 60 - 180 = -300$$

El submarino se encuentra a $300$ metros de profundidad.
