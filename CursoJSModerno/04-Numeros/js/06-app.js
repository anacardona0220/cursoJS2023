const numero = "20";
const numero1 = "20.2";
const numero2 = "uno";
const numero3 = 20;

console.log(typeof numero);/**me indica que tipo de dato es, en este caso string */
console.log(Number.parseInt(numero));/**para convertir un dato tipo string a numero entero*/
console.log(Number.parseFloat(numero1));/**para convertir un dato tipo string a numero flotante*/
/**revisar si un numero es entero o no */
console.log(Number.isInteger(numero3));


