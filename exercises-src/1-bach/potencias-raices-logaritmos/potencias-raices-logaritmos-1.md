# Ejercicios de potencias, raíces y logaritmos

### Ejercicio 1 - Potencias
Simplifica al máximo, expresando el resultado con exponentes positivos:
- **a)** $\dfrac{(2^3)^{-2} \cdot 4^{5} \cdot 8^{-1}}{16^{-2} \cdot 2^{7}}$
- **b)** $\dfrac{a^{3} b^{-2} \cdot (a^{-1} b)^{4}}{(a^{2} b^{-3})^{-1}}$

### Ejercicio 2 - Radicales
- **a)** Extrae factores y simplifica: $\sqrt{50} - 3\sqrt{8} + \sqrt{18}$
- **b)** Expresa como un único radical y simplifica: $\sqrt[3]{4} \cdot \sqrt{2}$
- **c)** Racionaliza: $\dfrac{6}{\sqrt{3}}$
- **d)** Racionaliza: $\dfrac{4}{3 - \sqrt{5}}$

### Ejercicio 3 - Logaritmos
Calcula aplicando la definición de logaritmo:
- **a)** $\log_2 32 + \log_3 \dfrac{1}{9}$
- **b)** $\log_5 \sqrt[3]{25}$
- **c)** $\log 0{,}001 + \ln e^{4}$
- **d)** $\log_{1/2} 8$

### Ejercicio 4 - Propiedades de los logaritmos
Sabiendo que $\log 2 = 0{,}301$ y $\log 3 = 0{,}477$, calcula sin calculadora:
- **a)** $\log 72$
- **b)** $\log \dfrac{\sqrt{18}}{5}$

### Ejercicio 5 - Operaciones combinadas
Calcula y simplifica al máximo:
- **a)** $\dfrac{\sqrt{12} \cdot \sqrt[3]{18}}{\sqrt[6]{24}}$
- **b)** $\dfrac{\sqrt{2}}{\sqrt{2} - 1} - \dfrac{\sqrt{2}}{\sqrt{2} + 1}$
- **c)** $\log_2 \dfrac{\sqrt[3]{16} \cdot 8^{-1}}{\sqrt{2}}$
- **d)** $\dfrac{\log_3 \sqrt{27} + \log_2 \sqrt[4]{8}}{\ln \sqrt{e} - \log 0{,}01}$

---

## Resolución

### Solución Ejercicio 1
**a)** Escribimos todo en base $2$: $4 = 2^2$, $8 = 2^3$, $16 = 2^4$.
$$\frac{2^{-6} \cdot 2^{10} \cdot 2^{-3}}{2^{-8} \cdot 2^{7}} = \frac{2^{-6+10-3}}{2^{-8+7}} = \frac{2^{1}}{2^{-1}} = 2^{1-(-1)} = 2^{2} = 4$$

**b)** Desarrollamos las potencias de los paréntesis:
$$(a^{-1} b)^{4} = a^{-4} b^{4} \qquad (a^{2} b^{-3})^{-1} = a^{-2} b^{3}$$
$$\frac{a^{3} b^{-2} \cdot a^{-4} b^{4}}{a^{-2} b^{3}} = \frac{a^{-1} b^{2}}{a^{-2} b^{3}} = a^{-1-(-2)} \, b^{2-3} = a \, b^{-1} = \frac{a}{b}$$

### Solución Ejercicio 2
**a)** Descomponemos cada radicando:
$$\sqrt{50} = \sqrt{2 \cdot 5^2} = 5\sqrt{2} \qquad 3\sqrt{8} = 3\sqrt{2^2 \cdot 2} = 6\sqrt{2} \qquad \sqrt{18} = \sqrt{2 \cdot 3^2} = 3\sqrt{2}$$
$$5\sqrt{2} - 6\sqrt{2} + 3\sqrt{2} = 2\sqrt{2}$$

**b)** Reducimos a índice común, $\text{mcm}(3, 2) = 6$:
$$\sqrt[3]{4} = \sqrt[6]{4^2} = \sqrt[6]{2^4} \qquad \sqrt{2} = \sqrt[6]{2^3}$$
$$\sqrt[6]{2^4} \cdot \sqrt[6]{2^3} = \sqrt[6]{2^7} = 2\sqrt[6]{2}$$

