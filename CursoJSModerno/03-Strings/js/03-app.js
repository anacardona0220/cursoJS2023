//concatenar cadenas de cracteres
const producto = 'monitor 20 pulgadas';
const precio = '30 USD ';

// console.log(producto.concat(precio));
console.log( producto + " con un precio de : " + precio);
console.log( "el producto " + producto + " tiene un precio de : " + precio);
console.log( "el producto " , producto , " tiene un precio de : " , precio);
console.log( `el producto " ${producto} tiene un precio de  $ ${precio}`);//este es el mas usado porque es el mas facil de leer en un codigo extenso