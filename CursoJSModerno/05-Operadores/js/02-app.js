/**comparar valores */
const numero = 20;
const numero1 = "20";
const numero2 = 30;

/**revisar si 2 numeros son iguales */
console.log(numero == numero2);/**comparando un numero con otro ==, solo se fija en el valor */
console.log(numero == numero1);

/**comparador mas estricto ===, se fija en el valor y en el tipo de dato */
console.log(numero === numero2);
console.log(numero === numero1);

/**para poder conparar dos diferentes tipos de dato y q sean iguales con === primero tendria que convertir uno de ellos y luego comparar */
console.log(numero === numero1);
console.log(numero === parseInt(numero1));

//**diferente */
const password1 = "ana";
const password2 = "anam";

console.log(password1 != password2);
console.log(numero != numero1);
console.log(numero !== numero1);/**comparador mas estricto, por eso en este caso es verdader que son diferentes porq aunque tienen el mismo valor son diferente tipo de dato */

console.log(numero != parseInt(numero1));/**ambos son iguales, por eso en consola aparese falso */
