'use strict';

var mensaje = 'Hola Mundo en este dia sabado!';
console.log(mensaje);

var sumar = function sumar(a, b) {
  return a + b;
};
var dobleDe = function dobleDe(a) {
  return 2 * a;
};

console.log('La suma de 14 y 3 da ' + sumar(14, 3));
console.log('El doble de 8 es ' + dobleDe(8));
