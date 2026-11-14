# Ejercicio de estadística bidimensional

### Ejercicio 1 - Deporte y salud cardiovascular

Se quiere estudiar la relación entre el tiempo de ejercicio diario ($X$, en minutos) y la frecuencia cardíaca en reposo ($Y$, en pulsaciones por minuto) de un grupo de $20$ personas:

$$\begin{array}{c|c|c|c} X \backslash Y & 60 & 70 & 80 \\ \hline 20 & 1 & 2 & 4 \\ 40 & 2 & 3 & 1 \\ 60 & 5 & 2 & 0 \end{array}$$

- **a)** Escribe las distribuciones marginales de $X$ y de $Y$ y calcula sus medias.
- **b)** Calcula las varianzas y las desviaciones típicas de $X$ y de $Y$.
- **c)** Calcula la covarianza y el coeficiente de correlación. Interpreta el resultado.
- **d)** Halla las rectas de regresión de $Y$ sobre $X$ y de $X$ sobre $Y$.
- **e)** Estima la frecuencia cardíaca de una persona que hace $50$ minutos de ejercicio al día.
- **f)** Escribe la distribución de $Y$ condicionada a $X = 60$.

---

## Resolución

### Solución Ejercicio 1

**a)** Sumamos cada fila para la marginal de $X$ y cada columna para la de $Y$:

$$\begin{array}{c|c|c|c} x_i & 20 & 40 & 60 \\ \hline n_i & 7 & 6 & 7 \end{array} \qquad \begin{array}{c|c|c|c} y_j & 60 & 70 & 80 \\ \hline n_j & 8 & 7 & 5 \end{array}$$

$$\bar{x} = \frac{20 \cdot 7 + 40 \cdot 6 + 60 \cdot 7}{20} = \frac{800}{20} = 40 \text{ min}$$

$$\bar{y} = \frac{60 \cdot 8 + 70 \cdot 7 + 80 \cdot 5}{20} = \frac{1370}{20} = 68{,}5 \text{ ppm}$$

**b)** Varianza de $X$:

$$\sigma_x^2 = \frac{400 \cdot 7 + 1600 \cdot 6 + 3600 \cdot 7}{20} - 40^2 = \frac{37\,600}{20} - 1600 = 1880 - 1600 = 280 \qquad \sigma_x = \sqrt{280} \approx 16{,}73$$

Varianza de $Y$:

$$\sigma_y^2 = \frac{3600 \cdot 8 + 4900 \cdot 7 + 6400 \cdot 5}{20} - 68{,}5^2 = \frac{95\,100}{20} - 4692{,}25 = 62{,}75 \qquad \sigma_y = \sqrt{62{,}75} \approx 7{,}92$$

**c)** Sumamos los productos $x_i \cdot y_j \cdot n_{ij}$ fila a fila:

$$20 \cdot (60 \cdot 1 + 70 \cdot 2 + 80 \cdot 4) = 20 \cdot 520 = 10\,400$$

$$40 \cdot (60 \cdot 2 + 70 \cdot 3 + 80 \cdot 1) = 40 \cdot 410 = 16\,400$$

$$60 \cdot (60 \cdot 5 + 70 \cdot 2 + 80 \cdot 0) = 60 \cdot 440 = 26\,400$$

Total: $53\,200$.

$$\sigma_{xy} = \frac{53\,200}{20} - 40 \cdot 68{,}5 = 2660 - 2740 = -80$$

$$r = \frac{\sigma_{xy}}{\sigma_x \cdot \sigma_y} = \frac{-80}{16{,}73 \cdot 7{,}92} \approx -0{,}60$$

La correlación es negativa y moderada: las personas que hacen más ejercicio tienden a tener menos pulsaciones en reposo, aunque la relación no es muy fuerte.

**d)** Recta de $Y$ sobre $X$, con pendiente $\dfrac{\sigma_{xy}}{\sigma_x^2} = \dfrac{-80}{280} \approx -0{,}286$:

$$y - 68{,}5 = -0{,}286(x - 40) \implies y = -0{,}286x + 79{,}93$$

Recta de $X$ sobre $Y$, con pendiente $\dfrac{\sigma_{xy}}{\sigma_y^2} = \dfrac{-80}{62{,}75} \approx -1{,}275$:

$$x - 40 = -1{,}275(y - 68{,}5) \implies x = -1{,}275y + 127{,}33$$

**e)** Para estimar $Y$ a partir de $X$ usamos la recta de $Y$ sobre $X$:

$$y = -0{,}286 \cdot 50 + 79{,}93 \approx 65{,}6 \text{ ppm}$$

Como $r \approx -0{,}60$, la estimación es solo orientativa.

**f)** De las $7$ personas que hacen $60$ minutos, $5$ tienen $60$ ppm, $2$ tienen $70$ ppm y ninguna tiene $80$ ppm:

$$\begin{array}{c|c|c|c} y_j & 60 & 70 & 80 \\ \hline f(y_j \mid X = 60) & \tfrac{5}{7} \approx 0{,}71 & \tfrac{2}{7} \approx 0{,}29 & 0 \end{array}$$
