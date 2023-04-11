let resultado;

/*PI*/
resultado = Math.PI;

/*redondear un numero*/
resultado = Math.round(2.8);
resultado = Math.round(2.2);
resultado = Math.round(2.5);/*me lo redondea a 3*/

/*redondear hacia arriba*/
resultado = Math.ceil(2.1);/*desde que el numero sea mayor se redondea al siguiente numero en este caso 3*/

/*redondear hacia abajo*/
resultado = Math.floor(2.8);/*forza a redondear al numero antes del . en este caso 2*/

/*raiz cuadrada*/
resultado = Math.sqrt(144);

/*valor absoluto*/
resultado = Math.abs(-500);/*lo vuelve positivo*/

/*pontencia*/
resultado = Math.pow(8, 3);/*ocho a la potencia de 3*/

/*minimo valor*/
resultado = Math.min(12, 3, 5, -3);/*me da el minimo valor de todos*/
/*maximo valor*/
resultado = Math.max(12, 3, 5, -3);/*me da el maximo valor de todos*/

/*aleatorio*/
resultado = Math.random() * 20;/*no es muy recomendado porq rara vez me muestra numeros positivos*/

/*aleatorio conbinado*/
resultado = Math.floor(Math.random() * 30);/*me tira un numero entero del 0 al 30*/




console.log(resultado);