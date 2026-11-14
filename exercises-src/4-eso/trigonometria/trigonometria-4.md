# Examen de problemas de trigonometría
### Ejercicio 1 (2 puntos) - Teorema del seno
En un triángulo $ABC$ se conocen $A = 40^\circ$, $B = 75^\circ$ y $a = 12$ cm.
- **a) (0,5p)** Calcula el ángulo $C$.
- **b) (1p)** Calcula los lados $b$ y $c$.
- **c) (0,5p)** Calcula el diámetro y el radio de la circunferencia circunscrita.
### Ejercicio 2 (2 puntos) - Teorema del coseno
En un triángulo $ABC$ se conocen $b = 7$ cm, $c = 9$ cm y $A = 60^\circ$.
- **a) (0,75p)** Calcula el lado $a$.
- **b) (0,75p)** Calcula los ángulos $B$ y $C$.
- **c) (0,5p)** Calcula el área del triángulo.
### Ejercicio 3 (2 puntos) - Triángulo de lados conocidos
Un triángulo tiene lados $a = 13$ cm, $b = 14$ cm y $c = 15$ cm.
- **a) (1p)** Calcula sus tres ángulos con el teorema del coseno.
- **b) (0,5p)** Calcula su área con la fórmula de Herón.
- **c) (0,5p)** Calcula el radio de la circunferencia circunscrita con la fórmula $S = \dfrac{a\,b\,c}{4R}$.
### Ejercicio 4 (2 puntos) - Circunferencia circunscrita
En un triángulo $ABC$ se conocen $a = 10$ cm, $A = 30^\circ$ y $B = 45^\circ$.
- **a) (0,5p)** Calcula el diámetro y el radio de la circunferencia circunscrita.
- **b) (0,75p)** Calcula los lados $b$ y $c$.
- **c) (0,75p)** Calcula el área del triángulo usando $S = \dfrac{a\,b\,c}{4R}$.
### Ejercicio 5 (2 puntos) - Pieza triangular en un disco
Un artesano quiere cortar una pieza triangular de lados $9$ cm, $10$ cm y $11$ cm de un disco de madera. Quiere usar el disco más pequeño posible, es decir, el que tiene la circunferencia del triángulo como borde.
- **a) (0,75p)** Calcula el área de la pieza triangular.
- **b) (0,75p)** Calcula el radio del disco necesario.
- **c) (0,5p)** Calcula el área de madera que sobra al cortar la pieza.
---
## Resolución
### Solución Ejercicio 1
**a)** La suma de los ángulos de un triángulo es $180^\circ$:
$$C = 180^\circ - 40^\circ - 75^\circ = 65^\circ$$
**b)** Por el teorema del seno:
$$\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C}$$
$$\frac{12}{\sin 40^\circ} = \frac{12}{0{,}6428} \approx 18{,}67$$
$$b = 18{,}67 \cdot \sin 75^\circ \approx 18{,}67 \cdot 0{,}9659 \approx 18{,}03 \text{ cm}$$
$$c = 18{,}67 \cdot \sin 65^\circ \approx 18{,}67 \cdot 0{,}9063 \approx 16{,}92 \text{ cm}$$
**c)** El cociente del teorema del seno es el diámetro de la circunferencia circunscrita:
$$2R = \frac{a}{\sin A} \approx 18{,}67 \text{ cm} \quad\Rightarrow\quad R \approx 9{,}33 \text{ cm}$$
### Solución Ejercicio 2
**a)** Por el teorema del coseno:
$$a^2 = b^2 + c^2 - 2bc\cos A = 49 + 81 - 2 \cdot 7 \cdot 9 \cdot \cos 60^\circ = 130 - 63 = 67$$
$$a = \sqrt{67} \approx 8{,}19 \text{ cm}$$
**b)** Despejamos el coseno de $B$:
$$\cos B = \frac{a^2 + c^2 - b^2}{2ac} = \frac{67 + 81 - 49}{2 \cdot 8{,}19 \cdot 9} = \frac{99}{147{,}34} \approx 0{,}6719 \quad\Rightarrow\quad B \approx 47{,}78^\circ$$
Entonces:
$$C = 180^\circ - 60^\circ - 47{,}78^\circ = 72{,}22^\circ$$
**c)** Con dos lados y el ángulo que forman:
$$S = \frac{1}{2}\,b\,c\,\sin A = \frac{1}{2} \cdot 7 \cdot 9 \cdot \sin 60^\circ \approx 27{,}28 \text{ cm}^2$$
### Solución Ejercicio 3
**a)** Por el teorema del coseno:
$$\cos A = \frac{b^2 + c^2 - a^2}{2bc} = \frac{196 + 225 - 169}{2 \cdot 14 \cdot 15} = \frac{252}{420} = 0{,}6 \quad\Rightarrow\quad A \approx 53{,}13^\circ$$
$$\cos B = \frac{a^2 + c^2 - b^2}{2ac} = \frac{169 + 225 - 196}{2 \cdot 13 \cdot 15} = \frac{198}{390} \approx 0{,}5077 \quad\Rightarrow\quad B \approx 59{,}49^\circ$$
$$C = 180^\circ - 53{,}13^\circ - 59{,}49^\circ = 67{,}38^\circ$$
**b)** El semiperímetro es $s = \dfrac{13 + 14 + 15}{2} = 21$ cm.
$$S = \sqrt{s(s-a)(s-b)(s-c)} = \sqrt{21 \cdot 8 \cdot 7 \cdot 6} = \sqrt{7056} = 84 \text{ cm}^2$$
**c)** Despejamos $R$ de $S = \dfrac{abc}{4R}$:
$$R = \frac{a\,b\,c}{4S} = \frac{13 \cdot 14 \cdot 15}{4 \cdot 84} = \frac{2730}{336} = 8{,}125 \text{ cm}$$
### Solución Ejercicio 4
**a)** Por el teorema del seno:
$$2R = \frac{a}{\sin A} = \frac{10}{\sin 30^\circ} = \frac{10}{0{,}5} = 20 \text{ cm} \quad\Rightarrow\quad R = 10 \text{ cm}$$
**b)** Como $2R = 20$, cada lado es $20$ por el seno de su ángulo opuesto. Primero, $C = 180^\circ - 30^\circ - 45^\circ = 105^\circ$.
$$b = 2R\sin B = 20 \cdot \sin 45^\circ = 10\sqrt{2} \approx 14{,}14 \text{ cm}$$
$$c = 2R\sin C = 20 \cdot \sin 105^\circ \approx 19{,}32 \text{ cm}$$
**c)** Aplicamos la fórmula del área con el radio:
$$S = \frac{a\,b\,c}{4R} = \frac{10 \cdot 14{,}14 \cdot 19{,}32}{40} \approx 68{,}30 \text{ cm}^2$$
### Solución Ejercicio 5
**a)** El semiperímetro es $s = \dfrac{9 + 10 + 11}{2} = 15$ cm.
$$S = \sqrt{15 \cdot 6 \cdot 5 \cdot 4} = \sqrt{1800} = 30\sqrt{2} \approx 42{,}43 \text{ cm}^2$$
**b)** El radio de la circunferencia circunscrita es:
$$R = \frac{a\,b\,c}{4S} = \frac{9 \cdot 10 \cdot 11}{4 \cdot 42{,}43} = \frac{990}{169{,}71} \approx 5{,}83 \text{ cm}$$
**c)** Área del disco menos área de la pieza:
$$\pi R^2 - S \approx \pi \cdot 5{,}83^2 - 42{,}43 \approx 106{,}91 - 42{,}43 \approx 64{,}48 \text{ cm}^2$$
