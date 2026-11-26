# Examen de matrices, determinantes, sistemas y geometría
### Ejercicio 1 (1 punto) - Ecuaciones matriciales
- **a) (0,5p)** Resuelve el sistema de ecuaciones:
$$\begin{cases} 2X-Y=\begin{pmatrix}1&2&0\\3&0&4\end{pmatrix} \\ X-Y=\begin{pmatrix}0&2&-1\\4&-1&0\end{pmatrix}\end{cases}$$
- **b) (0,5p)** Resuelve la ecuación matricial $X\cdot A-X=B$, donde $A=\begin{pmatrix}-1&1\\2&1\end{pmatrix}$ y $B=\begin{pmatrix}1&-1\\0&2\end{pmatrix}$.
### Ejercicio 2 (1,25 puntos) - Rango de una matriz
Estudia el rango de la matriz $M$ según los valores de $t$:
$$M=\begin{pmatrix}1&2&3&1\\1&t&3&2\\1&8-3t&3&-2\end{pmatrix}$$
### Ejercicio 3 (2,5 puntos) - Discusión de un sistema
Considera el siguiente sistema de ecuaciones, donde $a\in\mathbb{R}$:
$$\begin{cases} ax+2y+z=1 \\ 2x+ay+z=a \\ 5x+2y+z=1\end{cases}$$
- **a) (1,5p)** Discute el sistema de ecuaciones según los valores de $a$, e identifica el número de soluciones en cada caso.
- **b) (1p)** Resuelve, razonadamente, el sistema de ecuaciones para $a=1$.
### Ejercicio 4 (2,5 puntos) - Rectas y vectores en el espacio
Carla está diseñando el tejado de una casa con Geogebra. Para ello, debe unir una viga que tiene de extremos los puntos de coordenadas $A(2,-1,3)$ y $B(-2,4,5)$.
- **a) (1p)** Determina la ecuación de la recta que representa la viga.
- **b) (0,5p)** ¿Cuál es la longitud de la viga?
- **c) (1p)** Si se quiere colocar una placa metálica triangular de vértices los puntos $A$, $B$ y $C(0,0,1)$. Determina el área de la placa triangular.
### Ejercicio 5 (1,5 puntos) - Ángulo entre vectores
Sean los vectores $\vec{u}=(1,a,a)$ y $\vec{v}=(-1,0,2)$, con $a\in\mathbb{R}$. Determina el valor de $a$ para que el ángulo entre los vectores $\vec{u}$ y $\vec{v}$ sea de $60^\circ$.
### Ejercicio 6 (1,25 puntos) - Recta perpendicular a dos vectores
Calcula la ecuación de la recta que contiene al punto $A(1,0,0)$ y que es perpendicular a los vectores $\vec{u}=(1,2,1)$ y $\vec{v}=(1,0,0)$.
---
## Resolución
### Solución Ejercicio 1
**a)** Restando la segunda ecuación a la primera se elimina $Y$:
$$X=(2X-Y)-(X-Y)=\begin{pmatrix}1&2&0\\3&0&4\end{pmatrix}-\begin{pmatrix}0&2&-1\\4&-1&0\end{pmatrix}=\begin{pmatrix}1&0&1\\-1&1&4\end{pmatrix}$$
De la segunda ecuación, $Y=X-\begin{pmatrix}0&2&-1\\4&-1&0\end{pmatrix}$:
$$Y=\begin{pmatrix}1&-2&2\\-5&2&4\end{pmatrix}$$
**b)** Sacando factor común $X$ por la izquierda: $X(A-I)=B$.
$$A-I=\begin{pmatrix}-2&1\\2&0\end{pmatrix},\qquad \lvert A-I\rvert=-2\neq 0$$
Como existe la inversa:
$$(A-I)^{-1}=\dfrac{1}{-2}\begin{pmatrix}0&-1\\-2&-2\end{pmatrix}=\begin{pmatrix}0&\tfrac12\\1&1\end{pmatrix}$$
$$X=B(A-I)^{-1}=\begin{pmatrix}1&-1\\0&2\end{pmatrix}\begin{pmatrix}0&\tfrac12\\1&1\end{pmatrix}=\begin{pmatrix}-1&-\tfrac12\\2&2\end{pmatrix}$$
### Solución Ejercicio 2
$M$ tiene 3 filas, luego $\operatorname{rg}(M)\le 3$. Hay cuatro menores de orden 3.
La tercera columna es el triple de la primera, así que los menores que contienen ambas columnas valen $0$.
Los otros dos menores:
$$\begin{vmatrix}1&2&1\\1&t&2\\1&8-3t&-2\end{vmatrix}=(-2t-16+6t)+8+(8-4t)=0$$
$$\begin{vmatrix}2&3&1\\t&3&2\\8-3t&3&-2\end{vmatrix}=-24-3(4t-16)+(12t-24)=0$$
Todos los menores de orden 3 son nulos para cualquier $t$, luego $\operatorname{rg}(M)\le 2$.
Además $\begin{vmatrix}1&2\\1&-2\end{vmatrix}=-4\neq 0$ (filas 2 y 3, columnas 1 y 4).
Por tanto $\operatorname{rg}(M)=2$ para todo $t\in\mathbb{R}$.
### Solución Ejercicio 3
**a)** Determinante de la matriz de coeficientes:
$$\begin{vmatrix}a&2&1\\2&a&1\\5&2&1\end{vmatrix}=a(a-2)-2(2-5)+(4-5a)=a^2-7a+10=(a-2)(a-5)$$
1. Si $a\neq 2$ y $a\neq 5$: $\operatorname{rg}(A)=\operatorname{rg}(A^*)=3=n$, sistema compatible determinado (solución única).
2. Si $a=2$: las dos primeras filas de $A$ coinciden y $\begin{vmatrix}2&2\\5&2\end{vmatrix}=-6\neq 0$, luego $\operatorname{rg}(A)=2$. Pero $\begin{vmatrix}2&1&1\\2&1&2\\5&1&1\end{vmatrix}=3\neq 0$, luego $\operatorname{rg}(A^*)=3$. Sistema incompatible (sin solución).
3. Si $a=5$: la primera y la tercera ecuación son idénticas, y $\begin{vmatrix}5&2\\2&5\end{vmatrix}=21\neq 0$, luego $\operatorname{rg}(A)=\operatorname{rg}(A^*)=2<3$. Sistema compatible indeterminado (infinitas soluciones, con un parámetro).
**b)** Para $a=1$ el sistema es compatible determinado:
$$\begin{cases} x+2y+z=1 \\ 2x+y+z=1 \\ 5x+2y+z=1\end{cases}$$
Restando la primera a la tercera: $4x=0$, luego $x=0$.
La segunda queda $y+z=1$ y la primera $2y+z=1$; restando, $y=0$ y $z=1$.
$$(x,y,z)=(0,0,1)$$
### Solución Ejercicio 4
**a)** Vector director: $\overrightarrow{AB}=(-4,5,2)$. La recta pasa por $A$:
$$\dfrac{x-2}{-4}=\dfrac{y+1}{5}=\dfrac{z-3}{2}$$
**b)** $\lvert\overrightarrow{AB}\rvert=\sqrt{16+25+4}=\sqrt{45}=3\sqrt5\approx 6{,}71$ unidades.
**c)** $\overrightarrow{AC}=(-2,1,-2)$.
$$\overrightarrow{AB}\times\overrightarrow{AC}=\begin{vmatrix}\vec{i}&\vec{j}&\vec{k}\\-4&5&2\\-2&1&-2\end{vmatrix}=(-12,-12,6)$$
$$\text{Área}=\dfrac12\lvert\overrightarrow{AB}\times\overrightarrow{AC}\rvert=\dfrac12\sqrt{144+144+36}=\dfrac{18}{2}=9\ \text{u}^2$$
### Solución Ejercicio 5
$$\cos 60^\circ=\dfrac{\vec{u}\cdot\vec{v}}{\lvert\vec{u}\rvert\,\lvert\vec{v}\rvert}\ \Rightarrow\ \dfrac12=\dfrac{2a-1}{\sqrt{1+2a^2}\,\sqrt5}$$
Como el coseno es positivo, hace falta $2a-1>0$. Elevando al cuadrado:
$$5(1+2a^2)=4(2a-1)^2\ \Rightarrow\ 6a^2-16a-1=0\ \Rightarrow\ a=\dfrac{8\pm\sqrt{70}}{6}$$
Con $a=\dfrac{8-\sqrt{70}}{6}\approx-0{,}06$ se tiene $2a-1<0$ (ángulo de $120^\circ$), así que se descarta.
$$a=\dfrac{8+\sqrt{70}}{6}\approx 2{,}73$$
### Solución Ejercicio 6
La recta es perpendicular a $\vec{u}$ y $\vec{v}$, luego su dirección es $\vec{u}\times\vec{v}$:
$$\vec{u}\times\vec{v}=\begin{vmatrix}\vec{i}&\vec{j}&\vec{k}\\1&2&1\\1&0&0\end{vmatrix}=(0,1,-2)$$
Recta por $A(1,0,0)$:
$$(x,y,z)=(1,0,0)+\lambda(0,1,-2),\qquad \text{o bien}\qquad \begin{cases}x=1\\ 2y+z=0\end{cases}$$
