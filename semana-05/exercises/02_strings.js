// 2a Crear una variable de tipo string con al menos 10 caracteres y convertir todo el
//  texto en mayúscula (utilizar toUpperCase).

var string = "jazz bull blues";

console.log ('Exercise 2a', string.toUpperCase());

// 2b Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
// string con los primeros 5 caracteres guardando el resultado en una nueva variable
//  (utilizar substring).

var phrase = "jazz bull blues";
var count = phrase.substring(0, 5);

console.log ('Exercise 2b', count);

// 2c Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los
//  últimos 3 caracteres  guardando el resultado en una nueva variable (utilizar substring).

var phrase2C = "jazz bull blues";
var count2C = phrase2C.substring(phrase2C.length - 3);

console.log ('Exercise 2c', count2C);

// 2d Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la
// primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable 
// (utilizar substring, toUpperCase, toLowerCase y el operador +).

var phrase2D = "jazz bull ables"
var upper = phrase2D.toUpperCase();
var subs1 = upper.substring(0, 1);
var subs2 = upper.substring(1, 15);
var lower= subs2.toLowerCase();
var string2d = subs1 + lower;

console.log ('Exercise 2d', string2d);

// 2e Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición
//  del primer espacio en blanco  y guardarla en una variable (utilizar indexOf).

var phrase2E = "jazz bull blues";
var indexPhrase = phrase2E.indexOf(" ");

console.log ('Exercise 2e', indexPhrase);


// 2f Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
//  Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas
// palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).

var phrase2F= "unpublicized objectivized";
var substring1 = phrase2F.substring (0, 1);
var indexPhrase = phrase2F.indexOf ("o");
var substring2 = phrase2F.substring (1, indexPhrase);
var count = substring1.toUpperCase();
var substring3 = phrase2F.substring (indexPhrase, indexPhrase + 1);
var count2 = substring3.toUpperCase();
var substring4 = phrase2F.substring (indexPhrase + 1);

console.log ('Exercise 2f', count + substring2 + count2 + substring4);




