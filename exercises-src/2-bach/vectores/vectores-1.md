# Examen de vectores

### Ejercicio 1 (2 puntos) - Producto escalar y vectorial
Sean los vectores $\vec{u}=(1,2,-1)$ y $\vec{v}=(2,-1,3)$.
- **a) (0,5p)** Calcula el producto escalar $\vec{u}\cdot\vec{v}$.
- **b) (0,75p)** Halla el ángulo que forman $\vec{u}$ y $\vec{v}$.
- **c) (0,75p)** Calcula el área del paralelogramo determinado por $\vec{u}$ y $\vec{v}$.

### Ejercicio 2 (2 puntos) - Producto mixto
Sean $\vec{u}=(1,0,1)$, $\vec{v}=(2,1,0)$ y $\vec{w}=(0,1,3)$.
- **a) (0,75p)** Calcula el volumen del paralelepípedo determinado por los tres vectores.
- **b) (0,5p)** Calcula el volumen del tetraedro que determinan.
- **c) (0,75p)** Halla el valor de $m$ para que los vectores $(1,2,1)$, $(0,1,-1)$ y $(m,3,2)$ sean coplanarios.

### Ejercicio 3 (2 puntos) - Perpendicularidad
- **a) (0,75p)** Halla $k$ para que los vectores $(1,k,2)$ y $(k,-3,1)$ sean perpendiculares.
- **b) (1,25p)** Halla un vector de módulo $2$ perpendicular a $\vec{a}=(1,1,0)$ y a $\vec{b}=(0,1,1)$.

### Ejercicio 4 (2 puntos) - Puntos y triángulo
Sean los puntos $A(1,0,2)$, $B(3,1,0)$ y $C(2,3,1)$.
- **a) (0,75p)** Calcula el área del triángulo $ABC$.
- **b) (0,75p)** Halla el punto $D$ para que $ABCD$ sea un paralelogramo.
- **c) (0,5p)** Calcula el baricentro del triángulo $ABC$.

### Ejercicio 5 (2 puntos) - Módulos y ángulos
Sean $\vec{u}$ y $\vec{v}$ dos vectores con $\lvert\vec{u}\rvert=3$, $\lvert\vec{v}\rvert=4$ que forman un ángulo de $60^\circ$.
- **a) (0,5p)** Calcula $\vec{u}\cdot\vec{v}$.
- **b) (0,75p)** Calcula $\lvert\vec{u}+\vec{v}\rvert$.
- **c) (0,75p)** Calcula $\lvert\vec{u}-\vec{v}\rvert$.

---

## Resolución

### Solución Ejercicio 1
**a)** $\vec{u}\cdot\vec{v}=1\cdot 2+2\cdot(-1)+(-1)\cdot 3=2-2-3=-3$

**b)** $\lvert\vec{u}\rvert=\sqrt{1+4+1}=\sqrt{6}$ y $\lvert\vec{v}\rvert=\sqrt{4+1+9}=\sqrt{14}$
$$\cos\alpha=\frac{\vec{u}\cdot\vec{v}}{\lvert\vec{u}\rvert\,\lvert\vec{v}\rvert}=\frac{-3}{\sqrt{84}}\approx-0{,}3273$$
$$\alpha\approx 109{,}1^\circ$$

**c)** Calculamos el producto vectorial:
$$\vec{u}\times\vec{v}=\begin{vmatrix}\vec{i}&\vec{j}&\vec{k}\\1&2&-1\\2&-1&3\end{vmatrix}=(5,-5,-5)$$
$$\text{Área}=\lvert\vec{u}\times\vec{v}\rvert=\sqrt{25+25+25}=\sqrt{75}=5\sqrt{3}\ \text{u}^2$$

### Solución Ejercicio 2
**a)** El volumen es el valor absoluto del producto mixto:
$$[\vec{u},\vec{v},\vec{w}]=\begin{vmatrix}1&0&1\\2&1&0\\0&1&3\end{vmatrix}=3+0+2-0-0-0=5$$
$$V=\lvert 5\rvert=5\ \text{u}^3$$

**b)** El tetraedro es la sexta parte del paralelepípedo:
$$V=\frac{5}{6}\ \text{u}^3$$

**c)** Son coplanarios si su producto mixto es cero:
$$\begin{vmatrix}1&2&1\\0&1&-1\\m&3&2\end{vmatrix}=2-2m+0-m-(-3)-0=5-3m$$
$$5-3m=0\Rightarrow m=\frac{5}{3}$$

### Solución Ejercicio 3
**a)** Son perpendiculares si su producto escalar es cero:
$$(1,k,2)\cdot(k,-3,1)=k-3k+2=-2k+2=0\Rightarrow k=1$$

**b)** Un vector perpendicular a ambos es su producto vectorial:
$$\vec{a}\times\vec{b}=\begin{vmatrix}\vec{i}&\vec{j}&\vec{k}\\1&1&0\\0&1&1\end{vmatrix}=(1,-1,1)$$
Su módulo es $\sqrt{3}$, así que dividimos entre $\sqrt{3}$ y multiplicamos por $2$:
$$\vec{w}=\frac{2}{\sqrt{3}}(1,-1,1)=\left(\frac{2\sqrt{3}}{3},-\frac{2\sqrt{3}}{3},\frac{2\sqrt{3}}{3}\right)$$
También vale el vector opuesto, $-\vec{w}$.

### Solución Ejercicio 4
**a)** $\overrightarrow{AB}=(2,1,-2)$ y $\overrightarrow{AC}=(1,3,-1)$
$$\overrightarrow{AB}\times\overrightarrow{AC}=\begin{vmatrix}\vec{i}&\vec{j}&\vec{k}\\2&1&-2\\1&3&-1\end{vmatrix}=(5,0,5)$$
$$\text{Área}=\frac{1}{2}\lvert\overrightarrow{AB}\times\overrightarrow{AC}\rvert=\frac{\sqrt{50}}{2}=\frac{5\sqrt{2}}{2}\ \text{u}^2$$

**b)** En el paralelogramo $ABCD$ se cumple $\overrightarrow{AB}=\overrightarrow{DC}$, luego $D=C-\overrightarrow{AB}$:
$$D=(2,3,1)-(2,1,-2)=(0,2,3)$$

**c)** El baricentro es la media de los vértices:
$$G=\left(\frac{1+3+2}{3},\frac{0+1+3}{3},\frac{2+0+1}{3}\right)=\left(2,\frac{4}{3},1\right)$$

### Solución Ejercicio 5
**a)** $\vec{u}\cdot\vec{v}=3\cdot 4\cdot\cos 60^\circ=12\cdot\frac{1}{2}=6$

**b)** Desarrollamos el cuadrado del módulo:
$$\lvert\vec{u}+\vec{v}\rvert^2=\lvert\vec{u}\rvert^2+2\,\vec{u}\cdot\vec{v}+\lvert\vec{v}\rvert^2=9+12+16=37$$
$$\lvert\vec{u}+\vec{v}\rvert=\sqrt{37}$$

**c)** Igual, cambiando el signo del término central:
$$\lvert\vec{u}-\vec{v}\rvert^2=\lvert\vec{u}\rvert^2-2\,\vec{u}\cdot\vec{v}+\lvert\vec{v}\rvert^2=9-12+16=13$$
$$\lvert\vec{u}-\vec{v}\rvert=\sqrt{13}$$
