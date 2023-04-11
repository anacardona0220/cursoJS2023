/**comparara null y undefine */
/**undefine */
let numero;
console.log(numero);/**aparece undefine porque la variable no tiene valor */
console.log(typeof numero);/**es de tipo undefine */
/**null */
let numero1 = null;
console.log(numero1);/**null */
console.log(typeof numero1);/**aparece que es tipo objeto
 */
console.log(numero == numero1);/**este aparece true */
console.log(numero === numero1);/**siempre es mejor comparar con el mas estricto, este si aparece false */