// 3a Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
//  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
//  mostrar por consola los meses 5 y 11 (utilizar console.log).

var months = ["January", "February", "March", "April", "May", "June", "July",
"August", "September", "October", "November", "December"];

console.log ('Exercise 3a: ', months[4] + " " + months[10]);

// 3b Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).

var months3B = ["January", "February", "March", "April", "May", "June", "July",
"August", "September", "October", "November", "December"];
console.log ('Exercise 3b: ', months3B.sort());


// 3c Agregar un elemento al principio y al final del array (utilizar unshift y push).

var months3C = ["January", "February", "March", "April", "May", "June", "July",
"August", "September", "October", "November", "December"];
months3C.unshift("reloj");
months3C.push("casa");

console.log ('Exercise 3c: ', months3C);


// 3d Quitar un elemento del principio y del final del array (utilizar shift y pop).

var months3D= ["January", "February", "March", "April", "May", "June", "July",
 "August", "September", "October", "November", "December"];
months3D.shift();
months3D.pop();

console.log ('Exercise 3d: ', months3D);

// 3e Invertir el orden del array (utilizar reverse).

var months3E = ["January", "February", "March", "April", "May", "June", "July",
"August", "September", "October", "November", "December"];
months3E.reverse();

console.log ('Exercise 3e: ', months3E);

// 3f Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).

var meses3F = ["January", "February", "March", "April", "May", "June", "July",
"August", "September", "October", "November", "December"];
var meses3Fjoined = meses3F.join(' - ');

console.log ('Exercise 3f: ', meses3Fjoined);

// 3g Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).

var months3G = ["January", "February", "March", "April", "May", "June", "July",
"August", "September", "October", "November", "December"];
var months3Gsliced = months3G.slice(4, 11);

console.log ('Exercise 3g: ', months3Gsliced );

