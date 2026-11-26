# Examen de matrices, determinantes, sistemas y geometría
### Ejercicio 1 (2,5 puntos) - Sistema de ecuaciones matriciales
Encuentra las matrices $A$ y $B$, sabiendo que verifican las siguientes ecuaciones matriciales
$$\begin{cases} 2A+3B=M \\ -A+B=N\end{cases}$$
siendo $M=\begin{pmatrix}8&4&7\\18&11&-6\\8&3&13\end{pmatrix}$ y $N=\begin{pmatrix}9&-2&16\\17&1&-10\\9&4&13\end{pmatrix}$.
### Ejercicio 2 (2,5 puntos) - Rango según un parámetro
Determina cuál es el rango de cada matriz, según los valores de $t$:
- **a) (1,25p)** $A=\begin{pmatrix}1&1&t+1&1\\t&0&0&2\\0&t&2&0\end{pmatrix}$
- **b) (1,25p)** $B=\begin{pmatrix}t&1&3&0\\1&t&2&1\\2&2t&5&t\end{pmatrix}$
### Ejercicio 3 (2,5 puntos) - Problema de la heladería
Una heladería vende helados de una, dos y tres bolas a uno, dos y tres euros, respectivamente. El viernes ha vendido 157 helados obteniendo 278 euros. También sabemos que el número de helados de una bola vendidos es $k$ veces el número de helados de tres bolas, con $k>0$.
- **a) (1,25p)** Plantea un sistema de ecuaciones lineales cuya resolución permita determinar el número de helados vendidos de cada tipo.
- **b) (1,25p)** Estudia para qué valores del parámetro $k$ el sistema tiene solución única. Para los casos en los que el sistema tiene solución única, ¿es posible que en alguno de ellos se hayan vendido el mismo número de helados de una bola que de tres bolas? Justifica tu respuesta.
### Ejercicio 4 (2,5 puntos) - Planos y rectas
Dados los planos $\alpha\equiv -x+2y+z+2=0$ y $\beta\equiv -2y+z=0$.
- **a) (1,5p)** Calcula razonadamente el volumen del tetraedro formado por el origen de coordenadas y los puntos de intersección del plano $\alpha$ con los tres ejes coordenados.
- **b) (1p)** Encuentra razonadamente la ecuación general o implícita de la recta paralela a los planos $\alpha$ y $\beta$ que pase por el punto $P(0,-1,3)$.
---
## Resolución
### Solución Ejercicio 1
De la segunda ecuación, $B=A+N$. Sustituyendo en la primera:
$$2A+3(A+N)=M\ \Rightarrow\ 5A=M-3N\ \Rightarrow\ A=\dfrac15(M-3N)$$
$$M-3N=\begin{pmatrix}8&4&7\\18&11&-6\\8&3&13\end{pmatrix}-\begin{pmatrix}27&-6&48\\51&3&-30\\27&12&39\end{pmatrix}=\begin{pmatrix}-19&10&-41\\-33&8&24\\-19&-9&-26\end{pmatrix}$$
$$A=\dfrac15\begin{pmatrix}-19&10&-41\\-33&8&24\\-19&-9&-26\end{pmatrix}$$
Además $B=A+N=\dfrac15(M+2N)$:
$$M+2N=\begin{pmatrix}8&4&7\\18&11&-6\\8&3&13\end{pmatrix}+\begin{pmatrix}18&-4&32\\34&2&-20\\18&8&26\end{pmatrix}=\begin{pmatrix}26&0&39\\52&13&-26\\26&11&39\end{pmatrix}$$
$$B=\dfrac15\begin{pmatrix}26&0&39\\52&13&-26\\26&11&39\end{pmatrix}$$
### Solución Ejercicio 2
**a)** Hay 3 filas, luego $\operatorname{rg}(A)\le 3$. Menores de orden 3:
$$\Delta_{123}=\begin{vmatrix}1&1&t+1\\t&0&0\\0&t&2\end{vmatrix}=-t\,(2-t(t+1))=t(t-1)(t+2)$$
$$\Delta_{134}=\begin{vmatrix}1&t+1&1\\t&0&2\\0&2&0\end{vmatrix}=2t-4=2(t-2)$$
$\Delta_{134}=0$ solo si $t=2$, y entonces $\Delta_{123}=2\cdot1\cdot4=8\neq 0$.
Nunca se anulan los dos a la vez, luego $\operatorname{rg}(A)=3$ para todo $t\in\mathbb{R}$.
**b)** Menores de orden 3:
$$\Delta_{123}=\begin{vmatrix}t&1&3\\1&t&2\\2&2t&5\end{vmatrix}=t^2-1=(t-1)(t+1)$$
$$\Delta_{134}=\begin{vmatrix}t&3&0\\1&2&1\\2&5&t\end{vmatrix}=2t^2-8t+6=2(t-1)(t-3)$$
1. Si $t\neq\pm1$: $\Delta_{123}\neq 0$, luego $\operatorname{rg}(B)=3$.
2. Si $t=-1$: $\Delta_{134}=16\neq 0$, luego $\operatorname{rg}(B)=3$.
3. Si $t=1$: $B=\begin{pmatrix}1&1&3&0\\1&1&2&1\\2&2&5&1\end{pmatrix}$, la tercera fila es la suma de las dos primeras y $\begin{vmatrix}3&0\\2&1\end{vmatrix}=3\neq 0$, luego $\operatorname{rg}(B)=2$.
### Solución Ejercicio 3
**a)** Sean $x$, $y$, $z$ los helados vendidos de una, dos y tres bolas.
$$\begin{cases} x+y+z=157 \\ x+2y+3z=278 \\ x=kz\end{cases}\quad\Longleftrightarrow\quad\begin{cases} x+y+z=157 \\ x+2y+3z=278 \\ x-kz=0\end{cases}$$
**b)** Determinante de la matriz de coeficientes:
$$\begin{vmatrix}1&1&1\\1&2&3\\1&0&-k\end{vmatrix}=-2k+k+3-2=1-k$$
Solución única si y solo si $k\neq 1$, es decir, $k\in(0,1)\cup(1,\infty)$.
Si $k=1$, la tercera ecuación da $x=z$, luego $y=157-2x$. La segunda queda $x+314-4x+3x=314\neq 278$: el sistema es incompatible.
Tener el mismo número de helados de una bola que de tres bolas significa $x=z$, es decir, $k=1$. Pero para $k=1$ el sistema no tiene solución, y no es uno de los casos de solución única.
Por tanto, no es posible. Se comprueba con la solución general, $z=\dfrac{36}{k-1}$ y $x=\dfrac{36k}{k-1}$, que cumplen $x=kz$ y, por tanto, $x\neq z$ siempre que $k\neq 1$.
### Solución Ejercicio 4
**a)** Intersecciones de $\alpha$ con los ejes:
- Eje $X$ ($y=z=0$): $-x+2=0\Rightarrow(2,0,0)$.
- Eje $Y$ ($x=z=0$): $2y+2=0\Rightarrow(0,-1,0)$.
- Eje $Z$ ($x=y=0$): $z+2=0\Rightarrow(0,0,-2)$.
El volumen es un sexto del valor absoluto del producto mixto de los tres vectores desde el origen:
$$V=\dfrac16\left\lvert\begin{vmatrix}2&0&0\\0&-1&0\\0&0&-2\end{vmatrix}\right\rvert=\dfrac{4}{6}=\dfrac23\ \text{u}^3$$
**b)** La recta es paralela a $\alpha$ y a $\beta$ si su dirección es perpendicular a sus vectores normales $\vec{n}_\alpha=(-1,2,1)$ y $\vec{n}_\beta=(0,-2,1)$:
$$\vec{d}=\vec{n}_\alpha\times\vec{n}_\beta=\begin{vmatrix}\vec{i}&\vec{j}&\vec{k}\\-1&2&1\\0&-2&1\end{vmatrix}=(4,1,2)$$
Recta por $P(0,-1,3)$:
$$\dfrac{x}{4}=\dfrac{y+1}{1}=\dfrac{z-3}{2}$$
Pasando a ecuaciones implícitas, $x=4(y+1)$ y $2x=4(z-3)$:
$$r\equiv\begin{cases}x-4y=4\\ 2x-4z=-12\end{cases}$$
