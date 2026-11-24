# Examen de matrices, determinantes, sistemas y geometría

### Ejercicio 1 (2 puntos) - Matrices
Sean las matrices $A=\begin{pmatrix}2&1\\1&1\end{pmatrix}$ y $B=\begin{pmatrix}1&0\\2&-1\end{pmatrix}$.
- **a) (0,75p)** Calcula $A\cdot B-2B^t$.
- **b) (1,25p)** Halla la matriz $X$ que verifica $A\cdot X+B=I$.

### Ejercicio 2 (2 puntos) - Determinantes
Sea la matriz $A=\begin{pmatrix}1&1&m\\m&1&1\\1&m&1\end{pmatrix}$.
- **a) (0,75p)** Halla los valores de $m$ para los que $A$ tiene inversa.
- **b) (0,75p)** Para $m=0$, calcula $A^{-1}$.
- **c) (0,5p)** Para $m=2$, calcula $\det\left(3A^{-1}\right)$.

### Ejercicio 3 (2 puntos) - Problema de sistemas
Un teatro vendió $200$ entradas para una función y recaudó $1540$ euros. Las entradas de adulto cuestan $10$ euros, las infantiles $5$ euros y las de jubilado $6$ euros. Se vendieron $20$ entradas infantiles más que de jubilado.
- **a) (0,75p)** Plantea el sistema de ecuaciones que permite saber cuántas entradas de cada tipo se vendieron.
- **b) (1,25p)** Resuélvelo e interpreta la solución.

### Ejercicio 4 (2 puntos) - Recta y plano
Sean la recta $r:\ \dfrac{x-1}{2}=\dfrac{y}{-1}=\dfrac{z+1}{1}$ y el plano $\pi:\ x+2y-z=4$.
- **a) (0,75p)** Estudia la posición relativa de $r$ y $\pi$ y, si se cortan, halla el punto de corte.
- **b) (0,5p)** Calcula el ángulo que forman $r$ y $\pi$.
- **c) (0,75p)** Halla la ecuación del plano que contiene a $r$ y es perpendicular a $\pi$.

### Ejercicio 5 (2 puntos) - Distancias y posiciones relativas
Sean el punto $P(2,1,3)$ y el plano $\sigma:\ x+2y+2z-1=0$.
- **a) (0,5p)** Calcula la distancia de $P$ a $\sigma$.
- **b) (0,75p)** Halla el punto simétrico de $P$ respecto de $\sigma$.
- **c) (0,75p)** Estudia la posición relativa de las rectas $s_1:\ (x,y,z)=(1,0,0)+\lambda(1,1,0)$ y $s_2:\ (x,y,z)=(0,1,2)+\mu(0,1,1)$ y, si se cortan, halla el punto de corte.

---

## Resolución

### Solución Ejercicio 1
**a)**
$$A\cdot B=\begin{pmatrix}2&1\\1&1\end{pmatrix}\begin{pmatrix}1&0\\2&-1\end{pmatrix}=\begin{pmatrix}4&-1\\3&-1\end{pmatrix}$$
$$2B^t=2\begin{pmatrix}1&2\\0&-1\end{pmatrix}=\begin{pmatrix}2&4\\0&-2\end{pmatrix}$$
$$A\cdot B-2B^t=\begin{pmatrix}2&-5\\3&1\end{pmatrix}$$

**b)** Despejamos: $A\cdot X=I-B$, luego $X=A^{-1}(I-B)$.
$\det A=2-1=1\neq 0$, así que $A$ es invertible:
$$A^{-1}=\begin{pmatrix}1&-1\\-1&2\end{pmatrix}$$
$$I-B=\begin{pmatrix}0&0\\-2&2\end{pmatrix}$$
$$X=\begin{pmatrix}1&-1\\-1&2\end{pmatrix}\begin{pmatrix}0&0\\-2&2\end{pmatrix}=\begin{pmatrix}2&-2\\-4&4\end{pmatrix}$$

### Solución Ejercicio 2
**a)** Por la regla de Sarrus:
$$\det A=1+1+m^3-m-m-m=m^3-3m+2=(m-1)^2(m+2)$$
$A$ tiene inversa si $\det A\neq 0$, es decir, para $m\neq 1$ y $m\neq -2$.

**b)** Para $m=0$: $A=\begin{pmatrix}1&1&0\\0&1&1\\1&0&1\end{pmatrix}$ y $\det A=(0-1)^2(0+2)=2$.
Matriz adjunta:
$$\operatorname{Adj}(A)=\begin{pmatrix}1&1&-1\\-1&1&1\\1&-1&1\end{pmatrix}$$
$$A^{-1}=\frac{1}{\det A}\operatorname{Adj}(A)^t=\frac{1}{2}\begin{pmatrix}1&-1&1\\1&1&-1\\-1&1&1\end{pmatrix}$$
Comprobación: $A\cdot A^{-1}=I$.

