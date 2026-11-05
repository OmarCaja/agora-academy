# Examen de álgebra y matemática financiera
### Ejercicio 1 (1 punto) - Radicales
- **a) (0,5p)** Simplifica y calcula: $\sqrt{75} + 2\sqrt{12} - \sqrt{27}$
- **b) (0,5p)** Racionaliza y simplifica: $\dfrac{6}{3 - \sqrt{3}}$
### Ejercicio 2 (1 punto) - Potencias
Simplifica, expresando el resultado como una fracción o potencia:
- **a) (0,5p)** $\dfrac{(2^3)^2 \cdot 4^{-1} \cdot 8}{16^2}$
- **b) (0,5p)** $\dfrac{9^2 \cdot 27^{-1}}{3^{-2} \cdot 81}$
### Ejercicio 3 (1 punto) - Logaritmos
- **a) (0,5p)** Calcula: $\log_2 32 + \log_3 \dfrac{1}{9} - \log 0{,}001$
- **b) (0,5p)** Resuelve: $2\log x = \log(x + 6)$
### Ejercicio 4 (1 punto) - Fracciones
- **a) (0,5p)** Calcula: $\left(\dfrac{3}{4} - \dfrac{1}{6}\right) : \dfrac{7}{9} + \dfrac{5}{2} \cdot \dfrac{1}{3}$
- **b) (0,5p)** Simplifica: $\dfrac{x+1}{x-1} - \dfrac{x-1}{x+1}$
### Ejercicio 5 (1 punto) - Interés simple
- **a) (0,5p)** Se depositan $8000$ € al $3\,\%$ anual de interés simple durante $4$ años. Calcula los intereses obtenidos y el capital final.
- **b) (0,5p)** ¿Durante cuántos años hay que mantener $5000$ € al $4\,\%$ anual de interés simple para obtener $1200$ € de intereses?
### Ejercicio 6 (1 punto) - Interés compuesto
- **a) (0,5p)** Se invierten $6000$ € al $2{,}5\,\%$ anual de interés compuesto durante $5$ años. Calcula el capital final.
- **b) (0,5p)** ¿Cuántos años completos hacen falta para que $4000$ € al $5\,\%$ anual de interés compuesto lleguen a $5000$ €?
### Ejercicio 7 (2 puntos) - Ecuación polinómica
Resuelve la ecuación: $x^4 - 2x^3 - 7x^2 + 8x + 12 = 0$
### Ejercicio 8 (2 puntos) - Sistema de ecuaciones lineales
Resuelve el sistema:
$$\begin{cases} x + y + z = 6 \\ 2x - y + z = 3 \\ x + 2y - z = 2 \end{cases}$$
---
## Resolución
### Solución Ejercicio 1
**a)** Se descompone cada radicando para sacar factores de la raíz:
$$\sqrt{75} = 5\sqrt{3}, \quad 2\sqrt{12} = 4\sqrt{3}, \quad \sqrt{27} = 3\sqrt{3}$$
$$5\sqrt{3} + 4\sqrt{3} - 3\sqrt{3} = 6\sqrt{3}$$
**b)** Se multiplica numerador y denominador por el conjugado del denominador:
$$\frac{6}{3 - \sqrt{3}} \cdot \frac{3 + \sqrt{3}}{3 + \sqrt{3}} = \frac{6(3 + \sqrt{3})}{9 - 3} = \frac{6(3 + \sqrt{3})}{6} = 3 + \sqrt{3}$$
### Solución Ejercicio 2
**a)** Se escribe todo como potencia de $2$:
$$\frac{2^6 \cdot 2^{-2} \cdot 2^3}{2^8} = \frac{2^7}{2^8} = 2^{-1} = \frac{1}{2}$$
**b)** Se escribe todo como potencia de $3$:
$$\frac{3^4 \cdot 3^{-3}}{3^{-2} \cdot 3^4} = \frac{3^1}{3^2} = 3^{-1} = \frac{1}{3}$$
### Solución Ejercicio 3
**a)** Cada logaritmo por separado:
$$\log_2 32 = 5, \quad \log_3 \frac{1}{9} = -2, \quad \log 0{,}001 = -3$$
$$5 + (-2) - (-3) = 6$$
**b)** Se aplica la propiedad de la potencia y se igualan los argumentos:
$$\log x^2 = \log(x + 6) \Rightarrow x^2 = x + 6 \Rightarrow x^2 - x - 6 = 0$$
$$x = \frac{1 \pm 5}{2} \Rightarrow x = 3 \text{ o } x = -2$$
Comprobación: $x = -2$ no es válida porque $\log(-2)$ no existe. La solución es $x = 3$.
### Solución Ejercicio 4
**a)** Primero el paréntesis, después la división y por último la suma:
$$\frac{3}{4} - \frac{1}{6} = \frac{9}{12} - \frac{2}{12} = \frac{7}{12}$$
$$\frac{7}{12} : \frac{7}{9} = \frac{7 \cdot 9}{12 \cdot 7} = \frac{3}{4}$$
$$\frac{3}{4} + \frac{5}{6} = \frac{9}{12} + \frac{10}{12} = \frac{19}{12}$$
**b)** Se reducen a común denominador, que es $(x-1)(x+1) = x^2 - 1$:
$$\frac{(x+1)^2 - (x-1)^2}{x^2 - 1} = \frac{x^2 + 2x + 1 - x^2 + 2x - 1}{x^2 - 1} = \frac{4x}{x^2 - 1}$$
### Solución Ejercicio 5
**a)** Interés simple: $I = C \cdot r \cdot t$
$$I = 8000 \cdot 0{,}03 \cdot 4 = 960 \text{ euros}$$
$$C_f = 8000 + 960 = 8960 \text{ euros}$$
**b)** Se despeja el tiempo:
$$t = \frac{I}{C \cdot r} = \frac{1200}{5000 \cdot 0{,}04} = 6 \text{ años}$$
### Solución Ejercicio 6
**a)** Interés compuesto: $C_f = C \cdot (1 + r)^t$
$$C_f = 6000 \cdot 1{,}025^5 \approx 6788{,}45 \text{ euros}$$
**b)** Se plantea la ecuación y se resuelve con logaritmos:
$$4000 \cdot 1{,}05^t = 5000 \Rightarrow 1{,}05^t = 1{,}25$$
$$t = \frac{\log 1{,}25}{\log 1{,}05} \approx 4{,}57$$
Hacen falta $5$ años completos: tras $4$ años hay $4862{,}03$ € y tras $5$ años $5105{,}13$ €.
### Solución Ejercicio 7
Se buscan raíces enteras entre los divisores de $12$ y se factoriza el polinomio paso a paso.
1. $x = -1$ es raíz, porque $1 + 2 - 7 - 8 + 12 = 0$. Al dividir queda $x^3 - 3x^2 - 4x + 12$.
2. $x = 2$ es raíz, porque $8 - 12 - 8 + 12 = 0$. Al dividir queda $x^2 - x - 6$.
3. Se resuelve la ecuación de segundo grado restante:
$$x^2 - x - 6 = 0 \Rightarrow x = \frac{1 \pm 5}{2} \Rightarrow x = 3 \text{ o } x = -2$$
La ecuación factorizada es $(x+1)(x-2)(x-3)(x+2) = 0$ y las soluciones son $x = -2$, $x = -1$, $x = 2$ y $x = 3$.
### Solución Ejercicio 8
Se llama $E_1$, $E_2$ y $E_3$ a las ecuaciones y se elimina $z$.
1. $E_1 + E_3$: $2x + 3y = 8$
2. $E_2 + E_3$: $3x + y = 5 \Rightarrow y = 5 - 3x$
3. Se sustituye en la primera: $2x + 3(5 - 3x) = 8 \Rightarrow -7x = -7 \Rightarrow x = 1$
4. Entonces $y = 5 - 3 = 2$ y, de $E_1$, $z = 6 - 1 - 2 = 3$.
Solución: $x = 1$, $y = 2$, $z = 3$.
