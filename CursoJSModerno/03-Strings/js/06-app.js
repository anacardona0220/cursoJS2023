//repeticion de palabras
const producto = 'monitor 20 pulgadas';
const texto = ' en promocion'.repeat(2.4);/*me permite repetir una cadena de texto y nos redondea la cifra,en este caso 2*/

console.log(texto);
console.log(`${producto} ${texto} !!!`);

//split, divide una cadena de texto
const actividad = "estoy aprendiendo javascript moderno";
console.log(actividad.split(" "));

const hobbies = "leer, escribir, jugar, dormir, culiar, programar";
console.log(hobbies.split(", "));

const tweet = "aprendiendo javascript #JSModernoConJuan";
console.log(tweet.split('#'));

