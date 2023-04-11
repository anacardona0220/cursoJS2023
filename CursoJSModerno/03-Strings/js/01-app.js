//crear cadenas de caracteres strings
const producto = "monitor 20\""; /*aqui se debe de hacer algo para escapar las commillas
y la escapamos con diagonal invertida y aparece la sintaxis de la pulgada en la consola*/
const producto2 = String('monitor 24 pulgada"');
const producto3 = new String('monitor de 27 pulgadas');

console.log(producto);
console.log(producto2);
console.log(producto3);