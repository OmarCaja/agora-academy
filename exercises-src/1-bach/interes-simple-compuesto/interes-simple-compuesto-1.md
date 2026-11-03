# Ejercicios de interés simple y compuesto

### Ejercicio 1 - Interés simple
- **a)** Se depositan $6000$ € al $3{,}5\,\%$ de interés simple anual durante $4$ años. Calcula el interés obtenido y el capital final.
- **b)** ¿Qué interés producen $15\,000$ € al $4\,\%$ de interés simple anual durante $150$ días? (Usa el año comercial de $360$ días.)
- **c)** ¿Qué capital hay que depositar al $3\,\%$ de interés simple anual para obtener $120$ € de intereses en $8$ meses?

### Ejercicio 2 - Interés compuesto y retención fiscal
Se depositan $8000$ € al $3\,\%$ de interés compuesto anual durante $5$ años.
- **a)** Calcula el capital final y los intereses generados.
- **b)** ¿Cuántos intereses se habrían obtenido con interés simple en las mismas condiciones? ¿Qué diferencia hay?
- **c)** El banco aplica una retención del $19\,\%$ sobre los intereses. ¿Cuántos intereses netos se cobran? ¿Cuál es el capital final que recibe el ahorrador?

### Ejercicio 3 - Capital inicial, rédito y tiempo
- **a)** ¿Cuánto dinero hay que depositar hoy al $4\,\%$ de interés compuesto anual para disponer de $20\,000$ € dentro de $6$ años?
- **b)** Un capital de $5000$ € se ha convertido en $5832$ € en $2$ años a interés compuesto anual. ¿Cuál es el rédito?
- **c)** Se depositan $4000$ € al $5\,\%$ de interés compuesto anual, con abono de intereses al final de cada año. ¿Cuántos años completos tienen que pasar como mínimo para tener más de $6000$ €?

### Ejercicio 4 - Capitalización mensual
Un banco ofrece un depósito al $4{,}8\,\%$ anual con capitalización mensual. Se depositan $12\,000$ € durante $3$ años.
- **a)** Calcula el capital final y los intereses generados.
- **b)** Otro banco ofrece el $4{,}9\,\%$ anual con capitalización anual. ¿Qué oferta da más dinero al cabo de los $3$ años? ¿Cuánto más?

---

## Resolución

### Solución Ejercicio 1
**a)** Pasamos el rédito a tanto por uno: $r = 0{,}035$, y $t = 4$ años.
$$I = C \cdot r \cdot t = 6000 \cdot 0{,}035 \cdot 4 = 840 \text{ euros}$$
$$C_f = C + I = 6000 + 840 = 6840 \text{ euros}$$
**b)** El tiempo en años es $t = \dfrac{150}{360}$.
$$I = 15\,000 \cdot 0{,}04 \cdot \dfrac{150}{360} = 600 \cdot \dfrac{150}{360} = 250 \text{ euros}$$
**c)** El tiempo en años es $t = \dfrac{8}{12}$. Despejamos el capital de $I = C \cdot r \cdot t$:
$$C = \dfrac{I}{r \cdot t} = \dfrac{120}{0{,}03 \cdot \dfrac{8}{12}} = \dfrac{120}{0{,}02} = 6000 \text{ euros}$$

### Solución Ejercicio 2
**a)** Con $r = 0{,}03$ y $t = 5$:
$$C_f = C\,(1 + r)^t = 8000 \cdot 1{,}03^5 \approx 9274{,}19 \text{ euros}$$
$$I = C_f - C = 9274{,}19 - 8000 = 1274{,}19 \text{ euros}$$
**b)** Con interés simple:
$$I = 8000 \cdot 0{,}03 \cdot 5 = 1200 \text{ euros}$$
El interés compuesto da $1274{,}19 - 1200 = 74{,}19$ euros más, porque los intereses de cada año también generan intereses.
**c)** La retención se aplica solo sobre los intereses:
$$\text{retención} = 1274{,}19 \cdot 0{,}19 \approx 242{,}10 \text{ euros}$$
$$I_{\text{neto}} = 1274{,}19 - 242{,}10 = 1032{,}09 \text{ euros}$$
El ahorrador recibe $8000 + 1032{,}09 = 9032{,}09$ euros.

### Solución Ejercicio 3
**a)** Despejamos el capital inicial (actualizamos el capital):
$$C = \dfrac{C_f}{(1 + r)^t} = \dfrac{20\,000}{1{,}04^6} \approx 15\,806{,}29 \text{ euros}$$
**b)** Planteamos $5832 = 5000\,(1 + r)^2$:
$$(1 + r)^2 = \dfrac{5832}{5000} = 1{,}1664 \Rightarrow 1 + r = \sqrt{1{,}1664} = 1{,}08 \Rightarrow r = 0{,}08$$
El rédito es del $8\,\%$ anual.
**c)** Planteamos $4000 \cdot 1{,}05^t = 6000$, es decir, $1{,}05^t = 1{,}5$. Tomamos logaritmos:
$$t \cdot \log 1{,}05 = \log 1{,}5 \Rightarrow t = \dfrac{\log 1{,}5}{\log 1{,}05} \approx 8{,}31 \text{ años}$$
Como los intereses se abonan al final de cada año, hay que esperar $9$ años. Comprobación:
$$4000 \cdot 1{,}05^8 \approx 5909{,}82 < 6000 \qquad 4000 \cdot 1{,}05^9 \approx 6205{,}31 > 6000$$

### Solución Ejercicio 4
**a)** Hay $n = 12$ capitalizaciones al año, con un rédito mensual de $\dfrac{0{,}048}{12} = 0{,}004$, y $12 \cdot 3 = 36$ periodos:
$$C_f = 12\,000 \left(1 + \dfrac{0{,}048}{12}\right)^{36} = 12\,000 \cdot 1{,}004^{36} \approx 13\,854{,}63 \text{ euros}$$
$$I = 13\,854{,}63 - 12\,000 = 1854{,}63 \text{ euros}$$
**b)** Con capitalización anual hay $3$ periodos al $4{,}9\,\%$:
$$C_f = 12\,000 \cdot 1{,}049^3 \approx 13\,851{,}85 \text{ euros}$$
Da más dinero la primera oferta, aunque su rédito anual sea menor, porque los intereses se suman al capital cada mes y empiezan antes a generar intereses:
$$13\,854{,}63 - 13\,851{,}85 = 2{,}78 \text{ euros más}$$
