# Ejercicio de estadística unidimensional

### Ejercicio 1 - Consumo de datos móviles

Una operadora de telefonía móvil ha estudiado el consumo de datos (en GB) de $30$ jóvenes durante el último mes:

$$2,\ 5,\ 8,\ 12,\ 15,\ 2,\ 8,\ 10,\ 5,\ 12,\ 15,\ 20,\ 8,\ 8,\ 10,\ 12,\ 5,\ 2,\ 15,\ 20,\ 10,\ 8,\ 5,\ 12,\ 10,\ 8,\ 5,\ 15,\ 12,\ 10$$

- **a)** Construye la tabla de frecuencias absolutas, absolutas acumuladas, relativas y relativas acumuladas.
- **b)** Calcula la media, la mediana y la moda.
- **c)** Calcula el rango, la varianza, la desviación típica y el coeficiente de variación.
- **d)** Calcula los cuartiles $Q_1$ y $Q_3$ e indica qué datos necesitas para dibujar el diagrama de caja y bigotes.

---

## Resolución

### Solución Ejercicio 1

**a)** Las frecuencias relativas se obtienen dividiendo entre $N = 30$ (redondeadas a dos decimales):

$$\begin{array}{c|c|c|c|c} x_i & f_i & F_i & h_i & H_i \\ \hline 2 & 3 & 3 & 0{,}10 & 0{,}10 \\ 5 & 5 & 8 & 0{,}17 & 0{,}27 \\ 8 & 6 & 14 & 0{,}20 & 0{,}47 \\ 10 & 5 & 19 & 0{,}17 & 0{,}63 \\ 12 & 5 & 24 & 0{,}17 & 0{,}80 \\ 15 & 4 & 28 & 0{,}13 & 0{,}93 \\ 20 & 2 & 30 & 0{,}07 & 1{,}00 \\ \hline \text{Total} & 30 & & 1 & \end{array}$$

**b)** Media:

$$\bar{x} = \frac{\sum x_i f_i}{N} = \frac{2 \cdot 3 + 5 \cdot 5 + 8 \cdot 6 + 10 \cdot 5 + 12 \cdot 5 + 15 \cdot 4 + 20 \cdot 2}{30} = \frac{289}{30} \approx 9{,}63 \text{ GB}$$

Mediana: $\dfrac{N}{2} = 15$. El primer $F_i$ que supera $15$ es $19$, que corresponde a $x_i = 10$. Como las posiciones $15$ y $16$ valen $10$, $Me = 10$ GB.

Moda: el valor con mayor frecuencia ($f_i = 6$) es $Mo = 8$ GB.

**c)** Rango: $R = 20 - 2 = 18$ GB.

Varianza, con $\sum x_i^2 f_i = 3441$:

$$\sigma^2 = \frac{\sum x_i^2 f_i}{N} - \bar{x}^2 = \frac{3441}{30} - \left(\frac{289}{30}\right)^2 \approx 114{,}70 - 92{,}80 = 21{,}90$$

Desviación típica: $\sigma = \sqrt{21{,}90} \approx 4{,}68$ GB.

Coeficiente de variación: $CV = \dfrac{\sigma}{\bar{x}} = \dfrac{4{,}68}{9{,}63} \approx 0{,}49$, es decir, un $49\,\%$.

Para no acumular errores de redondeo, conviene usar la fracción $\dfrac{289}{30}$ (o todos los decimales de la calculadora) al elevar la media al cuadrado.

**d)** $Q_1$: $\dfrac{N}{4} = 7{,}5$. El primer $F_i$ que supera $7{,}5$ es $8$, así que $Q_1 = 5$ GB.

$Q_3$: $\dfrac{3N}{4} = 22{,}5$. El primer $F_i$ que supera $22{,}5$ es $24$, así que $Q_3 = 12$ GB.

Para el diagrama de caja y bigotes se usan el mínimo ($2$), $Q_1$ ($5$), la mediana ($10$), $Q_3$ ($12$) y el máximo ($20$).
