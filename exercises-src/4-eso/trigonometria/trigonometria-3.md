# Examen de trigonometría
### Ejercicio 1 (1 punto) - Grados y radianes
- **a) (0,5p)** Expresa en radianes el ángulo de $-510^\circ$ y da el ángulo equivalente comprendido entre $0$ y $2\pi$ rad.
- **b) (0,5p)** Expresa en grados el ángulo de $\dfrac{7\pi}{3}$ rad y reduce el resultado a un ángulo entre $0^\circ$ y $360^\circ$.
### Ejercicio 2 (1,5 puntos) - Relaciones fundamentales
- **a) (0,75p)** Sabiendo que $\cos\alpha = -\dfrac{2}{3}$ y que $\tan\alpha > 0$, indica en qué cuadrante está $\alpha$ y calcula $\sin\alpha$ y $\tan\alpha$.
- **b) (0,75p)** Sabiendo que $\tan\beta = -2\sqrt{2}$ y que $90^\circ < \beta < 180^\circ$, calcula $\sin\beta$ y $\cos\beta$.
### Ejercicio 3 (1,5 puntos) - Reducción al primer cuadrante
Calcula el valor exacto, sin calculadora, de las siguientes expresiones:
- **a) (0,5p)** $\sin 870^\circ + \cos(-690^\circ)$
- **b) (0,5p)** $\tan(-1125^\circ)$
- **c) (0,5p)** $\dfrac{\sin 300^\circ \cdot \cos 135^\circ}{\tan 210^\circ}$
### Ejercicio 4 (3 puntos) - Identidades trigonométricas
- **a) (0,75p)** Demuestra que $\dfrac{1}{1 - \sin x} + \dfrac{1}{1 + \sin x} = \dfrac{2}{\cos^2 x}$.
- **b) (0,75p)** Demuestra que $\dfrac{\sin x}{1 - \cos x} = \dfrac{1 + \cos x}{\sin x}$.
- **c) (0,75p)** Demuestra que $\tan x + \dfrac{1}{\tan x} = \dfrac{1}{\sin x \cdot \cos x}$.
- **d) (0,75p)** Simplifica la expresión $\dfrac{(\sin x + \cos x)^2 - 1}{\tan x}$.
### Ejercicio 5 (1 punto) - Usando identidades
Sabiendo que $\sin x + \cos x = \dfrac{1}{2}$:
- **a) (0,5p)** Calcula $\sin x \cdot \cos x$.
- **b) (0,5p)** Calcula $\sin^3 x + \cos^3 x$. Pista: $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$.
### Ejercicio 6 (2 puntos) - La torre entre dos observadores
Dos personas, $A$ y $B$, están separadas $100$ m y entre ellas, en la misma línea recta, hay una torre. Desde $A$ se ve la parte más alta de la torre con un ángulo de elevación de $45^\circ$ y desde $B$ con un ángulo de $30^\circ$.
- **a) (1,25p)** Calcula la altura de la torre (da el valor exacto y una aproximación con dos decimales).
- **b) (0,75p)** Calcula la distancia de cada persona al pie de la torre.
---
## Resolución
### Solución Ejercicio 1
**a)** Como $180^\circ$ equivalen a $\pi$ rad:
$$-510^\circ = -510 \cdot \frac{\pi}{180} = -\frac{17\pi}{6} \text{ rad}$$
Sumamos vueltas completas ($2\pi = \dfrac{12\pi}{6}$) hasta caer entre $0$ y $2\pi$:
$$-\frac{17\pi}{6} + 2 \cdot \frac{12\pi}{6} = \frac{7\pi}{6} \text{ rad}$$
**b)**
$$\frac{7\pi}{3} \text{ rad} = \frac{7\pi}{3} \cdot \frac{180^\circ}{\pi} = 420^\circ$$
Quitamos una vuelta: $420^\circ - 360^\circ = 60^\circ$.
### Solución Ejercicio 2
**a)** El coseno es negativo y la tangente positiva, así que $\alpha$ está en el tercer cuadrante. Por la relación fundamental:
$$\sin^2\alpha = 1 - \frac{4}{9} = \frac{5}{9} \Rightarrow \sin\alpha = \pm\frac{\sqrt{5}}{3}$$
En el tercer cuadrante el seno es negativo, así que $\sin\alpha = -\dfrac{\sqrt{5}}{3}$.
$$\tan\alpha = \frac{\sin\alpha}{\cos\alpha} = \frac{-\sqrt{5}/3}{-2/3} = \frac{\sqrt{5}}{2}$$
**b)** Usamos la relación $1 + \tan^2\beta = \dfrac{1}{\cos^2\beta}$:
$$\frac{1}{\cos^2\beta} = 1 + 8 = 9 \Rightarrow \cos^2\beta = \frac{1}{9} \Rightarrow \cos\beta = \pm\frac{1}{3}$$
$\beta$ está en el segundo cuadrante, donde el coseno es negativo: $\cos\beta = -\dfrac{1}{3}$.
$$\sin\beta = \tan\beta \cdot \cos\beta = -2\sqrt{2} \cdot \left(-\frac{1}{3}\right) = \frac{2\sqrt{2}}{3}$$
El seno es positivo, como corresponde al segundo cuadrante.
### Solución Ejercicio 3
**a)** Quitamos vueltas completas: $870^\circ - 2 \cdot 360^\circ = 150^\circ$ y $-690^\circ + 2 \cdot 360^\circ = 30^\circ$.
$$\sin 870^\circ + \cos(-690^\circ) = \sin 150^\circ + \cos 30^\circ = \sin 30^\circ + \cos 30^\circ = \frac{1}{2} + \frac{\sqrt{3}}{2} = \frac{1 + \sqrt{3}}{2}$$
**b)** $-1125^\circ + 4 \cdot 360^\circ = 315^\circ = 360^\circ - 45^\circ$ (cuarto cuadrante, tangente negativa):
$$\tan(-1125^\circ) = \tan 315^\circ = -\tan 45^\circ = -1$$
**c)** $300^\circ = 360^\circ - 60^\circ$ (seno negativo), $135^\circ = 180^\circ - 45^\circ$ (coseno negativo) y $210^\circ = 180^\circ + 30^\circ$ (tangente positiva):
$$\sin 300^\circ = -\frac{\sqrt{3}}{2}, \quad \cos 135^\circ = -\frac{\sqrt{2}}{2}, \quad \tan 210^\circ = \frac{\sqrt{3}}{3}$$
$$\frac{\sin 300^\circ \cdot \cos 135^\circ}{\tan 210^\circ} = \dfrac{\sqrt{6}/4}{\sqrt{3}/3} = \frac{3\sqrt{6}}{4\sqrt{3}} = \frac{3\sqrt{2}}{4}$$
### Solución Ejercicio 4
**a)** Sumamos las fracciones con denominador común $(1 - \sin x)(1 + \sin x) = 1 - \sin^2 x$:
$$\frac{1}{1 - \sin x} + \frac{1}{1 + \sin x} = \frac{(1 + \sin x) + (1 - \sin x)}{1 - \sin^2 x} = \frac{2}{1 - \sin^2 x}$$
Por la relación fundamental, $1 - \sin^2 x = \cos^2 x$, así que el resultado es $\dfrac{2}{\cos^2 x}$.
**b)** Multiplicamos numerador y denominador del lado izquierdo por $1 + \cos x$:
$$\frac{\sin x}{1 - \cos x} = \frac{\sin x\,(1 + \cos x)}{(1 - \cos x)(1 + \cos x)} = \frac{\sin x\,(1 + \cos x)}{1 - \cos^2 x}$$
Como $1 - \cos^2 x = \sin^2 x$:
$$\frac{\sin x\,(1 + \cos x)}{\sin^2 x} = \frac{1 + \cos x}{\sin x}$$
**c)** Escribimos la tangente como cociente:
$$\tan x + \frac{1}{\tan x} = \frac{\sin x}{\cos x} + \frac{\cos x}{\sin x} = \frac{\sin^2 x + \cos^2 x}{\sin x \cdot \cos x} = \frac{1}{\sin x \cdot \cos x}$$
**d)** Desarrollamos el cuadrado y usamos la relación fundamental:
$$(\sin x + \cos x)^2 - 1 = \sin^2 x + 2\sin x \cos x + \cos^2 x - 1 = 2\sin x \cos x$$
$$\frac{2\sin x \cos x}{\tan x} = \frac{2\sin x \cos x}{\sin x / \cos x} = 2\cos^2 x$$
### Solución Ejercicio 5
**a)** Elevamos al cuadrado la igualdad dada:
$$(\sin x + \cos x)^2 = \frac{1}{4} \Rightarrow \sin^2 x + \cos^2 x + 2\sin x \cos x = \frac{1}{4}$$
$$1 + 2\sin x \cos x = \frac{1}{4} \Rightarrow \sin x \cos x = \frac{1/4 - 1}{2} = -\frac{3}{8}$$
**b)** Aplicamos la pista con $a = \sin x$ y $b = \cos x$, y que $\sin^2 x + \cos^2 x = 1$:
$$\sin^3 x + \cos^3 x = (\sin x + \cos x)(1 - \sin x \cos x) = \frac{1}{2}\left(1 + \frac{3}{8}\right) = \frac{1}{2} \cdot \frac{11}{8} = \frac{11}{16}$$
### Solución Ejercicio 6
**a)** Llamamos $h$ a la altura de la torre y $x$ a la distancia de $A$ al pie de la torre, así que la distancia de $B$ es $100 - x$.
1. Desde $A$: $\tan 45^\circ = \dfrac{h}{x} \Rightarrow h = x$.
2. Desde $B$: $\tan 30^\circ = \dfrac{h}{100 - x} \Rightarrow h = \dfrac{\sqrt{3}}{3}(100 - x)$.
Igualamos ambas expresiones:
$$x = \frac{\sqrt{3}}{3}(100 - x) \Rightarrow \sqrt{3}\,x = 100 - x \Rightarrow x(\sqrt{3} + 1) = 100$$
$$x = \frac{100}{\sqrt{3} + 1} = \frac{100(\sqrt{3} - 1)}{(\sqrt{3} + 1)(\sqrt{3} - 1)} = \frac{100(\sqrt{3} - 1)}{2} = 50(\sqrt{3} - 1)$$
Como $h = x$:
$$h = 50(\sqrt{3} - 1) \approx 36{,}60 \text{ m}$$
**b)** La persona $A$ está a $x = 50(\sqrt{3} - 1) \approx 36{,}60$ m del pie de la torre y la persona $B$ a:
$$100 - x = 100 - 50\sqrt{3} + 50 = 150 - 50\sqrt{3} \approx 63{,}40 \text{ m}$$