**c)** Para $m=2$: $\det A=(2-1)^2(2+2)=4$.
$$\det\left(3A^{-1}\right)=3^3\cdot\det\left(A^{-1}\right)=27\cdot\frac{1}{4}=\frac{27}{4}$$

### Solución Ejercicio 3
**a)** Llamamos $x$ al número de entradas de adulto, $y$ al de infantiles y $z$ al de jubilado:
$$\begin{cases}x+y+z=200\\10x+5y+6z=1540\\y-z=20\end{cases}$$

**b)** De la tercera ecuación, $y=z+20$. Sustituyendo en la primera: $x+2z+20=200$, luego $x=180-2z$.
Sustituyendo en la segunda:
$$10(180-2z)+5(z+20)+6z=1540$$
$$1900-9z=1540\ \Rightarrow\ z=40$$
Entonces $y=40+20=60$ y $x=180-80=100$.
Se vendieron $100$ entradas de adulto, $60$ infantiles y $40$ de jubilado.
Comprobación: $100+60+40=200$ y $1000+300+240=1540$ euros.

### Solución Ejercicio 4
**a)** $r$ pasa por $Q(1,0,-1)$ con vector director $\vec{v}=(2,-1,1)$. El vector normal de $\pi$ es $\vec{n}=(1,2,-1)$.
$$\vec{v}\cdot\vec{n}=2-2-1=-1\neq 0$$
La recta y el plano son secantes. Paramétricas de $r$: $x=1+2t$, $y=-t$, $z=-1+t$. Sustituyendo en $\pi$:
$$(1+2t)+2(-t)-(-1+t)=4\ \Rightarrow\ 2-t=4\ \Rightarrow\ t=-2$$
Punto de corte: $(-3,2,-3)$.

**b)**
$$\sin\alpha=\frac{\lvert\vec{v}\cdot\vec{n}\rvert}{\lvert\vec{v}\rvert\,\lvert\vec{n}\rvert}=\frac{1}{\sqrt{6}\cdot\sqrt{6}}=\frac{1}{6}$$
$$\alpha=\arcsin\frac{1}{6}\approx 9{,}59^\circ$$

**c)** El plano buscado contiene a $Q$ y a los vectores $\vec{v}$ y $\vec{n}$. Su vector normal es:
$$\vec{v}\times\vec{n}=\begin{vmatrix}\vec{i}&\vec{j}&\vec{k}\\2&-1&1\\1&2&-1\end{vmatrix}=(-1,3,5)$$
$$-(x-1)+3y+5(z+1)=0\ \Rightarrow\ x-3y-5z-6=0$$

### Solución Ejercicio 5
**a)**
$$d(P,\sigma)=\frac{\lvert 2+2\cdot 1+2\cdot 3-1\rvert}{\sqrt{1^2+2^2+2^2}}=\frac{9}{3}=3$$

**b)** Recta perpendicular a $\sigma$ por $P$: $x=2+\lambda$, $y=1+2\lambda$, $z=3+2\lambda$. Cortamos con $\sigma$:
$$(2+\lambda)+2(1+2\lambda)+2(3+2\lambda)-1=0\ \Rightarrow\ 9+9\lambda=0\ \Rightarrow\ \lambda=-1$$
Proyección de $P$ sobre $\sigma$: $M(1,-1,1)$, que es el punto medio de $P$ y su simétrico $P'$:
$$P'=2M-P=(2-2,\,-2-1,\,2-3)=(0,-3,-1)$$

**c)** $s_1$ pasa por $A(1,0,0)$ con $\vec{u}=(1,1,0)$; $s_2$ pasa por $B(0,1,2)$ con $\vec{w}=(0,1,1)$. Los vectores no son proporcionales, así que las rectas no son paralelas. Con $\overrightarrow{AB}=(-1,1,2)$:
$$\begin{vmatrix}1&1&0\\0&1&1\\-1&1&2\end{vmatrix}=1\cdot(2-1)-1\cdot(0+1)+0=0$$
Los tres vectores son coplanarios: las rectas son secantes. Igualando coordenadas:
$$\begin{cases}1+\lambda=0\\\lambda=1+\mu\\0=2+\mu\end{cases}\ \Rightarrow\ \lambda=-1,\ \mu=-2$$
Punto de corte: $(0,-1,0)$.
