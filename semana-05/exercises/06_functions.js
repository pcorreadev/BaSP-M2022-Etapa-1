// 6a Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el
//  resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.

function sumSimple(num1, num2) {
    return num1 + num2;
}

var result = sumSimple(1, 2);
console.log ('Exercise 6a: ', result);


// 6b A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número,
//  mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.


function sum6b(num1, num2) {

if (isNaN(num1 || num2)) {
    alert ('Not a Number');
    return NaN;
} else {
    return num1 + num2;
    }
}

console.log('Exercise 6b: ', sum6b('e', 5));

// 6c Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.

 function validateInteger(num1) {
    return (Number.isInteger(num1) && !isNaN(num1));
 }

 console.log ('Exercise 6c: ', validateInteger(3));

// 6d  A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya
//   decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).

function sumInteger(num1, num2) {

    if (isNaN(num1 || num2)) {
        alert ('Not a Number');
        return NaN;
    } else if (!(Number.isInteger(num1 || num2))) {
        alert ('Number is not an integer');
        return (Math.round(num1 + num2));
    } else {
        return num1 + num2;
    }
}

console.log('Exercise 6c: ', sumInteger('e', 5));

// // 6e Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando
// //  que todo siga funcionando igual.

function validation6D(num1, num2) {
    if (isNaN(num1 || num2)) {
        alert ('Must be a number');
        return NaN;
    } else {
        alert ('Number is not an integer');
        return (Math.round(num1 + num2));
    }
}

function sum6E(num1, num2) {
    if (!isNaN(num1 || num2) && Number.isInteger(num1 || num2)) {  
        return num1 + num2;
    } else {
        return validation6D(num1, num2);
    }
}

console.log ('Exercise 6e: ', sum6E (5, 7))