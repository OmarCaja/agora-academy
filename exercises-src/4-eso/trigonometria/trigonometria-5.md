# Examen de problemas de trigonometría
### Ejercicio 1 (2 puntos) - Barco visto desde la costa
Dos observadores están en los puntos $A$ y $B$ de una playa recta, separados $250$ m. Ven un barco en el punto $C$. Desde $A$ el ángulo entre la dirección a $B$ y la dirección al barco es de $62^\circ$. Desde $B$ ese ángulo entre la dirección a $A$ y la dirección al barco es de $71^\circ$.
- **a) (0,5p)** Calcula el ángulo del triángulo $ABC$ en el vértice $C$.
- **b) (0,75p)** Calcula la distancia del barco a cada observador.
- **c) (0,75p)** Calcula la distancia mínima del barco a la playa.
### Ejercicio 2 (2 puntos) - Dos barcos que salen del mismo puerto
Dos barcos salen a la vez de un mismo puerto con rumbos que forman un ángulo de $80^\circ$. Uno navega a $24$ km/h y el otro a $18$ km/h, ambos en línea recta y a velocidad constante.
- **a) (0,75p)** ¿Qué distancia los separa al cabo de $2{,}5$ horas?
- **b) (1,25p)** ¿Cuánto tiempo tiene que pasar desde que salen para que estén a $100$ km el uno del otro? Da el resultado en horas y minutos.
### Ejercicio 3 (2 puntos) - Parque triangular
Un parque tiene forma de triángulo con lados de $17$ m, $25$ m y $26$ m. Se quiere colocar una farola que esté a la misma distancia de las tres esquinas.
- **a) (0,75p)** Calcula el área del parque.
- **b) (0,75p)** Calcula la distancia de la farola a cada esquina.
- **c) (0,5p)** Calcula el mayor ángulo del parque y comprueba que es coherente con el resultado del apartado anterior.
### Ejercicio 4 (2 puntos) - Triángulo inscrito en una circunferencia
Un triángulo acutángulo $ABC$ está inscrito en una circunferencia de $15$ cm de radio. El lado $BC$ mide $18$ cm y el ángulo en $B$ es de $70^\circ$.
- **a) (0,5p)** Calcula el ángulo en $A$.
- **b) (0,75p)** Calcula los lados $AC$ y $AB$.
- **c) (0,75p)** Calcula el área del triángulo de dos formas distintas y comprueba que coinciden.
### Ejercicio 5 (2 puntos) - Dos triángulos posibles
Un triángulo $ABC$ cumple que $a = 10$ cm, $b = 14$ cm y $A = 30^\circ$.
- **a) (0,75p)** Demuestra que hay dos triángulos que cumplen estas condiciones y calcula el ángulo $B$ de cada uno.
- **b) (0,5p)** Calcula el lado $c$ en cada caso.
- **c) (0,75p)** Calcula el área de cada triángulo.
---
## Resolución
### Solución Ejercicio 1
**a)** $C = 180^\circ - 62^\circ - 71^\circ = 47^\circ$
**b)** Por el teorema del seno, con $AB = 250$ opuesto a $C$:
$$\frac{AB}{\sin C} = \frac{250}{\sin 47^\circ} \approx 341{,}8$$
$$AC = 341{,}8 \cdot \sin 71^\circ \approx 323{,}21 \text{ m}$$
$$BC = 341{,}8 \cdot \sin 62^\circ \approx 301{,}82 \text{ m}$$
**c)** La distancia mínima es la altura desde $C$ sobre $AB$:
$$h = AC \cdot \sin 62^\circ \approx 323{,}21 \cdot 0{,}8829 \approx 285{,}38 \text{ m}$$
Comprobación con el otro lado: $BC \cdot \sin 71^\circ \approx 301{,}82 \cdot 0{,}9455 \approx 285{,}38$ m.
### Solución Ejercicio 2
**a)** En $2{,}5$ horas recorren $24 \cdot 2{,}5 = 60$ km y $18 \cdot 2{,}5 = 45$ km. Por el teorema del coseno:
$$d^2 = 60^2 + 45^2 - 2 \cdot 60 \cdot 45 \cdot \cos 80^\circ \approx 5625 - 937{,}7 = 4687{,}3$$
$$d \approx 68{,}46 \text{ km}$$
**b)** Después de $t$ horas los barcos están a $24t$ y $18t$ km del puerto:
$$d^2 = (24t)^2 + (18t)^2 - 2 \cdot 24t \cdot 18t \cdot \cos 80^\circ = t^2\,(900 - 864 \cos 80^\circ) \approx 749{,}9\,t^2$$
Imponemos $d = 100$:
$$749{,}9\,t^2 = 10000 \quad\Rightarrow\quad t \approx 3{,}65 \text{ h}$$
$$0{,}65 \cdot 60 \approx 39 \text{ min} \quad\Rightarrow\quad t \approx 3 \text{ h } 39 \text{ min}$$
### Solución Ejercicio 3
**a)** El semiperímetro es $s = \dfrac{17 + 25 + 26}{2} = 34$ m. Por la fórmula de Herón:
$$S = \sqrt{34 \cdot 17 \cdot 9 \cdot 8} = \sqrt{41616} = 204 \text{ m}^2$$
**b)** La farola va en el circuncentro, así que la distancia pedida es el radio de la circunferencia circunscrita:
$$R = \frac{a\,b\,c}{4S} = \frac{17 \cdot 25 \cdot 26}{4 \cdot 204} = \frac{11050}{816} \approx 13{,}54 \text{ m}$$
**c)** El mayor ángulo es el opuesto al lado mayor, de $26$ m. Por el teorema del coseno:
$$\cos \alpha = \frac{17^2 + 25^2 - 26^2}{2 \cdot 17 \cdot 25} = \frac{238}{850} = 0{,}28 \quad\Rightarrow\quad \alpha \approx 73{,}74^\circ$$
Comprobación con el diámetro de la circunferencia circunscrita:
$$\sin \alpha = \frac{26}{2R} = \frac{26}{27{,}08} \approx 0{,}96 \quad\Rightarrow\quad \alpha \approx 73{,}74^\circ$$
### Solución Ejercicio 4
**a)** El lado $BC = a$ es opuesto a $A$ y $2R = 30$ cm:
$$\sin A = \frac{a}{2R} = \frac{18}{30} = 0{,}6 \quad\Rightarrow\quad A \approx 36{,}87^\circ$$
Como el triángulo es acutángulo, se descarta $180^\circ - 36{,}87^\circ = 143{,}13^\circ$.
**b)** Primero, $C = 180^\circ - 36{,}87^\circ - 70^\circ = 73{,}13^\circ$.
$$AC = b = 2R \sin B = 30 \cdot \sin 70^\circ \approx 28{,}19 \text{ cm}$$
$$AB = c = 2R \sin C = 30 \cdot \sin 73{,}13^\circ \approx 28{,}71 \text{ cm}$$
**c)** Con dos lados y el ángulo que forman, tomando $a$, $c$ y $B$:
$$S = \frac{1}{2}\,a\,c\,\sin B = \frac{1}{2} \cdot 18 \cdot 28{,}71 \cdot \sin 70^\circ \approx 242{,}80 \text{ cm}^2$$
Con los lados y el radio:
$$S = \frac{a\,b\,c}{4R} = \frac{18 \cdot 28{,}19 \cdot 28{,}71}{60} \approx 242{,}80 \text{ cm}^2$$
Las dos formas coinciden.
### Solución Ejercicio 5
**a)** Por el teorema del seno:
$$\frac{a}{\sin A} = \frac{b}{\sin B} \quad\Rightarrow\quad \sin B = \frac{b \sin A}{a} = \frac{14 \cdot 0{,}5}{10} = 0{,}7$$
Como $0{,}7 < 1$, hay dos ángulos posibles:
$$B_1 \approx 44{,}43^\circ \qquad B_2 = 180^\circ - 44{,}43^\circ = 135{,}57^\circ$$
Los dos valen porque $A + B_2 = 30^\circ + 135{,}57^\circ = 165{,}57^\circ < 180^\circ$. Hay dos triángulos.
**b)** Calculamos el tercer ángulo y el lado $c$ en cada caso:
$$C_1 = 180^\circ - 30^\circ - 44{,}43^\circ = 105{,}57^\circ \quad\Rightarrow\quad c_1 = \frac{10 \cdot \sin 105{,}57^\circ}{\sin 30^\circ} \approx 19{,}27 \text{ cm}$$
$$C_2 = 180^\circ - 30^\circ - 135{,}57^\circ = 14{,}43^\circ \quad\Rightarrow\quad c_2 = \frac{10 \cdot \sin 14{,}43^\circ}{\sin 30^\circ} \approx 4{,}98 \text{ cm}$$
**c)** Con dos lados y el ángulo que forman, $S = \dfrac{1}{2}\,a\,b\,\sin C$:
$$S_1 = \frac{1}{2} \cdot 10 \cdot 14 \cdot \sin 105{,}57^\circ \approx 67{,}43 \text{ cm}^2$$
$$S_2 = \frac{1}{2} \cdot 10 \cdot 14 \cdot \sin 14{,}43^\circ \approx 17{,}44 \text{ cm}^2$$