**c)** Multiplicamos numerador y denominador por $\sqrt{3}$:
$$\frac{6}{\sqrt{3}} = \frac{6\sqrt{3}}{\sqrt{3} \cdot \sqrt{3}} = \frac{6\sqrt{3}}{3} = 2\sqrt{3}$$

**d)** Multiplicamos por el conjugado del denominador, $3 + \sqrt{5}$:
$$\frac{4}{3 - \sqrt{5}} = \frac{4(3 + \sqrt{5})}{(3 - \sqrt{5})(3 + \sqrt{5})} = \frac{4(3 + \sqrt{5})}{9 - 5} = \frac{4(3 + \sqrt{5})}{4} = 3 + \sqrt{5}$$

### Solución Ejercicio 3
**a)** $2^5 = 32$ y $3^{-2} = \dfrac{1}{9}$:
$$\log_2 32 + \log_3 \frac{1}{9} = 5 + (-2) = 3$$

**b)** $\sqrt[3]{25} = 5^{2/3}$:
$$\log_5 5^{2/3} = \frac{2}{3}$$

**c)** $0{,}001 = 10^{-3}$:
$$\log 10^{-3} + \ln e^{4} = -3 + 4 = 1$$

**d)** Buscamos $x$ tal que $\left(\dfrac{1}{2}\right)^{x} = 8$:
$$2^{-x} = 2^{3} \implies x = -3$$

### Solución Ejercicio 4
**a)** $72 = 2^3 \cdot 3^2$:
$$\log 72 = 3\log 2 + 2\log 3 = 3 \cdot 0{,}301 + 2 \cdot 0{,}477 = 0{,}903 + 0{,}954 = 1{,}857$$

**b)** $18 = 2 \cdot 3^2$ y $5 = \dfrac{10}{2}$, así que $\log 5 = 1 - \log 2 = 0{,}699$:
$$\log \frac{\sqrt{18}}{5} = \frac{1}{2}\log 18 - \log 5 = \frac{1}{2}(\log 2 + 2\log 3) - (1 - \log 2)$$
$$= \frac{1}{2}(0{,}301 + 0{,}954) - 0{,}699 = 0{,}6275 - 0{,}699 = -0{,}0715$$

### Solución Ejercicio 5
**a)** Factorizamos los radicandos: $12 = 2^2 \cdot 3$, $18 = 2 \cdot 3^2$, $24 = 2^3 \cdot 3$. Pasamos a potencias de exponente fraccionario:
$$\frac{2 \cdot 3^{1/2} \cdot 2^{1/3} \cdot 3^{2/3}}{2^{1/2} \cdot 3^{1/6}} = 2^{1 + \frac{1}{3} - \frac{1}{2}} \cdot 3^{\frac{1}{2} + \frac{2}{3} - \frac{1}{6}} = 2^{5/6} \cdot 3^{1}$$
$$= 3\sqrt[6]{2^5} = 3\sqrt[6]{32}$$

**b)** Común denominador, $(\sqrt{2} - 1)(\sqrt{2} + 1) = 2 - 1 = 1$:
$$\frac{\sqrt{2}(\sqrt{2} + 1) - \sqrt{2}(\sqrt{2} - 1)}{1} = (2 + \sqrt{2}) - (2 - \sqrt{2}) = 2\sqrt{2}$$

**c)** Escribimos todo como potencia de $2$: $\sqrt[3]{16} = 2^{4/3}$, $8^{-1} = 2^{-3}$, $\sqrt{2} = 2^{1/2}$.
$$\log_2 \frac{2^{4/3} \cdot 2^{-3}}{2^{1/2}} = \log_2 2^{\frac{4}{3} - 3 - \frac{1}{2}} = \frac{4}{3} - 3 - \frac{1}{2} = \frac{8 - 18 - 3}{6} = -\frac{13}{6}$$

**d)** Calculamos cada logaritmo por separado:
$$\log_3 \sqrt{27} = \log_3 3^{3/2} = \frac{3}{2} \qquad \log_2 \sqrt[4]{8} = \log_2 2^{3/4} = \frac{3}{4}$$
$$\ln \sqrt{e} = \ln e^{1/2} = \frac{1}{2} \qquad \log 0{,}01 = \log 10^{-2} = -2$$
$$\frac{\frac{3}{2} + \frac{3}{4}}{\frac{1}{2} - (-2)} = \frac{\frac{9}{4}}{\frac{5}{2}} = \frac{9 \cdot 2}{4 \cdot 5} = \frac{18}{20} = \frac{9}{10}$$
