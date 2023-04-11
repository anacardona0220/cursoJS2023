//calcular el tamaño de las cadenas
const producto = 'monitor 20 pulgadas';

console.log(producto);
console.log(producto.length);//conocer la cantidad de letras de la cadena de texto
console.log(producto.indexOf('pulgadas'));/*me dice la primera posicion en la que comienza la palabra
en este caso la p se encunentra en la posicion 11*/
console.log(producto.includes('Tablet'));/*me indica si la palabra esta o no esta con un falso o verdadero*/
console.log(producto.includes('Monitor'));
console.log(producto.includes('monitor'));
