# Ejercicio de estadística bidimensional

### Ejercicio 1 - Horas de estudio y nota

En una clase de $20$ alumnos se quiere estudiar si existe relación entre el tiempo dedicado a estudiar un examen ($X$, en horas) y la nota obtenida ($Y$, sobre $10$):

$$\begin{array}{c|c|c|c} X \backslash Y & 4 & 6 & 8 \\ \hline 1 & 3 & 1 & 0 \\ 2 & 2 & 4 & 1 \\ 3 & 0 & 3 & 6 \end{array}$$

- **a)** Escribe las distribuciones marginales de $X$ y de $Y$.
- **b)** Escribe la distribución de $Y$ condicionada a $X = 2$.
- **c)** Describe el diagrama de dispersión. ¿Qué relación sugiere?
- **d)** Calcula las medias, las varianzas y las desviaciones típicas de $X$ y de $Y$.
- **e)** Calcula la covarianza y el coeficiente de correlación lineal. Interprétalo.
- **f)** Halla las rectas de regresión de $Y$ sobre $X$ y de $X$ sobre $Y$. ¿Qué nota se estima para un alumno que estudia $2{,}5$ horas?

---

## Resolución

### Solución Ejercicio 1

**a)** Sumamos cada fila para la marginal de $X$ y cada columna para la de $Y$:

$$\begin{array}{c|c|c|c|c} x_i & 1 & 2 & 3 & \text{Total} \\ \hline n_i & 4 & 7 & 9 & 20 \end{array} \qquad \begin{array}{c|c|c|c|c} y_j & 4 & 6 & 8 & \text{Total} \\ \hline n_j & 5 & 8 & 7 & 20 \end{array}$$

**b)** Hay $7$ alumnos que han estudiado $2$ horas. Dividimos cada frecuencia de esa fila entre $7$:

$$\begin{array}{c|c|c|c} y_j & 4 & 6 & 8 \\ \hline f(y_j \mid X = 2) & \tfrac{2}{7} \approx 0{,}286 & \tfrac{4}{7} \approx 0{,}571 & \tfrac{1}{7} \approx 0{,}143 \end{array}$$

**c)** Se representan los puntos $(x, y)$ tantas veces como indica su frecuencia: $(1, 4)$ tres veces, $(1, 6)$ una vez, $(2, 4)$ dos veces, $(2, 6)$ cuatro veces, $(2, 8)$ una vez, $(3, 6)$ tres veces y $(3, 8)$ seis veces.

Al aumentar las horas de estudio, las notas tienden a ser mayores: la nube de puntos sugiere una relación positiva.

**d)** Medias:

$$\bar{x} = \frac{1 \cdot 4 + 2 \cdot 7 + 3 \cdot 9}{20} = \frac{45}{20} = 2{,}25 \qquad \bar{y} = \frac{4 \cdot 5 + 6 \cdot 8 + 8 \cdot 7}{20} = \frac{124}{20} = 6{,}2$$

Varianzas:

$$\sigma_x^2 = \frac{1 \cdot 4 + 4 \cdot 7 + 9 \cdot 9}{20} - 2{,}25^2 = \frac{113}{20} - 5{,}0625 = 0{,}5875 \qquad \sigma_x \approx 0{,}77$$

$$\sigma_y^2 = \frac{16 \cdot 5 + 36 \cdot 8 + 64 \cdot 7}{20} - 6{,}2^2 = \frac{816}{20} - 38{,}44 = 2{,}36 \qquad \sigma_y \approx 1{,}54$$

**e)** Sumamos los productos $x_i \cdot y_j \cdot n_{ij}$ fila a fila:

$$1 \cdot (4 \cdot 3 + 6 \cdot 1) + 2 \cdot (4 \cdot 2 + 6 \cdot 4 + 8 \cdot 1) + 3 \cdot (6 \cdot 3 + 8 \cdot 6) = 18 + 80 + 198 = 296$$

$$\sigma_{xy} = \frac{296}{20} - 2{,}25 \cdot 6{,}2 = 14{,}8 - 13{,}95 = 0{,}85$$

$$r = \frac{\sigma_{xy}}{\sigma_x \cdot \sigma_y} = \frac{0{,}85}{0{,}77 \cdot 1{,}54} \approx 0{,}72$$

Hay una correlación lineal positiva y bastante fuerte: en general, más horas de estudio van acompañadas de mejores notas.

**f)** Recta de $Y$ sobre $X$, con pendiente $\dfrac{\sigma_{xy}}{\sigma_x^2} = \dfrac{0{,}85}{0{,}5875} \approx 1{,}45$:

$$y - 6{,}2 = 1{,}45(x - 2{,}25) \implies y = 1{,}45x + 2{,}94$$

Recta de $X$ sobre $Y$, con pendiente $\dfrac{\sigma_{xy}}{\sigma_y^2} = \dfrac{0{,}85}{2{,}36} \approx 0{,}36$:

$$x - 2{,}25 = 0{,}36(y - 6{,}2) \implies x = 0{,}36y + 0{,}02$$

Para estimar la nota usamos la recta de $Y$ sobre $X$: $y = 1{,}45 \cdot 2{,}5 + 2{,}94 \approx 6{,}6$.
