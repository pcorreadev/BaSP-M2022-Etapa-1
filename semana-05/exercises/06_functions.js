// 6a Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el
//  resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.

function sumSimple(num1, num2) {
    return num1 + num2;
}

var result = sumSimple(1.5, 2);
console.log ('Exercise 6a: ', result);


// 6b A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número,
//  mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.

function parseNum (num) {
    var stringisNum = false;
    if (parseFloat(num) != NaN){
        stringisNum = true;
    } else {
        stringisNum = false;
    }
return stringisNum; 
}

function sum6b(num1, num2) {

    if (parseNum (num1) == false)  {
        alert ('Not a Number');
        return NaN;
    } else {
        return num1 + num2;
        }
    }


console.log(sum6b(4, 6.4));

// 6c Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.

 function validateInteger(num1) {
    return (num1 % 1 === 0);
 }

 console.log ('Exercise 6c: ', validateInteger(3.2));

// 6d  A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya
//   decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).

function sumInteger(num1, num2) {

    if (num1 % 1 === 0 || num1 % 1 === 0   ) {
        return num1 + num2;
    } else {
        alert ('number is float')
        return (Math.round(num1 + num2)) ;    
        }
    }

console.log('Exercise 6d: ', sumInteger(231.2, 5));

// // 6e Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando
// //  que todo siga funcionando igual.

function sumInteger6D(num1, num2) {

    if (num1 % 1 === 0 || num1 % 1 === 0   ) {
        return true;
    } else {
        alert ('number is float')
        return (Math.round(num1 + num2)) ;    
        }
    }

function sumSimple(num1, num2) {

    if (sumInteger6D(num1, num2) == true);{
        return num1 + num2
    }
}

console.log ('Exercise 6e: ', sumSimple(5.2, 7))