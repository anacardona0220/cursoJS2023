//eliminar espacios en blanco 
const producto = '             monitor 20 pulgadas              ';
console.log(producto.length);

console.log( producto.trimStart() );
console.log( producto.trimEnd() );
console.log( producto.trimStart().trimEnd() );
console.log( producto.trim() );// este elimina espacios en ambas direcciones

