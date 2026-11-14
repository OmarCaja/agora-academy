# Ejercicios de estadística

### Ejercicio 1 - Estadística unidimensional

Se ha preguntado a $18$ personas por el número de tazas de café que toman al día:

$$2,\ 1,\ 0,\ 3,\ 2,\ 1,\ 4,\ 2,\ 3,\ 0,\ 1,\ 2,\ 2,\ 5,\ 1,\ 2,\ 3,\ 1$$

- **a)** Indica el tipo de variable.
- **b)** Construye la tabla de frecuencias.
- **c)** ¿Qué porcentaje de personas toma menos de $2$ cafés al día?
- **d)** ¿Cuántas personas toman $3$ o más cafés? ¿Qué porcentaje representan?
- **e)** Calcula la moda, la media, la mediana, la desviación típica y el coeficiente de variación.

### Ejercicio 2 - Estadística bidimensional

Se estudia la relación entre la humedad del suelo ($X$, en %) y el número de plantas germinadas ($Y$):

$$\begin{array}{c|c|c|c|c} X & 15 & 25 & 35 & 45 \\ \hline Y & 5 & 12 & 45 & 80 \end{array}$$

- **a)** Calcula el coeficiente de correlación lineal.
- **b)** Indica el tipo de correlación e interprétalo.
- **c)** Halla la recta de regresión de $Y$ sobre $X$.
- **d)** ¿Cuántas plantas se estiman para una humedad del $32\,\%$? ¿Es fiable la estimación?

---

## Resolución

### Solución Ejercicio 1

**a)** Es una variable cuantitativa discreta: se cuenta y solo toma valores enteros.

**b)** Añadimos las columnas que necesitaremos para la media y la varianza:

$$\begin{array}{c|c|c|c|c} x_i & f_i & F_i & x_i f_i & x_i^2 f_i \\ \hline 0 & 2 & 2 & 0 & 0 \\ 1 & 5 & 7 & 5 & 5 \\ 2 & 6 & 13 & 12 & 24 \\ 3 & 3 & 16 & 9 & 27 \\ 4 & 1 & 17 & 4 & 16 \\ 5 & 1 & 18 & 5 & 25 \\ \hline \text{Total} & 18 & & 35 & 97 \end{array}$$

**c)** Menos de $2$ cafés son $0$ o $1$ cafés: $F = 7$ personas. $\dfrac{7}{18} \approx 0{,}389$, es decir, el $38{,}9\,\%$.

**d)** $3$ o más cafés: $3 + 1 + 1 = 5$ personas. $\dfrac{5}{18} \approx 0{,}278$, es decir, el $27{,}8\,\%$.

**e)** Moda: $Mo = 2$ (es el valor con mayor frecuencia, $6$).

Media: $\bar{x} = \dfrac{\sum x_i f_i}{N} = \dfrac{35}{18} \approx 1{,}94$ cafés.

Mediana: como $N = 18$ es par, la mediana es la media de los valores en las posiciones $9$ y $10$. Mirando $F_i$, las posiciones $8$ a $13$ valen $2$, así que $Me = 2$.

Varianza y desviación típica:

$$\sigma^2 = \frac{\sum x_i^2 f_i}{N} - \bar{x}^2 = \frac{97}{18} - \left(\frac{35}{18}\right)^2 \approx 5{,}389 - 3{,}781 = 1{,}608 \qquad \sigma = \sqrt{1{,}608} \approx 1{,}27$$

Coeficiente de variación: $CV = \dfrac{\sigma}{\bar{x}} = \dfrac{1{,}27}{1{,}94} \approx 0{,}65$. Un $65\,\%$ indica una dispersión alta: los datos están bastante alejados de la media.

### Solución Ejercicio 2

**a)** Medias:

$$\bar{x} = \frac{15 + 25 + 35 + 45}{4} = 30 \qquad \bar{y} = \frac{5 + 12 + 45 + 80}{4} = 35{,}5$$

Covarianza:

$$\sum x_i y_i = 15 \cdot 5 + 25 \cdot 12 + 35 \cdot 45 + 45 \cdot 80 = 75 + 300 + 1575 + 3600 = 5550$$

$$\sigma_{xy} = \frac{\sum x_i y_i}{N} - \bar{x} \cdot \bar{y} = \frac{5550}{4} - 30 \cdot 35{,}5 = 1387{,}5 - 1065 = 322{,}5$$

Varianzas y desviaciones típicas:

$$\sigma_x^2 = \frac{15^2 + 25^2 + 35^2 + 45^2}{4} - 30^2 = \frac{4100}{4} - 900 = 125 \qquad \sigma_x = \sqrt{125} \approx 11{,}18$$

$$\sigma_y^2 = \frac{5^2 + 12^2 + 45^2 + 80^2}{4} - 35{,}5^2 = \frac{8594}{4} - 1260{,}25 = 888{,}25 \qquad \sigma_y \approx 29{,}80$$

Coeficiente de correlación:

$$r = \frac{\sigma_{xy}}{\sigma_x \cdot \sigma_y} = \frac{322{,}5}{11{,}18 \cdot 29{,}80} \approx 0{,}97$$

**b)** Correlación positiva y fuerte ($r$ muy próximo a $1$): cuanto mayor es la humedad, más plantas germinan, y los puntos están casi alineados.

**c)** La pendiente es $\dfrac{\sigma_{xy}}{\sigma_x^2} = \dfrac{322{,}5}{125} = 2{,}58$:

$$y - 35{,}5 = 2{,}58(x - 30) \implies y = 2{,}58x - 41{,}9$$

**d)** $y = 2{,}58 \cdot 32 - 41{,}9 \approx 40{,}66$. Se estiman unas $41$ plantas. La estimación es fiable porque la correlación es fuerte y $x = 32$ está dentro del rango de los datos ($15$ a $45$).
