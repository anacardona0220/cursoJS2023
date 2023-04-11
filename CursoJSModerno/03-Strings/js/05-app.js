//como reemplazar un texto
const producto = 'monitor 20 pulgadas';

console.log(producto);
console.log(producto.replace('pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor cuervo'));

//.slice se utiliza para cortar

console.log(producto.slice(0, 10));
console.log(producto.slice(8));
console.log(producto.slice(2, 1));//error

//alternativa a slice
console.log(producto.substring(0.10));
console.log(producto.substring(2,1));/*este es como mas inteligente y dice buenoesta pasando
un numero mayor al inicio*/

// const usuario = "juan";
// console.log(const usuario: "juan");
// console.log(usuario.charAt(0));
